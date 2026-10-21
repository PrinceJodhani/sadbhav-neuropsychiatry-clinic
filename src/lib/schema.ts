// Structured data (JSON-LD) shared by every page. Entities use stable @ids so search engines
// and AI assistants can join the clinic, the doctor and each page into one knowledge graph.
import type { ContentPage, Faq } from "@/content/types";
import reviewsData from "../../public/reviews.json";
import { clinic, siteUrl, type Branch } from "./clinic";
import { plainText } from "./text";

export const ids = {
  website: `${siteUrl}/#website`,
  clinic: `${siteUrl}/#clinic`,
  physician: `${siteUrl}/#physician`,
  branch: (id: string) => `${siteUrl}/#clinic-${id}`,
};

export const absoluteUrl = (path: string) => (path === "/" ? siteUrl : `${siteUrl}${path}`);

export const socialProfiles = [
  clinic.social.facebook,
  clinic.social.x,
  clinic.social.youtube,
  clinic.social.instagram,
  clinic.social.instagramClinic,
  "https://aarogyaminds.com/sadbhav-psychiatrist",
];

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function openingHours(branch: Branch) {
  return branch.schedule.flatMap((rule) =>
    rule.slots.map(([opens, closes]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: rule.days.map((day) => DAY_NAMES[day]),
      opens,
      closes,
    })),
  );
}

export const rating = {
  "@type": "AggregateRating",
  ratingValue: reviewsData.place_info.rating,
  reviewCount: reviewsData.place_info.reviews,
  bestRating: 5,
  worstRating: 1,
};

const vesu = clinic.branches.find((branch) => branch.id === "vesu")!;

export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress:
    "208, 4th Floor, Someshwar Square, Opp. Aagam Heritage Bungalows, Near University Road, Vesu",
  addressLocality: "Surat",
  addressRegion: "Gujarat",
  postalCode: "395007",
  addressCountry: "IN",
};

/** The main clinic (Vesu). */
export function clinicNode({ withRating = false } = {}) {
  return {
    "@type": ["MedicalClinic", "MedicalBusiness", "LocalBusiness"],
    "@id": ids.clinic,
    name: `${clinic.name} – ${clinic.doctor.name}`,
    alternateName: [clinic.name, "Best Psychiatrist in Surat"],
    url: siteUrl,
    logo: `${siteUrl}/images/sadbhav/main-logo.png`,
    image: `${siteUrl}/images/sadbhav/dr-jash-ajmera-portrait.jpg`,
    description: `${clinic.name} in Vesu, Surat is led by ${clinic.doctor.name} (${clinic.doctor.credentials}), a psychiatrist and psychotherapist offering confidential, evidence-based care for depression, anxiety, OCD, bipolar disorder, schizophrenia, addiction, sleep and sexual-health concerns — in person in Surat and Ankleshwar, and online across India and abroad.`,
    telephone: "+917861024557",
    email: clinic.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    medicalSpecialty: "https://schema.org/Psychiatric",
    knowsLanguage: ["en", "hi", "gu"],
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", latitude: 21.1500591, longitude: 72.778681 },
    hasMap: clinic.mapUrl,
    areaServed: [
      { "@type": "City", name: "Surat" },
      { "@type": "City", name: "Ankleshwar" },
      { "@type": "City", name: "Bharuch" },
      { "@type": "State", name: "Gujarat" },
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: openingHours(vesu),
    sameAs: socialProfiles,
    founder: { "@id": ids.physician },
    employee: { "@id": ids.physician },
    department: clinic.branches
      .filter((branch) => branch.id !== "vesu")
      .map((branch) => ({ "@id": ids.branch(branch.id) })),
    ...(withRating ? { aggregateRating: rating } : {}),
  };
}

/** Katargam and Ankleshwar branches. */
export function branchNode(branch: Branch) {
  return {
    "@type": "MedicalClinic",
    "@id": branch.id === "vesu" ? ids.clinic : ids.branch(branch.id),
    name: `${clinic.name} – ${branch.name.split(",")[0]} (${clinic.doctor.name})`,
    url: `${siteUrl}/clinics/${branch.slug}`,
    telephone: "+917861024557",
    medicalSpecialty: "https://schema.org/Psychiatric",
    parentOrganization: { "@id": ids.clinic },
    employee: { "@id": ids.physician },
    address: {
      "@type": "PostalAddress",
      addressLocality: branch.id === "ankleshwar" ? "Ankleshwar" : "Katargam, Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    areaServed: branch.areas.map((name) => ({ "@type": "Place", name })),
    openingHoursSpecification: openingHours(branch),
  };
}

export function physicianNode({ withRating = false } = {}) {
  return {
    "@type": ["Physician", "Person"],
    "@id": ids.physician,
    name: clinic.doctor.name,
    givenName: "Jash",
    familyName: "Ajmera",
    honorificPrefix: "Dr.",
    jobTitle: "Consultant Psychiatrist & Psychotherapist",
    description: `${clinic.doctor.name} (${clinic.doctor.fullCredentials}) is a psychiatrist and psychotherapist in Surat, Gujarat, with ${clinic.doctor.yearsOfExperience} years of experience (practising since ${clinic.doctor.practisingSince}) who has helped ${clinic.doctor.patientsHelped} patients. He consults at ${clinic.name} in Vesu and Katargam (Surat) and in Ankleshwar, and online for patients across India and abroad, in English, Hindi and Gujarati.`,
    url: `${siteUrl}${clinic.doctor.profilePath}`,
    image: `${siteUrl}/images/sadbhav/dr-jash-ajmera-portrait.jpg`,
    telephone: "+917861024557",
    address: postalAddress,
    medicalSpecialty: "https://schema.org/Psychiatric",
    knowsLanguage: ["en", "hi", "gu"],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Gujarat Adani Institute of Medical Science (GAIMS), Bhuj",
      },
      { "@type": "CollegeOrUniversity", name: "Government Medical College, Rajkot" },
    ],
    memberOf: {
      "@type": "Organization",
      name: "Indian Psychiatric Society",
      url: "https://indianpsychiatricsociety.org",
    },
    hasCredential: [
      { name: "M.B.B.S.", category: "degree" },
      { name: "D.P.M. (Diploma in Psychological Medicine – Psychiatry)", category: "degree" },
      { name: "F.I.P.S. (Fellow of the Indian Psychiatric Society)", category: "membership" },
    ].map(({ name, category }) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: category,
      name,
    })),
    knowsAbout: [
      "Psychiatry",
      "Psychotherapy",
      "Depression",
      "Anxiety disorders",
      "Panic disorder",
      "Obsessive-compulsive disorder (OCD)",
      "Bipolar disorder",
      "Schizophrenia",
      "Addiction and de-addiction",
      "Insomnia",
      "ADHD",
      "Personality disorders",
      "Psychosexual disorders",
      "Child and adolescent mental health",
    ],
    worksFor: { "@id": ids.clinic },
    sameAs: socialProfiles,
    ...(withRating ? { aggregateRating: rating } : {}),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbNode(crumbs: Crumb[], path: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function faqNode(faqs: Faq[], path: string) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: plainText(faq.q),
      acceptedAnswer: { "@type": "Answer", text: plainText(faq.a) },
    })),
  };
}

