"use client";

import { useState, useMemo } from "react";
import { ProjectType } from "../../../typings";
import ProjectHero from "./ProjectHero";
import ProjectGrid from "./ProjectGrid";

interface ProjectsClientProps {
  projects: ProjectType[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Extract unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => {
        techSet.add(tech);
      });
    });
    // Sort alphabetically and limit to most common
    const techArray = Array.from(techSet);

    // Count occurrences to show most used first
    const techCounts = techArray.map((tech) => ({
      name: tech,
      count: projects.filter((p) => p.technologies.includes(tech)).length,
    }));

    // Sort by count (descending) and take top 8
    return techCounts
      .sort((a, b) => b.count - a.count)
      .slice(0, 8)
      .map((t) => t.name);
  }, [projects]);

  const handleFilterChange = (tech: string | null) => {
    setActiveFilter(tech);
  };

  return (
    <div className="nexus-gradient-mesh min-h-screen">
      <ProjectHero
        technologies={allTechnologies}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <ProjectGrid projects={projects} activeFilter={activeFilter} />
    </div>
  );
}
