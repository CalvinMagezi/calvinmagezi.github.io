"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectType } from "../../../typings";

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionThreshold = 120; // characters before truncating
  const shouldTruncate = project.description.length > descriptionThreshold;

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
      className="nexus-card group overflow-hidden flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={project.banner.url}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-700 ease-out group-hover:scale-110"
          alt={project.title}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--nexus-bg)] via-transparent to-transparent opacity-60" />

        {/* Hover Overlay with Actions */}
        <div className="absolute inset-0 bg-[var(--nexus-bg)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-4">
          <motion.a
            href={project.linkToDemo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-[var(--nexus-cyan)] text-[var(--nexus-bg)] font-jakarta font-semibold text-sm rounded-full transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            <FaExternalLinkAlt className="w-3.5 h-3.5" />
            <span>View Live</span>
          </motion.a>

          {!project.isPrivate && (
            <motion.a
              href={project.linkToRepo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-[var(--nexus-cream)] font-jakarta font-semibold text-sm rounded-full border border-white/20 transition-all hover:bg-white/20"
            >
              <FaGithub className="w-4 h-4" />
              <span>Source</span>
            </motion.a>
          )}
        </div>

        {/* Private Badge */}
        {project.isPrivate && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-[var(--nexus-purple)]/80 text-white text-xs font-jetbrains font-medium rounded-full backdrop-blur-sm">
            Private
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h3 className="font-outfit text-xl font-bold text-[var(--nexus-cream)] mb-3 group-hover:text-[var(--nexus-cyan)] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <div className="mb-5 flex-1">
          <AnimatePresence mode="wait">
            <motion.p
              key={isExpanded ? "expanded" : "collapsed"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="font-jakarta text-sm text-[var(--nexus-cream)]/60 leading-relaxed"
            >
              {isExpanded || !shouldTruncate
                ? project.description
                : `${project.description.slice(0, descriptionThreshold)}...`}
            </motion.p>
          </AnimatePresence>
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 font-jakarta text-xs text-[var(--nexus-cyan)] hover:text-[var(--nexus-cyan)]/80 transition-colors"
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 font-jetbrains text-xs text-[var(--nexus-cyan)]/80 bg-[var(--nexus-cyan)]/10 rounded-md border border-[var(--nexus-cyan)]/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 font-jetbrains text-xs text-[var(--nexus-cream)]/50">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Tech Logos */}
        {project.technologiesLogos.length > 0 && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
            {project.technologiesLogos.slice(0, 5).map((logo, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full overflow-hidden bg-white/5 ring-1 ring-white/10"
              >
                <Image
                  src={logo.url}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                  alt={`Technology ${i + 1}`}
                />
              </div>
            ))}
            {project.technologiesLogos.length > 5 && (
              <div className="w-8 h-8 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                <span className="font-jetbrains text-xs text-[var(--nexus-cream)]/50">
                  +{project.technologiesLogos.length - 5}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
