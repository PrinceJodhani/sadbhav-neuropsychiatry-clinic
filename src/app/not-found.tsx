import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Phone } from "lucide-react";
import { LotusIcon } from "@/components/Common/BrandIcons";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-36 sm:pt-44">
      <div aria-hidden="true" className="bg-aurora absolute inset-0 -z-10" />
      <div className="container">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="icon-tile h-16 w-16 rounded-3xl bg-lotus-50 text-lotus-600 dark:bg-lotus-400/10 dark:text-lotus-300">
            <LotusIcon className="h-8 w-8" />
          </span>
          <p className="eyebrow mt-8">Error 404</p>
          <h1 className="heading-display mt-4 text-5xl leading-[1.05] text-foreground sm:text-6xl">
            This page has <em>wandered off</em>
          </h1>
          <p className="lead mt-5">
            The page you are looking for may have moved. Let us help you find your way.
          </p>
          <div className="mt-9 flex flex-col gap-3 xs:flex-row">
            <Link href="/" className="btn btn-primary btn-lg">
              <ArrowLeft />
              Back to home
            </Link>
            <a href={clinic.phone.href} className="btn btn-secondary btn-lg">
              <Phone />
              {clinic.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
