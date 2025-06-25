'use client';

import { motion } from 'framer-motion';

interface CategoryIconProps {
  category: string;
  size?: number;
  className?: string;
}

const icons = {
  'AI Trends': (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Brain outline */}
      <path d="M30 25C25 25 20 30 20 35C20 40 25 45 30 45C25 50 30 55 35 55C40 60 50 60 55 55C60 55 65 50 65 45C70 45 75 40 75 35C75 30 70 25 65 25C60 20 40 20 35 25C32 25 30 25 30 25Z" fill="url(#aiGradient)" stroke="currentColor" strokeWidth="2"/>
      {/* Neural connections */}
      <circle cx="35" cy="35" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="55" cy="45" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="40" cy="50" r="3" fill="currentColor" opacity="0.8"/>
      {/* Connection lines */}
      <line x1="35" y1="35" x2="50" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <line x1="50" y1="30" x2="55" y2="45" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <line x1="55" y1="45" x2="40" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <line x1="40" y1="50" x2="35" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      {/* Binary code */}
      <text x="20" y="75" fontSize="8" fill="currentColor" opacity="0.5">1010</text>
      <text x="55" y="75" fontSize="8" fill="currentColor" opacity="0.5">1101</text>
    </svg>
  ),
  
  'Podcasts': (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="podcastGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Microphone */}
      <rect x="45" y="20" width="10" height="25" rx="5" fill="url(#podcastGradient)" stroke="currentColor" strokeWidth="2"/>
      <path d="M35 35C35 45 40 50 50 50C60 50 65 45 65 35" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="50" y1="50" x2="50" y2="65" stroke="currentColor" strokeWidth="2"/>
      <line x1="40" y1="65" x2="60" y2="65" stroke="currentColor" strokeWidth="2"/>
      {/* Sound waves */}
      <path d="M25 30C25 40 35 45 35 45C35 45 25 50 25 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <path d="M75 30C75 40 65 45 65 45C65 45 75 50 75 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <path d="M15 25C15 45 30 50 30 50C30 50 15 55 15 75" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <path d="M85 25C85 45 70 50 70 50C70 50 85 55 85 75" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4"/>
    </svg>
  ),
  
  'SEO': (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="seoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Magnifying glass */}
      <circle cx="40" cy="40" r="20" fill="url(#seoGradient)" stroke="currentColor" strokeWidth="3"/>
      <circle cx="40" cy="40" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
      <line x1="55" y1="55" x2="75" y2="75" stroke="currentColor" strokeWidth="3"/>
      {/* Search ranking bars */}
      <rect x="25" y="70" width="4" height="15" fill="currentColor" opacity="0.8"/>
      <rect x="32" y="65" width="4" height="20" fill="currentColor" opacity="0.6"/>
      <rect x="39" y="60" width="4" height="25" fill="currentColor" opacity="0.8"/>
      <rect x="46" y="55" width="4" height="30" fill="currentColor"/>
      <rect x="53" y="50" width="4" height="35" fill="currentColor" opacity="0.6"/>
      {/* Arrow pointing up */}
      <path d="M70 25L75 15L80 25" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="75" y1="15" x2="75" y2="35" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  
  'Growth': (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Growth curve */}
      <path d="M15 75Q30 60 45 45Q60 30 75 15" stroke="currentColor" strokeWidth="3" fill="none"/>
      {/* Data points */}
      <circle cx="15" cy="75" r="3" fill="currentColor"/>
      <circle cx="30" cy="60" r="3" fill="currentColor"/>
      <circle cx="45" cy="45" r="3" fill="currentColor"/>
      <circle cx="60" cy="30" r="3" fill="currentColor"/>
      <circle cx="75" cy="15" r="3" fill="currentColor"/>
      {/* Arrow */}
      <path d="M70 10L80 15L75 20" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
      {/* Growth bars */}
      <rect x="20" y="80" width="6" height="8" fill="url(#growthGradient)"/>
      <rect x="30" y="75" width="6" height="13" fill="url(#growthGradient)"/>
      <rect x="40" y="70" width="6" height="18" fill="url(#growthGradient)"/>
      <rect x="50" y="65" width="6" height="23" fill="url(#growthGradient)"/>
      <rect x="60" y="60" width="6" height="28" fill="url(#growthGradient)"/>
    </svg>
  ),
  
  'Design': (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Pen tool */}
      <path d="M25 75L40 60L70 30L80 40L50 70L35 85Z" fill="url(#designGradient)" stroke="currentColor" strokeWidth="2"/>
      <line x1="40" y1="60" x2="50" y2="70" stroke="currentColor" strokeWidth="1.5"/>
      {/* Design elements */}
      <circle cx="70" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
      <rect x="15" y="15" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
      <path d="M75 60L85 55L80 70Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
      {/* Grid dots */}
      <circle cx="20" cy="40" r="1" fill="currentColor" opacity="0.4"/>
      <circle cx="30" cy="40" r="1" fill="currentColor" opacity="0.4"/>
      <circle cx="40" cy="40" r="1" fill="currentColor" opacity="0.4"/>
      <circle cx="20" cy="50" r="1" fill="currentColor" opacity="0.4"/>
      <circle cx="30" cy="50" r="1" fill="currentColor" opacity="0.4"/>
    </svg>
  ),
  
  // Default fallback
  'default': (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="60" height="60" rx="10" fill="url(#defaultGradient)" stroke="currentColor" strokeWidth="2"/>
      <circle cx="35" cy="35" r="3" fill="currentColor"/>
      <circle cx="50" cy="35" r="3" fill="currentColor"/>
      <circle cx="65" cy="35" r="3" fill="currentColor"/>
      <line x1="30" y1="55" x2="70" y2="55" stroke="currentColor" strokeWidth="2"/>
      <line x1="30" y1="65" x2="60" y2="65" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
};

export default function CategoryIcon({ category, size = 40, className = "" }: CategoryIconProps) {
  const iconKey = category as keyof typeof icons;
  const icon = icons[iconKey] || icons.default;
  
  return (
    <motion.div
      className={`text-accent ${className}`}
      style={{ width: size, height: size }}
      whileHover={{ 
        scale: 1.1,
        rotate: 5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {icon}
    </motion.div>
  );
}