import { Metadata } from 'next';
import { getAllBlogPosts, getFeaturedPosts, getAllBlogCategories } from '@/lib/blog-data';
import BlogHub from './BlogHub';

export const metadata: Metadata = {
  title: 'Blog - Digital Insights & Industry Trends | Ravana',
  description: 'Explore the latest insights on digital transformation, web development, marketing strategies, and technology trends. Stay informed with our expert articles.',
  keywords: ['digital marketing blog', 'web development tips', 'technology trends', 'business insights', 'startup advice', 'digital transformation'],
  openGraph: {
    title: 'Blog - Ravana Digital Agency',
    description: 'Explore the latest insights on digital transformation, web development, marketing strategies, and technology trends.',
    type: 'website',
    url: 'https://ravana.agency/blog',
    images: [
      {
        url: '/images/blog/blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Ravana Blog - Digital Insights & Industry Trends',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Ravana Digital Agency',
    description: 'Explore the latest insights on digital transformation, web development, marketing strategies, and technology trends.',
    images: ['/images/blog/blog-og.jpg'],
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  try {
    const allPosts = getAllBlogPosts();
    const featuredPosts = getFeaturedPosts();
    const categories = getAllBlogCategories();

    // Get the latest featured post for the hero
    const heroPost = featuredPosts[0] || allPosts[0];

    if (!heroPost) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">No blog posts found</h1>
            <p className="text-muted-foreground">Check back soon for new content!</p>
          </div>
        </div>
      );
    }

    return (
      <BlogHub 
        allPosts={allPosts}
        featuredPosts={featuredPosts}
        categories={categories}
        heroPost={heroPost}
      />
    );
  } catch (error) {
    console.error('Error loading blog page:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error loading blog</h1>
          <p className="text-muted-foreground">Please try again later.</p>
        </div>
      </div>
    );
  }
}