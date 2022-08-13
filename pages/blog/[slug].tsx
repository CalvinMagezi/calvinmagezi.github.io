import React from "react";
import { GetStaticPaths } from "next";
import { gql } from "graphql-request";
import { client } from "@/graphql/client";
import { BlogPostType } from "typings";
import { GetStaticProps } from "next";
import MainLayout from "@/components/layouts/MainLayout";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const query = gql`
    {
      blogPosts {
        id
        slug
      }
    }
  `;
  const { blogPosts } = await client.request(query);

  const paths = blogPosts.map((post: BlogPostType) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug;

  const query = gql`
  {
  blogPost(where: {slug: "${slug}"}) {
    id
    title
    slug
    publishedOn
    excerpt
    category
    banner {
      url
    }
    content {
      html
    }
  }
}`;

  const { blogPost } = await client.request(query);

  return {
    props: {
      blogPost,
    },
  };
};

function SinglePostPage({ blogPost }: { blogPost: BlogPostType }) {
  return (
    <MainLayout>
      <Box className="p-5 mx-auto max-w-7xl">
        <Grid className="grid-cols-1 gap-6 md:grid-cols-2">
          <GridItem>
            <Heading className="text-center">{blogPost?.title}</Heading>
            <hr className="my-3" />
            <Flex className="items-center justify-center w-full mb-5 space-x-4">
              <Text className="text-center text-red-600">
                {blogPost?.category}
              </Text>
              <Text>
                Posted: {new Date(blogPost?.publishedOn).toLocaleDateString()}
              </Text>
            </Flex>
            <Box className="relative w-full rounded-lg h-96 lg:sticky lg:top-10">
              <Image
                src={blogPost?.banner.url}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </Box>
          </GridItem>
          <GridItem>
            <div
              className="flex flex-col items-center justify-center prose-lg"
              dangerouslySetInnerHTML={{ __html: blogPost?.content.html }}
            ></div>
          </GridItem>
        </Grid>
      </Box>
    </MainLayout>
  );
}

export default SinglePostPage;
