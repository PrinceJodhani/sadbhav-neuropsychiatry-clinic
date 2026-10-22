import { Building2 } from "lucide-react";
import type { ContentPage } from "../types";

const katargam: ContentPage = {
  kind: "clinic",
  slug: "katargam-surat",
  branchId: "katargam",
  name: "Katargam, Surat",
  tagline: "Sunday clinic for north and east Surat",
  icon: Building2,
  title: "Psychiatrist in Katargam, Surat – Sunday Clinic",
  description:
    "Dr. Jash Ajmera consults at the Katargam, Surat clinic every Sunday, 11 AM–12 PM. Convenient for Ved Road, Amroli, Varachha and Kapodra.",
  h1: "Psychiatrist in *Katargam*, Surat",
  eyebrow: "Branch clinic · Katargam, Surat",
  summary:
    "Dr. Jash Ajmera consults at the Katargam branch of Sadbhav Neuropsychiatry Clinic every Sunday from 11 AM to 12 PM — convenient for patients from north and east Surat, including Katargam, Ved Road, Singanpore, Amroli, Utran, Varachha and Kapodra. A Sunday clinic means working people and students do not need to take time off. Call +91 78610 24557 to book and get directions.",
  facts: [
    { label: "Timings", value: "Sunday · 11:00 AM–12:00 PM" },
    { label: "Location", value: "Katargam, Surat — call for directions" },
    { label: "Phone & WhatsApp", value: "[+91 78610 24557](tel:+917861024557)" },
    { label: "Weekdays", value: "Vesu clinic (Mon–Sat) or online" },
  ],
  sections: [
    {
      id: "services",
      title: "Consultations at the Katargam clinic",
      blocks: [
        {
          type: "p",
          text: "The Sunday clinic offers psychiatric consultations and follow-ups for the full range of conditions Dr. Ajmera treats, including [depression](/conditions/depression), [anxiety](/conditions/anxiety), [OCD](/conditions/ocd), [sleep problems](/conditions/insomnia), [alcohol and other addictions](/treatments/de-addiction) and [sexual health concerns](/treatments/sexual-health).",
        },
        {
          type: "p",
          text: "Longer psychotherapy sessions are usually scheduled at the [Vesu clinic](/clinics/vesu-surat) or [online](/online-psychiatrist-consultation).",
        },
      ],
    },
    {
      id: "why-sunday",
      title: "Why a Sunday clinic helps",
      blocks: [
        {
          type: "list",
          items: [
            "No need to take leave from work, a shop or a factory shift.",
            "Students can come without missing school, college or coaching.",
            "Family members who work during the week can come along.",
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
          text: "The Katargam clinic is convenient for patients from Katargam, Ved Road, Singanpore, Amroli, Utran, Kosad, Varachha, Mota Varachha, Kapodra and Sarthana. Patients from south and west Surat usually find the [Vesu clinic](/clinics/vesu-surat) closer.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "When is Dr. Jash Ajmera available in Katargam?",
      a: "Every Sunday from 11:00 AM to 12:00 PM. Please book ahead, as Sunday slots are limited.",
    },
    {
      q: "How do I find the Katargam clinic?",
      a: "Call or WhatsApp +91 78610 24557 to book — the team will share the exact location and directions.",
    },
    {
      q: "Can I see the doctor on weekdays instead?",
      a: "Yes. The Vesu clinic is open Monday to Saturday, and online consultations are also available.",
    },
  ],
  related: [
    "/clinics/vesu-surat",
    "/clinics/ankleshwar",
    "/online-psychiatrist-consultation",
    "/treatments/de-addiction",
    "/conditions",
    "/faq",
  ],
  updated: "2026-10-21",
};

export default katargam;
