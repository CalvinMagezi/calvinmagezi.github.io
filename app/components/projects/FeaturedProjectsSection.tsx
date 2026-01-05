"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectType } from "../../../typings";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface FeaturedProjectsSectionProps {
    projects: ProjectType[];
}

export default function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
    if (projects.length === 0) return null;

    return (
        <section className="relative py-24 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-outfit text-4xl md:text-5xl font-bold text-[var(--nexus-cream)] mb-4">
                        Featured <span className="text-[var(--nexus-cyan)]">Works</span>
                    </h2>
                    <p className="font-jakarta text-[var(--nexus-cream)]/50 max-w-2xl mx-auto">
                        A selection of my most impactful and refined projects, showcasing advanced engineering and design.
                    </p>
                </div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } gap-12 items-center`}
                        >
                            {/* Image Container */}
                            <div className="w-full lg:w-[60%] group relative">
                                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden glass-morphism border border-white/10">
                                    <Image
                                        src={project.banner.url}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[var(--nexus-bg)]/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>

                                {/* Floating Tech stack */}
                                <div className={`absolute -bottom-6 ${index % 2 === 0 ? "-right-6" : "-left-6"} hidden md:flex gap-3 bg-[var(--nexus-bg)]/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl`}>
                                    {project.technologiesLogos.slice(0, 4).map((logo, i) => (
                                        <div key={i} className="w-10 h-10 rounded-xl overflow-hidden bg-white/5 p-2 border border-white/5">
                                            <Image src={logo.url} alt="tech" width={40} height={40} className="object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="w-full lg:w-[40%] flex flex-col justify-center">
                                <span className="font-jetbrains text-[var(--nexus-cyan)] text-xs uppercase tracking-widest mb-4">
                                    Signature Project {index + 1}
                                </span>
                                <h3 className="font-outfit text-3xl md:text-5xl font-bold text-[var(--nexus-cream)] mb-6">
                                    {project.title}
                                </h3>
                                <p className="font-jakarta text-lg text-[var(--nexus-cream)]/60 mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-10">
                                    {project.technologies.slice(0, 5).map((tech) => (
                                        <span key={tech} className="px-3 py-1 text-xs font-jakarta text-[var(--nexus-cream)]/70 bg-white/5 rounded-full border border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6">
                                    <motion.a
                                        href={project.linkToDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5 }}
                                        className="group flex items-center gap-3 text-[var(--nexus-cyan)] font-jakarta font-bold tracking-wide"
                                    >
                                        EXPLORE LIVE
                                        <FaExternalLinkAlt size={14} className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
                                    </motion.a>

                                    {!project.isPrivate && (
                                        <motion.a
                                            href={project.linkToRepo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ x: 5 }}
                                            className="group flex items-center gap-3 text-[var(--nexus-cream)]/50 hover:text-[var(--nexus-cream)] font-jakarta font-bold tracking-wide transition-colors"
                                        >
                                            GITHUB
                                            <FaGithub size={18} />
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
