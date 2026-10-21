import Link from "next/link";
import { ArrowRight, ArrowUpRight, Video } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { WhatsAppIcon } from "../Common/BrandIcons";
import SectionHeading from "../Common/SectionHeading";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const [psychiatry, ...rest] = featuresData;

  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What we offer"
          title={
            <>
              Care that treats the <em>whole</em> person
            </>
          }
          description="A caring blend of psychotherapy and medication for truly holistic mental healthcare."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          <SingleFeature feature={psychiatry} className="md:col-span-2" />
          {rest.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}

          <article
            data-reveal
            className="bg-night relative flex flex-col overflow-hidden rounded-4xl p-7 shadow-lift sm:p-8"
          >
            <span className="icon-tile bg-white/10 text-brand-200">
              <Video className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
              Online consultation
            </h3>
            <p className="mt-3 leading-relaxed text-white/70">
              Discreet, professional e-consults from anywhere — with pan-India medicine delivery.
            </p>
            <Link
              href="/online-psychiatrist-consultation"
              className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-200 hover:text-white"
            >
              How online consultation works
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-auto flex flex-wrap gap-2 pt-7">
              <a
                href={clinic.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light btn-sm"
              >
                Book online
                <ArrowUpRight />
              </a>
              <a
                href={clinic.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Features;
