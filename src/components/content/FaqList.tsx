import { Plus } from "lucide-react";
import type { Faq } from "@/content/types";
import RichText from "./RichText";

/** Native <details> accordion: crawlable, works without JavaScript, one item open at a time. */
export default function FaqList({ faqs, name }: { faqs: Faq[]; name: string }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <details
          key={faq.q}
          name={name}
          open={i === 0}
          className="faq-item group rounded-3xl border border-border/80 bg-card px-5 transition-colors open:border-primary/30 open:shadow-soft sm:px-6"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left font-semibold text-foreground sm:text-[1.0625rem] [&::-webkit-details-marker]:hidden">
            <h3>{faq.q}</h3>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition duration-300 group-open:rotate-45 group-open:border-primary group-open:bg-primary group-open:text-primary-foreground">
              <Plus className="h-4 w-4" />
            </span>
          </summary>
          <p className="pb-6 pr-1 leading-relaxed text-muted-foreground [overflow-wrap:anywhere] sm:pr-12">
            <RichText text={faq.a} />
          </p>
        </details>
      ))}
    </div>
  );
}
