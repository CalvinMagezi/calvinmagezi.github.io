"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectType } from "../../../typings";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface CurrentProjectsSectionProps {
    projects: ProjectType[];
}

export default function CurrentProjectsSection({ projects }: CurrentProjectsSectionProps) {
    if (projects.length === 0) return null;

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-12">
                    <div className="relative">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                        <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full" />
                    </div>
                    <h2 className="font-outfit text-3xl md:text-4xl font-bold text-[var(--nexus-cream)]">
                        Active <span className="text-[var(--nexus-cyan)]">Developments</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--nexus-cyan)]/30 transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Image Section */}
                                <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
                                    <Image
                                        src={project.banner.url}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--nexus-bg)]/80 via-transparent md:bg-gradient-to-l to-transparent" />
                                </div>

                                {/* Info Section */}
                                <div className="flex-1 p-8 flex flex-col justify-center">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span key={tech} className="px-2 py-1 text-[10px] font-jetbrains uppercase tracking-wider text-[var(--nexus-cyan)] bg-[var(--nexus-cyan)]/10 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="font-outfit text-2xl font-bold text-[var(--nexus-cream)] mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="font-jakarta text-sm text-[var(--nexus-cream)]/60 mb-6 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <a
                                            href={project.linkToDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-jakarta font-semibold text-[var(--nexus-cyan)] hover:opacity-80 transition-opacity"
                                        >
                                            <FaExternalLinkAlt size={14} />
                                            Live Demo
                                        </a>
                                        {!project.isPrivate && (
                                            <a
                                                href={project.linkToRepo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-jakarta font-semibold text-[var(--nexus-cream)]/50 hover:text-[var(--nexus-cream)] transition-colors"
                                            >
                                                <FaGithub size={16} />
                                                Repository
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Status Badge */}
                            <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full backdrop-blur-md">
                                <span className="text-[10px] font-jetbrains font-bold text-red-400 uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                                    In Progress
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
