'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { InsightArticle } from '@/lib/insights';
import HubLandingHero from '@/components/insights/HubLandingHero';
import CategoryFilters from '@/components/insights/CategoryFilters';
import ArticleGrid from '@/components/insights/ArticleGrid';
import PageTransition from '@/components/layout/PageTransition';
import StructuredData from '@/components/seo/StructuredData';

interface InsightsHubProps {
  allInsights: InsightArticle[];
  featuredInsights: InsightArticle[];
  categories: string[];
  heroArticle: InsightArticle;
}

export default function InsightsHub({ 
  allInsights, 
  featuredInsights, 
  categories, 
  heroArticle 
}: InsightsHubProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Filter articles based on active category
  const filteredArticles = useMemo(() => {
    if (!activeCategory) {
      return allInsights;
    }
    return allInsights.filter(article => article.category === activeCategory);
  }, [allInsights, activeCategory]);

  // Handle category change with loading simulation
  const handleCategoryChange = (category: string | null) => {
    setIsLoading(true);
    setActiveCategory(category);
    
    // Simulate loading for smooth animation
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <PageTransition>
      {/* SEO Structured Data */}
      <StructuredData 
        type="website" 
        data={{
          name: 'The Insights Hub - Ravana Solutions',
          description: 'Deep insights, proven strategies, and transformative ideas from the forefront of digital innovation.',
          url: 'https://ravana.agency/insights'
        }}
      />
      
      <div className="min-h-[100dvh] bg-background">
        {/* Hero Section */}
        <div className="relative z-10">
          <HubLandingHero featuredArticle={heroArticle} />
        </div>

        {/* Category Filters */}
        <div className="relative z-20 bg-background">
          <CategoryFilters 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Articles Grid */}
        <div className="relative z-20 bg-background">
          <ArticleGrid 
            articles={filteredArticles}
            isLoading={isLoading}
          />
        </div>

        {/* Stats Section */}
        <motion.section
          className="py-16 border-t border-border/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg bg-card/50 border border-border/30"
              >
                <div className="text-3xl font-bold text-accent mb-2">
                  {allInsights.length}+
                </div>
                <div className="text-muted-foreground">
                  Expert Insights
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg bg-card/50 border border-border/30"
              >
                <div className="text-3xl font-bold text-accent mb-2">
                  {categories.length}
                </div>
                <div className="text-muted-foreground">
                  Topic Categories
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg bg-card/50 border border-border/30"
              >
                <div className="text-3xl font-bold text-accent mb-2">
                  100K+
                </div>
                <div className="text-muted-foreground">
                  Words of Wisdom
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Newsletter CTA */}
        <motion.section
          className="py-16 bg-gradient-to-br from-accent/5 to-accent/10 border-t border-border/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Never Miss an Insight
            </motion.h2>
            
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get the latest strategies, case studies, and innovations delivered to your inbox. Join thousands of forward-thinking leaders.
            </motion.p>

            <motion.div
              className="max-w-md mx-auto flex gap-4"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors"
              >
                Subscribe
              </motion.button>
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground mt-4"
              whileInView={{ opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Weekly insights • No spam • Unsubscribe anytime
            </motion.p>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}