import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/lib/clinic";
import { formatDate } from "@/lib/text";

/** "Medically reviewed by" line under page titles (E-E-A-T: who stands behind the content). */
export default function Byline({ updated, minutes }: { updated: string; minutes?: number }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/sadbhav/dr-jash-ajmera-avatar.jpg"
        alt=""
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-background"
      />
      <p className="text-sm leading-snug text-muted-foreground">
        Medically reviewed by{" "}
        <Link
          href={clinic.doctor.profilePath}
          className="font-semibold text-foreground underline decoration-border underline-offset-4 hover:decoration-primary"
        >
          {clinic.doctor.name}
        </Link>
        , {clinic.doctor.credentials}
        <span className="block">
          Updated <time dateTime={updated}>{formatDate(updated)}</time>
          {minutes ? <> · {minutes} min read</> : null}
        </span>
      </p>
    </div>
  );
}
