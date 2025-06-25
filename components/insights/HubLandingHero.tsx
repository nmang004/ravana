'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { InsightArticle } from '@/lib/insights';
import { fadeInUp, revealText } from '@/lib/animations/variants';

interface HubLandingHeroProps {
  featuredArticle: InsightArticle;
}

export default function HubLandingHero({ featuredArticle }: HubLandingHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Image with Ken Burns Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ 
          duration: 20, 
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src={featuredArticle.coverImage}
            alt={featuredArticle.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-1">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {/* Badge */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6"
          >
            ✨ The Insights Hub
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={revealText}
            className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight"
          >
            Where <span className="text-accent">Innovation</span>
            <br />
            Meets Intelligence
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Deep insights, proven strategies, and transformative ideas from the forefront of digital innovation. Your competitive edge starts here.
          </motion.p>

          {/* Featured Article Card */}
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <Link href={`/insights/${featuredArticle.slug}`}>
              <motion.article
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Background */}
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 backdrop-blur-sm">
                  {/* Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={featuredArticle.coverImage}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                      <span>{featuredArticle.author}</span>
                      <span>{featuredArticle.readingTime}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex items-center text-accent font-medium">
                      <span>Read Article</span>
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex flex-col items-center text-muted-foreground"
            >
              <span className="text-sm mb-2">Explore More</span>
              <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}