'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { BlogPostType } from "../../../typings";

function SinglePost({ post }: { post: BlogPostType }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/blog/${post.slug}`);
      }}
      className="w-full p-4 transition cursor-pointer hover:scale-105 duration-105"
    >
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
        <div className="relative h-64">
          <Image 
            src={post.banner.url} 
            fill
            style={{ objectFit: 'cover' }}
            alt={post.title}
          />
        </div>
        <div className="p-6">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-red-600 title-font">
            {post.category}
          </h2>
          <h1 className="mb-3 text-lg font-medium text-center title-font">
            {post.title}
          </h1>
          <p className="mb-3 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center justify-between w-full">
            <a className="flex items-center space-x-3 text-indigo-500">
              <span>Read More</span>
              <FaArrowRight />
            </a>
            <span className="text-gray-600">
              {new Date(post.publishedOn).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;