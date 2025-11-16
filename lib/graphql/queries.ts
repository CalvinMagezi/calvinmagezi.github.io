import { gql } from "graphql-request";

export const AllProjects = gql`
  {
    projects {
      id
      isPrivate
      linkToDemo
      linkToRepo
      technologies
      technologiesLogos {
        url
      }
      title
      description
      banner {
        url
      }
    }
  }
`;

export const AllPosts = gql`
  {
    blogPosts(orderBy: publishedOn_DESC) {
      id
      title
      slug
      category
      excerpt
      publishedOn
      banner {
        url
      }
    }
  }
`;

export const SinglePost = gql`
  query GetSinglePost($slug: String!) {
    blogPost(where: { slug: $slug }) {
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
  }
`;

export const AllPostSlugs = gql`
  {
    blogPosts {
      slug
    }
  }
`;