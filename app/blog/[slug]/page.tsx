import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { getCategoryInfo, formatDate } from "@/app/data/blog";
import { FaArrowLeft } from "react-icons/fa";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Calvin Magezi`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Calvin Magezi"],
      tags: post.tags,
      ...(post.coverImage ? { images: [post.coverImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(post.coverImage ? { images: [post.coverImage] } : {}),
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const category = getCategoryInfo(post.tags[0] ?? "default");

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Calvin Magezi",
    },
    datePublished: post.date,
    keywords: post.tags.join(", "),
  };

  return (
    <div className="nexus-gradient-mesh min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

      {/* Hero */}
      <header className="relative z-10 pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {post.tags.map((tag) => {
              const tagCategory = getCategoryInfo(tag);
              return (
                <span
                  key={tag}
                  className="inline-flex px-4 py-1.5 rounded-full font-jetbrains text-xs font-medium"
                  style={{
                    backgroundColor: `${tagCategory.color}15`,
                    color: tagCategory.color,
                    border: `1px solid ${tagCategory.color}30`,
                  }}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--nexus-cream)] mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 font-jakarta text-sm text-[var(--nexus-cream)]/50">
            <span>{formatDate(post.date)}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--nexus-cream)]/30" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </header>

      {/* Article content */}
      <article className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <div
            className="blog-content prose prose-lg max-w-none font-jakarta leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
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
                Published {formatDate(post.date)}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
