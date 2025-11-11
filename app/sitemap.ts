import { MetadataRoute } from 'next';
import { getAllInsights } from '@/lib/insights';
import { getAllBlogPostsServer } from '@/lib/blog-server';
import { getAllPortfolioProjects } from '@/lib/data';
import { getAllCities, getAllServices, getCityServicePath, getCityPath } from '@/lib/location-data';

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

  // Get service area cities and services
  const cities = getAllCities();
  const services = getAllServices();

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

    // Service Areas parent page
    {
      url: `${baseUrl}/service-areas`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },

    // Service Areas city pages
    ...cities.map((city) => ({
      url: `${baseUrl}${getCityPath(city.slug)}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    // Service Areas city-service combination pages
    ...cities.flatMap((city) =>
      services.map((service) => ({
        url: `${baseUrl}${getCityServicePath(city.slug, service.slug)}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    ),
  ];
}