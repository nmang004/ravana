'use client';

import { useState, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { InsightArticle } from '@/lib/insights';
import { floatingCard } from '@/lib/animations/variants';

interface ArticleCard3DProps {
  article: InsightArticle;
  index?: number;
}

export default function ArticleCard3D({ article, index = 0 }: ArticleCard3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / rect.height) * -20; // Reduced intensity
    const rotateY = (mouseX / rect.width) * 20;
    
    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={floatingCard}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <Link href={`/insights/${article.slug}`} className="block">
        <motion.article
          className="relative bg-card rounded-xl border border-border/50 overflow-hidden cursor-pointer transform-gpu"
          animate={{
            rotateX: transform.rotateX,
            rotateY: transform.rotateY,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 3D Depth Layers */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Image Section */}
          <div className="relative h-48 overflow-hidden">
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            
            {/* Category Badge */}
            <motion.div
              className="absolute top-4 left-4"
              animate={{
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-medium backdrop-blur-sm">
                {article.category}
              </span>
            </motion.div>

            {/* Reading Time */}
            <motion.div
              className="absolute top-4 right-4"
              animate={{
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-background/80 text-muted-foreground text-xs backdrop-blur-sm">
                {article.readingTime}
              </span>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Meta Info */}
            <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
              <span>{article.author}</span>
              <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>

            {/* Title */}
            <motion.h3
              className="text-xl font-heading font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300"
              animate={{
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {article.title}
            </motion.h3>

            {/* Excerpt */}
            <motion.p
              className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3"
              animate={{
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {article.excerpt}
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              animate={{
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {article.tags.slice(0, 3).map((tag, tagIndex) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Read More CTA */}
            <motion.div
              className="flex items-center text-accent text-sm font-medium"
              animate={{
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <span>Read More</span>
              <motion.span
                className="ml-1"
                animate={{
                  x: isHovered ? 4 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </motion.div>
          </div>

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -skew-x-12 pointer-events-none"
            initial={{ x: '-100%' }}
            animate={{
              x: isHovered ? '100%' : '-100%',
            }}
            transition={{ duration: 0.6 }}
          />
        </motion.article>
      </Link>
    </motion.div>
  );
}