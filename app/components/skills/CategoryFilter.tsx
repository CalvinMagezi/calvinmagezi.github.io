"use client";

import { motion } from "framer-motion";
import { SkillCategory, categoryColors } from "@/app/data/skills";

interface CategoryFilterProps {
  activeCategory: SkillCategory | null;
  onCategoryChange: (category: SkillCategory | null) => void;
}

const categories: (SkillCategory | null)[] = [
  null, // "All"
  "frontend",
  "backend",
  "mobile",
  "tools",
  "infrastructure",
];

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="flex flex-wrap justify-center gap-3 mt-8"
    >
      {categories.map((category, index) => {
        const isActive = activeCategory === category;
        const info = category ? categoryColors[category] : null;
        const color = info?.color || "var(--nexus-cyan)";

        return (
          <motion.button
            key={category || "all"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(category)}
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
            {category ? info?.name : "All"}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
