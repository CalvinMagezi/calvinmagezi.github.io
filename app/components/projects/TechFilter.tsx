"use client";

import { motion } from "framer-motion";

interface TechFilterProps {
  technologies: string[];
  activeFilter: string | null;
  onFilterChange: (tech: string | null) => void;
}

export default function TechFilter({
  technologies,
  activeFilter,
  onFilterChange,
}: TechFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="flex flex-wrap justify-center gap-3 mt-8"
    >
      {/* All filter button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onFilterChange(null)}
        className={`px-5 py-2 font-jakarta text-sm font-medium tracking-wide transition-all duration-300 ${
          activeFilter === null
            ? "nexus-pill-active text-[var(--nexus-cyan)]"
            : "nexus-pill text-[var(--nexus-cream)]/70 hover:text-[var(--nexus-cream)]"
        }`}
      >
        All
      </motion.button>

      {/* Technology filter buttons */}
      {technologies.map((tech, index) => (
        <motion.button
          key={tech}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(tech)}
          className={`px-5 py-2 font-jetbrains text-sm font-medium tracking-wide transition-all duration-300 ${
            activeFilter === tech
              ? "nexus-pill-active text-[var(--nexus-cyan)]"
              : "nexus-pill text-[var(--nexus-cream)]/70 hover:text-[var(--nexus-cream)]"
          }`}
        >
          {tech}
        </motion.button>
      ))}
    </motion.div>
  );
}
