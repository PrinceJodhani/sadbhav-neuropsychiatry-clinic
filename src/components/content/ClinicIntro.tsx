import { CalendarCheck, Clock, MapPin, Navigation, Phone } from "lucide-react";
import { clinic, type Branch } from "@/lib/clinic";
import { WhatsAppIcon } from "../Common/BrandIcons";
import OpenStatus from "../OpenStatus";

/** Map, live open/closed status, timings and contact buttons for a branch page. */
export default function ClinicIntro({ branch }: { branch: Branch }) {
  const isMain = branch.id === "vesu";
  return (
    <section aria-label={`${branch.name} clinic details`} className="container pb-14 sm:pb-16">
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="overflow-hidden rounded-5xl border border-border/80 bg-card shadow-soft lg:col-span-7">
          {isMain ? (
            <div className="relative aspect-[4/3] h-full min-h-[18rem] w-full bg-muted sm:aspect-[16/10]">
              <iframe
                src={clinic.mapEmbedUrl}
                title={`Map showing ${clinic.name} in Vesu, Surat`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0 dark:hue-rotate-180 dark:invert-[.88]"
              />
            </div>
          ) : (
            <div className="bg-night flex h-full min-h-[16rem] flex-col justify-end p-7 sm:p-9">
              <MapPin className="h-8 w-8 text-brand-300" />
              <p className="heading-display mt-4 text-[1.75rem] leading-snug text-white">
                {branch.name.split(",")[0]} clinic
              </p>
              <p className="mt-2 max-w-md text-white/70">
                Call or WhatsApp when booking and the team will share the exact location and
                directions.
              </p>
            </div>
          )}
        </div>

        <div className="surface flex flex-col p-6 sm:p-8 lg:col-span-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-foreground">Timings</h2>
            <OpenStatus schedule={branch.schedule} />
          </div>
          <div className="mt-4 flex items-start gap-3 rounded-2xl bg-muted/70 p-4">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-foreground">{branch.days}</p>
              {branch.times.map((time) => (
                <p key={time} className="mt-0.5 text-muted-foreground">
                  {time}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-start gap-3 px-1">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-highlight" />
            <p className="leading-relaxed text-muted-foreground">{branch.address}</p>
          </div>

          <div className="mt-auto grid gap-2.5 pt-7 xs:grid-cols-2">
            <a
              href={clinic.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary xs:col-span-2"
            >
              <CalendarCheck />
              Book appointment
            </a>
            <a href={clinic.phone.href} className="btn btn-secondary">
              <Phone />
              Call
            </a>
            {isMain ? (
              <a
                href={clinic.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Navigation />
                Directions
              </a>
            ) : (
              <a
                href={clinic.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <WhatsAppIcon className="text-[#1DA851]" />
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
