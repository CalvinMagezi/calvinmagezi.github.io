"use client";

import { useState } from "react";
import { skills, SkillCategory } from "@/app/data/skills";
import SkillsHero from "./SkillsHero";
import StatsSection from "./StatsSection";
import SkillsGrid from "./SkillsGrid";
import Portfolio from "../Portfolio";
import { ProjectType } from "@/typings";

interface SkillsClientProps {
  projects: ProjectType[];
}

export default function SkillsClient({ projects }: SkillsClientProps) {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | null>(null);

  return (
    <div className="nexus-gradient-mesh min-h-screen">
      <SkillsHero
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <StatsSection />
      <SkillsGrid skills={skills} activeCategory={activeCategory} />
      <Portfolio projects={projects} />
    </div>
  );
}
