import type { MetadataRoute } from "next";
import { allPages, pathOf } from "@/content";
import { siteUrl } from "@/lib/clinic";

// Bump when the home page or hub pages change meaningfully.
const SITE_UPDATED = "2026-10-21";
const portrait = `${siteUrl}/images/sadbhav/dr-jash-ajmera-portrait.jpg`;

type Entry = MetadataRoute.Sitemap[number];

const entry = (
  path: string,
  lastModified: string,
  priority: number,
  changeFrequency: Entry["changeFrequency"] = "monthly",
  images?: string[],
): Entry => ({
  url: path === "/" ? siteUrl : `${siteUrl}${path}`,
  lastModified,
  changeFrequency,
  priority,
  ...(images ? { images } : {}),
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", SITE_UPDATED, 1, "weekly", [portrait]),
    entry("/dr-jash-ajmera", SITE_UPDATED, 0.9, "monthly", [portrait]),
    entry("/clinics", SITE_UPDATED, 0.9),
    entry("/conditions", SITE_UPDATED, 0.9),
    entry("/treatments", SITE_UPDATED, 0.8),
    entry("/guides", SITE_UPDATED, 0.7),
    entry("/faq", SITE_UPDATED, 0.7),
    entry("/blogs", SITE_UPDATED, 0.6, "weekly"),
    entry("/privacy-policy", SITE_UPDATED, 0.3, "yearly"),
    ...allPages.map((page) =>
      entry(pathOf(page), page.updated, page.kind === "guide" ? 0.7 : 0.8),
    ),
  ];
}
