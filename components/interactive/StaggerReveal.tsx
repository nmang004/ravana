"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";
import { staggerContainer, staggerChild } from "@/lib/animations/variants";

interface StaggerRevealProps {
  children: ReactNode[];
  className?: string;
  childClassName?: string;
  staggerDelay?: number;
  threshold?: number;
}

export default function StaggerReveal({ 
  children, 
  className = "",
  childClassName = "",
  staggerDelay = 0.1,
  threshold = 0.1
}: StaggerRevealProps) {
  const { ref, controls } = useScrollAnimation({ threshold });

  const containerVariants = {
    ...staggerContainer,
    visible: {
      ...staggerContainer.visible,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={staggerChild}
          className={childClassName}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}