import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/Common/BrandIcons";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import FaqList from "@/components/content/FaqList";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { allFaqs, faqGroups } from "@/content/faq";
import { clinic } from "@/lib/clinic";
import {
  absoluteUrl,
  breadcrumbNode,
  clinicNode,
  faqNode,
  ids,
  physicianNode,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const path = "/faq";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQs", path },
];

export const metadata: Metadata = pageMetadata({
  title: "Patient FAQs – Appointments, Online Consults, Medicines & Privacy",
  description:
    "Answers to common questions about seeing psychiatrist Dr. Jash Ajmera in Surat: booking, clinic timings, online consultations, medicines, confidentiality, insurance and emergencies.",
  path,
});

export default function FaqPage() {
  const url = absoluteUrl(path);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Patient FAQs",
        inLanguage: "en-IN",
        isPartOf: { "@id": ids.website },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#faq` },
      },
      faqNode(allFaqs, path),
      breadcrumbNode(crumbs, path),
      clinicNode(),
      physicianNode(),
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
            <p className="eyebrow">Patient FAQs</p>
            <h1 className="heading-display mt-4 text-[2.5rem] leading-[1.05] text-foreground xs:text-[2.9rem] sm:text-6xl">
              Your questions, <em>answered</em>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80 sm:text-xl">
              Everything you may want to know before seeing {clinic.doctor.name} — from booking and
              online consultations to medicines, privacy and what to do in an emergency.
            </p>
          </div>
        </div>
      </section>

      <div className="container pb-16 sm:pb-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <nav aria-label="FAQ topics" className="surface p-3">
                <ul>
                  {faqGroups.map((group) => (
                    <li key={group.id}>
                      <a
                        href={`#${group.id}`}
                        className="flex items-center justify-between rounded-2xl px-4 py-3 font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        {group.title}
                        <span className="text-sm text-muted-foreground">{group.faqs.length}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="rounded-4xl border border-border/70 bg-card p-6">
                <p className="font-semibold text-foreground">Still have a question?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Call or send a message on WhatsApp — we are happy to help.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a href={clinic.phone.href} className="btn btn-primary btn-sm">
                    <Phone />
                    {clinic.phone.display}
                  </a>
                  <a
                    href={clinic.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <WhatsAppIcon className="text-[#1DA851]" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-14 lg:col-span-8">
            {faqGroups.map((group) => (
              <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`}>
                <h2
                  id={`${group.id}-title`}
                  className="heading-display mb-6 text-[1.85rem] leading-tight text-foreground sm:text-[2.2rem]"
                >
                  {group.title}
                </h2>
                <FaqList faqs={group.faqs} name={`faq-${group.id}`} />
              </section>
            ))}
          </div>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
