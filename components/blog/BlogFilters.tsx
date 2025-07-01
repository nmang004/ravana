'use client';

import { motion } from 'framer-motion';
import { Hash } from 'lucide-react';

interface BlogFiltersProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export default function BlogFilters({ categories, activeCategory, onCategoryChange }: BlogFiltersProps) {
  // Define category colors for a more casual, colorful look
  const categoryColors: Record<string, string> = {
    'Development': 'from-blue-500/20 to-blue-500/10 text-blue-500 border-blue-500/30',
    'Marketing': 'from-purple-500/20 to-purple-500/10 text-purple-500 border-purple-500/30',
    'Design': 'from-pink-500/20 to-pink-500/10 text-pink-500 border-pink-500/30',
    'Business': 'from-green-500/20 to-green-500/10 text-green-500 border-green-500/30',
    'Technology': 'from-orange-500/20 to-orange-500/10 text-orange-500 border-orange-500/30',
    'AI & ML': 'from-red-500/20 to-red-500/10 text-red-500 border-red-500/30',
  };

  return (
    <section className="py-8 border-b border-border/50 sticky top-16 bg-background/95 backdrop-blur-sm z-10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <motion.h2
            className="text-lg font-semibold text-foreground flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Hash className="w-5 h-5 text-accent" />
            Browse by topic
          </motion.h2>
          
          {activeCategory && (
            <motion.button
              onClick={() => onCategoryChange(null)}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear filter
            </motion.button>
          )}
        </div>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {/* All Posts Button */}
          <motion.button
            onClick={() => onCategoryChange(null)}
            className={`
              px-5 py-2.5 rounded-full font-medium transition-all duration-300
              ${!activeCategory 
                ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/25' 
                : 'bg-muted/50 text-muted-foreground hover:bg-muted/80 border border-border/50'
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Posts
          </motion.button>

          {/* Category Buttons */}
          {categories.map((category, index) => {
            const isActive = activeCategory === category;
            const colorClass = categoryColors[category] || 'from-gray-500/20 to-gray-500/10 text-gray-500 border-gray-500/30';
            
            return (
              <motion.button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`
                  px-5 py-2.5 rounded-full font-medium transition-all duration-300 border
                  ${isActive 
                    ? `bg-gradient-to-r ${colorClass} shadow-lg` 
                    : 'bg-muted/30 text-muted-foreground hover:bg-muted/50 border-border/50'
                  }
                `}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}