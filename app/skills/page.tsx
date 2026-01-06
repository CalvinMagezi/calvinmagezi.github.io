import SkillsClient from "../components/skills/SkillsClient";
import { fetchGraphQL } from "@/lib/graphql/client";
import { FeaturedProjects } from "@/lib/graphql/queries";
import { ProjectType } from "@/typings";

export const metadata = {
  title: "Skills",
  description: "Technical expertise and skills - 10+ years of experience in web development, mobile apps, and cloud infrastructure.",
};

export default async function SkillsPage() {
  try {
    const { projects } = await fetchGraphQL<{ projects: ProjectType[] }>(
      FeaturedProjects
    );
    return <SkillsClient projects={projects} />;
  } catch (error) {
    console.error('Error in SkillsPage:', error);
    return <SkillsClient projects={[]} />;
  }
}
