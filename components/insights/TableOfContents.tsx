'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  // Extract headings from content
  useEffect(() => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const items: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2];
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-');
      
      items.push({ id, text, level });
    }

    setTocItems(items);
    
    // Only show TOC if there are 4+ headings
    setIsVisible(items.length >= 4);
  }, [content]);

  // Track active section
  useEffect(() => {
    if (tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Get the first visible heading
          const firstVisible = visibleEntries.reduce((prev, current) => {
            return prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current;
          });
          
          setActiveId(firstVisible.target.id);
        }
      },
      {
        rootMargin: '-20% 0% -35% 0%',
        threshold: 0,
      }
    );

    // Observe all headings
    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  if (!isVisible || tocItems.length === 0) {
    return null;
  }

  const tocVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={tocVariants}
      initial="hidden"
      animate="visible"
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 hidden xl:block"
    >
      <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-4 shadow-lg max-w-xs">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 mb-4 pb-2 border-b border-border/30"
        >
          <div className="w-1 h-4 bg-accent rounded-full" />
          <span className="text-sm font-medium text-foreground">Table of Contents</span>
        </motion.div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          <AnimatePresence>
            {tocItems.map((item, index) => {
              const isActive = activeId === item.id;
              const indentClass = {
                1: 'ml-0',
                2: 'ml-3',
                3: 'ml-6',
                4: 'ml-9',
                5: 'ml-12',
                6: 'ml-15'
              }[item.level] || 'ml-0';

              return (
                <motion.button
                  key={item.id}
                  variants={itemVariants}
                  layout
                  onClick={() => handleClick(item.id)}
                  className={`
                    block w-full text-left text-sm py-2 px-3 rounded-md transition-all duration-200 relative
                    ${indentClass}
                    ${isActive 
                      ? 'text-accent bg-accent/10 font-medium' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }
                  `}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}

                  {/* Text */}
                  <span className={isActive ? 'ml-3' : ''}>
                    {item.text}
                  </span>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-accent/5 rounded-md"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              );
            })}
          </AnimatePresence>
        </nav>

        {/* Progress Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-4 pt-2 border-t border-border/30"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex-1 h-1 bg-muted/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent origin-left"
                style={{
                  scaleX: tocItems.length > 0 ? (tocItems.findIndex(item => item.id === activeId) + 1) / tocItems.length : 0
                }}
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
              />
            </div>
            <span>
              {tocItems.findIndex(item => item.id === activeId) + 1} of {tocItems.length}
            </span>
          </div>
        </motion.div>

        {/* Collapse Button */}
        <motion.button
          variants={itemVariants}
          className="absolute -left-3 top-4 w-6 h-6 bg-background border border-border/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Hide Table of Contents"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}