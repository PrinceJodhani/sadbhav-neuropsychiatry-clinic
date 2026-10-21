"use client";

import { useEffect, useState } from "react";
import type { ScheduleRule } from "@/lib/clinic";
import { cn } from "@/lib/utils";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const toMinutes = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

const formatTime = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  return `${h % 12 || 12}${m ? `:${String(m).padStart(2, "0")}` : ""} ${h >= 12 ? "PM" : "AM"}`;
};

/** Current weekday and minutes since midnight in India, regardless of the visitor's timezone. */
function nowInIndia() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const value = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  return {
    day: DAYS.indexOf(value("weekday")),
    minutes: Number(value("hour")) * 60 + Number(value("minute")),
  };
}

const slotsFor = (schedule: ScheduleRule[], day: number) =>
  schedule
    .filter((rule) => rule.days.includes(day))
    .flatMap((rule) => rule.slots)
    .sort((a, b) => toMinutes(a[0]) - toMinutes(b[0]));

function getStatus(schedule: ScheduleRule[]) {
  const { day, minutes } = nowInIndia();

  for (const [open, close] of slotsFor(schedule, day)) {
    if (minutes < toMinutes(open)) return { open: false, label: `Opens today ${formatTime(open)}` };
    if (minutes < toMinutes(close)) return { open: true, label: `Open now · till ${formatTime(close)}` };
  }

  for (let offset = 1; offset <= 7; offset++) {
    const next = (day + offset) % 7;
    const [first] = slotsFor(schedule, next);
    if (first) {
      const when = offset === 1 ? "tomorrow" : DAYS[next];
      return { open: false, label: `Opens ${when} ${formatTime(first[0])}` };
    }
  }

  return { open: false, label: "Closed" };
}

/** Live open/closed pill. Computed after mount so server and client HTML match. */
export default function OpenStatus({ schedule }: { schedule: ScheduleRule[] }) {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    const update = () => setStatus(getStatus(schedule));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, [schedule]);

  return (
    <span
      className={cn(
        "inline-flex h-7 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 text-xs font-semibold transition-opacity duration-300",
        !status && "opacity-0",
        status?.open
          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300"
          : "bg-muted text-muted-foreground",
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", status?.open ? "bg-emerald-500" : "bg-amber-500")}
      />
      {status?.label ?? "Opening hours"}
    </span>
  );
}
