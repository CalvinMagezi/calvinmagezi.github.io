import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/lib/graphql/client";
import { SinglePost, AllPostSlugs } from "@/lib/graphql/queries";
import { BlogPostType } from "../../../typings";
import { getCategoryInfo, formatDate } from "@/app/data/blog";
import { FaArrowLeft } from "react-icons/fa";

export const revalidate = 300; // revalidate every 5 minutes

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlogPost(slug: string): Promise<BlogPostType | null> {
  try {
    const data = await fetchGraphQL<{ blogPost: BlogPostType | null }>(
      SinglePost,
      { slug }
    );
    return data.blogPost;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const data = await fetchGraphQL<{ blogPosts: { slug: string }[] }>(AllPostSlugs);
    return data.blogPosts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params;
    const blogPost = await getBlogPost(slug);

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
  const { slug } = await params;
  const blogPost = await getBlogPost(slug);

  if (!blogPost) {
    notFound();
  }

  const category = getCategoryInfo(blogPost.category);

  return (
    <div className="nexus-gradient-mesh min-h-screen">
      {/* Back button */}
      <div className="relative z-10 pt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-jakarta text-sm text-[var(--nexus-cream)]/60 hover:text-[var(--nexus-cyan)] transition-colors"
          >
            <FaArrowLeft className="w-3 h-3" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative z-10 pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Category Badge */}
          <div
            className="inline-flex px-4 py-1.5 rounded-full font-jetbrains text-xs font-medium mb-6"
            style={{
              backgroundColor: `${category.color}15`,
              color: category.color,
              border: `1px solid ${category.color}30`,
            }}
          >
            {category.name}
          </div>

          {/* Title */}
          <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--nexus-cream)] mb-6 leading-tight">
            {blogPost.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-4 font-jakarta text-sm text-[var(--nexus-cream)]/50">
            <span>{formatDate(blogPost.publishedOn)}</span>
          </div>
        </div>
      </header>

      {/* Banner Image */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={blogPost.banner.url}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-700"
              alt={blogPost.title}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--nexus-bg)]/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <div
            className="blog-content prose prose-lg max-w-none font-jakarta leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blogPost.content?.html || '' }}
          />

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-jakarta text-sm font-medium text-[var(--nexus-cyan)] hover:text-[var(--nexus-cyan)]/80 transition-colors"
              >
                <FaArrowLeft className="w-3 h-3" />
                Back to all articles
              </Link>
              <span className="font-jakarta text-xs text-[var(--nexus-cream)]/40">
                Published {formatDate(blogPost.publishedOn)}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
