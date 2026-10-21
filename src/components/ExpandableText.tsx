"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Clamped text with a "Read more" toggle that only appears when the text actually overflows. */
export default function ExpandableText({
  text,
  className,
  clampClassName,
}: {
  text: string;
  className?: string;
  /** Classes applied while collapsed, e.g. "line-clamp-6 md:line-clamp-none". */
  clampClassName: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setOverflowing(el.scrollHeight > el.clientHeight + 1);
    check();
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, [expanded]);

  return (
    <>
      <p ref={ref} className={cn(className, !expanded && clampClassName)}>
        {text}
      </p>
      {(overflowing || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          aria-expanded={expanded}
          className="mt-2 self-start text-sm font-semibold text-primary hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </>
  );
}
