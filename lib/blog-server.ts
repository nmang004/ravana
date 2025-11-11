import { loadMDXPosts, loadMDXPostBySlug } from './mdx-loader';
import { blogPosts as inlinePosts, BlogPost } from './blog-data';

/**
 * Get all blog posts (inline + MDX) - SERVER SIDE ONLY
 * This function uses Node.js fs module and must only be called on the server
 */
export function getAllBlogPostsServer(): BlogPost[] {
  const mdxPosts = loadMDXPosts();
  const allPosts = [...inlinePosts, ...mdxPosts];

  return allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get a single blog post by slug - SERVER SIDE ONLY
 */
export function getBlogPostBySlugServer(slug: string): BlogPost | null {
  // First check inline posts
  const inlinePost = inlinePosts.find(post => post.slug === slug);
  if (inlinePost) return inlinePost;

  // Then check MDX posts
  return loadMDXPostBySlug(slug);
}

/**
 * Get featured posts - SERVER SIDE ONLY
 */
export function getFeaturedPostsServer(): BlogPost[] {
  const allPosts = getAllBlogPostsServer();
  return allPosts.filter(post => post.featured);
}

/**
 * Get posts by category - SERVER SIDE ONLY
 */
export function getPostsByCategoryServer(category: string): BlogPost[] {
  const allPosts = getAllBlogPostsServer();
  return allPosts.filter(post => post.category === category);
}

/**
 * Get posts by tag - SERVER SIDE ONLY
 */
export function getPostsByTagServer(tag: string): BlogPost[] {
  const allPosts = getAllBlogPostsServer();
  return allPosts.filter(post => post.tags.includes(tag));
}

/**
 * Get all unique categories - SERVER SIDE ONLY
 */
export function getAllBlogCategoriesServer(): string[] {
  const allPosts = getAllBlogPostsServer();
  const categories = allPosts.map(post => post.category);
  return Array.from(new Set(categories));
}

/**
 * Get all unique tags - SERVER SIDE ONLY
 */
export function getAllBlogTagsServer(): string[] {
  const allPosts = getAllBlogPostsServer();
  const tags = allPosts.flatMap(post => post.tags);
  return Array.from(new Set(tags));
}

/**
 * Get related posts - SERVER SIDE ONLY
 */
export function getRelatedPostsServer(currentSlug: string, limit: number = 3): BlogPost[] {
  const allPosts = getAllBlogPostsServer();
  const currentPost = allPosts.find(post => post.slug === currentSlug);

  if (!currentPost) return [];

  const related = allPosts
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
    .sort((a: any, b: any) => b.score - a.score)
    .slice(0, limit);

  return related;
}
