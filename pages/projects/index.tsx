import React from "react";
import { GetStaticProps } from "next";
import { client } from "@/graphql/client";
import { AllProjects } from "@/graphql/queries";
import { ProjectType } from "typings";
import MainLayout from "@/components/layouts/MainLayout";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import SingleProject from "@/components/projects/SingleProject";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { projects } = await client.request(AllProjects);

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
};

function AllProjectsPage({ projects }: { projects: ProjectType[] }) {
  return (
    <MainLayout>
      <Box className="p-5 mx-auto max-w-7xl">
        <Grid className="grid-cols-1 gap-6 p-3 my-5 md:grid-cols-2 ">
          {projects?.map((project) => (
            <GridItem key={project.id}>
              <SingleProject project={project} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
}

export default AllProjectsPage;
