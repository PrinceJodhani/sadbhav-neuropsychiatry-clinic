import Image from "next/image";
import { ArrowRight, GraduationCap, Phone, ShieldCheck } from "lucide-react";
import { clinic } from "@/lib/clinic";
import GoogleRating from "../GoogleRating";

const Hero = ({ rating, reviewCount }: { rating: number; reviewCount: number }) => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36 xl:pt-40"
    >
      <div aria-hidden="true" className="bg-aurora absolute inset-0 -z-20" />
      <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10" />

      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            {/* One H1 holding both the search phrase and the tagline. The tagline is not
                animated: it is the LCP element on most screens. */}
            <h1>
              <span className="eyebrow animate-fade-up">Psychiatrist &amp; Psychotherapist in Surat</span>
              <span className="heading-display mt-5 block text-[2.75rem] leading-[1.02] text-foreground xs:text-[3.25rem] sm:text-6xl xl:text-[4.6rem]">
                No health without <em>mental&nbsp;health.</em>
              </span>
            </h1>

            <p className="lead mt-6 max-w-xl animate-fade-up [animation-delay:80ms]">
              At {clinic.name}, {clinic.doctor.name} offers confidential, evidence-based care
              for depression, anxiety, OCD, bipolar disorder, addiction and more — blending
              psychotherapy with safe, effective medication.
            </p>

            <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:160ms] xs:flex-row">
              <a
                href={clinic.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg group"
              >
                Book an appointment
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a href={clinic.phone.href} className="btn btn-secondary btn-lg">
                <Phone />
                {clinic.phone.display}
              </a>
            </div>

            <div className="mt-11 flex animate-fade-up flex-wrap items-center gap-x-8 gap-y-6 [animation-delay:240ms]">
              <GoogleRating rating={rating} reviewCount={reviewCount} />
              <span aria-hidden="true" className="hidden h-10 w-px bg-border sm:block" />
              <dl className="flex gap-8">
                {clinic.stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse">
                    <dt className="mt-0.5 text-sm text-muted-foreground">{stat.label}</dt>
                    <dd className="heading-display text-[1.75rem] leading-none text-foreground">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[21rem] [--arch-aspect:0.897] sm:max-w-[24rem] lg:max-w-[27rem]">
              {/* Offset outline arch */}
              <div
                aria-hidden="true"
                className="arch absolute -right-3 -top-3 bottom-3 left-3 border-2 border-highlight/25 sm:-right-5 sm:-top-5 sm:bottom-5 sm:left-5"
              />
              {/* Soft glow beneath the portrait */}
              <div
                aria-hidden="true"
                className="absolute -bottom-12 left-1/2 h-48 w-4/5 -translate-x-1/2 rounded-full bg-brand-400/35 blur-3xl dark:bg-brand-400/15"
              />

              <div className="arch relative aspect-[900/1003] overflow-hidden bg-[#E8F0F2] shadow-lift ring-1 ring-black/5">
                <Image
                  src="/images/sadbhav/dr-jash-ajmera-portrait.jpg"
                  alt="Dr. Jash Ajmera, psychiatrist and psychotherapist in Surat"
                  fill
                  priority
                  sizes="(min-width: 992px) 27rem, (min-width: 575px) 24rem, 21rem"
                  className="object-cover"
                />
              </div>

              <div className="absolute -left-3 bottom-10 flex animate-fade-up items-center gap-3 rounded-2xl border border-border/70 bg-card/90 p-3 pr-4 shadow-lift backdrop-blur-md [animation-delay:320ms] sm:-left-10">
                <span className="icon-tile h-11 w-11 rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-400/10 dark:text-brand-300">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-foreground">
                    {clinic.doctor.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {clinic.doctor.credentials}
                  </span>
                </span>
              </div>

              {/* Hidden on phones, where it would cover the face. */}
              <div className="absolute top-[9%] hidden animate-fade-up items-center gap-2.5 rounded-2xl border border-border/70 bg-card/90 py-2.5 pl-2.5 pr-4 shadow-lift backdrop-blur-md [animation-delay:420ms] sm:-right-12 sm:flex lg:-right-14">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lotus-50 text-lotus-600 dark:bg-lotus-400/10 dark:text-lotus-300">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-foreground">100% confidential</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
