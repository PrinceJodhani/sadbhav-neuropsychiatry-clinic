"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, BookOpen } from "lucide-react";

const BlogSection = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/latest-blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4"
          >
            <BookOpen className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Expert Insights</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Mental Health Insights by Dr. Jash Ajmera
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Explore professional articles on mental health, treatment approaches, and wellness strategies
            written by Dr. Jash Ajmera to help you on your journey to better mental health.
          </motion.p>
        </motion.div>

        {/* Latest Blog Posts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {loading ? (
            <div>Loading...</div>
          ) : (
            blogs.map((post, index) => (
              <motion.div
                key={post.id || index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors duration-300 z-10"></div>
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-white rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <Image
                    src={post.img_url}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <Link href={`https://aarogyaminds.com/blogs/${post.slug}`} className="inline-flex items-center text-primary font-medium hover:underline">
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg dark:hover:bg-primary/80"
          >
            View All Articles
            <svg
              className="ml-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 -translate-x-1/2 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 translate-x-1/2 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
    </section>
  );
};

export default BlogSection;
