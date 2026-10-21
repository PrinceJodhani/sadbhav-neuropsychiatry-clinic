import { clinic } from "@/lib/clinic";
import { LotusIcon } from "./Common/BrandIcons";

export default function ConditionsMarquee() {
  const items = clinic.conditions;

  return (
    <section aria-label="Conditions we treat" className="border-y border-border/70 bg-card/60 py-6">
      <div className="marquee">
        <ul className="marquee-track">
          {/* The list is rendered twice for a seamless loop; the copy is hidden from screen readers. */}
          {[...items, ...items].map((item, i) => (
            <li
              key={`${item}-${i}`}
              aria-hidden={i >= items.length ? true : undefined}
              className="flex shrink-0 items-center"
            >
              <span className="heading-display whitespace-nowrap px-6 text-2xl italic text-foreground/75 sm:text-[1.75rem]">
                {item}
              </span>
              <LotusIcon className="h-5 w-5 shrink-0 text-highlight/70" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
