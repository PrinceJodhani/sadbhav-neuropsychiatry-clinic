import type { LucideIcon } from "lucide-react";

/**
 * Content model for the SEO pages (conditions, treatments, guides, online and clinic pages).
 *
 * Text fields support two inline marks, rendered by <RichText>:
 *   **bold**  and  [link text](/path-or-url)
 */

export type Faq = { q: string; a: string };

export type Source = { label: string; url: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "checklist"; items: string[] }
  | { type: "cards"; items: { title: string; text: string }[]; columns?: 2 | 3 }
  | {
      type: "callout";
      tone?: "info" | "tip" | "warning" | "urgent";
      title?: string;
      text: string;
    }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "mythfacts"; items: { myth: string; fact: string }[] };

export type Section = { id: string; title: string; blocks: Block[] };

/** Short summary in a regional language (rendered with the right `lang` attribute). */
export type LocalSummary = { heading: string; text: string; points?: string[] };

export type PageKind = "condition" | "treatment" | "guide" | "online" | "clinic";

export type ContentPage = {
  kind: PageKind;
  slug: string;
  /** Short name used in menus, cards and breadcrumbs, e.g. "Depression". */
  name: string;
  /** One line for cards and menus. */
  tagline: string;
  icon: LucideIcon;
  /** <title> without the site suffix. */
  title: string;
  description: string;
  /** Visible H1. Wrap words in *asterisks* for the italic accent. */
  h1: string;
  eyebrow: string;
  /** Answer-first paragraph: the direct answer search engines and AI assistants quote. */
  summary: string;
  facts?: { label: string; value: string }[];
  sections: Section[];
  faqs: Faq[];
  local?: { gu?: LocalSummary; hi?: LocalSummary };
  selfTest?: { label: string; href: string };
  /** Paths of related pages, shown at the end. */
  related?: string[];
  sources?: Source[];
  /** Last reviewed / updated, YYYY-MM-DD. */
  updated: string;
  /** Extra structured-data details for condition pages. */
  medical?: {
    alternateName?: string[];
    symptoms?: string[];
    treatments?: string[];
    riskFactors?: string[];
  };
  /** Clinic pages: which branch from `clinic.branches` this page describes. */
  branchId?: string;
};
