import type { Metadata } from "next";
import { clinic } from "./clinic";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Skip the " | Dr. Jash Ajmera" title suffix (for titles that already name the doctor). */
  absoluteTitle?: boolean;
  type?: "website" | "article" | "profile";
  modifiedTime?: string;
};

/** Canonical URL, Open Graph and Twitter tags for a page. The OG image comes from opengraph-image files. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  type = "website",
  modifiedTime,
}: PageMetaInput): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title,
      description,
      siteName: clinic.name,
      locale: "en_IN",
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@ajmerajash",
    },
  };
}
