export const dynamic = 'force-dynamic';
import { getBlogs } from "./actions";
import SearchBar from "@/components/search-bar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

/** Blog interface matching your DB columns. */
interface Blog {
  id: string;
  title: string;
  short_summary: string;
  full_html_blog: string | null;
  tags: string;
  img_url?: string;
  author: string;
  created_at: string;
  slug: string;
}

export const metadata: Metadata = {
  title: "Latest Mental Health Blogs | Aarogya Minds",
  description:
    "Browse our expert mental health blogs covering depression, anxiety, bipolar disorder, parenting, and more. Get free, confidential advice from leading professionals at Aarogya Minds.",
  keywords:
    "mental health blogs, depression, anxiety, bipolar disorder, parenting, mental wellness, confidential advice, expert mental health, Aarogya Minds",
  alternates: {
    canonical: "https://aarogyaminds.com/blogs",
  },
  openGraph: {
    title: "Latest Mental Health Blogs | Aarogya Minds",
    description:
      "Explore our comprehensive collection of mental health blogs, featuring expert insights on depression, anxiety, bipolar disorder, and more. Stay informed and empowered with Aarogya Minds.",
    url: "https://aarogyaminds.com/blogs",
    siteName: "Aarogya Minds",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aarogyaminds.com/am/icon-512x512.png", // Replace with your actual OG image URL
        width: 512,
        height: 512,
        alt: "Latest Mental Health Blogs | Aarogya Minds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Mental Health Blogs | Aarogya Minds",
    description:
      "Stay informed with our expert mental health blogs covering depression, anxiety, bipolar disorder, and more.",
    creator: "@AarogyaMinds", // Replace with your Twitter handle if available
    images: ["https://aarogyaminds.com/am/icon-512x512.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Helper function to truncate a blog summary to a certain # of words.
 */
function truncateSummary(text: string, wordLimit: number) {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}

/**
 * This is a SERVER COMPONENT that receives `searchParams`.
 * - If `q` is present, we do a partial search in `getBlogs()`.
 * - Else we list all.
 */
export default async function BlogsPage() {

  const blogs: Blog[] = await getBlogs();

  return (
    <div className="min-h-screen mt-28 bg-gradient-to-b from-white to-gray-100 text-gray-800 dark:from-[#1F1F1F] dark:to-[#1F1F1F] dark:text-[#EDEDED]">
      {/* ---------- HEADER / TITLE / SEARCH BAR ---------- */}
      <div className="py-6 px-4 md:px-8 lg:px-16 text-center">
        {/* {searchQuery ? (
          <h1 className="text-3xl font-bold mb-2">
            Showing results for{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {searchQuery}
            </span>
          </h1>
        ) : (
          <h1 className="text-3xl font-bold mb-2">All Blogs By Dr. Jash Ajmera</h1>
        )} */}
        <p className="text-gray-500 dark:text-[#AEAEAE] mb-6">
          Browse our latest mental health blogs. Use # to search hashtags
          (partial match), or type any words to match blog titles.
        </p>

        <SearchBar defaultValue={''} />
      </div>

      {/* ---------- MAIN CONTENT AREA ---------- */}
      <div className="px-4 md:px-8 lg:px-16 pb-8">
        {blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Card
                key={blog.id}
                className="rounded-lg overflow-hidden shadow-md flex flex-col 
                           hover:shadow-lg transition-shadow bg-white dark:bg-[#1F1F1F]"
              >
                {/* Blog Image */}
                <div className="h-60 w-full relative bg-transparent">
                  <Link href={`https://aarogyaminds.com/blogs/${blog.slug}`}>
                    {blog.img_url ? (
                      <Image
                        src={blog.img_url}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                        <span>No Image Available</span>
                      </div>
                    )}
                  </Link>
                </div>

                {/* Card Content */}
                <CardContent className="pt-2 px-3 flex flex-col flex-grow">
                  <CardHeader className="mb-4 px-0 pt-2 flex-grow">
                    <Link href={`https://aarogyaminds.com/blogs/${blog.slug}`}>
                      <CardTitle className="text-lg capitalize font-bold text-gray-800 dark:text-[#EDEDED] hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">
                        {blog.title}
                      </CardTitle>
                    </Link>
                    <CardDescription className="text-sm text-gray-600 dark:text-[#AEAEAE] mt-2 line-clamp-3">
                      {truncateSummary(blog.short_summary, 50)}
                    </CardDescription>
                  </CardHeader>
                  <div className="mt-auto flex items-center justify-between pb-2">
                    <p className="text-xs text-gray-500 dark:text-[#AEAEAE] italic">
                      By {blog.author}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-[#AEAEAE] italic">
                      {new Date(blog.created_at).toDateString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-12">
            <ArrowLeft className="w-10 h-10 text-gray-400 dark:text-gray-600 mb-2" />
            <h2 className="text-lg font-semibold text-gray-600 dark:text-[#EDEDED]">
              No blogs found.
            </h2>
            <p className="text-sm text-gray-500 dark:text-[#AEAEAE] mt-1">
              Try searching with a different keyword or a different hashtag.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}