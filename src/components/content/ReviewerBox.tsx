import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { formatDate } from "@/lib/text";

/** Author box at the end of every content page (a plain doctor card on clinic pages). */
export default function ReviewerBox({ updated, isClinic }: { updated: string; isClinic?: boolean }) {
  return (
    <aside
      aria-label={isClinic ? "Your doctor" : "About the reviewer"}
      className="flex flex-col gap-5 rounded-4xl border border-border/80 bg-card p-6 sm:flex-row sm:items-start sm:p-8"
    >
      <Image
        src="/images/sadbhav/dr-jash-ajmera-avatar.jpg"
        alt={`Portrait of ${clinic.doctor.name}`}
        width={96}
        height={96}
        className="h-20 w-20 shrink-0 rounded-full object-cover sm:h-24 sm:w-24"
      />
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {isClinic ? "Your doctor" : "Medically reviewed by"}
        </p>
        <p className="heading-display mt-1.5 text-2xl text-foreground">{clinic.doctor.name}</p>
        <p className="mt-0.5 text-sm font-medium text-primary">
          {clinic.doctor.role} · {clinic.doctor.fullCredentials}
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Dr. Ajmera has practised psychiatry since {clinic.doctor.practisingSince}, including work
          under the National Mental Health Programme in Gujarat. He sees patients at {clinic.name} in
          Surat and Ankleshwar and consults online across India and abroad.
        </p>
        {!isClinic && (
          <p className="mt-3 text-sm text-muted-foreground">
            Last reviewed <time dateTime={updated}>{formatDate(updated)}</time>. This page is for
            general information and is not a substitute for a personal consultation.
          </p>
        )}
        <Link
          href={clinic.doctor.profilePath}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline hover:underline-offset-4"
        >
          Read Dr. Ajmera’s full profile
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
