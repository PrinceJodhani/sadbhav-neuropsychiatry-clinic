import Link from "next/link";
import { Fragment } from "react";
import { ArrowRight, Phone, Plus } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { WhatsAppIcon } from "./Common/BrandIcons";
import SectionHeading from "./Common/SectionHeading";

// Turn the phone number and web addresses inside answers into links.
const LINKS: Record<string, string> = {
  [clinic.phone.display]: clinic.phone.href,
  "sadbhavneuropsychiatryclinic.setmore.com": clinic.bookingUrl,
  "aarogyaminds.com": "https://aarogyaminds.com",
};
const LINK_PATTERN = new RegExp(
  `(${Object.keys(LINKS)
    .map((key) => key.replace(/[.+]/g, "\\$&"))
    .join("|")})`,
);

function linkify(text: string) {
  return text.split(LINK_PATTERN).map((part, i) =>
    LINKS[part] ? (
      <a
        key={i}
        href={LINKS[part]}
        {...(LINKS[part].startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
      >
        {part}
      </a>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export default function Faqs() {
  return (
    <section id="faq" className="section bg-card">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="FAQs"
                title={
                  <>
                    Questions, <em>answered</em>
                  </>
                }
                description="Everything you may want to know before your first visit."
              />
              <Link
                href="/faq"
                data-reveal
                className="mt-6 inline-flex items-center gap-1.5 font-semibold text-primary hover:underline hover:underline-offset-4"
              >
                See all patient FAQs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div data-reveal className="mt-8 rounded-4xl border border-border/70 bg-background p-6">
                <p className="font-semibold text-foreground">Still have a question?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We are happy to help — call us or send a message on WhatsApp.
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
          </div>

          {/* Native <details> accordion: works without JavaScript and stays crawlable. */}
          <div className="space-y-3 lg:col-span-7">
            {clinic.faqs.map((faq, i) => (
              <details
                key={faq.question}
                name="faq"
                open={i === 0}
                className="faq-item group rounded-3xl border border-border/80 bg-background px-5 transition-colors open:border-primary/30 open:shadow-soft sm:px-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-semibold text-foreground sm:text-lg [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition duration-300 group-open:rotate-45 group-open:border-primary group-open:bg-primary group-open:text-primary-foreground">
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <p className="pb-6 pr-2 leading-relaxed text-muted-foreground [overflow-wrap:anywhere] sm:pr-14">
                  {linkify(faq.answer)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
