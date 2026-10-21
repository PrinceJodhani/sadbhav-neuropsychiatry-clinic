import Link from "next/link";
import { BookOpen, SearchX } from "lucide-react";
import { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import SearchBar from "@/components/search-bar";
import { pageMetadata } from "@/lib/seo";
import { getPopularTags, searchBlogs } from "@/lib/blogs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMetadata({
  title: "Mental Health Articles & Blog",
  description:
    "Articles by psychiatrist Dr. Jash Ajmera on depression, anxiety, OCD, bipolar disorder, parenting, relationships and everyday mental wellbeing. Search by topic or tag.",
  path: "/blogs",
});

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const { q } = await searchParams;
  const query = (Array.isArray(q) ? q[0] : q ?? "").trim();
  const [{ posts, failed }, tags] = await Promise.all([searchBlogs(query), getPopularTags(6)]);

  return (
    <section className="relative isolate overflow-hidden pb-24 pt-32 sm:pt-36 lg:pt-44">
      <div
        aria-hidden="true"
        className="bg-aurora absolute inset-x-0 top-0 -z-10 h-[40rem] [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
      />

      <div className="container">
        <header className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">The Sadbhav journal</p>
          <h1 className="heading-display mt-5 text-[2.6rem] leading-[1.05] text-foreground sm:text-6xl">
            Mental health <em>articles</em>
          </h1>
          <p className="lead mx-auto mt-5 max-w-2xl">
            Expert articles by Dr. Jash Ajmera on depression, anxiety, OCD, relationships and
            everyday wellbeing.
          </p>
          <div className="mt-9">
            <SearchBar key={query} defaultValue={query} tags={tags} />
          </div>
        </header>

        {query && !failed && (
          <p className="mt-12 text-center text-sm text-muted-foreground" aria-live="polite">
            {posts.length} {posts.length === 1 ? "article" : "articles"} for{" "}
            <span className="font-semibold text-foreground">“{query}”</span>
            <span aria-hidden="true"> · </span>
            <Link href="/blogs" className="font-semibold text-primary hover:underline">
              Clear search
            </Link>
          </p>
        )}

        {posts.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="surface mx-auto mt-14 flex max-w-lg flex-col items-center px-6 py-14 text-center">
            <span className="icon-tile bg-secondary text-primary">
              {failed ? <BookOpen className="h-6 w-6" /> : <SearchX className="h-6 w-6" />}
            </span>
            <h2 className="mt-5 text-xl font-semibold text-foreground">
              {failed ? "Articles are unavailable right now" : "No articles found"}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {failed
                ? "Please try again in a little while."
                : "Try a different word, or browse one of the popular topics above."}
            </p>
            {query && (
              <Link href="/blogs" className="btn btn-secondary btn-sm mt-6">
                See all articles
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
