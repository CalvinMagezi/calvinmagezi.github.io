"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { BlogPostType } from "../../../typings";
import { getCategoryInfo, formatDate, getRelativeTime } from "@/app/data/blog";

interface BlogCardProps {
  post: BlogPostType;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const category = getCategoryInfo(post.category);

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
          {/* Image Container */}
          <div className="relative w-full aspect-[16/10] overflow-hidden">
            <Image
              src={post.banner.url}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              className="transition-transform duration-700 ease-out group-hover:scale-110"
              alt={post.title}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--nexus-bg)] via-transparent to-transparent opacity-80" />

            {/* Category Badge */}
            <div
              className="absolute top-4 left-4 px-3 py-1 rounded-full font-jetbrains text-xs font-medium backdrop-blur-sm"
              style={{
                backgroundColor: `${category.color}20`,
                color: category.color,
                border: `1px solid ${category.color}40`,
              }}
            >
              {category.name}
            </div>

            {/* Date Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full font-jakarta text-xs text-[var(--nexus-cream)]/70 bg-black/40 backdrop-blur-sm">
              {getRelativeTime(post.publishedOn)}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5">
            {/* Title */}
            <h3 className="font-outfit text-lg font-bold text-[var(--nexus-cream)] mb-3 line-clamp-2 group-hover:text-[var(--nexus-cyan)] transition-colors duration-300">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="font-jakarta text-sm text-[var(--nexus-cream)]/50 leading-relaxed mb-4 flex-1 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              {/* Date */}
              <span className="font-jakarta text-xs text-[var(--nexus-cream)]/40">
                {formatDate(post.publishedOn)}
              </span>

              {/* Read More */}
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
