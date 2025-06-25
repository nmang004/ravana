"use client";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, triggerOnce = true, delay = 0 } = options;
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        controls.start("visible");
      }, delay);
      return () => clearTimeout(timer);
    } else {
      controls.start("hidden");
    }
  }, [controls, inView, delay]);

  return { ref, controls, inView };
}