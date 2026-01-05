"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ProjectType } from "../../../typings";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: ProjectType[];
  activeFilter: string | null;
}

export default function ProjectGrid({ projects, activeFilter }: ProjectGridProps) {
  // Reverse projects to show newest first, then filter based on active filter
  const reversedProjects = [...projects].reverse();

  const filteredProjects = activeFilter
    ? reversedProjects.filter((project) =>
        project.technologies.some(
          (tech) => tech.toLowerCase() === activeFilter.toLowerCase()
        )
      )
    : reversedProjects;

  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Results count */}
        <motion.div
          key={activeFilter || "all"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-center"
        >
          <span className="font-jakarta text-sm text-[var(--nexus-cream)]/40">
            Showing{" "}
            <span className="text-[var(--nexus-cyan)]">{filteredProjects.length}</span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
            {activeFilter && (
              <>
                {" "}
                with{" "}
                <span className="font-jetbrains text-[var(--nexus-cyan)]">
                  {activeFilter}
                </span>
              </>
            )}
          </span>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  layout: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-[var(--nexus-cream)]/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-outfit text-xl font-semibold text-[var(--nexus-cream)] mb-2">
              No projects found
            </h3>
            <p className="font-jakarta text-[var(--nexus-cream)]/50">
              No projects match the selected technology filter.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
