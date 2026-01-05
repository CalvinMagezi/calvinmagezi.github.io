import { fetchGraphQL } from "@/lib/graphql/client";
import { AllProjects } from "@/lib/graphql/queries";
import { ProjectType } from "../../typings";
import ProjectsClient from "../components/projects/ProjectsClient";

export const metadata = {
  title: "Projects",
  description: "A showcase of my recent work and side projects - featuring web applications, AI solutions, and innovative software built with modern technologies.",
};

export const revalidate = 300; // revalidate every 5 minutes

async function getProjects(): Promise<ProjectType[]> {
  try {
    const data = await fetchGraphQL<{ projects: ProjectType[] }>(AllProjects);
    return data.projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export default async function AllProjectsPage() {
  const projects = await getProjects();

  if (!projects.length) {
    return (
      <div className="nexus-gradient-mesh min-h-screen flex items-center justify-center">
        <div className="text-center py-12 relative z-10">
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
          <h2 className="font-outfit text-2xl font-bold text-[var(--nexus-cream)] mb-4">
            No projects found
          </h2>
          <p className="font-jakarta text-[var(--nexus-cream)]/50">
            Check back later for new projects!
          </p>
        </div>
      </div>
    );
  }

  return <ProjectsClient projects={projects} />;
}