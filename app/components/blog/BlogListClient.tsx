"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "@/lib/blog";
import BlogHero from "./BlogHero";
import FeaturedPostMd from "./FeaturedPostMd";
import BlogGridMd from "./BlogGridMd";

interface BlogListClientProps {
  posts: BlogPost[];
}

export default function BlogListClient({ posts }: BlogListClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const featuredPost = posts[0];
  const gridPosts = posts.slice(1);

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((post) => post.tags.forEach((t) => set.add(t.toLowerCase())));
    return Array.from(set);
  }, [posts]);

  const showFeatured =
    !activeCategory ||
    featuredPost?.tags.some((t) => t.toLowerCase() === activeCategory);

  return (
    <div className="nexus-gradient-mesh min-h-screen">
      <BlogHero
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        totalPosts={posts.length}
      />
      {featuredPost && showFeatured && <FeaturedPostMd post={featuredPost} />}
      <BlogGridMd posts={gridPosts} activeCategory={activeCategory} />
    </div>
  );
}
