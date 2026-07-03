// src/app/page.tsx
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import BlogSection from "@/components/BlogSection";
import ScrollUp from "@/components/Common/ScrollUp";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import FindUs from "@/components/FindUs";
import GoogleRating from "@/components/GoogleRating";
import Hero from "@/components/Hero";
import { InstagramFeed } from "@/components/InstagramFeed";
import InstagramFeedFinal from "@/components/InstagramFeedFinal";
import ReviewsPage from "@/components/reviews";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import YoutubeWidget from "@/components/YoutubeWidget";
import YoutubeEmbed from "@/components/YoutubeWidget";
import { Metadata } from "next";

const siteUrl = "https://psychiatristinsurat.in";
const clinicId = `${siteUrl}/#clinic`;
const physicianId = `${siteUrl}/#physician`;

// Social / external profiles used for entity disambiguation (sameAs).
const socialProfiles = [
  "https://www.facebook.com/sadbhavpsychiatry/",
  "https://x.com/ajmerajash",
  "https://www.youtube.com/@Aarogyaminds",
  "https://www.instagram.com/aarogya.minds/",
  "https://www.instagram.com/sadbhav_clinic/",
  "https://aarogyaminds.com/sadbhav-psychiatrist",
];

const rating = 4.9;
const reviewCount = 288;

