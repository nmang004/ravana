'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog-data';
import { ArrowUpRight, Calendar, Clock, Sparkles } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  // Define category colors to match the filters
  const categoryColors: Record<string, string> = {
    'Development': 'bg-blue-500/10 text-blue-500',
    'Marketing': 'bg-purple-500/10 text-purple-500',
    'Design': 'bg-pink-500/10 text-pink-500',
    'Business': 'bg-green-500/10 text-green-500',
    'Technology': 'bg-orange-500/10 text-orange-500',
    'AI & ML': 'bg-red-500/10 text-red-500',
  };

  const categoryClass = categoryColors[post.category] || 'bg-gray-500/10 text-gray-500';

  return (
    <motion.article
      className="group h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="h-full bg-card rounded-xl border border-border/50 overflow-hidden hover:border-accent/30 transition-all duration-300">
          {/* Image Section */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            
            {/* Featured Badge */}
            {post.featured && (
              <div className="absolute top-4 right-4">
                <motion.div
                  className="flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Sparkles className="w-3 h-3" />
                  Featured
                </motion.div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${categoryClass}`}>
                {post.category}
              </span>
            </div>

            <h3 className="text-xl font-heading font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
              {post.title}
            </h3>

            <p className="text-muted-foreground mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
              
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowUpRight className="w-4 h-4 text-accent" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}