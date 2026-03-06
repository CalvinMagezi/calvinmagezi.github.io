import { Metadata } from "next";
import SkillsClient from "../components/skills/SkillsClient";
import { fetchGraphQL } from "@/lib/graphql/client";
import { FeaturedProjects } from "@/lib/graphql/queries";
import { ProjectType } from "@/typings";

export const metadata: Metadata = {
  title: "Skills & Expertise | Calvin Magezi",
  description: "Calvin Magezi's technical skills: TypeScript, Next.js, React, Bun, AI agent systems, Convex, mobile development, and cloud infrastructure. 10+ years building for Africa and globally.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills & Expertise | Calvin Magezi",
    description: "TypeScript, Next.js, AI systems, mobile dev, cloud infrastructure — 10+ years of hands-on expertise.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://calvinmagezi.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Skills", item: "https://calvinmagezi.vercel.app/skills" },
  ],
};

async function loadProjects(): Promise<ProjectType[]> {
  try {
    const { projects } = await fetchGraphQL<{ projects: ProjectType[] }>(
      FeaturedProjects
    );
    return projects;
  } catch (error) {
    console.error('Error in SkillsPage:', error);
    return [];
  }
}

export default async function SkillsPage() {
  const projects = await loadProjects();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SkillsClient projects={projects} />
    </>
  );
}
