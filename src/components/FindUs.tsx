import Link from "next/link";
import { ArrowRight, Clock, MapPin, Navigation, Phone, Video } from "lucide-react";
import { clinic } from "@/lib/clinic";
import SectionHeading from "./Common/SectionHeading";
import OpenStatus from "./OpenStatus";

const FindUs = () => {
  return (
    <section id="clinics" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Visit us"
          title={
            <>
              Clinics &amp; <em>timings</em>
            </>
          }
          description="Meet Dr. Jash Ajmera in person at any of our three clinics — or consult online from anywhere in India."
        />

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12">
          {/* Map + main clinic address */}
          <div
            data-reveal
            className="flex flex-col overflow-hidden rounded-5xl border border-border/80 bg-card shadow-soft lg:relative lg:col-span-7 lg:min-h-[36rem]"
          >
            <div className="relative aspect-[4/3] w-full bg-muted sm:aspect-[16/10] lg:absolute lg:inset-0 lg:aspect-auto">
              <iframe
                src={clinic.mapEmbedUrl}
                title="Map showing Sadbhav Neuropsychiatry Clinic in Vesu, Surat"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0 dark:hue-rotate-180 dark:invert-[.88]"
              />
            </div>
            <div className="relative p-6 lg:absolute lg:inset-x-5 lg:bottom-5 lg:rounded-3xl lg:border lg:border-border/70 lg:bg-card/95 lg:shadow-lift lg:backdrop-blur">
              <p className="flex items-center gap-2 font-semibold text-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-highlight" />
                {clinic.name} · Vesu
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{clinic.address.full}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={clinic.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <Navigation />
                  Get directions
                </a>
                <a href={clinic.phone.href} className="btn btn-secondary btn-sm">
                  <Phone />
                  Call the clinic
                </a>
              </div>
            </div>
          </div>

          {/* Branches */}
          <ul className="grid content-start gap-4 lg:col-span-5">
            {clinic.branches.map((branch) => (
              <li key={branch.id} data-reveal className="surface p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      <Link
                        href={`/clinics/${branch.slug}`}
                        className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        {branch.name}
                      </Link>
                    </h3>
                    {branch.tag && (
                      <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-highlight">
                        {branch.tag}
                      </p>
                    )}
                  </div>
                  <OpenStatus schedule={branch.schedule} />
                </div>
                <div className="mt-4 flex items-start gap-3 rounded-2xl bg-muted/70 p-4 text-sm">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{branch.days}</p>
                    {branch.times.map((time) => (
                      <p key={time} className="mt-0.5 text-muted-foreground">
                        {time}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            ))}

            <li
              data-reveal
              className="flex flex-col gap-4 rounded-4xl border border-dashed border-primary/30 bg-secondary/60 p-6 xs:flex-row xs:items-center"
            >
              <span className="icon-tile bg-primary text-primary-foreground">
                <Video className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Prefer to consult online?</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Discreet e-consults with pan-India medicine delivery.
                </p>
              </div>
              <Link
                href="/online-psychiatrist-consultation"
                className="btn btn-secondary btn-sm self-start xs:self-auto"
              >
                How it works
                <ArrowRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
