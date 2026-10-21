// Shared route handlers for the registry-driven page types (/conditions, /treatments, /guides, /clinics).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageView from "@/components/content/ContentPageView";
import { allPages, findPage, pathOf, SECTIONS } from "@/content";
import type { ContentPage, PageKind } from "@/content/types";
import { renderOg } from "./og";
import { pageMetadata } from "./seo";
import { plainText } from "./text";

type Params = { params: Promise<{ slug: string }> };

export function contentMetadata(page: ContentPage): Metadata {
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: pathOf(page),
    type: "article",
    modifiedTime: page.updated,
  });
}

export function contentOg(page: ContentPage) {
  return renderOg({
    eyebrow: page.kind === "online" ? "Online consultation" : SECTIONS[page.kind].name,
    title: plainText(page.h1),
  });
}

export function contentRoute(
  kind: PageKind,
  render?: (page: ContentPage) => React.ReactNode,
) {
  const pages = allPages.filter((page) => page.kind === kind);
  return {
    generateStaticParams: () => pages.map((page) => ({ slug: page.slug })),

    generateMetadata: async ({ params }: Params): Promise<Metadata> => {
      const page = findPage(kind, (await params).slug);
      return page ? contentMetadata(page) : {};
    },

    Page: async function ContentRoutePage({ params }: Params) {
      const page = findPage(kind, (await params).slug);
      if (!page) notFound();
      return render ? render(page) : <ContentPageView page={page} />;
    },

    OgImage: async function ContentOgImage({ params }: Params) {
      const page = findPage(kind, (await params).slug);
      if (!page) notFound();
      return contentOg(page);
    },
  };
}
