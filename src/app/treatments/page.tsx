import type { Metadata } from "next";
import HubPage from "@/components/content/HubPage";
import { onlinePages, treatments } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Treatments – Psychotherapy, De-addiction & Online Psychiatry in Surat",
  description:
    "Psychotherapy and counselling, de-addiction, sexual health, child and adolescent care, and online consultations across India and abroad with psychiatrist Dr. Jash Ajmera.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <HubPage
      path="/treatments"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Treatments", path: "/treatments" },
      ]}
      eyebrow="Treatments & services"
      h1="Treatment that fits *your life*"
      intro={
        <p>
          Evidence-based care that combines psychotherapy with safe, carefully chosen medicines
          when they help — in person in Surat and Ankleshwar, or online from anywhere.
        </p>
      }
      description="Treatments and services offered by psychiatrist Dr. Jash Ajmera at Sadbhav Neuropsychiatry Clinic, Surat, and online."
      pages={[...treatments, ...onlinePages]}
    />
  );
}
