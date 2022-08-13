import SinglePost from "@/components/blog/SinglePost";
import MainLayout from "@/components/layouts/MainLayout";
import { client } from "@/graphql/client";
import { AllPosts } from "@/graphql/queries";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React from "react";
import { BlogPostType } from "typings";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { blogPosts } = await client.request(AllPosts);

  return {
    props: {
      blogPosts,
    },
  };
};

function BlogPostsPage({ blogPosts }: { blogPosts: BlogPostType[] }) {
  return (
    <MainLayout>
      <Box className="p-5 mx-auto max-w-7xl">
        <Grid className="grid-cols-1 gap-8 md:grid-cols-2">
          {blogPosts?.map((post) => (
            <GridItem key={post.id}>
              <SinglePost post={post} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
}

export default BlogPostsPage;
