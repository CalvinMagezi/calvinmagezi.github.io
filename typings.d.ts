export interface ProjectType {
  id: string;
  isPrivate: boolean;
  linkToDemo: string;
  linkToRepo: string;
  technologies: string[];
  technologiesLogos: {
    url: string;
  }[];
  title: string;
  description: string;
  banner: {
    url: string;
  };
}

export interface BlogPostType {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  publishedOn: string;
  banner: {
    url: string;
  };
  content: {
    html: string;
  };
}
