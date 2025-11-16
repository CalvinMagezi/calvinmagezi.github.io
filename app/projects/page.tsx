import SingleProject from "../components/projects/SingleProject";
import { client } from "@/lib/graphql/client";
import { AllProjects } from "@/lib/graphql/queries";
import { ProjectType } from "../../typings";

async function getProjects(): Promise<ProjectType[]> {
  try {
    const { projects } = await client.request(AllProjects);
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export default async function AllProjectsPage() {
  const projects = await getProjects();

  if (!projects.length) {
    return (
      <div className="p-5 mx-auto max-w-7xl">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">No projects found</h2>
          <p className="text-gray-600 dark:text-gray-400">Check back later for new projects!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Projects</h1>
        <p className="text-center text-gray-600 dark:text-gray-400">
          A showcase of my recent work and side projects
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 p-3 my-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id}>
            <SingleProject project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}