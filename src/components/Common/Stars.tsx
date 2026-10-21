import { cn } from "@/lib/utils";

const STAR_PATH =
  "M10 1.6l2.47 5.18 5.68.73-4.16 3.95 1.05 5.63L10 14.33l-5.04 2.76 1.05-5.63L1.85 7.5l5.68-.73L10 1.6z";

export default function Stars({
  rating = 5,
  className,
  starClassName = "h-4 w-4",
}: {
  rating?: number;
  className?: string;
  starClassName?: string;
}) {
  const filled = Math.round(rating);
  return (
    <span
      role="img"
      aria-label={`Rated ${rating} out of 5`}
      className={cn("inline-flex items-center gap-0.5", className)}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={cn(starClassName, i < filled ? "fill-[#F4B400]" : "fill-ink-200 dark:fill-ink-700")}
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </span>
  );
}
