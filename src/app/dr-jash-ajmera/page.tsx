import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  Brain,
  Briefcase,
  CalendarCheck,
  GraduationCap,
  HeartHandshake,
  Languages,
  MapPin,
  Mic,
  Phone,
  Sparkles,
  Video,
} from "lucide-react";
import { Accent } from "@/components/content/RichText";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import FaqList from "@/components/content/FaqList";
import CtaBand from "@/components/CtaBand";
import GoogleRating from "@/components/GoogleRating";
import JsonLd from "@/components/JsonLd";
import ReviewsPage from "@/components/reviews";
import { conditions, pathOf, treatments } from "@/content";
import type { Faq } from "@/content/types";
import { clinic } from "@/lib/clinic";
import {
  absoluteUrl,
  breadcrumbNode,
  clinicNode,
  faqNode,
  ids,
  physicianNode,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import reviewsData from "../../../public/reviews.json";

const path = clinic.doctor.profilePath;
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Dr. Jash Ajmera", path },
];

export const metadata: Metadata = pageMetadata({
  title: "Dr. Jash Ajmera – Psychiatrist & Psychotherapist in Surat | Profile",
  absoluteTitle: true,
  description:
    "Dr. Jash Ajmera (M.B.B.S., D.P.M. Psychiatry, F.I.P.S.) is a psychiatrist and psychotherapist in Surat practising since 2017. Qualifications, experience, approach, clinics and reviews.",
  path,
  type: "profile",
});

const approach = [
  {
    title: "Client-centred",
    text: "A supportive, non-judgemental space built on empathy and active listening.",
    Icon: HeartHandshake,
  },
  {
    title: "Neuroscience-informed",
    text: "Clear explanations of how the brain shapes emotions, with treatments that target those processes.",
    Icon: Brain,
  },
  {
    title: "Emotion management",
    text: "Practical skills to understand, tolerate and regulate emotions.",
    Icon: Sparkles,
  },
  {
    title: "Integrated care",
    text: "Psychotherapy and safe, carefully chosen medicines — from one doctor who knows the full picture.",
    Icon: Award,
  },
];

const faqs: Faq[] = [
  {
    q: "Is Dr. Jash Ajmera a psychiatrist or a psychologist?",
    a: "Dr. Jash Ajmera is a psychiatrist — a medical doctor (M.B.B.S.) with a postgraduate qualification in psychiatry (D.P.M.). He is also trained in psychotherapy, so he provides both talk therapy and medicines when needed.",
  },
  {
    q: "What are Dr. Jash Ajmera’s qualifications?",
    a: "M.B.B.S. from Gujarat Adani Institute of Medical Science (GAIMS), Bhuj; D.P.M. (Psychiatry) from Government Medical College, Rajkot; and F.I.P.S. (Fellow of the Indian Psychiatric Society).",
  },
  {
    q: "Where does Dr. Jash Ajmera practise?",
    a: "At Sadbhav Neuropsychiatry Clinic — the main clinic in Vesu, Surat (Monday–Saturday), the Katargam branch in Surat (Sunday) and the Ankleshwar branch (Saturday) — and online for patients across India and abroad. See [clinics & timings](/clinics).",
  },
  {
    q: "Does Dr. Jash Ajmera offer online consultations?",
    a: "Yes. He consults by video in English, Hindi and Gujarati for patients anywhere in India, and for NRIs abroad. See [online consultation](/online-psychiatrist-consultation).",
  },
  {
    q: "What conditions does Dr. Jash Ajmera treat?",
    a: "Depression, anxiety and panic attacks, OCD, bipolar disorder, schizophrenia and psychosis, alcohol and other addictions, insomnia, stress and burnout, ADHD, personality difficulties, postpartum depression, sexual health concerns, and mental health problems in children and teenagers. See [all conditions](/conditions).",
  },
  {
    q: "How do I book an appointment with Dr. Jash Ajmera?",
    a: "Book online at sadbhavneuropsychiatryclinic.setmore.com, or call or WhatsApp +91 78610 24557.",
  },
];

