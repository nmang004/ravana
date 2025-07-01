// Temporary blog data - replace with CMS or API integration
export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  coverImage: string;
  category: string;
  excerpt: string;
  featured: boolean;
  readingTime: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "spothopper-pricing-hidden-costs-restaurant-marketing",
    title: "The Real Cost of Spothopper for Your Restaurant in 2024: Hidden Fees & Pricing Analysis",
    author: "Ravana Team",
    date: "2024-01-20",
    coverImage: "/images/blog/restaurant-pricing-analysis.jpg",
    category: "Business",
    excerpt: "Discover the true cost of Spothopper's restaurant marketing platform. From opaque pricing ($299-$599/month) to hidden fees, annual contracts, and asset ownership issues - learn what to watch out for before signing.",
    featured: true,
    readingTime: "12 min read",
    tags: ["Restaurant Marketing", "Spothopper", "Pricing Analysis", "Digital Marketing", "Restaurant Technology", "Hidden Fees", "Marketing Costs"],
    content: `# The Real Cost of Spothopper for Your Restaurant

Running a restaurant isn't just about serving great food—it's about creating a memorable brand, streamlining operations, and connecting with your customers online...`
  },
  {
    slug: "ravana-vs-spothopper-restaurant-marketing-comparison",
    title: "Ravana vs. Spothopper 2024: Complete Restaurant Marketing Platform Comparison",
    author: "Ravana Team",
    date: "2024-01-22",
    coverImage: "/images/blog/restaurant-marketing-comparison.jpg",
    category: "Marketing",
    excerpt: "Compare Ravana and Spothopper for restaurant marketing. Discover key differences in pricing transparency, asset ownership, contract flexibility, and SEO impact. Make an informed decision for your restaurant's digital growth.",
    featured: true,
    readingTime: "15 min read",
    tags: ["Restaurant Marketing", "Ravana", "Spothopper", "Platform Comparison", "Digital Marketing", "SEO", "Marketing Strategy", "Restaurant Technology"],
    content: `# Ravana vs. Spothopper: Choosing the Right Partner for Your Restaurant's Marketing Success

Your choice of a marketing partner is one of the most impactful decisions you can make for your restaurant...`
  }
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find(post => post.slug === slug) || null;
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getAllBlogCategories(): string[] {
  const categories = blogPosts.map(post => post.category);
  return Array.from(new Set(categories));
}

export function getAllBlogTags(): string[] {
  const tags = blogPosts.flatMap(post => post.tags);
  return Array.from(new Set(tags));
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = blogPosts.find(post => post.slug === currentSlug);
  
  if (!currentPost) return [];

  const related = blogPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0;
      
      if (post.category === currentPost.category) {
        score += 3;
      }
      
      const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
      score += sharedTags.length;
      
      return { ...post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return related;
}