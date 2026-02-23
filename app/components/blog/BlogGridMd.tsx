"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BlogPost } from "@/lib/blog";
import BlogCardMd from "./BlogCardMd";

interface BlogGridMdProps {
  posts: BlogPost[];
  activeCategory: string | null;
}

export default function BlogGridMd({ posts, activeCategory }: BlogGridMdProps) {
  const filteredPosts = activeCategory
    ? posts.filter((post) =>
        post.tags.some((t) => t.toLowerCase() === activeCategory.toLowerCase())
      )
    : posts;

  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          key={activeCategory || "all"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-center"
        >
          <span className="font-jakarta text-sm text-[var(--nexus-cream)]/40">
            Showing{" "}
            <span className="text-[var(--nexus-cyan)]">{filteredPosts.length}</span>{" "}
            {filteredPosts.length === 1 ? "article" : "articles"}
            {activeCategory && (
              <>
                {" "}tagged{" "}
                <span className="font-jetbrains text-[var(--nexus-cyan)]">
                  {activeCategory}
                </span>
              </>
            )}
          </span>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  layout: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
              >
                <BlogCardMd post={post} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-[var(--nexus-cream)]/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="font-outfit text-xl font-semibold text-[var(--nexus-cream)] mb-2">
              No articles found
            </h3>
            <p className="font-jakarta text-[var(--nexus-cream)]/50">
              No articles match the selected tag.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
