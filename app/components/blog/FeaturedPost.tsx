"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { BlogPostType } from "../../../typings";
import { getCategoryInfo, formatDate } from "@/app/data/blog";

interface FeaturedPostProps {
  post: BlogPostType;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const category = getCategoryInfo(post.category);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Featured Label */}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden">
                <Image
                  src={post.banner.url}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                  alt={post.title}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--nexus-bg)]/80 lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--nexus-bg)] to-transparent lg:hidden" />
              </div>

              {/* Content Side */}
              <div className="p-6 lg:p-10 flex flex-col justify-center">
                {/* Category Badge */}
                <div
                  className="inline-flex w-fit px-4 py-1.5 rounded-full font-jetbrains text-xs font-medium mb-4"
                  style={{
                    backgroundColor: `${category.color}15`,
                    color: category.color,
                    border: `1px solid ${category.color}30`,
                  }}
                >
                  {category.name}
                </div>

                {/* Title */}
                <h2 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--nexus-cream)] mb-4 group-hover:text-[var(--nexus-cyan)] transition-colors duration-300 leading-tight">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="font-jakarta text-base text-[var(--nexus-cream)]/60 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-6 mb-6">
                  <span className="font-jakarta text-sm text-[var(--nexus-cream)]/40">
                    {formatDate(post.publishedOn)}
                  </span>
                </div>

                {/* CTA */}
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
          </div>
        </Link>
      </div>
    </motion.article>
  );
}
