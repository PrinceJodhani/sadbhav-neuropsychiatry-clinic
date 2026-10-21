import { ListTree } from "lucide-react";

export type TocItem = { id: string; title: string };

function TocLinks({ items }: { items: TocItem[] }) {
  return (
    <ol className="space-y-0.5">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="block rounded-xl px-3 py-2 text-[0.9rem] leading-snug text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Sticky contents list on desktop; a collapsible "On this page" box on smaller screens. */
export function TocSidebar({ items }: { items: TocItem[] }) {
  return (
    <nav aria-label="On this page" className="sticky top-28">
      <p className="px-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/70">
        On this page
      </p>
      <div className="mt-3 max-h-[calc(100vh-10rem)] overflow-y-auto pr-1">
        <TocLinks items={items} />
      </div>
    </nav>
  );
}

export function TocMobile({ items }: { items: TocItem[] }) {
  return (
    <details className="faq-item group rounded-3xl border border-border/80 bg-card px-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center gap-3 py-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
        <ListTree className="h-5 w-5 text-primary" />
        On this page
        <span className="ml-auto text-sm font-normal text-muted-foreground group-open:hidden">
          {items.length} sections
        </span>
      </summary>
      <nav aria-label="On this page" className="pb-3">
        <TocLinks items={items} />
      </nav>
    </details>
  );
}
