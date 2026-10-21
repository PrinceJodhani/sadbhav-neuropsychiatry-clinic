import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { conditions, pathOf } from "@/content";
import SectionHeading from "./Common/SectionHeading";

/** Home page: every condition guide, one click away. */
export default function ConditionsGrid() {
  return (
    // Continues straight on from the services section above, so no top padding of its own.
    <section id="conditions" className="section !pt-0">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Conditions we treat"
            title={
              <>
                Find help for what you are <em>going through</em>
              </>
            }
            description="Clear, doctor-reviewed guides to symptoms, causes and treatment — in English, with summaries in Gujarati and Hindi."
          />
          <Link href="/conditions" className="btn btn-secondary shrink-0 self-start md:self-auto">
            All conditions
            <ArrowRight />
          </Link>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-4">
          {conditions.map((page) => (
            <li key={page.slug} data-reveal>
              <Link
                href={pathOf(page)}
                className="group flex h-full items-center gap-4 rounded-3xl border border-border/80 bg-card p-4 pr-5 transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-soft sm:p-5"
              >
                <span className="icon-tile bg-brand-50 text-brand-700 transition-colors group-hover:bg-primary group-hover:text-primary-foreground dark:bg-brand-400/10 dark:text-brand-300">
                  <page.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-foreground">{page.name}</span>
                  <span className="mt-0.5 block text-sm leading-snug text-muted-foreground">
                    {page.tagline}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-primary opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
