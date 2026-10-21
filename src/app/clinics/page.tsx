import type { Metadata } from "next";
import HubPage from "@/components/content/HubPage";
import FindUs from "@/components/FindUs";
import { clinicPages } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Clinic Locations & Timings – Vesu, Katargam & Ankleshwar",
  description:
    "Visit Dr. Jash Ajmera at Sadbhav Neuropsychiatry Clinic in Vesu (Mon–Sat) and Katargam (Sunday), Surat, and in Ankleshwar (Saturday) — or consult online. Address, timings and directions.",
  path: "/clinics",
});

export default function ClinicsPage() {
  return (
    <HubPage
      path="/clinics"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Clinics", path: "/clinics" },
      ]}
      eyebrow="Clinics & timings"
      h1="Find a clinic *near you*"
      intro={
        <p>
          Meet Dr. Jash Ajmera in person at the main clinic in Vesu, the Sunday clinic in Katargam
          or the Saturday clinic in Ankleshwar — or consult online from anywhere in India.
        </p>
      }
      description="Clinic locations and timings of Sadbhav Neuropsychiatry Clinic — Vesu and Katargam in Surat, and Ankleshwar."
      pages={clinicPages}
      after={<FindUs />}
    />
  );
}
