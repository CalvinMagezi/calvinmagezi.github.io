"use client";

import { useState, useMemo } from "react";
import { ProjectType } from "../../../typings";
import ProjectHero from "./ProjectHero";
import ProjectGrid from "./ProjectGrid";
import CurrentProjectsSection from "./CurrentProjectsSection";
import FeaturedProjectsSection from "./FeaturedProjectsSection";

interface ProjectsClientProps {
  projects: ProjectType[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Categorize projects
  const { currentProjects, featuredProjects, otherProjects } = useMemo(() => {
    // Current projects regardless of rank
    const current = projects.filter((p) => p.current);

    // Featured projects that are not current
    const featured = projects.filter((p) => p.featured && !p.current);

    // All other projects, sorted by rank (1-10, 1 highest)
    const others = projects
      .filter((p) => !p.current && !p.featured)
      .sort((a, b) => (a.rank || 10) - (b.rank || 10));

    return {
      currentProjects: current,
      featuredProjects: featured,
      otherProjects: others
    };
  }, [projects]);

  // Filter projects based on technology if activeFilter is set
  const filteredCurrent = useMemo(() =>
    activeFilter
      ? currentProjects.filter(p => p.technologies.includes(activeFilter))
      : currentProjects
    , [currentProjects, activeFilter]);

  const filteredFeatured = useMemo(() =>
    activeFilter
      ? featuredProjects.filter(p => p.technologies.includes(activeFilter))
      : featuredProjects
    , [featuredProjects, activeFilter]);

  const filteredOthers = useMemo(() =>
    activeFilter
      ? otherProjects.filter(p => p.technologies.includes(activeFilter))
      : otherProjects
    , [otherProjects, activeFilter]);

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

      {/* Current Projects Section */}
      <CurrentProjectsSection projects={filteredCurrent} />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection projects={filteredFeatured} />

      {/* All Other Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="font-outfit text-3xl md:text-4xl font-bold text-[var(--nexus-cream)] mb-2">
          Discover <span className="text-[var(--nexus-cyan)]">More</span>
        </h2>
        <p className="font-jakarta text-[var(--nexus-cream)]/40 mb-12">
          A collection of diverse projects spanning multiple domains and technologies.
        </p>
        <ProjectGrid projects={filteredOthers} activeFilter={activeFilter} isNested />
      </div>
    </div>
  );
}
