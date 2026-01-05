"use client";

import { motion } from "framer-motion";
import BlogCategoryFilter from "./BlogCategoryFilter";

interface BlogHeroProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  totalPosts: number;
}

export default function BlogHero({
  categories,
  activeCategory,
  onCategoryChange,
  totalPosts,
}: BlogHeroProps) {
  const titleText = "Blog";

  return (
    <section className="relative z-10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--nexus-cyan)] animate-pulse" />
          <span className="font-jetbrains text-xs text-[var(--nexus-cyan)]/80 uppercase tracking-widest">
            Thoughts & Insights
          </span>
          <span className="w-2 h-2 rounded-full bg-[var(--nexus-cyan)] animate-pulse" />
        </motion.div>

        {/* Animated Title */}
        <h1 className="font-outfit text-5xl sm:text-6xl md:text-7xl font-extrabold text-[var(--nexus-cream)] mb-6 overflow-hidden">
          {titleText.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-jakarta text-lg sm:text-xl text-[var(--nexus-cream)]/60 max-w-2xl mx-auto"
        >
          Exploring technology, leadership, and the journey of building digital products.
          <span className="block mt-2 text-sm text-[var(--nexus-cream)]/40">
            {totalPosts} articles and counting
          </span>
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--nexus-cyan)]/50 to-transparent mx-auto mt-8"
        />

        {/* Category Filter */}
        <BlogCategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>

      {/* Floating decorative dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -20, 0],
            }}
            transition={{
              delay: i * 0.2,
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 rounded-full bg-[var(--nexus-cyan)]"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
