export interface CategoryInfo {
  name: string;
  color: string;
  glow: string;
}

// Blog category colors - can be extended as needed
export const blogCategories: Record<string, CategoryInfo> = {
  technology: {
    name: "Technology",
    color: "#00f0ff",
    glow: "rgba(0, 240, 255, 0.3)",
  },
  leadership: {
    name: "Leadership",
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.3)",
  },
  personal: {
    name: "Personal",
    color: "#22c55e",
    glow: "rgba(34, 197, 94, 0.3)",
  },
  tutorial: {
    name: "Tutorial",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.3)",
  },
  career: {
    name: "Career",
    color: "#f43f5e",
    glow: "rgba(244, 63, 94, 0.3)",
  },
  default: {
    name: "Article",
    color: "#00f0ff",
    glow: "rgba(0, 240, 255, 0.3)",
  },
};

export function getCategoryInfo(category: string): CategoryInfo {
  const normalizedCategory = category.toLowerCase().trim();
  return blogCategories[normalizedCategory] || blogCategories.default;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
}

export function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
