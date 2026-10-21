import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blogs";
import { cn } from "@/lib/utils";
import { LotusIcon } from "./Common/BrandIcons";

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(iso),
  );

export default function BlogCard({ post, className }: { post: BlogPost; className?: string }) {
  return (
    <article
      data-reveal
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-4xl border border-border/70 bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {post.image ? (
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(min-width: 992px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <LotusIcon className="h-12 w-12 text-highlight/30" />
          </div>
        )}
        {post.tags[0] && (
          <span className="absolute left-4 top-4 max-w-[80%] truncate rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground shadow-soft backdrop-blur">
            #{post.tags[0]}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
          <span aria-hidden="true"> · </span>
          {post.author}
        </p>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
          {/* Stretched link: the whole card is clickable through this single link. */}
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 after:content-['']"
          >
            {post.title}
          </a>
        </h3>
        {post.summary && (
          <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-muted-foreground">
            {post.summary}
          </p>
        )}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
          Read article
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
