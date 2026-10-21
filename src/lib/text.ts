import type { Block, ContentPage } from "@/content/types";

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Strip the inline marks used in content (**bold**, *em*, [text](href)) to plain text. */
export function plainText(text: string) {
  return text
    .replace(LINK, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1");
}

function blockText(block: Block): string[] {
  switch (block.type) {
    case "p":
    case "h3":
    case "callout":
      return [block.text];
    case "list":
    case "checklist":
      return block.items;
    case "cards":
    case "steps":
      return block.items.flatMap((item) => [item.title, item.text]);
    case "table":
      return [...block.head, ...block.rows.flat()];
    case "mythfacts":
      return block.items.flatMap((item) => [item.myth, item.fact]);
  }
}

/** All readable text of a page, in order — used for reading time and llms-full.txt. */
export function pageText(page: ContentPage) {
  return [
    page.summary,
    ...page.sections.flatMap((section) => [section.title, ...section.blocks.flatMap(blockText)]),
    ...page.faqs.flatMap((faq) => [faq.q, faq.a]),
  ].map(plainText);
}

export function readingMinutes(page: ContentPage) {
  const words = pageText(page).join(" ").split(/\s+/).length;
  return Math.max(2, Math.round(words / 220));
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(`${iso}T00:00:00+05:30`),
  );
}
