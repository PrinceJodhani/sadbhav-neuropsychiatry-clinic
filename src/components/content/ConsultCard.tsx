import Link from "next/link";
import { CalendarCheck, MapPin, Video } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { WhatsAppIcon } from "../Common/BrandIcons";

/** Mid-article call to action: in person in Surat/Ankleshwar, or online from anywhere. */
export default function ConsultCard({ topic }: { topic?: string }) {
  return (
    <aside className="bg-night relative overflow-hidden rounded-4xl p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
        Talk to a psychiatrist
      </p>
      <p className="heading-display mt-3 text-2xl leading-snug text-white sm:text-[1.75rem]">
        {topic ? `Get help for ${topic} with ${clinic.doctor.name}` : `Book a consultation with ${clinic.doctor.name}`}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        <li className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
          <span>
            In person at{" "}
            <Link href="/clinics" className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
              Vesu &amp; Katargam (Surat) and Ankleshwar
            </Link>
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <Video className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
          <span>
            <Link href="/online-psychiatrist-consultation" className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
              Online video consultation
            </Link>{" "}
            from anywhere in India or abroad
          </span>
        </li>
      </ul>
      <div className="mt-6 flex flex-col gap-2.5 xs:flex-row xs:flex-wrap">
        <a
          href={clinic.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
        >
          <CalendarCheck />
          Book appointment
        </a>
        <a
          href={clinic.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </aside>
  );
}
