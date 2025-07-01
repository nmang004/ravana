'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import RevealOnScroll from '@/components/interactive/RevealOnScroll';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

interface BlogContentRendererProps {
  content: string;
}

// Custom components for markdown elements
const components = {
  // Headings
  h1: ({ children }: ComponentPropsWithoutRef<'h1'>) => (
    <RevealOnScroll>
      <motion.h1 
        className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.h1>
    </RevealOnScroll>
  ),
  
  h2: ({ children }: ComponentPropsWithoutRef<'h2'>) => (
    <RevealOnScroll>
      <motion.h2 
        className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.h2>
    </RevealOnScroll>
  ),
  
  h3: ({ children }: ComponentPropsWithoutRef<'h3'>) => (
    <RevealOnScroll>
      <motion.h3 
        className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.h3>
    </RevealOnScroll>
  ),
  
  // Paragraphs
  p: ({ children }: ComponentPropsWithoutRef<'p'>) => (
    <motion.p 
      className="text-lg leading-relaxed text-muted-foreground mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.p>
  ),
  
  // Lists
  ul: ({ children }: ComponentPropsWithoutRef<'ul'>) => (
    <motion.ul 
      className="space-y-3 mb-6 ml-6 list-disc"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.ul>
  ),
  
  ol: ({ children }: ComponentPropsWithoutRef<'ol'>) => (
    <motion.ol 
      className="space-y-3 mb-6 ml-6 list-decimal"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.ol>
  ),
  
  li: ({ children }: ComponentPropsWithoutRef<'li'>) => (
    <li className="text-muted-foreground leading-relaxed pl-2">
      {children}
    </li>
  ),
  
  // Strong/Bold
  strong: ({ children }: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-bold text-foreground">
      {children}
    </strong>
  ),
  
  // Emphasis
  em: ({ children }: ComponentPropsWithoutRef<'em'>) => (
    <em className="italic text-accent">
      {children}
    </em>
  ),
  
  // Links
  a: ({ href, children }: ComponentPropsWithoutRef<'a'>) => {
    const isInternal = href?.startsWith('/') || href?.startsWith('#');
    
    if (isInternal && href) {
      return (
        <Link 
          href={href}
          className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
        >
          {children}
        </Link>
      );
    }
    
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
      >
        {children}
      </a>
    );
  },
  
  // Blockquotes
  blockquote: ({ children }: ComponentPropsWithoutRef<'blockquote'>) => (
    <motion.blockquote 
      className="border-l-4 border-accent bg-accent/5 pl-6 pr-4 py-4 my-8 italic"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.blockquote>
  ),
  
  // Code blocks
  code: ({ className, children }: ComponentPropsWithoutRef<'code'>) => {
    const isInline = !className;
    
    if (isInline) {
      return (
        <code className="bg-muted/30 text-accent px-2 py-1 rounded text-sm font-mono">
          {children}
        </code>
      );
    }
    
    return (
      <motion.code 
        className="block bg-muted/20 border border-border/50 rounded-lg p-4 my-6 overflow-x-auto text-sm font-mono"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.code>
    );
  },
  
  // Tables
  table: ({ children }: ComponentPropsWithoutRef<'table'>) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse border border-border/50 rounded-lg">
        {children}
      </table>
    </div>
  ),
  
  thead: ({ children }: ComponentPropsWithoutRef<'thead'>) => (
    <thead className="bg-muted/20">
      {children}
    </thead>
  ),
  
  th: ({ children }: ComponentPropsWithoutRef<'th'>) => (
    <th className="border border-border/30 px-4 py-3 text-left font-semibold text-foreground">
      {children}
    </th>
  ),
  
  td: ({ children }: ComponentPropsWithoutRef<'td'>) => (
    <td className="border border-border/30 px-4 py-3 text-muted-foreground">
      {children}
    </td>
  ),
  
  // Horizontal rule
  hr: () => (
    <motion.div 
      className="my-12 flex items-center justify-center"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </motion.div>
  ),
};

export default function BlogContentRenderer({ content }: BlogContentRendererProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}