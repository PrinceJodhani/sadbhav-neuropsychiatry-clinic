import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import type { Metadata } from "next";
import HubPage, { PageCard } from "@/components/content/HubPage";
import { conditions, treatments } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Conditions We Treat – Psychiatrist in Surat",
  description:
    "Depression, anxiety, panic, OCD, bipolar disorder, schizophrenia, addiction, insomnia, ADHD and more: symptoms and treatment in Surat and online.",
  path: "/conditions",
});

export default function ConditionsPage() {
  return (
    <HubPage
      path="/conditions"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Conditions", path: "/conditions" },
      ]}
      eyebrow="Conditions we treat"
      h1="Mental health conditions we *treat*"
      intro={
        <p>
          Clear, doctor-reviewed guides to common mental health conditions — how they feel, what
          causes them and how they are treated. Dr. Jash Ajmera treats each of these in person in
          Surat and Ankleshwar, and online across India.
        </p>
      }
      description="Mental health conditions treated by psychiatrist Dr. Jash Ajmera at Sadbhav Neuropsychiatry Clinic, Surat, and online."
      pages={conditions}
    >
      <div className="mt-8 flex flex-col gap-4 rounded-4xl border border-dashed border-primary/30 bg-secondary/60 p-6 sm:flex-row sm:items-center sm:p-7">
        <span className="icon-tile bg-primary text-primary-foreground">
          <HelpCircle className="h-6 w-6" />
        </span>
        <div className="flex-1">
          <p className="font-semibold text-foreground">Not sure what you are experiencing?</p>
          <p className="mt-1 text-muted-foreground">
            You don’t need a diagnosis to book. A consultation will help make sense of it.
          </p>
        </div>
        <Link
          href="/guides/when-to-see-a-psychiatrist"
          className="btn btn-secondary btn-sm self-start sm:self-auto"
        >
          When to see a psychiatrist
          <ArrowRight />
        </Link>
      </div>

      <h2 className="heading-section mt-20 text-[2rem] sm:text-[2.4rem] lg:text-[2.6rem]">
        Specialised <em>care</em>
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {treatments.map((page) => (
          <li key={page.slug}>
            <PageCard page={page} />
          </li>
        ))}
      </ul>
    </HubPage>
  );
}
