import { AlertTriangle, Check, Info, Lightbulb, PhoneCall, X } from "lucide-react";
import type { Block } from "@/content/types";
import { cn } from "@/lib/utils";
import RichText from "./RichText";

const bodyText = "text-[1.0625rem] leading-[1.8] text-foreground/80";

const calloutTones = {
  info: {
    Icon: Info,
    box: "border-brand-200 bg-brand-50/70 dark:border-brand-400/20 dark:bg-brand-400/[0.06]",
    icon: "text-primary",
  },
  tip: {
    Icon: Lightbulb,
    box: "border-lotus-200 bg-lotus-50/60 dark:border-lotus-400/20 dark:bg-lotus-400/[0.06]",
    icon: "text-highlight",
  },
  warning: {
    Icon: AlertTriangle,
    box: "border-amber-300/70 bg-amber-50 dark:border-amber-400/25 dark:bg-amber-400/[0.06]",
    icon: "text-amber-600 dark:text-amber-400",
  },
  urgent: {
    Icon: PhoneCall,
    box: "border-red-300/70 bg-red-50 dark:border-red-400/30 dark:bg-red-400/[0.07]",
    icon: "text-red-600 dark:text-red-400",
  },
};

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className={bodyText}>
          <RichText text={block.text} />
        </p>
      );

    case "h3":
      return (
        <h3 className="pt-3 text-xl font-semibold tracking-tight text-foreground sm:text-[1.3rem]">
          <RichText text={block.text} />
        </h3>
      );

    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag className="space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className={cn("relative pl-7", bodyText)}>
              {block.ordered ? (
                <span className="absolute left-0 top-0 font-semibold text-primary">{i + 1}.</span>
              ) : (
                <span
                  aria-hidden="true"
                  className="absolute left-1.5 top-[0.72em] h-1.5 w-1.5 rounded-full bg-highlight"
                />
              )}
              <RichText text={item} />
            </li>
          ))}
        </Tag>
      );
    }

    case "checklist":
      return (
        <ul className="grid gap-3 sm:grid-cols-2">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card p-4 text-[0.975rem] leading-relaxed text-foreground/85"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "cards":
      return (
        <div
          className={cn(
            "grid gap-4 sm:grid-cols-2",
            block.columns === 3 && "lg:grid-cols-3",
          )}
        >
          {block.items.map((item, i) => (
            <div key={i} className="rounded-3xl border border-border/80 bg-card p-5 sm:p-6">
              <h3 className="font-semibold leading-snug text-foreground">
                <RichText text={item.title} />
              </h3>
              <p className="mt-2 text-[0.975rem] leading-relaxed text-muted-foreground">
                <RichText text={item.text} />
              </p>
            </div>
          ))}
        </div>
      );

    case "callout": {
      const tone = calloutTones[block.tone ?? "info"];
      return (
        <aside className={cn("flex gap-4 rounded-3xl border p-5 sm:p-6", tone.box)}>
          <tone.Icon className={cn("mt-0.5 h-5 w-5 shrink-0", tone.icon)} />
          <div className="min-w-0">
            {block.title && <p className="font-semibold text-foreground">{block.title}</p>}
            <p className={cn("leading-relaxed text-foreground/80", block.title && "mt-1")}>
              <RichText text={block.text} />
            </p>
          </div>
        </aside>
      );
    }

    case "steps":
      return (
        <ol className="space-y-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 rounded-3xl border border-border/80 bg-card p-5 sm:p-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                {i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold leading-snug text-foreground">
                  <RichText text={item.title} />
                </h3>
                <p className="mt-1.5 text-[0.975rem] leading-relaxed text-muted-foreground">
                  <RichText text={item.text} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-3xl border border-border/80 bg-card">
          <table className="w-full min-w-[36rem] border-collapse text-left text-[0.95rem]">
            {block.caption && (
              <caption className="border-b border-border/70 px-5 py-3.5 text-left text-sm text-muted-foreground">
                {block.caption}
              </caption>
            )}
            <thead className="bg-secondary/70">
              <tr>
                {block.head.map((cell, i) => (
                  <th key={i} scope="col" className="px-5 py-3.5 font-semibold text-foreground">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-t border-border/70 align-top">
                  {row.map((cell, c) =>
                    c === 0 ? (
                      <th key={c} scope="row" className="px-5 py-3.5 font-medium text-foreground">
                        <RichText text={cell} />
                      </th>
                    ) : (
                      <td key={c} className="px-5 py-3.5 leading-relaxed text-muted-foreground">
                        <RichText text={cell} />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "mythfacts":
      return (
        <div className="space-y-4">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="grid overflow-hidden rounded-3xl border border-border/80 bg-card sm:grid-cols-2"
            >
              <div className="bg-muted/60 p-5 sm:p-6">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-highlight">
                  <X className="h-3.5 w-3.5" strokeWidth={3} />
                  Myth
                </p>
                <p className="mt-2 font-medium leading-relaxed text-foreground">
                  <RichText text={item.myth} />
                </p>
              </div>
              <div className="border-t border-border/70 p-5 sm:border-l sm:border-t-0 sm:p-6">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  Fact
                </p>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  <RichText text={item.fact} />
                </p>
              </div>
            </div>
          ))}
        </div>
      );
  }
}

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}