export default function DoctorPage() {
  const url = absoluteUrl(path);
  const rating = reviewsData.place_info.rating;
  const reviewCount = reviewsData.place_info.reviews;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${url}#webpage`,
        url,
        name: "Dr. Jash Ajmera – Psychiatrist & Psychotherapist in Surat",
        inLanguage: "en-IN",
        isPartOf: { "@id": ids.website },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": physicianNode()["@id"] },
        dateModified: "2026-10-21",
      },
      physicianNode({ withRating: true }),
      clinicNode(),
      breadcrumbNode(crumbs, path),
      faqNode(faqs, path),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
        <div aria-hidden="true" className="bg-aurora absolute inset-0 -z-20" />
        <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10" />
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="eyebrow">About the doctor</p>
              <h1 className="heading-display mt-4 text-[2.75rem] leading-[1.03] text-foreground xs:text-[3.25rem] sm:text-6xl xl:text-[4.25rem]">
                <Accent text="Dr. Jash *Ajmera*" />
              </h1>
              <p className="mt-3 text-lg font-semibold text-primary">
                {clinic.doctor.role} · {clinic.doctor.fullCredentials}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl sm:leading-relaxed">
                Dr. Jash Ajmera is a psychiatrist and psychotherapist in Surat, Gujarat, practising
                since {clinic.doctor.practisingSince}. He leads {clinic.name} in Vesu, also consults in
                Katargam and Ankleshwar, and sees patients online across India and abroad — treating
                depression, anxiety, OCD, bipolar disorder, psychosis, addiction, sleep and sexual
                health concerns in English, Hindi and Gujarati.
              </p>
              <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                <a
                  href={clinic.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <CalendarCheck />
                  Book an appointment
                </a>
                <a href={clinic.phone.href} className="btn btn-secondary btn-lg">
                  <Phone />
                  {clinic.phone.display}
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6">
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

            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-[21rem] [--arch-aspect:0.897] sm:max-w-[24rem]">
                <div
                  aria-hidden="true"
                  className="arch absolute -right-3 -top-3 bottom-3 left-3 border-2 border-highlight/25 sm:-right-5 sm:-top-5 sm:bottom-5 sm:left-5"
                />
                <div className="arch relative aspect-[900/1003] overflow-hidden bg-[#E8F0F2] shadow-lift ring-1 ring-black/5">
                  <Image
                    src="/images/sadbhav/dr-jash-ajmera-portrait.jpg"
                    alt="Dr. Jash Ajmera, psychiatrist and psychotherapist in Surat"
                    fill
                    priority
                    sizes="(min-width: 992px) 24rem, (min-width: 575px) 24rem, 21rem"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section aria-labelledby="facts-title" className="container pb-16 sm:pb-20">
        <h2 id="facts-title" className="sr-only">
          Key facts
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: GraduationCap, label: "Qualifications", value: clinic.doctor.fullCredentials },
            {
              Icon: Briefcase,
              label: "Experience",
              value: `${clinic.doctor.yearsOfExperience} years (since ${clinic.doctor.practisingSince})`,
            },
            { Icon: MapPin, label: "Clinics", value: "Vesu & Katargam (Surat), Ankleshwar" },
            { Icon: Languages, label: "Languages", value: clinic.languages.join(", ") },
          ].map(({ Icon, label, value }) => (
            <li key={label} className="surface flex items-start gap-4 p-5">
              <span className="icon-tile h-11 w-11 bg-brand-50 text-brand-700 dark:bg-brand-400/10 dark:text-brand-300">
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex flex-col-reverse">
                <span className="mt-1 text-sm text-muted-foreground">{label}</span>
                <span className="font-semibold leading-snug text-foreground">{value}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Education & experience */}
      <section className="section bg-card">
        <div className="container grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Education</p>
            <h2 className="heading-section mt-4 text-[2rem] sm:text-[2.4rem]">
              Qualifications &amp; <em>training</em>
            </h2>
            <ol className="mt-8 space-y-4">
              {clinic.doctor.education.map((item) => (
                <li key={item.degree} className="rounded-3xl border border-border/80 bg-background p-5">
                  <p className="font-semibold text-foreground">{item.degree}</p>
                  <p className="mt-1 text-muted-foreground">{item.institution}</p>
                </li>
              ))}
              <li className="rounded-3xl border border-border/80 bg-background p-5">
                <p className="font-semibold text-foreground">Psychotherapy training</p>
                <p className="mt-1 text-muted-foreground">
                  Mentored by {clinic.doctor.therapyMentor}
                </p>
              </li>
            </ol>
          </div>
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="heading-section mt-4 text-[2rem] sm:text-[2.4rem]">
              Clinical &amp; public <em>service</em>
            </h2>
            <ol className="relative mt-8 space-y-6 border-l border-border pl-7">
              {clinic.doctor.experience.map((item) => (
                <li key={item.text} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[2.06rem] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-highlight"
                  />
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                    {item.period}
                  </p>
                  <p className="mt-1 text-lg text-foreground">{item.text}</p>
                </li>
              ))}
              <li className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.06rem] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-highlight"
                />
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                  Ongoing
                </p>
                <p className="mt-1 text-lg text-foreground">
                  Associated with major hospitals of Surat; mental health guidance and workshops for
                  schools, NGOs and companies
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Approach</p>
            <h2 className="heading-section mt-4">
              No health without <em>mental health</em>
            </h2>
            <p className="lead mt-5">
              Every plan is personal, evidence-based and confidential — combining psychotherapy with
              medicines only when they genuinely help.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map(({ title, text, Icon }) => (
              <li key={title} className="surface p-6">
                <span className="icon-tile bg-lotus-50 text-lotus-600 dark:bg-lotus-400/10 dark:text-lotus-300">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ReviewsPage />

      {/* Expertise */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Areas of expertise</p>
            <h2 className="heading-section mt-4">
              Conditions <em>treated</em>
            </h2>
            <p className="lead mt-5">
              Dr. Ajmera works extensively with adolescents and young adults, as well as adults and
              families.
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {[...conditions, ...treatments].map((page) => (
              <li key={page.slug}>
                <Link
                  href={pathOf(page)}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-[0.95rem] font-medium text-foreground/85 transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
                >
                  <page.icon className="h-4 w-4 text-primary" />
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <div className="rounded-4xl border border-border/80 bg-card p-6 sm:p-8">
              <span className="icon-tile bg-brand-50 text-brand-700 dark:bg-brand-400/10 dark:text-brand-300">
                <Mic className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">In the media</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Featured and quoted in {clinic.doctor.media.slice(0, -1).join(", ")} and{" "}
                {clinic.doctor.media[clinic.doctor.media.length - 1]}.
              </p>
            </div>
            <div className="rounded-4xl border border-border/80 bg-card p-6 sm:p-8">
              <span className="icon-tile bg-brand-50 text-brand-700 dark:bg-brand-400/10 dark:text-brand-300">
                <Video className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">Consult from anywhere</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Online consultations across{" "}
                <Link href="/online-psychiatrist-consultation" className="font-medium text-primary underline underline-offset-4">
                  India
                </Link>
                , in{" "}
                <Link href="/online-psychiatrist-gujarat" className="font-medium text-primary underline underline-offset-4">
                  Gujarati for Gujarat
                </Link>{" "}
                and for{" "}
                <Link href="/nri-online-psychiatrist" className="font-medium text-primary underline underline-offset-4">
                  NRIs abroad
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section aria-labelledby="doctor-faq-title" className="section bg-card">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">FAQs</p>
            <h2 id="doctor-faq-title" className="heading-section mt-4">
              About Dr. <em>Ajmera</em>
            </h2>
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-primary hover:underline hover:underline-offset-4"
            >
              All patient FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <FaqList faqs={faqs} name="doctor-faq" />
          </div>
        </div>
      </section>

      <div className="pt-16 sm:pt-20">
        <CtaBand />
      </div>
    </>
  );
}
