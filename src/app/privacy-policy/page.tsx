import type { Metadata } from "next";
import Blocks from "@/components/content/Blocks";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import type { Section } from "@/content/types";
import { clinic } from "@/lib/clinic";
import { absoluteUrl, breadcrumbNode, ids } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/text";

const path = "/privacy-policy";
const updated = "2026-10-21";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy policy", path },
];

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy & Medical Disclaimer",
  description: `How ${clinic.name} and this website handle your information, the third-party services used, and the medical disclaimer for information on this site.`,
  path,
});

const sections: Section[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    blocks: [
      {
        type: "p",
        text: `This website belongs to ${clinic.name}, the practice of ${clinic.doctor.name} (${clinic.doctor.credentials}), ${clinic.address.full}. You can contact us on [${clinic.phone.display}](${clinic.phone.href}) or at [${clinic.email}](mailto:${clinic.email}).`,
      },
    ],
  },
  {
    id: "website",
    title: "Information this website collects",
    blocks: [
      {
        type: "list",
        items: [
          "The website has no sign-up, login or contact forms, and it does not use analytics or advertising cookies.",
          "If you switch between light and dark mode, your choice is saved in your own browser so the site remembers it.",
          "Like most websites, our hosting provider may automatically record technical information — such as IP address, browser type and the pages requested — for security and performance.",
        ],
      },
    ],
  },
  {
    id: "third-parties",
    title: "Third-party services",
    blocks: [
      {
        type: "p",
        text: "Some features are provided by other companies. When you use them, their own privacy policies apply:",
      },
      {
        type: "list",
        items: [
          "**Online booking** is handled by Setmore. Details you enter there are used to manage your appointment.",
          "**WhatsApp and phone calls** connect you directly with the clinic.",
          "**Google Maps** shows our location on clinic pages.",
          "**YouTube** videos load in privacy-enhanced mode, and only after you press play.",
          "Links to **Aarogya Minds**, Google reviews and social media take you to those websites.",
        ],
      },
    ],
  },
  {
    id: "patient-information",
    title: "Your health information",
    blocks: [
      {
        type: "p",
        text: "Information you share during a consultation — in person or online — is kept confidential and used only for your care. It is not shared with anyone without your consent, except where the law requires it or where it is needed to protect someone’s safety, in line with India’s Mental Healthcare Act, 2017. Read more about [your mental health rights](/guides/mental-health-rights-india).",
      },
      {
        type: "p",
        text: "For patients under 18, consultations involve a parent or guardian, while respecting the young person’s privacy as far as safely possible.",
      },
      {
        type: "p",
        text: `To ask about the information we hold about you, or to request a correction, contact us at [${clinic.email}](mailto:${clinic.email}).`,
      },
    ],
  },
  {
    id: "medical-disclaimer",
    title: "Medical disclaimer",
    blocks: [
      {
        type: "p",
        text: "The information on this website is for general awareness and education. It is reviewed by a psychiatrist but it is not a substitute for a personal consultation, diagnosis or treatment. Please do not start, stop or change any medicine based on information on this website — talk to your doctor first.",
      },
      {
        type: "callout",
        tone: "urgent",
        title: "In an emergency",
        text: "If you or someone else is at immediate risk, call [112](tel:112) or go to the nearest hospital. For free, confidential mental health support 24×7, call Tele-MANAS on [14416](tel:14416).",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    blocks: [
      {
        type: "p",
        text: "We may update this page from time to time. The date below shows when it was last changed.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  const url = absoluteUrl(path);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Privacy Policy & Medical Disclaimer",
        inLanguage: "en-IN",
        isPartOf: { "@id": ids.website },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        dateModified: updated,
      },
      breadcrumbNode(crumbs, path),
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
            <p className="eyebrow">Privacy</p>
            <h1 className="heading-display mt-4 text-[2.5rem] leading-[1.05] text-foreground xs:text-[2.9rem] sm:text-6xl">
              Privacy policy &amp; <em>disclaimer</em>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Last updated <time dateTime={updated}>{formatDate(updated)}</time>
            </p>
          </div>
        </div>
      </section>

      <div className="container pb-20 sm:pb-24">
        <div className="max-w-[46rem] space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
              <h2
                id={`${section.id}-title`}
                className="heading-display mb-5 text-[1.75rem] leading-tight text-foreground sm:text-[2rem]"
              >
                {section.title}
              </h2>
              <Blocks blocks={section.blocks} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
