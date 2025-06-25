'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { InsightArticle as InsightType } from '@/lib/insights';
import PageTransition from '@/components/layout/PageTransition';
import ArticleRenderer from '@/components/insights/ArticleRenderer';
import ReadingProgress from '@/components/insights/ReadingProgress';
import TableOfContents from '@/components/insights/TableOfContents';
import ArticleCard3D from '@/components/insights/ArticleCard3D';
import RevealOnScroll from '@/components/interactive/RevealOnScroll';
import StructuredData from '@/components/seo/StructuredData';
import { fadeInUp, revealText, staggerContainer, staggerChild } from '@/lib/animations/variants';

interface InsightArticleProps {
  insight: InsightType;
  mdxSource: MDXRemoteSerializeResult;
  relatedInsights: InsightType[];
}

export default function InsightArticle({ 
  insight, 
  mdxSource, 
  relatedInsights 
}: InsightArticleProps) {
  return (
    <PageTransition>
      {/* SEO Structured Data */}
      <StructuredData 
        type="article" 
        data={{
          title: insight.title,
          excerpt: insight.excerpt,
          coverImage: insight.coverImage,
          author: insight.author,
          datePublished: insight.date,
          url: `https://ravana.agency/insights/${insight.slug}`,
          keywords: insight.tags.join(', '),
          category: insight.category,
          wordCount: insight.content.split(' ').length
        }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Reading Progress */}
        <ReadingProgress />
        
        {/* Table of Contents */}
        <TableOfContents content={insight.content} />

        {/* Article Header */}
        <motion.header
          className="relative pt-32 pb-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image with Parallax */}
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
          >
            <Image
              src={insight.coverImage}
              alt={insight.title}
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          </motion.div>

          <div className="relative z-10 container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center"
            >
              {/* Breadcrumb */}
              <motion.nav variants={staggerChild} className="mb-8">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Link href="/insights" className="hover:text-accent transition-colors">
                    Insights
                  </Link>
                  <span>/</span>
                  <span className="text-accent">{insight.category}</span>
                </div>
              </motion.nav>

              {/* Category Badge */}
              <motion.div variants={staggerChild} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                  {insight.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={revealText}
                className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight"
              >
                {insight.title}
              </motion.h1>

              {/* Excerpt */}
              <motion.p
                variants={staggerChild}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto"
              >
                {insight.excerpt}
              </motion.p>

              {/* Meta Information */}
              <motion.div
                variants={staggerChild}
                className="flex items-center justify-center gap-6 text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-accent text-sm font-bold">
                      {insight.author.charAt(0)}
                    </span>
                  </div>
                  <span>{insight.author}</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <span>{new Date(insight.date).toLocaleDateString()}</span>
                <div className="w-px h-4 bg-border" />
                <span>{insight.readingTime}</span>
              </motion.div>

              {/* Tags */}
              <motion.div
                variants={staggerChild}
                className="flex flex-wrap justify-center gap-2 mt-8"
              >
                {insight.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted/30 text-muted-foreground text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.header>

        {/* Article Content */}
        <main className="relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Article Body */}
              <RevealOnScroll variants={fadeInUp}>
                <article className="prose prose-lg prose-invert max-w-none">
                  <ArticleRenderer source={mdxSource} />
                </article>
              </RevealOnScroll>

              {/* Article Footer */}
              <RevealOnScroll variants={fadeInUp}>
                <footer className="mt-16 pt-8 border-t border-border/30">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Share this article:</span>
                      <div className="flex gap-2">
                        {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                          <motion.button
                            key={platform}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 bg-muted/20 hover:bg-accent/20 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
                          >
                            {platform.charAt(0)}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      href="/insights"
                      className="text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                    >
                      ← Back to Insights
                    </Link>
                  </div>
                </footer>
              </RevealOnScroll>
            </div>
          </div>
        </main>

        {/* Related Articles */}
        {relatedInsights.length > 0 && (
          <RevealOnScroll variants={fadeInUp}>
            <section className="py-16 mt-16 border-t border-border/20">
              <div className="container mx-auto px-6">
                <motion.h2
                  className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center"
                  variants={revealText}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Related Insights
                </motion.h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {relatedInsights.map((relatedInsight, index) => (
                    <motion.div
                      key={relatedInsight.slug}
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <ArticleCard3D article={relatedInsight} index={index} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </RevealOnScroll>
        )}

        {/* CTA Section */}
        <RevealOnScroll variants={fadeInUp}>
          <section className="py-16 bg-gradient-to-br from-accent/5 to-accent/10 border-t border-border/20">
            <div className="container mx-auto px-6 text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
                variants={revealText}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Ready to Transform Your Business?
              </motion.h2>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Let's turn these insights into action. Our team of experts is ready to help you implement these strategies for your business.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors"
                  >
                    Start Your Project
                  </motion.button>
                </Link>
                
                <Link href="/insights">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-border hover:border-accent text-foreground hover:text-accent rounded-lg font-medium transition-colors"
                  >
                    Explore More Insights
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </section>
        </RevealOnScroll>
      </div>
    </PageTransition>
  );
}