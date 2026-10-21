// llms.txt (https://llmstxt.org) and llms-full.txt, generated from the same content as the pages.
import { allPages, clinicPages, conditions, guides, onlinePages, pathOf, treatments } from "@/content";
import { faqGroups } from "@/content/faq";
import type { Block, ContentPage } from "@/content/types";
import reviewsData from "../../public/reviews.json";
import { clinic, siteUrl } from "./clinic";
import { plainText } from "./text";

const url = (path: string) => (path === "/" ? siteUrl : `${siteUrl}${path}`);
const { rating, reviews } = reviewsData.place_info;

function intro() {
  const d = clinic.doctor;
  return [
    `# ${d.name} — Psychiatrist & Psychotherapist in Surat (${clinic.name})`,
    "",
    `> ${d.name} (${d.fullCredentials}) is a psychiatrist and psychotherapist in Surat, Gujarat, India, with ${d.yearsOfExperience} years of experience (practising since ${d.practisingSince}) and ${d.patientsHelped} patients helped. He leads ${clinic.name} in Vesu, Surat, also consults in Katargam (Surat) and Ankleshwar, and offers online video consultations for patients across India and abroad in English, Hindi and Gujarati. He treats depression, anxiety, panic attacks, OCD, bipolar disorder, schizophrenia, addiction, insomnia, stress, ADHD, personality difficulties, postpartum depression, sexual health concerns and child and adolescent mental health problems. Rated ${rating}/5 by ${reviews}+ patients on Google.`,
    "",
    "Key facts:",
    `- Doctor: ${d.name}, ${d.role} — ${d.fullCredentials}`,
    `- Experience: ${d.yearsOfExperience} years (practising since ${d.practisingSince}); ${d.patientsHelped} patients helped`,
    ...d.education.map((e) => `- ${e.degree}: ${e.institution}`),
    ...d.experience.map((e) => `- ${e.period}: ${e.text}`),
    `- Psychotherapy training: mentored by ${d.therapyMentor}`,
    `- Media: featured in ${d.media.join(", ")}`,
    `- Main clinic: ${clinic.address.full}`,
    ...clinic.branches.map(
      (b) => `- ${b.name} clinic: ${b.days}, ${b.times.join(" and ")} — ${url(`/clinics/${b.slug}`)}`,
    ),
    `- Phone / WhatsApp: ${clinic.phone.display}`,
    `- Online booking: ${clinic.bookingUrl}`,
    `- Online consultations: across India (digital prescriptions as per the Telemedicine Practice Guidelines 2020, medicine delivery across India) and for NRIs abroad`,
    `- Languages: ${clinic.languages.join(", ")}`,
    `- Google rating: ${rating}/5 (${reviews}+ reviews)`,
  ].join("\n");
}

function linkList(title: string, pages: ContentPage[]) {
  return [
    `## ${title}`,
    "",
    ...pages.map((p) => `- [${plainText(p.h1)}](${url(pathOf(p))}): ${p.description}`),
  ].join("\n");
}

export function llmsTxt() {
  return [
    intro(),
    "",
    linkList("Conditions treated", conditions),
    "",
    linkList("Treatments", treatments),
    "",
    linkList("Online consultation", onlinePages),
    "",
    linkList("Clinics", clinicPages),
    "",
    linkList("Guides", guides),
    "",
    "## About",
    "",
    `- [Dr. Jash Ajmera — profile](${url(clinic.doctor.profilePath)}): Qualifications, experience, approach and reviews.`,
    `- [Patient FAQs](${url("/faq")}): Appointments, online consultations, medicines, privacy and emergencies.`,
    `- [Home](${siteUrl}): Overview of services, clinics, reviews and booking.`,
    "",
    "## Optional",
    "",
    `- [Full knowledge base](${url("/llms-full.txt")}): The complete text of every page above.`,
    `- [Mental health articles](${url("/blogs")}): Blog articles by Dr. Jash Ajmera, published on Aarogya Minds.`,
    `- [Free mental health self-tests](${clinic.resources[0].href}): Confidential screening tools by Aarogya Minds.`,
    "",
  ].join("\n");
}

function blockText(block: Block): string {
  switch (block.type) {
    case "p":
      return plainText(block.text);
    case "h3":
      return `### ${plainText(block.text)}`;
    case "list":
    case "checklist":
      return block.items.map((item, i) => `${block.type === "list" && block.ordered ? `${i + 1}.` : "-"} ${plainText(item)}`).join("\n");
    case "cards":
      return block.items.map((item) => `- ${plainText(item.title)}: ${plainText(item.text)}`).join("\n");
    case "steps":
      return block.items.map((item, i) => `${i + 1}. ${plainText(item.title)} — ${plainText(item.text)}`).join("\n");
    case "callout":
      return `Note${block.title ? ` (${block.title})` : ""}: ${plainText(block.text)}`;
    case "table":
      return block.rows
        .map((row) => `- ${row.map((cell, i) => (block.head[i] ? `${block.head[i]}: ` : "") + plainText(cell)).join("; ")}`)
        .join("\n");
    case "mythfacts":
      return block.items.map((item) => `- Myth: ${plainText(item.myth)} Fact: ${plainText(item.fact)}`).join("\n");
  }
}

function pageText(page: ContentPage) {
  return [
    `# ${page.title}`,
    "",
    `URL: ${url(pathOf(page))}`,
    `Last reviewed: ${page.updated} by ${clinic.doctor.name}, ${clinic.doctor.credentials}`,
    "",
    plainText(page.summary),
    "",
    ...page.sections.flatMap((section) => [
      `## ${plainText(section.title)}`,
      "",
      ...section.blocks.flatMap((block) => [blockText(block), ""]),
    ]),
    ...(page.faqs.length
      ? ["## Frequently asked questions", "", ...page.faqs.flatMap((f) => [`Q: ${f.q}`, `A: ${plainText(f.a)}`, ""])]
      : []),
  ].join("\n");
}

export function llmsFullTxt() {
  return [
    intro(),
    "",
    "## Patient FAQs",
    "",
    ...faqGroups.flatMap((group) => [
      `### ${group.title}`,
      "",
      ...group.faqs.flatMap((f) => [`Q: ${f.q}`, `A: ${plainText(f.a)}`, ""]),
    ]),
    ...allPages.flatMap((page) => ["---", "", pageText(page), ""]),
  ].join("\n");
}
