'use client';

import { motion } from 'framer-motion';
import RevealOnScroll from '@/components/interactive/RevealOnScroll';

interface BlogContentRendererProps {
  content: string;
}

export default function BlogContentRenderer({ content }: BlogContentRendererProps) {
  // For now, we'll render the content as-is
  // In production, you'd want to use a markdown parser or MDX
  return (
    <RevealOnScroll>
      <motion.div
        className="prose prose-lg dark:prose-invert max-w-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-lg leading-relaxed text-muted-foreground">
          {content}
        </div>
      </motion.div>
    </RevealOnScroll>
  );
}