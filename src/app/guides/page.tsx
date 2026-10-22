import Link from "next/link";
import { ArrowRight, BookOpen, MessageCircleQuestion } from "lucide-react";
import type { Metadata } from "next";
import HubPage from "@/components/content/HubPage";
import { guides } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Mental Health Guides by a Psychiatrist",
  description:
    "Psychiatrist vs psychologist, first visits, medicine myths, overthinking, helping a loved one and your rights: clear answers from Dr. Jash Ajmera.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <HubPage
      path="/guides"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
      ]}
      eyebrow="Guides"
      h1="Straight answers about *mental health*"
      intro={
        <p>
          Practical guides to the questions people most often ask before seeing a psychiatrist —
          written for patients and families, and reviewed by Dr. Jash Ajmera.
        </p>
      }
      description="Mental health guides for patients and families, reviewed by psychiatrist Dr. Jash Ajmera."
      pages={guides}
    >
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          href="/blogs"
          className="group flex items-center gap-4 rounded-4xl border border-border/80 bg-card p-6 transition hover:border-primary/30"
        >
          <span className="icon-tile bg-lotus-50 text-lotus-600 dark:bg-lotus-400/10 dark:text-lotus-300">
            <BookOpen className="h-6 w-6" />
          </span>
          <span className="flex-1">
            <span className="block font-semibold text-foreground">Mental health articles</span>
            <span className="text-sm text-muted-foreground">More reading on the blog</span>
          </span>
          <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-0.5" />
        </Link>
        <Link
          href="/faq"
          className="group flex items-center gap-4 rounded-4xl border border-border/80 bg-card p-6 transition hover:border-primary/30"
        >
          <span className="icon-tile bg-lotus-50 text-lotus-600 dark:bg-lotus-400/10 dark:text-lotus-300">
            <MessageCircleQuestion className="h-6 w-6" />
          </span>
          <span className="flex-1">
            <span className="block font-semibold text-foreground">Patient FAQs</span>
            <span className="text-sm text-muted-foreground">
              Appointments, online consults, medicines and privacy
            </span>
          </span>
          <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </HubPage>
  );
}
