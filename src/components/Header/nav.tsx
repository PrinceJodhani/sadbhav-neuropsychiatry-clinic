// Server-side menu builder: the client Header receives plain data (and pre-rendered icons),
// so the page content registry never ends up in the browser bundle.
import { BookOpen, ClipboardCheck, MessageCircleQuestion, Sparkles } from "lucide-react";
import { conditions, guides, onlinePages, pathOf, treatments } from "@/content";
import type { ContentPage } from "@/content/types";
import { clinic } from "@/lib/clinic";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavLink[];
  /** "All …" link shown under a dropdown. */
  footer?: NavLink;
  wide?: boolean;
};

const toLink = (page: ContentPage): NavLink => ({
  label: page.name,
  href: pathOf(page),
  description: page.tagline,
  icon: <page.icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.75} />,
});

export function buildNav(): NavItem[] {
  return [
    {
      label: "Conditions",
      href: "/conditions",
      wide: true,
      children: conditions.map(toLink),
      footer: { label: "All conditions", href: "/conditions" },
    },
    {
      label: "Treatments",
      href: "/treatments",
      children: [...treatments, onlinePages[0]].map(toLink),
      footer: { label: "All treatments", href: "/treatments" },
    },
    { label: "Online", href: "/online-psychiatrist-consultation" },
    { label: "Clinics", href: "/clinics" },
    { label: "About", href: clinic.doctor.profilePath },
    {
      label: "Learn",
      href: "/guides",
      wide: true,
      children: [
        ...guides.map(toLink),
        {
          label: "Mental health articles",
          href: "/blogs",
          description: "Blog articles by Dr. Jash Ajmera",
          icon: <BookOpen className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.75} />,
        },
        {
          label: "Patient FAQs",
          href: "/faq",
          description: "Booking, online consults, medicines, privacy",
          icon: <MessageCircleQuestion className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.75} />,
        },
        {
          label: clinic.resources[0].title,
          href: clinic.resources[0].href,
          description: "Free, confidential self-assessments",
          icon: <ClipboardCheck className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.75} />,
          external: true,
        },
        {
          label: clinic.resources[2].title,
          href: clinic.resources[2].href,
          description: clinic.resources[2].description,
          icon: <Sparkles className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.75} />,
          external: true,
        },
      ],
      footer: { label: "All guides", href: "/guides" },
    },
  ];
}
