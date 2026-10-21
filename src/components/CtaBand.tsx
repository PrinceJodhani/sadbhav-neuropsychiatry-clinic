import { ArrowRight, Phone } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { LotusIcon, WhatsAppIcon } from "./Common/BrandIcons";

export default function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="pb-16 pt-4 sm:pb-24">
      <div className="container">
        <div className="bg-night relative isolate overflow-hidden rounded-5xl px-6 py-14 sm:px-12 sm:py-20 lg:px-20">
          <LotusIcon className="absolute -right-20 -top-16 -z-10 h-[22rem] w-[22rem] text-white/[0.05] sm:h-[30rem] sm:w-[30rem]" />
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-300">Whenever you are ready</p>
            <h2
              id="cta-heading"
              className="heading-section mt-4 text-white [&_em]:text-lotus-300"
            >
              Taking the first step is the <em>bravest</em> part.
            </h2>
            <p className="lead mt-5 text-white/70">
              Whether it is your first visit or a follow-up, we are here to listen — confidentially
              and without judgement.
            </p>
            <div className="mt-9 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <a
                href={clinic.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light btn-lg group"
              >
                Book an appointment
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a href={clinic.phone.href} className="btn btn-outline-light btn-lg">
                <Phone />
                Call now
              </a>
              <a
                href={clinic.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          In a crisis or having thoughts of self-harm? Call{" "}
          <a href="tel:14416" className="font-semibold text-foreground underline underline-offset-4">
            Tele-MANAS 14416
          </a>{" "}
          (free, 24×7) or dial{" "}
          <a href="tel:112" className="font-semibold text-foreground underline underline-offset-4">
            112
          </a>{" "}
          for emergencies.
        </p>
      </div>
    </section>
  );
}
