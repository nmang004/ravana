'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function ReadingProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollY = useMotionValue(0);
  const progress = useTransform(scrollY, [0, 1], [0, 100]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      scrollY.set(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, [scrollY]);

  return (
    <>
      {/* Fixed Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-background/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 5 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-accent via-accent/80 to-accent origin-left"
          style={{
            scaleX: scrollProgress / 100,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        />
        
        {/* Glow Effect */}
        <motion.div
          className="absolute top-0 left-0 h-full w-2 bg-accent shadow-lg shadow-accent/50 blur-sm"
          style={{
            left: `${scrollProgress}%`,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        />
      </motion.div>

      {/* Floating Progress Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollProgress > 10 ? 1 : 0,
          scale: scrollProgress > 10 ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative w-16 h-16 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Background Circle */}
          <div className="absolute inset-0 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg" />
          
          {/* Progress Circle */}
          <svg
            className="absolute inset-0 w-full h-full transform -rotate-90"
            viewBox="0 0 60 60"
          >
            {/* Background circle */}
            <circle
              cx="30"
              cy="30"
              r="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-muted/30"
            />
            
            {/* Progress circle */}
            <motion.circle
              cx="30"
              cy="30"
              r="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-accent"
              style={{
                pathLength: scrollProgress / 100,
              }}
              initial={{ pathLength: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            />
          </svg>

          {/* Arrow Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-foreground"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18,15 12,9 6,15" />
            </svg>
          </motion.div>

          {/* Percentage Text */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground font-medium whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollProgress > 20 ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            {Math.round(scrollProgress)}%
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Reading Time Estimate */}
      <motion.div
        className="fixed bottom-8 left-8 z-40 hidden md:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: scrollProgress > 15 && scrollProgress < 95 ? 1 : 0,
          x: scrollProgress > 15 && scrollProgress < 95 ? 0 : -20
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>
              {scrollProgress < 50 ? 'Keep reading...' : 'Almost done!'}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Completion Celebration */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollProgress >= 95 ? 1 : 0,
          scale: scrollProgress >= 95 ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <motion.div
          className="bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-lg font-medium"
          initial={{ y: 20 }}
          animate={{ y: scrollProgress >= 95 ? 0 : 20 }}
          transition={{ delay: 0.2 }}
        >
          🎉 Article completed!
        </motion.div>
      </motion.div>
    </>
  );
}