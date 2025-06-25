'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { InsightArticle } from '@/lib/insights';
import ArticleCard3D from './ArticleCard3D';
import { staggerContainer } from '@/lib/animations/variants';

interface ArticleGridProps {
  articles: InsightArticle[];
  isLoading?: boolean;
}

export default function ArticleGrid({ articles, isLoading = false }: ArticleGridProps) {
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const emptyStateVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <SkeletonCard key={index} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            variants={emptyStateVariants}
            initial="hidden"
            animate="visible"
            className="text-center py-16"
          >
            <div className="max-w-md mx-auto">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl mb-6"
              >
                🔍
              </motion.div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                No articles found
              </h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any articles matching your current filter. Try selecting a different category or browse all articles.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-medium transition-colors"
              >
                Reset Filters
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={articles.length} // Key ensures re-animation when articles change
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                layout
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.645, 0.045, 0.355, 1]
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  y: -60, 
                  scale: 0.9,
                  transition: { duration: 0.3 }
                }}
              >
                <ArticleCard3D article={article} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Section (for future pagination) */}
        {articles.length >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6">
              Showing {articles.length} insights. More coming soon.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              <div className="w-2 h-2 bg-accent rounded-full" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// Skeleton loading component
function SkeletonCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.645, 0.045, 0.355, 1]
        }
      }}
      className="bg-card rounded-xl border border-border/50 overflow-hidden"
    >
      {/* Image Skeleton */}
      <div className="h-48 bg-gradient-to-br from-muted/50 to-muted relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
          animate={{ x: [-100, 100] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      {/* Content Skeleton */}
      <div className="p-6 space-y-4">
        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="h-3 bg-muted rounded w-20" />
          <div className="h-3 bg-muted rounded w-16" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-3/4" />
          <div className="h-4 bg-muted rounded w-1/2" />
        </div>

        {/* Excerpt */}
        <div className="space-y-2">
          <div className="h-3 bg-muted/70 rounded w-full" />
          <div className="h-3 bg-muted/70 rounded w-5/6" />
          <div className="h-3 bg-muted/70 rounded w-4/6" />
        </div>

        {/* Tags */}
        <div className="flex gap-2">
          <div className="h-6 bg-muted/50 rounded w-16" />
          <div className="h-6 bg-muted/50 rounded w-20" />
          <div className="h-6 bg-muted/50 rounded w-14" />
        </div>

        {/* CTA */}
        <div className="h-4 bg-accent/20 rounded w-24" />
      </div>
    </motion.div>
  );
}