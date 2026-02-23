import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogListClient from "../components/blog/BlogListClient";

export const metadata: Metadata = {
  title: "Blog | Calvin Magezi",
  description:
    "Thoughts, tutorials, and insights about technology, leadership, and the journey of building digital products.",
  openGraph: {
    title: "Blog | Calvin Magezi",
    description:
      "Thoughts, tutorials, and insights about technology, leadership, and the journey of building digital products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Calvin Magezi",
    description:
      "Thoughts, tutorials, and insights about technology, leadership, and the journey of building digital products.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogListClient posts={posts} />;
}
