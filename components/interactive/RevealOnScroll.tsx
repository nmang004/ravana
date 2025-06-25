"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";
import { Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations/variants";

interface RevealOnScrollProps {
  children: ReactNode;
  variants?: Variants;
  threshold?: number;
  delay?: number;
  className?: string;
  triggerOnce?: boolean;
}

export default function RevealOnScroll({ 
  children, 
  variants = fadeInUp,
  threshold = 0.1,
  delay = 0,
  className = "",
  triggerOnce = true
}: RevealOnScrollProps) {
  const { ref, controls } = useScrollAnimation({ 
    threshold, 
    delay, 
    triggerOnce 
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}