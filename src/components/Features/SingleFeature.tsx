import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Feature } from "@/types/feature";
import { cn } from "@/lib/utils";

const tones = {
  brand: "bg-brand-50 text-brand-700 dark:bg-brand-400/10 dark:text-brand-300",
  lotus: "bg-lotus-50 text-lotus-600 dark:bg-lotus-400/10 dark:text-lotus-300",
};

const SingleFeature = ({ feature, className }: { feature: Feature; className?: string }) => {
  const { icon, title, paragraph, tone = "brand", highlights, link } = feature;

  return (
    <article
      data-reveal
      className={cn(
        "surface group relative flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift sm:p-8",
        className,
      )}
    >
      <span className={cn("icon-tile", tones[tone])}>{icon}</span>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{paragraph}</p>

      {highlights && (
        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${title} treats`}>
          {highlights.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="chip relative z-10 transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {link && (
        <Link
          href={link.href}
          {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-auto inline-flex items-center gap-1.5 self-start pt-7 text-sm font-semibold text-primary"
        >
          {link.text}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      )}
    </article>
  );
};

export default SingleFeature;
