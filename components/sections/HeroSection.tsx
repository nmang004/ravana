"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ParticleField from "@/components/interactive/ParticleField";
import { ArrowDown } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function HeroSection() {
  const words = ["Power.", "Precision.", "Performance."];
  
  const renderAnimatedWord = (word: string, wordIndex: number) => {
    const letters = word.split("");
    const baseDelay = wordIndex * 0.8;
    
    return (
      <motion.span
        key={wordIndex}
        className={`inline-block ${
          wordIndex === 1 ? "text-accent" : "text-foreground"
        }`}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, letterIndex) => (
          <motion.span
            key={letterIndex}
            variants={letterVariants}
            transition={{
              duration: 0.6,
              delay: baseDelay + letterIndex * 0.05,
              ease: [0.645, 0.045, 0.355, 1],
            }}
            className="inline-block"
            style={{ transformOrigin: "50% 50%" }}
          >
            {letter}
          </motion.span>
        ))}
        {wordIndex < words.length - 1 && (
          <motion.span
            variants={letterVariants}
            transition={{
              duration: 0.6,
              delay: baseDelay + letters.length * 0.05,
              ease: [0.645, 0.045, 0.355, 1],
            }}
            className="inline-block ml-4"
          >
            {" "}
          </motion.span>
        )}
      </motion.span>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Field Background */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background pointer-events-none" style={{ zIndex: 2 }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Main Headline */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold leading-tight">
            {words.map((word, index) => renderAnimatedWord(word, index))}
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.8,
            delay: 2.2,
            ease: [0.645, 0.045, 0.355, 1],
          }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mb-8 leading-relaxed"
        >
          Premium digital agency specializing in{" "}
          <span className="text-accent font-semibold">SaaS development</span>,{" "}
          <span className="text-accent font-semibold">web creation</span>,{" "}
          <span className="text-accent font-semibold">marketing</span>, and{" "}
          <span className="text-accent font-semibold">SEO</span>.{" "}
          We craft digital experiences that drive results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.6,
            delay: 2.5,
            ease: [0.645, 0.045, 0.355, 1],
          }}
          className="flex flex-col sm:flex-row gap-4 mb-20 md:mb-24"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg group"
          >
            <Link href="/contact">
              Start Your Project
              <motion.span
                className="ml-2 inline-block"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:bg-muted font-semibold px-8 py-4 text-lg group"
          >
            <Link href="/portfolio">
              View Our Work
              <motion.span
                className="ml-2 inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                ✦
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.6,
          delay: 3,
          ease: [0.645, 0.045, 0.355, 1],
        }}
        className="absolute bottom-6 md:bottom-8 left-0 right-0 z-20"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center space-y-2 text-muted-foreground w-fit mx-auto"
        >
          <span className="text-xs md:text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-3 h-3 md:w-4 md:h-4" />
        </motion.div>
      </motion.div>

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/3 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2 w-48 h-48 bg-accent/3 rounded-full blur-2xl" />
      </div>
    </section>
  );
}