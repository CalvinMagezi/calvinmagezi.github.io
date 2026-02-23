"use client";

import { useState } from "react";
import { FaTwitter, FaLink, FaCheck, FaShare } from "react-icons/fa";

interface ShareButtonProps {
  title: string;
  excerpt: string;
  slug: string;
}

export default function ShareButton({ title, excerpt, slug }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const url = `https://calvinmagezi.vercel.app/blog/${slug}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=CalvinMagezi`;

  async function handleNativeShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text: excerpt, url });
      } catch {
        // user cancelled — do nothing
      }
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-3">
      <span className="font-jakarta text-sm text-[var(--nexus-cream)]/50">Share:</span>

      {/* Native share (mobile) */}
      {typeof navigator !== "undefined" && "share" in navigator && (
        <button
          onClick={handleNativeShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-jakarta text-xs font-medium bg-white/5 border border-white/10 text-[var(--nexus-cream)]/70 hover:text-[var(--nexus-cyan)] hover:border-[var(--nexus-cyan)]/40 transition-colors"
          aria-label="Share post"
        >
          <FaShare className="w-3 h-3" />
          Share
        </button>
      )}

      {/* Twitter/X */}
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-jakarta text-xs font-medium bg-white/5 border border-white/10 text-[var(--nexus-cream)]/70 hover:text-[var(--nexus-cyan)] hover:border-[var(--nexus-cyan)]/40 transition-colors"
        aria-label="Share on Twitter"
      >
        <FaTwitter className="w-3 h-3" />
        Tweet
      </a>

      {/* Copy link */}
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-jakarta text-xs font-medium bg-white/5 border border-white/10 text-[var(--nexus-cream)]/70 hover:text-[var(--nexus-cyan)] hover:border-[var(--nexus-cyan)]/40 transition-colors"
        aria-label="Copy link"
      >
        {copied ? (
          <>
            <FaCheck className="w-3 h-3 text-green-400" />
            <span className="text-green-400">Copied!</span>
          </>
        ) : (
          <>
            <FaLink className="w-3 h-3" />
            Copy link
          </>
        )}
      </button>
    </div>
  );
}
