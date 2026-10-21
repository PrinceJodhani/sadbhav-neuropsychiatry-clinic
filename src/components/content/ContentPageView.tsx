import Link from "next/link";
import { ArrowRight, ArrowUpRight, ClipboardCheck, Phone } from "lucide-react";
import { crumbsFor, linkInfo, pathOf } from "@/content";
import type { ContentPage } from "@/content/types";
import { clinic } from "@/lib/clinic";
import { contentPageGraph } from "@/lib/schema";
import { readingMinutes } from "@/lib/text";
import { WhatsAppIcon } from "../Common/BrandIcons";
import CtaBand from "../CtaBand";
import JsonLd from "../JsonLd";
import Blocks from "./Blocks";
import Breadcrumbs from "./Breadcrumbs";
import Byline from "./Byline";
import ConsultCard from "./ConsultCard";
import FaqList from "./FaqList";
import LocalLanguage from "./LocalLanguage";
import ReviewerBox from "./ReviewerBox";
import RichText, { Accent } from "./RichText";
import { TocMobile, TocSidebar, type TocItem } from "./Toc";

const EYEBROW_ICON_TONE = {
  condition: "bg-brand-50 text-brand-700 dark:bg-brand-400/10 dark:text-brand-300",
  treatment: "bg-lotus-50 text-lotus-600 dark:bg-lotus-400/10 dark:text-lotus-300",
  online: "bg-brand-50 text-brand-700 dark:bg-brand-400/10 dark:text-brand-300",
  clinic: "bg-lotus-50 text-lotus-600 dark:bg-lotus-400/10 dark:text-lotus-300",
  guide: "bg-brand-50 text-brand-700 dark:bg-brand-400/10 dark:text-brand-300",
};

