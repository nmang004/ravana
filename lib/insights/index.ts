import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface InsightArticle {
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

export interface InsightFrontmatter {
  title: string;
  slug: string;
  author: string;
  date: string;
  coverImage: string;
  category: string;
  excerpt: string;
  featured: boolean;
  readingTime: string;
  tags: string[];
}

const insightsDirectory = path.join(process.cwd(), 'content/insights');

export function getAllInsights(): InsightArticle[] {
  const fileNames = fs.readdirSync(insightsDirectory);
  const allInsights: InsightArticle[] = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(insightsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        ...(data as InsightFrontmatter),
        content,
      };
    });

  // Sort by date (newest first)
  return allInsights.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getInsightBySlug(slug: string): InsightArticle | null {
  try {
    const fullPath = path.join(insightsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      ...(data as InsightFrontmatter),
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getFeaturedInsights(): InsightArticle[] {
  const allInsights = getAllInsights();
  return allInsights.filter((insight) => insight.featured);
}

export function getInsightsByCategory(category: string): InsightArticle[] {
  const allInsights = getAllInsights();
  return allInsights.filter((insight) => insight.category === category);
}

export function getInsightsByTag(tag: string): InsightArticle[] {
  const allInsights = getAllInsights();
  return allInsights.filter((insight) => insight.tags.includes(tag));
}

export function getAllCategories(): string[] {
  const allInsights = getAllInsights();
  const categories = allInsights.map((insight) => insight.category);
  return Array.from(new Set(categories));
}

export function getAllTags(): string[] {
  const allInsights = getAllInsights();
  const tags = allInsights.flatMap((insight) => insight.tags);
  return Array.from(new Set(tags));
}

export function getRelatedInsights(currentSlug: string, limit: number = 3): InsightArticle[] {
  const allInsights = getAllInsights();
  const currentInsight = allInsights.find((insight) => insight.slug === currentSlug);
  
  if (!currentInsight) return [];

  // Find related insights by category and tags
  const related = allInsights
    .filter((insight) => insight.slug !== currentSlug)
    .map((insight) => {
      let score = 0;
      
      // Same category gets higher score
      if (insight.category === currentInsight.category) {
        score += 3;
      }
      
      // Shared tags get points
      const sharedTags = insight.tags.filter((tag) => currentInsight.tags.includes(tag));
      score += sharedTags.length;
      
      return { ...insight, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return related;
}