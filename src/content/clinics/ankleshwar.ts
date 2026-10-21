import { Building2 } from "lucide-react";
import type { ContentPage } from "../types";

const ankleshwar: ContentPage = {
  kind: "clinic",
  slug: "ankleshwar",
  branchId: "ankleshwar",
  name: "Ankleshwar",
  tagline: "Saturday clinic for Ankleshwar and Bharuch",
  icon: Building2,
  title: "Psychiatrist in Ankleshwar & Bharuch – Saturday Clinic",
  description:
    "Dr. Jash Ajmera consults in Ankleshwar every Saturday, 9 AM–12 PM, for patients from Ankleshwar, Bharuch, Jhagadia, Hansot and Valia. Depression, anxiety, addiction, sleep and more.",
  h1: "Psychiatrist in *Ankleshwar* & Bharuch",
  eyebrow: "Branch clinic · Ankleshwar",
  summary:
    "Dr. Jash Ajmera consults in Ankleshwar every Saturday from 9 AM to 12 PM, for patients from Ankleshwar, Bharuch, Jhagadia, Hansot, Valia and nearby towns. He served as the Government of Gujarat’s district nodal officer in Bharuch in 2020 and knows the region well. On other days, you can consult online or visit the main clinic in Vesu, Surat.",
  facts: [
    { label: "Timings", value: "Saturday · 9:00 AM–12:00 PM" },
    { label: "Location", value: "Ankleshwar, Bharuch district — call for directions" },
    { label: "Phone & WhatsApp", value: "[+91 78610 24557](tel:+917861024557)" },
    { label: "Other days", value: "Online, or the Vesu clinic in Surat" },
  ],
  sections: [
    {
      id: "services",
      title: "Consultations in Ankleshwar",
      blocks: [
        {
          type: "p",
          text: "The Saturday clinic offers psychiatric consultations and follow-ups for adults, teenagers and families, including [depression](/conditions/depression), [anxiety](/conditions/anxiety), [panic attacks](/conditions/panic-attacks), [OCD](/conditions/ocd), [bipolar disorder](/conditions/bipolar-disorder), [psychosis](/conditions/schizophrenia), [sleep problems](/conditions/insomnia), [alcohol and tobacco addiction](/treatments/de-addiction) and [sexual health concerns](/treatments/sexual-health).",
        },
      ],
    },
    {
      id: "local-needs",
      title: "Care that understands the region",
      blocks: [
        {
          type: "p",
          text: "Ankleshwar and Bharuch are home to some of Gujarat’s largest industrial estates. Rotating shifts, long hours and time away from family can disrupt sleep and increase stress, and alcohol or tobacco use often follows. Families in surrounding villages may also have to travel far for specialist care.",
        },
        {
          type: "checklist",
          items: [
            "[Shift-work sleep problems](/conditions/insomnia) and fatigue",
            "[Stress, burnout and anger](/conditions/stress-burnout)",
            "[Alcohol](/conditions/alcohol-addiction), tobacco and gutkha use",
            "[Depression](/conditions/depression) and [anxiety](/conditions/anxiety)",
          ],
        },
      ],
    },
    {
      id: "areas",
      title: "Areas served",
      blocks: [
        {
          type: "p",
          text: "Patients come from Ankleshwar, Ankleshwar GIDC, Bharuch, Jhagadia, Hansot, Valia, Kosamba and nearby villages. Between Saturday visits, follow-ups can be done [online](/online-psychiatrist-consultation).",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "When does Dr. Jash Ajmera consult in Ankleshwar?",
      a: "Every Saturday from 9:00 AM to 12:00 PM. Please book ahead by calling or messaging +91 78610 24557.",
    },
    {
      q: "Is there a psychiatrist for Bharuch patients?",
      a: "Yes. Patients from Bharuch can see Dr. Ajmera at the Ankleshwar clinic on Saturdays, at the Vesu clinic in Surat on weekdays, or online from home.",
    },
    {
      q: "How do I find the Ankleshwar clinic?",
      a: "Call or WhatsApp +91 78610 24557 when booking and the team will share the location and directions.",
    },
  ],
  related: [
    "/clinics/vesu-surat",
    "/clinics/katargam-surat",
    "/online-psychiatrist-gujarat",
    "/treatments/de-addiction",
    "/conditions/insomnia",
    "/faq",
  ],
  updated: "2026-10-21",
};

export default ankleshwar;
