import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pathOf } from "@/content";
import type { ContentPage } from "@/content/types";
import { absoluteUrl, breadcrumbNode, clinicNode, ids, type Crumb } from "@/lib/schema";
import { cn } from "@/lib/utils";
import CtaBand from "../CtaBand";
import JsonLd from "../JsonLd";
import Breadcrumbs from "./Breadcrumbs";
import { Accent } from "./RichText";

export function PageCard({ page, className }: { page: ContentPage; className?: string }) {
  return (
    <Link
      href={pathOf(page)}
      className={cn(
        "group flex h-full flex-col rounded-4xl border border-border/80 bg-card p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift sm:p-7",
        className,
      )}
    >
      <span className="icon-tile bg-brand-50 text-brand-700 transition-colors group-hover:bg-primary group-hover:text-primary-foreground dark:bg-brand-400/10 dark:text-brand-300">
        <page.icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">{page.name}</h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">{page.tagline}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Read more
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

type HubPageProps = {
  path: string;
  crumbs: Crumb[];
  eyebrow: string;
  h1: string;
  intro: React.ReactNode;
  /** Plain-text description for structured data. */
  description: string;
  pages: ContentPage[];
  /** Rendered under the card grid, inside the page container. */
  children?: React.ReactNode;
  /** Full-width sections rendered before the closing call to action. */
  after?: React.ReactNode;
};

/** Index page for a group of content pages (conditions, treatments, guides, clinics). */
export default function HubPage({
  path,
  crumbs,
  eyebrow,
  h1,
  intro,
  description,
  pages,
  children,
  after,
}: HubPageProps) {
  const url = absoluteUrl(path);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: crumbs[crumbs.length - 1].name,
        description,
        inLanguage: "en-IN",
        isPartOf: { "@id": ids.website },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: pages.map((page, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: page.name,
            url: absoluteUrl(pathOf(page)),
          })),
        },
      },
      breadcrumbNode(crumbs, path),
      clinicNode(),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="relative isolate overflow-hidden pb-10 pt-28 sm:pt-32 lg:pt-36">
        <div
          aria-hidden="true"
          className="bg-aurora absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
        />
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="heading-display mt-4 text-[2.5rem] leading-[1.05] text-foreground xs:text-[2.9rem] sm:text-6xl">
              <Accent text={h1} />
            </h1>
            <div className="mt-6 text-lg leading-relaxed text-foreground/80 sm:text-xl sm:leading-relaxed">
              {intro}
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {pages.map((page) => (
            <li key={page.slug}>
              <PageCard page={page} />
            </li>
          ))}
        </ul>
        {children}
      </section>

      {after}

      <CtaBand />
    </>
  );
}
