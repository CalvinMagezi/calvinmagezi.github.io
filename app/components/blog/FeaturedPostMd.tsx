"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { BlogPost } from "@/lib/blog";
import { getCategoryInfo, formatDate } from "@/app/data/blog";

interface FeaturedPostMdProps {
  post: BlogPost;
}

export default function FeaturedPostMd({ post }: FeaturedPostMdProps) {
  const category = getCategoryInfo(post.tags[0] ?? "default");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="w-8 h-px bg-[var(--nexus-cyan)]" />
          <span className="font-jetbrains text-xs text-[var(--nexus-cyan)] uppercase tracking-widest">
            Featured Article
          </span>
        </motion.div>

        <Link href={`/blog/${post.slug}`} className="block group">
          <div className="blog-featured overflow-hidden">
            <div className="p-6 lg:p-10 flex flex-col justify-center">
              {/* Tag badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => {
                  const tagCategory = getCategoryInfo(tag);
                  return (
                    <span
                      key={tag}
                      className="inline-flex px-4 py-1.5 rounded-full font-jetbrains text-xs font-medium"
                      style={{
                        backgroundColor: `${tagCategory.color}15`,
                        color: tagCategory.color,
                        border: `1px solid ${tagCategory.color}30`,
                      }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              <h2 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--nexus-cream)] mb-4 group-hover:text-[var(--nexus-cyan)] transition-colors duration-300 leading-tight">
                {post.title}
              </h2>

              <p className="font-jakarta text-base text-[var(--nexus-cream)]/60 leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-6 mb-6">
                <span className="font-jakarta text-sm text-[var(--nexus-cream)]/40">
                  {formatDate(post.date)}
                </span>
                <span className="font-jakarta text-sm text-[var(--nexus-cream)]/40">
                  {post.readingTime}
                </span>
              </div>

              <motion.div
                className="inline-flex items-center gap-3 font-jakarta text-sm font-semibold"
                style={{ color: category.color }}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <span>Read Full Article</span>
                <FaArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </Link>
      </div>
    </motion.article>
  );
}
