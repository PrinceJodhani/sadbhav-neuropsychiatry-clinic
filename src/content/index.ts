// Registry of every content page. Routes, menus, the sitemap and llms.txt are all generated from here.
import type { Crumb } from "@/lib/schema";
import type { ContentPage, PageKind } from "./types";

import adhd from "./conditions/adhd";
import alcoholAddiction from "./conditions/alcohol-addiction";
import anxiety from "./conditions/anxiety";
import bipolarDisorder from "./conditions/bipolar-disorder";
import depression from "./conditions/depression";
import insomnia from "./conditions/insomnia";
import ocd from "./conditions/ocd";
import panicAttacks from "./conditions/panic-attacks";
import personalityDisorders from "./conditions/personality-disorders";
import postpartumDepression from "./conditions/postpartum-depression";
import schizophrenia from "./conditions/schizophrenia";
import stressBurnout from "./conditions/stress-burnout";
import ankleshwar from "./clinics/ankleshwar";
import katargam from "./clinics/katargam-surat";
import vesu from "./clinics/vesu-surat";
import firstVisit from "./guides/first-psychiatrist-visit";
import helpingALovedOne from "./guides/helping-a-loved-one";
import overthinking from "./guides/how-to-stop-overthinking";
import rights from "./guides/mental-health-rights-india";
import psychiatristVsPsychologist from "./guides/psychiatrist-vs-psychologist";
import medicinesFacts from "./guides/psychiatric-medicines-facts";
import whenToSee from "./guides/when-to-see-a-psychiatrist";
import nriOnline from "./online/nri-online-psychiatrist";
import onlineGujarat from "./online/online-psychiatrist-gujarat";
import onlineConsultation from "./online/online-psychiatrist-consultation";
import childAdolescent from "./treatments/child-adolescent-psychiatry";
import deAddiction from "./treatments/de-addiction";
import psychotherapy from "./treatments/psychotherapy";
import sexualHealth from "./treatments/sexual-health";

// Order here is the order used in menus and hub pages.
export const conditions: ContentPage[] = [
  depression,
  anxiety,
  panicAttacks,
  ocd,
  bipolarDisorder,
  schizophrenia,
  alcoholAddiction,
  insomnia,
  stressBurnout,
  adhd,
  personalityDisorders,
  postpartumDepression,
];
export const treatments: ContentPage[] = [psychotherapy, deAddiction, sexualHealth, childAdolescent];
export const onlinePages: ContentPage[] = [onlineConsultation, onlineGujarat, nriOnline];
export const clinicPages: ContentPage[] = [vesu, katargam, ankleshwar];
export const guides: ContentPage[] = [
  psychiatristVsPsychologist,
  whenToSee,
  firstVisit,
  medicinesFacts,
  helpingALovedOne,
  overthinking,
  rights,
];

export const allPages: ContentPage[] = [
  ...conditions,
  ...treatments,
  ...onlinePages,
  ...clinicPages,
  ...guides,
];

export const SECTIONS: Record<PageKind, { name: string; path: string }> = {
  condition: { name: "Conditions", path: "/conditions" },
  treatment: { name: "Treatments", path: "/treatments" },
  online: { name: "Online consultation", path: "/online-psychiatrist-consultation" },
  clinic: { name: "Clinics", path: "/clinics" },
  guide: { name: "Guides", path: "/guides" },
};

export function pathOf(page: Pick<ContentPage, "kind" | "slug">) {
  return page.kind === "online" ? `/${page.slug}` : `${SECTIONS[page.kind].path}/${page.slug}`;
}

export function findPage(kind: PageKind, slug: string) {
  return allPages.find((page) => page.kind === kind && page.slug === slug);
}

export function crumbsFor(page: ContentPage): Crumb[] {
  const path = pathOf(page);
  const section = SECTIONS[page.kind];
  return [
    { name: "Home", path: "/" },
    ...(section.path === path ? [] : [section]),
    { name: page.name, path },
  ];
}

/** Pages that are not in the registry but can be linked as "related". */
const STATIC_LINKS: Record<string, { name: string; tagline: string }> = {
  "/dr-jash-ajmera": {
    name: "About Dr. Jash Ajmera",
    tagline: "Qualifications, experience and approach to care",
  },
  "/faq": { name: "Patient FAQs", tagline: "Appointments, online consults, medicines and privacy" },
  "/clinics": { name: "Clinics & timings", tagline: "Vesu and Katargam in Surat, and Ankleshwar" },
  "/conditions": { name: "All conditions", tagline: "Every condition we assess and treat" },
};

export function linkInfo(path: string) {
  const page = allPages.find((p) => pathOf(p) === path);
  if (page) return { path, name: page.name, tagline: page.tagline, icon: page.icon };
  const fixed = STATIC_LINKS[path];
  return fixed ? { path, ...fixed, icon: undefined } : undefined;
}
