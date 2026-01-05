import { client } from "@/lib/graphql/client";
import { AllPosts } from "@/lib/graphql/queries";
import { BlogPostType } from "../../typings";
import BlogClient from "../components/blog/BlogClient";

export const metadata = {
  title: "Blog",
  description: "Thoughts, tutorials, and insights about technology, leadership, and the journey of building digital products.",
};

async function getBlogPosts(): Promise<BlogPostType[]> {
  try {
    const { blogPosts } = await client.request(AllPosts);
    return blogPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function BlogPostsPage() {
  const blogPosts = await getBlogPosts();

  if (!blogPosts.length) {
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
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <h2 className="font-outfit text-2xl font-bold text-[var(--nexus-cream)] mb-4">
            No blog posts found
          </h2>
          <p className="font-jakarta text-[var(--nexus-cream)]/50">
            Check back later for new content!
          </p>
        </div>
      </div>
    );
  }

  return <BlogClient posts={blogPosts} />;
}
