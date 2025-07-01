'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost, getRelatedPosts } from '@/lib/blog-data';
import PageTransition from '@/components/layout/PageTransition';
import StructuredData from '@/components/seo/StructuredData';
import BlogContentRenderer from '@/components/blog/BlogContentRenderer';
import ReadingProgress from '@/components/insights/ReadingProgress';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from 'lucide-react';

interface BlogArticleProps {
  post: BlogPost;
  allPosts: BlogPost[];
}

export default function BlogArticle({ post }: BlogArticleProps) {
  const relatedPosts = getRelatedPosts(post.slug, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  return (
    <PageTransition>
      <ReadingProgress />
      
      {/* SEO Structured Data */}
      <StructuredData 
        type="article" 
        data={{
          headline: post.title,
          description: post.excerpt,
          author: post.author,
          datePublished: post.date,
          dateModified: post.date,
          image: post.coverImage,
          keywords: post.tags.join(', '),
        }}
      />

      <article className="min-h-screen bg-background">
        {/* Header */}
        <header className="relative">
          {/* Hero Image */}
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          {/* Article Header */}
          <div className="container mx-auto px-6 -mt-32 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back Link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              {/* Category */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {post.title}
              </motion.h1>

              {/* Excerpt */}
              <motion.p
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {post.excerpt}
              </motion.p>

              {/* Meta Info */}
              <motion.div
                className="flex flex-wrap items-center gap-6 text-muted-foreground pb-8 border-b border-border/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readingTime}</span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 hover:text-accent transition-colors ml-auto"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-6 py-12">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <BlogContentRenderer content={post.content} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border/50">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30 border-t border-border/50">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  className="text-3xl font-heading font-bold text-foreground mb-8 flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <BookOpen className="w-8 h-8 text-accent" />
                  More to Read
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.article
                      key={relatedPost.slug}
                      className="group"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <div className="bg-card rounded-xl border border-border/50 overflow-hidden hover:border-accent/30 transition-all duration-300">
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={relatedPost.coverImage}
                              alt={relatedPost.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                          <div className="p-6">
                            <span className="text-xs text-accent font-medium">
                              {relatedPost.category}
                            </span>
                            <h3 className="text-lg font-heading font-bold text-foreground mt-2 mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                              {relatedPost.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {relatedPost.excerpt}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </article>
    </PageTransition>
  );
}