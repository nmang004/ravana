'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface CategoryFiltersProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export default function CategoryFilters({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryFiltersProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const allCategories = ['All', ...categories];

  const filterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.9 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const activeButtonVariants = {
    initial: { scale: 1 },
    animate: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section className="py-12 border-b border-border/20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Title */}
          <motion.h2
            variants={filterVariants}
            className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2 text-center"
          >
            Explore by Category
          </motion.h2>
          
          <motion.p
            variants={filterVariants}
            className="text-muted-foreground mb-8 text-center max-w-2xl"
          >
            Dive deep into the topics that matter most to your business. Each category offers curated insights to accelerate your growth.
          </motion.p>

          {/* Filter Pills */}
          <motion.div 
            variants={filterVariants}
            className="flex flex-wrap justify-center gap-3 max-w-4xl"
          >
            <AnimatePresence mode="wait">
              {allCategories.map((category, index) => {
                const isActive = activeCategory === (category === 'All' ? null : category);
                const isHovered = hoveredCategory === category;
                
                return (
                  <motion.button
                    key={category}
                    variants={activeButtonVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    whileTap="tap"
                    layout
                    onClick={() => onCategoryChange(category === 'All' ? null : category)}
                    onMouseEnter={() => setHoveredCategory(category)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    className={`
                      relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 overflow-hidden
                      ${isActive 
                        ? 'text-accent-foreground shadow-lg' 
                        : 'text-muted-foreground hover:text-foreground border border-border hover:border-accent/50'
                      }
                    `}
                  >
                    {/* Background */}
                    <motion.div
                      className="absolute inset-0 bg-accent"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: isActive ? 1 : 0, 
                        opacity: isActive ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
                    />

                    {/* Hover Background */}
                    <motion.div
                      className="absolute inset-0 bg-accent/10"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: isHovered && !isActive ? 1 : 0, 
                        opacity: isHovered && !isActive ? 1 : 0 
                      }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      animate={{
                        x: isActive ? '100%' : '-100%',
                      }}
                      transition={{ duration: 0.6, delay: isActive ? 0.1 : 0 }}
                    />

                    {/* Text */}
                    <span className="relative z-10">
                      {category}
                    </span>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-foreground rounded-full"
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 30 
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Active Category Info */}
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-6 text-center"
              >
                <p className="text-sm text-muted-foreground">
                  Showing insights in <span className="text-accent font-medium">{activeCategory}</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Decorative Elements */}
          <motion.div
            variants={filterVariants}
            className="mt-8 flex items-center gap-2"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="w-1 h-1 bg-accent rounded-full" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}