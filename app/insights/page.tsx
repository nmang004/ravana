import { Metadata } from 'next';
import { getAllInsights, getFeaturedInsights, getAllCategories } from '@/lib/insights';
import InsightsHub from './InsightsHub';

export const metadata: Metadata = {
  title: 'The Insights Hub - Premium Digital Strategy & Innovation',
  description: 'Deep insights, proven strategies, and transformative ideas from the forefront of digital innovation. Your competitive edge starts here.',
  keywords: ['digital strategy', 'SaaS insights', 'growth strategies', 'AI trends', 'product development', 'business innovation'],
  openGraph: {
    title: 'The Insights Hub - Ravana Solutions',
    description: 'Deep insights, proven strategies, and transformative ideas from the forefront of digital innovation.',
    type: 'website',
    url: 'https://ravana.agency/insights',
    images: [
      {
        url: '/images/insights/insights-hub-og.jpg',
        width: 1200,
        height: 630,
        alt: 'The Insights Hub - Premium Digital Strategy & Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Insights Hub - Ravana Solutions',
    description: 'Deep insights, proven strategies, and transformative ideas from the forefront of digital innovation.',
    images: ['/images/insights/insights-hub-og.jpg'],
  },
  alternates: {
    canonical: '/insights',
  },
};

export default function InsightsPage() {
  try {
    const allInsights = getAllInsights();
    const featuredInsights = getFeaturedInsights();
    const categories = getAllCategories();

    // Get the top featured article for the hero
    const heroArticle = featuredInsights[0] || allInsights[0];

    if (!heroArticle) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">No articles found</h1>
            <p className="text-muted-foreground">Please check back later.</p>
          </div>
        </div>
      );
    }

    return (
      <InsightsHub 
        allInsights={allInsights}
        featuredInsights={featuredInsights}
        categories={categories}
        heroArticle={heroArticle}
      />
    );
  } catch (error) {
    console.error('Error loading insights page:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error loading insights</h1>
          <p className="text-muted-foreground">Please try again later.</p>
        </div>
      </div>
    );
  }
}