function HeroActions({ page }: { page: ContentPage }) {
  if (page.kind === "online") {
    return (
      <>
        <a
          href={clinic.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg group"
        >
          Book an online consultation
          <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
        <a
          href={clinic.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-lg"
        >
          <WhatsAppIcon className="text-[#1DA851]" />
          WhatsApp us
        </a>
      </>
    );
  }
  return (
    <>
      <a
        href={clinic.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg group"
      >
        Book an appointment
        <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
      <a href={clinic.phone.href} className="btn btn-secondary btn-lg">
        <Phone />
        {clinic.phone.display}
      </a>
    </>
  );
}

export default function ContentPageView({
  page,
  /** Extra content rendered between the hero and the article (e.g. a clinic's map and timings). */
  intro,
}: {
  page: ContentPage;
  intro?: React.ReactNode;
}) {
  const path = pathOf(page);
  const crumbs = crumbsFor(page);
  const minutes = page.kind === "clinic" ? undefined : readingMinutes(page);

  const toc: TocItem[] = [
    ...page.sections.map(({ id, title }) => ({ id, title })),
    ...(page.local ? [{ id: "in-gujarati-and-hindi", title: "In Gujarati & Hindi" }] : []),
    ...(page.faqs.length ? [{ id: "faqs", title: "Frequently asked questions" }] : []),
  ];

  // The consultation card sits after the middle section of the article.
  const consultAfter = Math.max(0, Math.floor(page.sections.length / 2) - 1);
  const related = (page.related ?? []).map(linkInfo).filter((link) => link !== undefined);

  return (
    <>
      <JsonLd data={contentPageGraph(page, path, crumbs)} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pt-36">
        <div
          aria-hidden="true"
          className="bg-aurora absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
        />
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className={page.facts ? "lg:col-span-7 xl:col-span-8" : "lg:col-span-10"}>
              <p className="eyebrow">{page.eyebrow}</p>
              <h1 className="heading-display mt-4 text-[2.4rem] leading-[1.06] text-foreground xs:text-[2.75rem] sm:text-[3.25rem] lg:text-[3.6rem]">
                <Accent text={page.h1} />
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl sm:leading-relaxed">
                <RichText text={page.summary} />
              </p>
              {page.kind !== "clinic" && (
                <div className="mt-7">
                  <Byline updated={page.updated} minutes={minutes} />
                </div>
              )}
              <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                <HeroActions page={page} />
              </div>
            </div>

            {page.facts && (
              <aside className="lg:col-span-5 xl:col-span-4">
                <div className="surface p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className={`icon-tile h-11 w-11 ${EYEBROW_ICON_TONE[page.kind]}`}>
                      <page.icon className="h-5 w-5" />
                    </span>
                    <p className="font-semibold text-foreground">At a glance</p>
                  </div>
                  <dl className="mt-5 divide-y divide-border/70">
                    {page.facts.map((fact) => (
                      <div key={fact.label} className="py-3 first:pt-0 last:pb-0">
                        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          {fact.label}
                        </dt>
                        <dd className="mt-1 leading-snug text-foreground">
                          <RichText text={fact.value} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                  {page.selfTest && (
                    <a
                      href={page.selfTest.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center gap-3 rounded-2xl bg-secondary/80 p-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                    >
                      <ClipboardCheck className="h-5 w-5 shrink-0 text-primary" />
                      <span className="flex-1">{page.selfTest.label}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </a>
                  )}
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      {intro}

      {/* Article */}
      <div className="container pb-16 sm:pb-20">
        <div className="grid gap-10 lg:grid-cols-12 xl:gap-16">
          <aside className="hidden lg:col-span-3 lg:block">
            <TocSidebar items={toc} />
          </aside>

          {/* ~75 characters per line for comfortable reading. */}
          <article className="min-w-0 max-w-[46rem] lg:col-span-9 xl:col-span-8">
            <TocMobile items={toc} />

            <div className="mt-10 space-y-16 lg:mt-0">
              {page.sections.map((section, i) => (
                <div key={section.id} className="space-y-16">
                  <section id={section.id} aria-labelledby={`${section.id}-title`}>
                    <h2
                      id={`${section.id}-title`}
                      className="heading-display mb-6 text-[1.85rem] leading-tight text-foreground sm:text-[2.2rem]"
                    >
                      <Accent text={section.title} />
                    </h2>
                    <Blocks blocks={section.blocks} />
                  </section>
                  {i === consultAfter && page.kind !== "online" && page.kind !== "clinic" && (
                    <ConsultCard topic={page.kind === "condition" ? page.name.toLowerCase() : undefined} />
                  )}
                </div>
              ))}

              {page.local && (
                <section id="in-gujarati-and-hindi" aria-labelledby="in-gujarati-and-hindi-title">
                  <h2
                    id="in-gujarati-and-hindi-title"
                    className="heading-display mb-6 text-[1.85rem] leading-tight text-foreground sm:text-[2.2rem]"
                  >
                    {page.kind === "condition" ? `${page.name} in ` : "In "}
                    <em>Gujarati</em> &amp; Hindi
                  </h2>
                  <LocalLanguage local={page.local} />
                </section>
              )}

              {page.faqs.length > 0 && (
                <section id="faqs" aria-labelledby="faqs-title">
                  <h2
                    id="faqs-title"
                    className="heading-display mb-6 text-[1.85rem] leading-tight text-foreground sm:text-[2.2rem]"
                  >
                    Frequently asked <em>questions</em>
                  </h2>
                  <FaqList faqs={page.faqs} name={`faq-${page.slug}`} />
                </section>
              )}

              <ReviewerBox updated={page.updated} isClinic={page.kind === "clinic"} />

              {page.sources && page.sources.length > 0 && (
                <section aria-labelledby="sources-title">
                  <h2
                    id="sources-title"
                    className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/70"
                  >
                    Sources &amp; further reading
                  </h2>
                  <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {page.sources.map((source, i) => (
                      <li key={source.url} className="flex gap-2">
                        <span className="tabular-nums text-foreground/50">{i + 1}.</span>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-primary"
                        >
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </div>
          </article>
        </div>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t border-border/70 bg-card py-16 sm:py-20">
          <div className="container">
            <h2 id="related-title" className="heading-section text-[2rem] sm:text-[2.4rem] lg:text-[2.6rem]">
              Related <em>reading</em>
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="group flex h-full items-start gap-4 rounded-3xl border border-border/80 bg-background p-5 transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-soft"
                  >
                    {link.icon && (
                      <span className="icon-tile h-11 w-11 bg-brand-50 text-brand-700 dark:bg-brand-400/10 dark:text-brand-300">
                        <link.icon className="h-5 w-5" />
                      </span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5 font-semibold text-foreground">
                        {link.name}
                        <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                        {link.tagline}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <div className="pt-16 sm:pt-20">
        <CtaBand />
      </div>
    </>
  );
}
