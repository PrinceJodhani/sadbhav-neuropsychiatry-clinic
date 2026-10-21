import { Languages } from "lucide-react";
import type { ContentPage, LocalSummary } from "@/content/types";
import { clinic } from "@/lib/clinic";

const LANGS = {
  gu: { label: "ગુજરાતીમાં", english: "In Gujarati", cta: "ગુજરાતીમાં પરામર્શ માટે કૉલ કરો:" },
  hi: { label: "हिंदी में", english: "In Hindi", cta: "हिंदी में परामर्श के लिए कॉल करें:" },
} as const;

function Card({ lang, summary }: { lang: keyof typeof LANGS; summary: LocalSummary }) {
  const meta = LANGS[lang];
  return (
    <div lang={lang} className="flex flex-col rounded-3xl border border-border/80 bg-card p-5 sm:p-6">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-highlight">
        <span lang="en">{meta.english}</span>
        <span aria-hidden="true">·</span>
        <span>{meta.label}</span>
      </p>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">{summary.heading}</h3>
      <p className="mt-2 leading-[1.8] text-foreground/80">{summary.text}</p>
      {summary.points && (
        <ul className="mt-3 space-y-1.5">
          {summary.points.map((point) => (
            <li key={point} className="relative pl-5 leading-relaxed text-foreground/80">
              <span
                aria-hidden="true"
                className="absolute left-0.5 top-[0.68em] h-1.5 w-1.5 rounded-full bg-primary"
              />
              {point}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-auto pt-4 text-sm text-muted-foreground">
        {meta.cta}{" "}
        <a href={clinic.phone.href} lang="en" className="font-semibold text-primary">
          {clinic.phone.display}
        </a>
      </p>
    </div>
  );
}

/** Gujarati and Hindi summaries — many searches in Gujarat are for "… in Gujarati / in Hindi". */
export default function LocalLanguage({ local }: { local: NonNullable<ContentPage["local"]> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {local.gu && <Card lang="gu" summary={local.gu} />}
      {local.hi && <Card lang="hi" summary={local.hi} />}
      <p className="flex items-center gap-2 text-sm text-muted-foreground md:col-span-2">
        <Languages className="h-4 w-4 shrink-0 text-primary" />
        Consultations are available in English, Hindi and Gujarati.
      </p>
    </div>
  );
}