/** What the page is about, typed per page kind. */
function aboutNode(page: ContentPage, url: string) {
  if (page.kind === "condition") {
    return {
      "@type": "MedicalCondition",
      name: page.name,
      alternateName: page.medical?.alternateName,
      description: plainText(page.summary),
      url,
      relevantSpecialty: "https://schema.org/Psychiatric",
      signOrSymptom: page.medical?.symptoms?.map((name) => ({
        "@type": "MedicalSignOrSymptom",
        name,
      })),
      possibleTreatment: page.medical?.treatments?.map((name) => ({
        "@type": "MedicalTherapy",
        name,
      })),
      riskFactor: page.medical?.riskFactors?.map((name) => ({
        "@type": "MedicalRiskFactor",
        name,
      })),
    };
  }
  if (page.kind === "treatment" || page.kind === "online") {
    return {
      "@type": "Service",
      name: page.name,
      serviceType: page.name,
      description: plainText(page.summary),
      url,
      provider: { "@id": ids.clinic },
      areaServed:
        page.kind === "online"
          ? page.slug === "nri-online-psychiatrist"
            ? { "@type": "Place", name: "Worldwide" }
            : page.slug === "online-psychiatrist-gujarat"
              ? { "@type": "State", name: "Gujarat" }
              : { "@type": "Country", name: "India" }
          : [
              { "@type": "City", name: "Surat" },
              { "@type": "Country", name: "India" },
            ],
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: clinic.bookingUrl,
        servicePhone: { "@type": "ContactPoint", telephone: "+917861024557" },
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
    };
  }
  return { "@type": "Thing", name: page.name, description: plainText(page.summary) };
}

/** Full @graph for a content page: web page + topic + breadcrumbs + FAQs + doctor/clinic. */
export function contentPageGraph(page: ContentPage, path: string, crumbs: Crumb[]) {
  const url = absoluteUrl(path);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "MedicalWebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": ids.website },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${url}/opengraph-image`,
        width: 1200,
        height: 630,
      },
      about: aboutNode(page, url),
      specialty: "https://schema.org/Psychiatric",
      medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
      lastReviewed: page.updated,
      dateModified: page.updated,
      reviewedBy: { "@id": ids.physician },
      author: { "@id": ids.physician },
      publisher: { "@id": ids.clinic },
    },
    breadcrumbNode(crumbs, path),
    physicianNode(),
    clinicNode(),
  ];
  if (page.kind === "guide") {
    graph.push({
      "@type": "Article",
      "@id": `${url}#article`,
      headline: page.title,
      description: page.description,
      image: `${url}/opengraph-image`,
      inLanguage: "en-IN",
      datePublished: page.updated,
      dateModified: page.updated,
      author: { "@id": ids.physician },
      publisher: { "@id": ids.clinic },
      mainEntityOfPage: { "@id": `${url}#webpage` },
    });
  }
  if (page.kind === "clinic" && page.branchId) {
    const branch = clinic.branches.find((b) => b.id === page.branchId);
    if (branch && branch.id !== "vesu") graph.push(branchNode(branch));
  }
  if (page.faqs.length) graph.push(faqNode(page.faqs, path));
  return { "@context": "https://schema.org", "@graph": graph };
}
