"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { BlogPost } from "@/lib/blog";
import { getCategoryInfo, formatDate, getRelativeTime } from "@/app/data/blog";

interface BlogCardMdProps {
  post: BlogPost;
  index: number;
}

export default function BlogCardMd({ post, index }: BlogCardMdProps) {
  const [isHovered, setIsHovered] = useState(false);
  const category = getCategoryInfo(post.tags[0] ?? "default");

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="blog-card h-full flex flex-col group">
          {/* Header bar with tags and date */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-white/5">
            <div
              className="px-3 py-1 rounded-full font-jetbrains text-xs font-medium"
              style={{
                backgroundColor: `${category.color}20`,
                color: category.color,
                border: `1px solid ${category.color}40`,
              }}
            >
              {post.tags[0] ?? "article"}
            </div>
            <span className="font-jakarta text-xs text-[var(--nexus-cream)]/40">
              {getRelativeTime(post.date)}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5">
            <h3 className="font-outfit text-lg font-bold text-[var(--nexus-cream)] mb-3 line-clamp-2 group-hover:text-[var(--nexus-cyan)] transition-colors duration-300">
              {post.title}
            </h3>

            <p className="font-jakarta text-sm text-[var(--nexus-cream)]/50 leading-relaxed mb-4 flex-1 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex flex-col gap-0.5">
                <span className="font-jakarta text-xs text-[var(--nexus-cream)]/40">
                  {formatDate(post.date)}
                </span>
                <span className="font-jakarta text-xs text-[var(--nexus-cream)]/30">
                  {post.readingTime}
                </span>
              </div>

              <motion.span
                className="flex items-center gap-2 font-jakarta text-sm font-medium"
                style={{ color: category.color }}
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                Read
                <FaArrowRight className="w-3 h-3" />
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
