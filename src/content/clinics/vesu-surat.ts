import { Building2 } from "lucide-react";
import type { ContentPage } from "../types";

const vesu: ContentPage = {
  kind: "clinic",
  slug: "vesu-surat",
  branchId: "vesu",
  name: "Vesu, Surat",
  tagline: "Main clinic · Monday–Saturday",
  icon: Building2,
  title: "Psychiatrist in Vesu, Surat – Sadbhav Clinic",
  description:
    "Dr. Jash Ajmera’s main clinic at Someshwar Square, near University Road, Vesu, Surat. Open Mon–Sat, 11 AM–1 PM & 4–8 PM. Book or get directions.",
  h1: "Psychiatrist in *Vesu*, Surat",
  eyebrow: "Main clinic · Vesu, Surat",
  summary:
    "Sadbhav Neuropsychiatry Clinic in Vesu is Dr. Jash Ajmera’s main clinic — at 208, 4th Floor, Someshwar Square, opposite Aagam Heritage Bungalows, near University Road, Surat 395007. It is open Monday to Saturday, 11 AM–1 PM and 4–8 PM, for psychiatric consultations, psychotherapy, de-addiction and sexual health care, in English, Hindi and Gujarati.",
  facts: [
    { label: "Address", value: "208, 4th Floor, Someshwar Square, Opp. Aagam Heritage Bungalows, Near University Road, Vesu, Surat 395007" },
    { label: "Timings", value: "Mon–Sat · 11:00 AM–1:00 PM & 4:00–8:00 PM" },
    { label: "Phone & WhatsApp", value: "[+91 78610 24557](tel:+917861024557)" },
    { label: "Languages", value: "English, Hindi, Gujarati" },
  ],
  sections: [
    {
      id: "services",
      title: "Services at the Vesu clinic",
      blocks: [
        {
          type: "checklist",
          items: [
            "Psychiatric consultation and diagnosis",
            "[Psychotherapy and counselling](/treatments/psychotherapy)",
            "[De-addiction treatment](/treatments/de-addiction)",
            "[Sexual health (sexologist) consultations](/treatments/sexual-health)",
            "[Child and adolescent mental health](/treatments/child-adolescent-psychiatry)",
            "Medication review and second opinions",
          ],
        },
        {
          type: "p",
          text: "Conditions treated include [depression](/conditions/depression), [anxiety](/conditions/anxiety), [OCD](/conditions/ocd), [bipolar disorder](/conditions/bipolar-disorder), [schizophrenia](/conditions/schizophrenia), [insomnia](/conditions/insomnia), [ADHD](/conditions/adhd) and more — see [all conditions](/conditions).",
        },
      ],
    },
    {
      id: "visit",
      title: "Your visit",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Book ahead",
              text: "Book online, or call or WhatsApp [+91 78610 24557](tel:+917861024557). Booking ahead keeps waiting time short.",
            },
            {
              title: "Bring your records",
              text: "Previous prescriptions, test reports and a list of current medicines. A family member is welcome to come with you.",
            },
            {
              title: "Consultation",
              text: "A private, unhurried conversation with Dr. Ajmera, followed by a clear explanation and a treatment plan.",
            },
            {
              title: "Follow-up",
              text: "Continue at Vesu, at the Sunday Katargam clinic, or online — whichever is easiest for you.",
            },
          ],
        },
        {
          type: "p",
          text: "First time seeing a psychiatrist? Read [what to expect at your first visit](/guides/first-psychiatrist-visit).",
        },
      ],
    },
    {
      id: "areas",
      title: "Convenient for patients across Surat",
      blocks: [
        {
          type: "p",
          text: "The Vesu clinic is near University Road in south-west Surat and is convenient for patients from Vesu, VIP Road, Althan, Bhatar, Piplod, City Light, Ghod Dod Road, Athwa, Parle Point, Dumas Road, Pal, Adajan, Udhna, Pandesara, Dindoli, Bhestan and Sachin.",
        },
        {
          type: "p",
          text: "Patients from north and east Surat may find the Sunday [Katargam clinic](/clinics/katargam-surat) easier, and patients from Bharuch district can visit the Saturday [Ankleshwar clinic](/clinics/ankleshwar). Patients from Navsari, Valsad, Vapi, Bardoli and beyond often combine a first visit in Vesu with [online follow-ups](/online-psychiatrist-consultation).",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What are the Vesu clinic timings?",
      a: "Monday to Saturday, 11:00 AM to 1:00 PM and 4:00 PM to 8:00 PM. The clinic is closed on Sundays, when Dr. Ajmera consults at the Katargam branch.",
    },
    {
      q: "Do I need an appointment?",
      a: "Booking ahead is recommended. You can book online, or call or WhatsApp +91 78610 24557.",
    },
    {
      q: "Where exactly is the clinic?",
      a: "208, 4th Floor, Someshwar Square, opposite Aagam Heritage Bungalows, near University Road, Vesu, Surat 395007. Use the Google Maps link on this page for directions.",
    },
    {
      q: "Can I consult online instead?",
      a: "Yes. Dr. Ajmera offers [online video consultations](/online-psychiatrist-consultation) for patients across India and abroad.",
    },
    {
      q: "In which languages can I consult?",
      a: "English, Hindi and Gujarati.",
    },
  ],
  related: [
    "/clinics/katargam-surat",
    "/clinics/ankleshwar",
    "/online-psychiatrist-consultation",
    "/dr-jash-ajmera",
    "/conditions",
    "/faq",
  ],
  updated: "2026-10-21",
};

export default vesu;
