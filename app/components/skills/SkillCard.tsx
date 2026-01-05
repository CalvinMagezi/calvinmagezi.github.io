"use client";

import { motion } from "framer-motion";
import { Skill, categoryColors } from "@/app/data/skills";
import RadialProgress from "./RadialProgress";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const category = categoryColors[skill.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={`skill-card skill-card-${skill.category} p-5 flex flex-col items-center text-center group cursor-default`}
    >
      {/* Radial Progress */}
      <div className="mb-4">
        <RadialProgress
          value={skill.proficiency}
          color={category.color}
          size={80}
          strokeWidth={6}
        />
      </div>

      {/* Skill Name */}
      <h3
        className="font-outfit text-base font-semibold text-[var(--nexus-cream)] mb-1 transition-colors duration-300 group-hover:text-white"
        style={{
          ["--hover-color" as string]: category.color,
        }}
      >
        {skill.name}
      </h3>

      {/* Category Badge */}
      <span
        className="font-jetbrains text-xs px-2 py-0.5 rounded-full mb-2"
        style={{
          backgroundColor: `${category.color}15`,
          color: category.color,
        }}
      >
        {category.name}
      </span>

      {/* Years Experience - shown on hover */}
      {skill.years && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: "auto" }}
          viewport={{ once: true }}
          className="font-jakarta text-xs text-[var(--nexus-cream)]/50 mt-1"
        >
          {skill.years}+ years
        </motion.p>
      )}

      {/* Description - shown on hover */}
      {skill.description && (
        <p className="font-jakarta text-xs text-[var(--nexus-cream)]/40 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {skill.description}
        </p>
      )}
    </motion.div>
  );
}
