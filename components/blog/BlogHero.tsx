'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog-data';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

interface BlogHeroProps {
  featuredPost: BlogPost;
}

export default function BlogHero({ featuredPost }: BlogHeroProps) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-blue-500/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Fresh from the blog
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
              Ideas, Stories & Insights
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring the digital frontier, one story at a time
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.article
            className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-accent/30 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-lg text-muted-foreground mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readingTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                    <span>Read article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        </div>
      </div>
    </section>
  );
}