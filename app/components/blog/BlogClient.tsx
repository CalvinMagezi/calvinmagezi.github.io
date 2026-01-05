"use client";

import { useState, useMemo } from "react";
import { BlogPostType } from "../../../typings";
import BlogHero from "./BlogHero";
import FeaturedPost from "./FeaturedPost";
import BlogGrid from "./BlogGrid";

interface BlogClientProps {
  posts: BlogPostType[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Get the featured post (first/most recent post)
  const featuredPost = posts[0];

  // Get remaining posts for the grid
  const gridPosts = posts.slice(1);

  // Extract unique categories from all posts
  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    posts.forEach((post) => {
      if (post.category) {
        categorySet.add(post.category.toLowerCase());
      }
    });
    return Array.from(categorySet);
  }, [posts]);


  // Check if featured post matches filter
  const showFeatured =
    !activeCategory ||
    featuredPost?.category.toLowerCase() === activeCategory.toLowerCase();

  return (
    <div className="nexus-gradient-mesh min-h-screen">
      <BlogHero
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        totalPosts={posts.length}
      />

      {/* Featured Post - only show if matches filter or no filter */}
      {featuredPost && showFeatured && <FeaturedPost post={featuredPost} />}

      {/* Blog Grid */}
      <BlogGrid posts={gridPosts} activeCategory={activeCategory} />
    </div>
  );
}
