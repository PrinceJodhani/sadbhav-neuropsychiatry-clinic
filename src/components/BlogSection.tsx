import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestBlogs } from "@/lib/blogs";
import BlogCard from "./BlogCard";
import SectionHeading from "./Common/SectionHeading";

// Server-rendered so the articles are in the initial HTML (no loading spinner).
const BlogSection = async () => {
  const posts = await getLatestBlogs(3);
  if (!posts.length) return null;

  return (
    <section id="blogs" className="section">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="From the blog"
            title={
              <>
                Insights from <em>Dr. Jash</em>
              </>
            }
            description="Articles on mental health, treatment and everyday wellbeing — written by Dr. Jash Ajmera."
          />
          <Link href="/blogs" className="btn btn-secondary shrink-0 self-start md:self-auto">
            View all articles
            <ArrowRight />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {posts.map((post, i) => (
            <BlogCard key={post.id} post={post} className={i === 2 ? "md:hidden lg:flex" : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
