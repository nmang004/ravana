import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ravana.agency';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
  ];

  // Portfolio case studies
  const portfolioSlugs = [
    'nexus-saas',
    'luxe-ecommerce',
    'apex-marketing',
    'vertex-seo',
    'quantum-app',
    'stellar-rebrand',
  ];

  // Service pages (if you plan to add individual service pages)
  const servicePages = [
    '/services/saas',
    '/services/web',
    '/services/marketing',
    '/services/seo',
  ];

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
    ...portfolioSlugs.map((slug) => ({
      url: `${baseUrl}/portfolio/${slug}`,
      lastModified: currentDate,
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
  ];
}