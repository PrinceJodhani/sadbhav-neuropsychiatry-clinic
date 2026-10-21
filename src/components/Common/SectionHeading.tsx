import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/** Eyebrow + display heading + lead paragraph, used to open every section. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      data-reveal
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="heading-section mt-4">{title}</h2>
      {description && <p className="lead mt-5">{description}</p>}
    </div>
  );
}
