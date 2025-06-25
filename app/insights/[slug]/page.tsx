import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllInsights, getInsightBySlug, getRelatedInsights } from '@/lib/insights';
import InsightArticle from './InsightArticle';

interface InsightPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all articles
export async function generateStaticParams() {
  const insights = getAllInsights();
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const insight = getInsightBySlug(params.slug);
  
  if (!insight) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for could not be found.',
    };
  }

  return {
    title: `${insight.title} | The Insights Hub`,
    description: insight.excerpt,
    keywords: [...insight.tags, 'digital strategy', 'business insights', 'innovation'],
    authors: [{ name: insight.author }],
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      type: 'article',
      url: `https://ravana.agency/insights/${insight.slug}`,
      images: [
        {
          url: insight.coverImage,
          width: 1200,
          height: 630,
          alt: insight.title,
        },
      ],
      publishedTime: insight.date,
      authors: [insight.author],
      tags: insight.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: insight.title,
      description: insight.excerpt,
      images: [insight.coverImage],
      creator: '@ravana_agency',
    },
    alternates: {
      canonical: `/insights/${insight.slug}`,
    },
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const insight = getInsightBySlug(params.slug);
  
  if (!insight) {
    notFound();
  }

  // Serialize the MDX content
  const mdxSource = await serialize(insight.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });

  // Get related articles
  const relatedInsights = getRelatedInsights(insight.slug, 3);

  return (
    <InsightArticle 
      insight={insight}
      mdxSource={mdxSource}
      relatedInsights={relatedInsights}
    />
  );
}