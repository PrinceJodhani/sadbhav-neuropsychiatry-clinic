"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, Phone } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./Common/BrandIcons";

/** Thumb-reachable Call / WhatsApp / Book bar for phones, shown after the hero. */
export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tabIndex = visible ? undefined : -1;

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition duration-300 md:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <nav
        aria-label="Quick contact"
        className="mx-auto flex max-w-md items-center gap-1.5 rounded-full border border-border/80 bg-card/90 p-1.5 shadow-lift backdrop-blur-xl"
      >
        <a
          href={clinic.phone.href}
          tabIndex={tabIndex}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full text-sm font-semibold text-foreground transition-colors active:bg-secondary"
        >
          <Phone className="h-[1.1rem] w-[1.1rem] text-primary" />
          Call
        </a>
        <a
          href={clinic.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={tabIndex}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full text-sm font-semibold text-foreground transition-colors active:bg-secondary"
        >
          <WhatsAppIcon className="h-[1.1rem] w-[1.1rem] text-[#1DA851]" />
          WhatsApp
        </a>
        <a
          href={clinic.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={tabIndex}
          className="flex h-12 flex-[1.2] items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-brand-glow"
        >
          <CalendarCheck className="h-[1.1rem] w-[1.1rem]" />
          Book
        </a>
      </nav>
    </div>
  );
}
