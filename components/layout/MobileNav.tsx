'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/data'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useLenis } from '@/context/LenisContext'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { lenis } = useLenis()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      lenis?.stop()
    } else {
      lenis?.start()
    }

    return () => {
      lenis?.start()
    }
  }, [isOpen, lenis])

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2 z-[100]">
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-[999] flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Link href="/" onClick={toggleMenu}>
                <h1 className="text-2xl font-heading font-bold text-foreground">RAVANA</h1>
              </Link>
              <button onClick={toggleMenu} className="p-2">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNav
