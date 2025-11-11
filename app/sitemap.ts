import { MetadataRoute } from 'next';
import { getAllInsights } from '@/lib/insights';
import { getAllBlogPostsServer } from '@/lib/blog-server';
import { getAllPortfolioProjects } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ravanasolutions.com';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/insights',
    '/portfolio',
    '/blog',
    '/contact',
  ];

  // Get portfolio projects from centralized data
  const portfolioProjects = getAllPortfolioProjects();

  // Service pages (if you plan to add individual service pages)
  const servicePages = [
    '/services/saas',
    '/services/web',
    '/services/marketing',
    '/services/seo',
  ];

  // Get all insights articles
  const allInsights = getAllInsights();

  // Get all blog posts
  const allBlogPosts = getAllBlogPostsServer();

  const currentDate = new Date();

  return [
    // Static pages
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: currentDate,
      changeFrequency: page === '' ? 'daily' as const : 'weekly' as const,
      priority: page === '' ? 1 : 0.8,
    })),
    
    // Portfolio case studies
    ...portfolioProjects.map((project) => ({
      url: `${baseUrl}/portfolio/${project.id}`,
      lastModified: new Date(project.completedDate),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    
    // Service pages
    ...servicePages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    
    // Insights articles
    ...allInsights.map((insight) => ({
      url: `${baseUrl}/insights/${insight.slug}`,
      lastModified: new Date(insight.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Blog posts
    ...allBlogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}