export const metadata: Metadata = {
  title:
    "Best Psychiatrist in Surat – Dr. Jash Ajmera | Sadbhav Neuropsychiatry Clinic, Vesu",
  description:
    "Looking for the best psychiatrist in Surat? Dr. Jash Ajmera (M.B.B.S., D.P.M.) at Sadbhav Neuropsychiatry Clinic, Vesu offers expert, confidential treatment for depression, anxiety, OCD, bipolar disorder, schizophrenia, addiction & more. Rated 4.9★ by 280+ patients. Call +91 78610 24557.",
  keywords:
    "psychiatrist in surat, best psychiatrist in surat, psychiatrist in vesu, top psychiatrist in surat, psychiatrist near me surat, dr jash ajmera, sadbhav neuropsychiatry clinic, mental health doctor surat, depression treatment surat, anxiety treatment surat, ocd treatment surat, bipolar treatment surat, neuropsychiatrist surat, psychotherapist in surat, psychiatrist in gujarat",
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
    title:
      "Dr. Jash Ajmera – Best Psychiatrist in Surat | Sadbhav Neuropsychiatry Clinic",
    description:
      "Experienced psychiatrist in Surat (Vesu) offering comprehensive, confidential mental health care. Depression, anxiety, OCD, bipolar disorder, schizophrenia, addiction & more.",
    siteName: "Sadbhav Neuropsychiatry Clinic",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/sadbhav/team-itemm.jpg`,
        width: 630,
        height: 630,
        alt: "Dr. Jash Ajmera – Best Psychiatrist in Surat, Sadbhav Neuropsychiatry Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Jash Ajmera | Best Psychiatrist in Surat, Gujarat",
    description:
      "Leading psychiatrist in Surat offering expert mental health care at Sadbhav Neuropsychiatry Clinic. Book an appointment today.",
    images: [`${siteUrl}/images/sadbhav/team-itemm.jpg`],
  },
};

// FAQ content mirrors the on-page FAQ section so answers stay consistent.
const faqs = [
  {
    question: "What conditions do you specialize in treating?",
    answer:
      "We treat a wide variety of psychiatric conditions, including depression, anxiety, OCD, schizophrenia, bipolar disorder, personality concerns, addictions, and psychosexual issues.",
  },
  {
    question: "How can I schedule an appointment?",
    answer:
      "Simply call +91 78610 24557 to book your session at any branch, or book online at sadbhavneuropsychiatryclinic.setmore.com.",
  },
  {
    question: "What is your treatment approach?",
    answer:
      "We rely on evidence-based methods, combining psychotherapy and safe, effective medications to ensure the best results for each individual.",
  },
  {
    question: "Do you prescribe medicines?",
    answer:
      "Yes, our treatment plans include medications whenever clinically indicated, customized to your needs and safety.",
  },
  {
    question:
      "Are there resources for managing mental health outside appointments?",
    answer:
      "Yes. Visit aarogyaminds.com for free mental health tests, self-help tools, and informative blogs.",
  },
  {
    question: "Will my consultations remain confidential?",
    answer:
      "Yes, we maintain strict confidentiality for all patient data and records, prioritizing your privacy at every step.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalClinic", "MedicalBusiness", "LocalBusiness"],
      "@id": clinicId,
      name: "Sadbhav Neuropsychiatry Clinic – Dr. Jash Ajmera",
      alternateName: "Best Psychiatrist in Surat",
      url: siteUrl,
      logo: `${siteUrl}/images/sadbhav/main-logo.png`,
      image: `${siteUrl}/images/sadbhav/team-itemm.jpg`,
      description:
        "Sadbhav Neuropsychiatry Clinic in Vesu, Surat is led by Dr. Jash Ajmera, a leading psychiatrist offering expert, confidential and evidence-based mental health care for depression, anxiety, OCD, bipolar disorder, schizophrenia, addiction and more.",
      telephone: "+917861024557",
      email: "support@aarogyaminds.com",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      medicalSpecialty: "Psychiatry",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "208, 4th Floor, Someshwar Square, Opp. Aagam Heritage Bungalows, Near University Road, Vesu",
        addressLocality: "Surat",
        addressRegion: "Gujarat",
        postalCode: "395007",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 21.1500591,
        longitude: 72.778681,
      },
      hasMap: "https://maps.app.goo.gl/reprPyC8r9cdeKjB7",
      areaServed: [
        { "@type": "City", name: "Surat" },
        { "@type": "Place", name: "Vesu, Surat" },
        { "@type": "AdministrativeArea", name: "Gujarat" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "11:00",
          closes: "13:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "16:00",
          closes: "20:00",
        },
      ],
      sameAs: socialProfiles,
      founder: { "@id": physicianId },
      employee: { "@id": physicianId },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating,
        reviewCount: reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
      availableService: [
        "Depression Treatment",
        "Anxiety Disorder Treatment",
        "OCD (Obsessive Compulsive Disorder) Treatment",
        "Bipolar Disorder Treatment",
        "Schizophrenia Treatment",
        "Addiction & De-addiction Treatment",
        "Psychotherapy & Counselling",
        "Psychosexual Disorder Treatment",
        "Child & Adolescent Psychiatry",
        "Sleep Disorder & Stress Management",
      ].map((name) => ({ "@type": "MedicalTherapy", name })),
    },
    {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}/#clinic-katargam`,
      name: "Sadbhav Neuropsychiatry Clinic – Katargam Branch (Dr. Jash Ajmera)",
      parentOrganization: { "@id": clinicId },
      telephone: "+917861024557",
      medicalSpecialty: "Psychiatry",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Katargam, Surat",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "11:00",
          closes: "12:00",
        },
      ],
    },
    {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}/#clinic-ankleshwar`,
      name: "Sadbhav Neuropsychiatry Clinic – Ankleshwar Branch (Dr. Jash Ajmera)",
      parentOrganization: { "@id": clinicId },
      telephone: "+917861024557",
      medicalSpecialty: "Psychiatry",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ankleshwar",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "09:00",
          closes: "12:00",
        },
      ],
    },
    {
      "@type": "Physician",
      "@id": physicianId,
      name: "Dr. Jash Ajmera",
      honorificPrefix: "Dr.",
      jobTitle: "Consultant Psychiatrist & Psychotherapist",
      medicalSpecialty: "Psychiatry",
      url: siteUrl,
      image: `${siteUrl}/images/sadbhav/team-itemm.jpg`,
      description:
        "Dr. Jash Ajmera (M.B.B.S., D.P.M. Psychiatry) is a leading psychiatrist and psychotherapist in Surat with 7+ years of experience. Since 2017 he has been active in the National Mental Health Programme and community mental health outreach across Gujarat.",
      worksFor: { "@id": clinicId },
      workLocation: { "@id": clinicId },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "M.B.B.S.",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "D.P.M. (Psychiatry)",
        },
      ],
      knowsAbout: [
        "Depression",
        "Anxiety Disorders",
        "Obsessive Compulsive Disorder (OCD)",
        "Bipolar Disorder",
        "Schizophrenia",
        "Addiction / De-addiction",
        "Personality Disorders",
        "Psychosexual Disorders",
        "Sleep Disorders",
        "Stress Management",
        "Child & Adolescent Psychiatry",
      ],
      sameAs: socialProfiles,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating,
        reviewCount: reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default async function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          zIndex: "999",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "7px",
          backgroundColor: "white",
        }}
        target="_blank"
        href="https://sadbhavneuropsychiatryclinic.setmore.com"
      >
        <img
          src="https://assets.setmore.com/setmore/images/2.0/Settings/book-now-black.svg"
          alt="Book an appointment with Dr. Jash Ajmera, psychiatrist in Surat, using Setmore"
        />
      </a>
      <ScrollUp />
      <Hero />

      <GoogleRating rating={rating} reviewCount={reviewCount} /> {/* Add GoogleRating here */}
      <Stats />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      <FindUs />
      <BlogSection />
       {/* <InstagramFeed username={'sadbhav_clinic'} /> */}
       <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Follow Us on Instagram</h2>
        <p className="text-gray-600 mt-2">Stay updated with our latest news and events</p>
      </div>
      <InstagramFeed username={'sadbhav_clinic'} />
    </div>

       {/* <InstagramFeedFinal />  */}
      <Faqs />
      <ReviewsPage />
      <br></br>
      <YoutubeWidget />

      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
