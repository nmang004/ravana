'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/lib/blog-data';
import BlogHero from '@/components/blog/BlogHero';
import BlogFilters from '@/components/blog/BlogFilters';
import BlogGrid from '@/components/blog/BlogGrid';
import PageTransition from '@/components/layout/PageTransition';
import StructuredData from '@/components/seo/StructuredData';
import { BookOpen, Coffee, Users } from 'lucide-react';

interface BlogHubProps {
  allPosts: BlogPost[];
  featuredPosts: BlogPost[];
  categories: string[];
  heroPost: BlogPost;
}

export default function BlogHub({ 
  allPosts, 
  featuredPosts, 
  categories, 
  heroPost 
}: BlogHubProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Filter posts based on active category
  const filteredPosts = useMemo(() => {
    if (!activeCategory) {
      return allPosts;
    }
    return allPosts.filter(post => post.category === activeCategory);
  }, [allPosts, activeCategory]);

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
          name: 'Blog - Ravana Digital Agency',
          description: 'Explore the latest insights on digital transformation, web development, marketing strategies, and technology trends.',
          url: 'https://ravana.agency/blog'
        }}
      />
      
      <div className="min-h-screen bg-background overflow-x-hidden">
        {/* Hero Section - More casual and welcoming */}
        <div className="relative z-10">
          <BlogHero featuredPost={heroPost} />
        </div>

        {/* Welcome Message */}
        <motion.section
          className="py-12 bg-muted/30 border-y border-border/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Welcome to Our Digital Playground
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Where we share insights, stories, and practical tips from the trenches of digital innovation. 
                Grab a coffee, get comfortable, and let's explore what's possible together.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Category Filters */}
        <div className="relative z-20 bg-background">
          <BlogFilters 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Blog Posts Grid */}
        <div className="relative z-20 bg-background">
          <BlogGrid 
            posts={filteredPosts}
            isLoading={isLoading}
          />
        </div>

        {/* Fun Stats Section */}
        <motion.section
          className="py-16 border-t border-border/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
              >
                <div className="p-3 rounded-lg bg-accent/20">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {allPosts.length}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Articles & Guides
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20"
              >
                <div className="p-3 rounded-lg bg-blue-500/20">
                  <Coffee className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Cups of Coffee
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20"
              >
                <div className="p-3 rounded-lg bg-green-500/20">
                  <Users className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    10K+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Happy Readers
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Newsletter Section - More casual tone */}
        <motion.section
          className="py-20 bg-gradient-to-br from-muted/50 to-muted/30 border-t border-border/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
                whileInView={{ scale: [0.9, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Coffee className="w-4 h-4" />
                Join the conversation
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
                whileInView={{ y: [20, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Let's Stay Connected
              </motion.h2>
              
              <motion.p
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
                whileInView={{ y: [20, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Get our latest articles, tips, and behind-the-scenes stories delivered to your inbox. 
                No spam, just good stuff we think you'll love.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                whileInView={{ y: [20, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground placeholder:text-muted-foreground"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors"
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
                Join 10,000+ readers • Weekly updates • Unsubscribe anytime
              </motion.p>
            </div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}