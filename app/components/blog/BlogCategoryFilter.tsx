"use client";

import { motion } from "framer-motion";
import { blogCategories } from "@/app/data/blog";

interface BlogCategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export default function BlogCategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: BlogCategoryFilterProps) {
  // Get unique categories with their info
  const categoryList = ["all", ...categories];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="flex flex-wrap justify-center gap-3 mt-8"
    >
      {categoryList.map((cat, index) => {
        const isAll = cat === "all";
        const isActive = isAll ? activeCategory === null : activeCategory === cat;
        const info = isAll ? null : blogCategories[cat.toLowerCase()] || blogCategories.default;
        const color = info?.color || "var(--nexus-cyan)";

        return (
          <motion.button
            key={cat}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(isAll ? null : cat)}
            className="px-5 py-2 font-jakarta text-sm font-medium tracking-wide rounded-full transition-all duration-300"
            style={{
              background: isActive ? `${color}20` : "rgba(255, 255, 255, 0.05)",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: isActive ? color : "rgba(255, 255, 255, 0.1)",
              color: isActive ? color : "var(--nexus-cream)",
              boxShadow: isActive ? `0 0 20px ${color}30` : "none",
            }}
          >
            {isAll ? "All" : info?.name || cat}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
