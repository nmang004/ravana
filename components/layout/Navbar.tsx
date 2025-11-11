'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { navLinks, NavLink } from '@/lib/data'
import useMediaQuery from '@/hooks/useMediaQuery'
import MobileNav from './MobileNav'
import { useLenis } from '@/context/LenisContext'
import { Menu, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { lenis } = useLenis()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    if (!lenis) return

    const handleScroll = ({ scroll }: { scroll: number }) => {
      setIsScrolled(scroll > 50)
    }

    lenis.on('scroll', handleScroll)

    return () => {
      lenis.off('scroll', handleScroll)
    }
  }, [lenis])

  return (
    <motion.nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        isMenuOpen 
          ? 'bg-background'
          : 'transition-all duration-300',
        !isMenuOpen && isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : !isMenuOpen && 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative group">
            <motion.h1 
              className="text-2xl font-heading font-bold text-foreground"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              RAVANA
            </motion.h1>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-accent origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {isMobile ? (
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2 z-[100]">
                <Menu size={24} />
              </button>
              <MobileNav isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.href || item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * index,
                    ease: [0.645, 0.045, 0.355, 1]
                  }}
                  className="relative"
                  onMouseEnter={() => item.subLinks && setOpenDropdown(item.label)}
                  onMouseLeave={() => item.subLinks && setOpenDropdown(null)}
                >
                  {item.subLinks ? (
                    // Dropdown menu
                    <>
                      <button
                        className="relative text-foreground hover:text-accent transition-colors duration-300 group flex items-center gap-1"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform duration-200",
                            openDropdown === item.label && "rotate-180"
                          )}
                        />
                        <motion.div
                          className="absolute -bottom-1 left-0 h-0.5 bg-accent origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: openDropdown === item.label ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </button>

                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 py-2 bg-background border border-border rounded-lg shadow-lg min-w-[160px] z-50"
                          >
                            {item.subLinks.map((subLink) => (
                              <Link
                                key={subLink.href}
                                href={subLink.href}
                                className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors duration-200"
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    // Regular link
                    <Link
                      href={item.href!}
                      className="relative text-foreground hover:text-accent transition-colors duration-300 group"
                    >
                      {item.label}
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-accent origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6,
                  ease: [0.645, 0.045, 0.355, 1] 
                }}
              >
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  )
}
