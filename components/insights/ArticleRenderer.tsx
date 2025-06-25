'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, ComponentProps } from 'react';
import RevealOnScroll from '@/components/interactive/RevealOnScroll';
import { fadeInUp, revealText, slideInFromBottom } from '@/lib/animations/variants';

interface ArticleRendererProps {
  source: MDXRemoteSerializeResult;
}

// Custom styled components for MDX
const components = {
  // Headings with character-by-character reveal
  h1: ({ children }: ComponentProps<'h1'>) => (
    <RevealOnScroll variants={revealText}>
      <motion.h1
        className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8 leading-tight"
      >
        {children}
      </motion.h1>
    </RevealOnScroll>
  ),
  
  h2: ({ children }: ComponentProps<'h2'>) => {
    const text = typeof children === 'string' ? children : '';
    const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
    
    return (
      <RevealOnScroll variants={revealText}>
        <motion.h2
          id={id}
          className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 mt-12 leading-tight scroll-mt-24"
        >
          {children}
        </motion.h2>
      </RevealOnScroll>
    );
  },
  
  h3: ({ children }: ComponentProps<'h3'>) => {
    const text = typeof children === 'string' ? children : '';
    const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
    
    return (
      <RevealOnScroll variants={revealText}>
        <motion.h3
          id={id}
          className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 mt-10 leading-tight scroll-mt-24"
        >
          {children}
        </motion.h3>
      </RevealOnScroll>
    );
  },
  
  h4: ({ children }: ComponentProps<'h4'>) => {
    const text = typeof children === 'string' ? children : '';
    const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
    
    return (
      <RevealOnScroll variants={revealText}>
        <motion.h4
          id={id}
          className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4 mt-8 scroll-mt-24"
        >
          {children}
        </motion.h4>
      </RevealOnScroll>
    );
  },

  // Paragraphs with fade-in animation
  p: ({ children }: ComponentProps<'p'>) => (
    <RevealOnScroll variants={fadeInUp}>
      <motion.p
        className="text-lg leading-relaxed text-muted-foreground mb-6"
      >
        {children}
      </motion.p>
    </RevealOnScroll>
  ),

  // Blockquotes with slide + parallax effect
  blockquote: ({ children }: ComponentProps<'blockquote'>) => (
    <RevealOnScroll variants={slideInFromBottom}>
      <motion.blockquote
        className="relative border-l-4 border-accent bg-accent/5 pl-6 pr-4 py-4 my-8 italic text-lg"
        whileInView={{ x: [20, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute -left-2 top-4 w-4 h-4 bg-accent rounded-full" />
        <div className="text-foreground/90">{children}</div>
      </motion.blockquote>
    </RevealOnScroll>
  ),

  // Images with clip-path wipe animation
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <RevealOnScroll>
      <motion.div
        className="relative my-8 overflow-hidden rounded-lg"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
      >
        <Image
          src={src || ''}
          alt={alt || ''}
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </motion.div>
    </RevealOnScroll>
  ),

  // Lists with staggered animation
  ul: ({ children }: ComponentProps<'ul'>) => (
    <RevealOnScroll>
      <motion.ul
        className="space-y-3 mb-6 ml-6"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {children}
      </motion.ul>
    </RevealOnScroll>
  ),

  ol: ({ children }: ComponentProps<'ol'>) => (
    <RevealOnScroll>
      <motion.ol
        className="space-y-3 mb-6 ml-6 list-decimal"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {children}
      </motion.ol>
    </RevealOnScroll>
  ),

  li: ({ children }: ComponentProps<'li'>) => (
    <motion.li
      className="text-muted-foreground leading-relaxed relative pl-2"
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
      }}
    >
      <span className="absolute -left-2 top-2 w-1 h-1 bg-accent rounded-full" />
      {children}
    </motion.li>
  ),

  // Links with hover effects
  a: ({ href, children }: ComponentProps<'a'>) => {
    if (!href) {
      return <span>{children}</span>;
    }
    
    const isExternal = href.startsWith('http');
    
    if (isExternal) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/80 underline underline-offset-2 decoration-accent/50 hover:decoration-accent transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          {children}
        </motion.a>
      );
    }
    
    return (
      <Link href={href} passHref>
        <motion.a
          className="text-accent hover:text-accent/80 underline underline-offset-2 decoration-accent/50 hover:decoration-accent transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          {children}
        </motion.a>
      </Link>
    );
  },

  // Code blocks with syntax highlighting effect
  pre: ({ children }: ComponentProps<'pre'>) => (
    <RevealOnScroll>
      <motion.pre
        className="bg-muted/20 border border-border/50 rounded-lg p-4 my-6 overflow-x-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.pre>
    </RevealOnScroll>
  ),

  code: ({ children }: ComponentProps<'code'>) => (
    <code
      className="bg-muted/30 text-accent px-2 py-1 rounded text-sm font-mono"
    >
      {children}
    </code>
  ),

  // Tables with slide animation
  table: ({ children }: ComponentProps<'table'>) => (
    <RevealOnScroll>
      <motion.div
        className="overflow-x-auto my-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <table
          className="w-full border-collapse border border-border/50 rounded-lg overflow-hidden"
        >
          {children}
        </table>
      </motion.div>
    </RevealOnScroll>
  ),

  th: ({ children }: ComponentProps<'th'>) => (
    <th
      className="bg-muted/20 border border-border/30 px-4 py-3 text-left font-semibold text-foreground"
    >
      {children}
    </th>
  ),

  td: ({ children }: ComponentProps<'td'>) => (
    <td
      className="border border-border/30 px-4 py-3 text-muted-foreground"
    >
      {children}
    </td>
  ),

  // Strong/Bold text with emphasis
  strong: ({ children }: ComponentProps<'strong'>) => (
    <strong
      className="font-bold text-foreground"
    >
      {children}
    </strong>
  ),

  // Emphasized text
  em: ({ children }: ComponentProps<'em'>) => (
    <em
      className="italic text-accent"
    >
      {children}
    </em>
  ),

  // Horizontal rule with animation
  hr: () => (
    <RevealOnScroll>
      <motion.div
        className="my-12 flex items-center justify-center"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <div className="w-2 h-2 bg-accent rounded-full" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        </div>
      </motion.div>
    </RevealOnScroll>
  ),
};

export default function ArticleRenderer({ source }: ArticleRendererProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote {...source} components={components} />
    </div>
  );
}