import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/lib/graphql/client";
import { SinglePost, AllPostSlugs } from "@/lib/graphql/queries";
import { BlogPostType } from "../../../typings";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

async function getBlogPost(slug: string): Promise<BlogPostType | null> {
  try {
    const { blogPost } = await client.request(SinglePost, { slug });
    return blogPost;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const { blogPosts } = await client.request(AllPostSlugs);
    return blogPosts.map((post: { slug: string }) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const blogPost = await getBlogPost(params.slug);
    
    if (!blogPost) {
      return {
        title: 'Post Not Found',
      };
    }

    return {
      title: blogPost.title,
      description: blogPost.excerpt,
      openGraph: {
        title: blogPost.title,
        description: blogPost.excerpt,
        images: [blogPost.banner.url],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post',
      description: 'Read the latest blog post by Calvin Magezi',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const blogPost = await getBlogPost(params.slug);

  if (!blogPost) {
    notFound();
  }

  return (
    <div className="p-5 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-center mb-4">{blogPost.title}</h1>
          <hr className="my-3" />
          <div className="flex items-center justify-center w-full mb-5 space-x-4">
            <span className="text-center text-red-600 font-medium">
              {blogPost.category}
            </span>
            <span>
              Posted: {new Date(blogPost.publishedOn).toLocaleDateString()}
            </span>
          </div>
          <div className="relative w-full rounded-lg h-96 lg:sticky lg:top-10">
            <Image
              src={blogPost.banner.url}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              alt={blogPost.title}
            />
          </div>
        </div>
        <div>
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content?.html || '' }}
          />
        </div>
      </div>
    </div>
  );
}