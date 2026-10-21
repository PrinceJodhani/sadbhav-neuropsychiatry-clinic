// src/app/page.tsx
import AboutSectionOne from "@/components/About/AboutSectionOne";
import BlogSection from "@/components/BlogSection";
import ConditionsGrid from "@/components/ConditionsGrid";
import ConditionsMarquee from "@/components/ConditionsMarquee";
import CtaBand from "@/components/CtaBand";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import FindUs from "@/components/FindUs";
import Hero from "@/components/Hero";
import { InstagramFeed } from "@/components/InstagramFeed";
import JsonLd from "@/components/JsonLd";
import Process from "@/components/Process";
import ReviewsPage from "@/components/reviews";
import Video from "@/components/Video";
import { clinic, siteUrl } from "@/lib/clinic";
import {
  branchNode,
  clinicNode,
  faqNode,
  ids,
  physicianNode,
} from "@/lib/schema";
import { Metadata } from "next";
import reviewsData from "../../public/reviews.json";

// Statically generated, refreshed at most hourly (blogs + YouTube data).
export const revalidate = 3600;

// Same Google numbers that are shown on the page, so markup and UI never disagree.
const rating = reviewsData.place_info.rating;
const reviewCount = reviewsData.place_info.reviews;

export const metadata: Metadata = {
  title: {
    absolute:
      "Best Psychiatrist in Surat – Dr. Jash Ajmera | Sadbhav Neuropsychiatry Clinic, Vesu",
  },
  description: `Best psychiatrist in Surat: Dr. Jash Ajmera (M.B.B.S., D.P.M.), Sadbhav Neuropsychiatry Clinic, Vesu. Confidential care for depression, anxiety, OCD, addiction & more, in Surat and online. Rated ${rating}★ (${reviewCount}+ reviews).`,
  keywords:
    "psychiatrist in surat, best psychiatrist in surat, psychiatrist in vesu, top psychiatrist in surat, psychiatrist near me surat, dr jash ajmera, sadbhav neuropsychiatry clinic, mental health doctor surat, depression treatment surat, anxiety treatment surat, ocd treatment surat, bipolar treatment surat, de addiction centre surat, sexologist in surat, online psychiatrist india, psychiatrist in gujarat",
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-IN": siteUrl,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Dr. Jash Ajmera – Best Psychiatrist in Surat | Sadbhav Neuropsychiatry Clinic",
    description:
      "Psychiatrist and psychotherapist in Surat (Vesu) offering confidential, evidence-based mental health care — in person in Surat & Ankleshwar and online across India.",
    siteName: clinic.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Jash Ajmera | Best Psychiatrist in Surat, Gujarat",
    description:
      "Psychiatrist and psychotherapist in Surat offering confidential mental health care in person and online. Book an appointment today.",
    creator: "@ajmerajash",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Best Psychiatrist in Surat – Dr. Jash Ajmera | Sadbhav Neuropsychiatry Clinic",
      inLanguage: "en-IN",
      isPartOf: { "@id": ids.website },
      about: { "@id": ids.clinic },
      mainEntity: { "@id": ids.clinic },
    },
    clinicNode({ withRating: true }),
    ...clinic.branches.filter((branch) => branch.id !== "vesu").map(branchNode),
    physicianNode({ withRating: true }),
    // FAQ content comes from the same source as the on-page FAQ section.
    faqNode(
      clinic.faqs.map((faq) => ({ q: faq.question, a: faq.answer })),
      "/",
    ),
  ],
};

export default async function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero rating={rating} reviewCount={reviewCount} />
      <ConditionsMarquee />
      <Features />
      <ConditionsGrid />
      <AboutSectionOne />
      <Process />
      <ReviewsPage />
      <FindUs />
      <Video />
      <BlogSection />
      <InstagramFeed />
      <Faqs />
      <CtaBand />
    </>
  );
}
