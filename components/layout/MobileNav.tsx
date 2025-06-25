'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { navLinks } from '@/lib/data'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useLenis } from '@/context/LenisContext'

interface MobileNavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

// Animation variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

const menuVariants = {
  hidden: { 
    x: '100%',
    opacity: 0
  },
  visible: { 
    x: 0,
    opacity: 1
  },
  exit: { 
    x: '100%',
    opacity: 0
  }
}

const headerVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 }
}

const linkVariants = {
  hidden: { 
    x: 30, 
    opacity: 0,
    scale: 0.9
  },
  visible: { 
    x: 0, 
    opacity: 1,
    scale: 1
  },
  exit: { 
    x: 30, 
    opacity: 0,
    scale: 0.9
  }
}

const closeButtonVariants = {
  hidden: { rotate: -90, scale: 0.8, opacity: 0 },
  visible: { rotate: 0, scale: 1, opacity: 1 },
  exit: { rotate: 90, scale: 0.8, opacity: 0 }
}

const MobileNav = ({ isOpen, toggleMenu }: MobileNavProps) => {
  const { lenis } = useLenis()

  useEffect(() => {
    if (isOpen) {
      lenis?.stop()
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    } else {
      lenis?.start()
      document.body.style.overflow = 'unset'
    }

    return () => {
      lenis?.start()
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, lenis])

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ 
              duration: 0.3, 
              ease: [0.645, 0.045, 0.355, 1] 
            }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-[998]"
            onClick={toggleMenu}
          />
          
          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ 
              duration: 0.4, 
              ease: [0.645, 0.045, 0.355, 1],
              staggerChildren: 0.1,
              delayChildren: 0.1
            }}
            className="fixed top-0 right-0 w-full max-w-sm h-full bg-background border-l border-border z-[999] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <motion.div 
              variants={headerVariants}
              transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
              className="flex items-center justify-between p-6 border-b border-border"
            >
              <Link href="/" onClick={toggleMenu}>
                <motion.h1 
                  className="text-2xl font-heading font-bold text-foreground"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  RAVANA
                </motion.h1>
              </Link>
              
              <motion.button 
                variants={closeButtonVariants}
                transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
                onClick={toggleMenu} 
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} className="text-muted-foreground" />
              </motion.button>
            </motion.div>
            
            {/* Navigation Links */}
            <motion.nav 
              className="flex flex-col items-start justify-center flex-1 px-6 space-y-2"
              variants={menuVariants}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={linkVariants}
                  transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    className="block w-full text-xl font-semibold text-foreground hover:text-accent hover:bg-accent/5 px-4 py-3 rounded-lg transition-all duration-200 group"
                    onClick={toggleMenu}
                  >
                    <motion.span
                      className="flex items-center"
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                      <motion.span 
                        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        →
                      </motion.span>
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
              
              {/* CTA Button */}
              <motion.div
                variants={linkVariants}
                transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
                className="w-full pt-4"
              >
                <Link href="/contact" onClick={toggleMenu}>
                  <motion.div
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-4 py-3 rounded-lg text-center transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.div>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileNav