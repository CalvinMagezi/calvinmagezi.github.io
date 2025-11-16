import SinglePost from "../components/blog/SinglePost";
import { client } from "@/lib/graphql/client";
import { AllPosts } from "@/lib/graphql/queries";
import { BlogPostType } from "../../typings";

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
      <div className="p-5 mx-auto max-w-7xl">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">No blog posts found</h2>
          <p className="text-gray-600 dark:text-gray-400">Check back later for new content!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Blog</h1>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Thoughts, tutorials, and insights about web development
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id}>
            <SinglePost post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}