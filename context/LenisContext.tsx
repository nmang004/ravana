'use client'

import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

interface LenisContextType {
  lenis: Lenis | null
}

const LenisContext = createContext<LenisContextType | undefined>(undefined)

export const useLenis = () => {
  const context = useContext(LenisContext)
  if (!context) {
    throw new Error('useLenis must be used within a LenisProvider')
  }
  return context
}

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Detect if user is on a mobile/touch device
    const isMobile = () => {
      if (typeof window === 'undefined') return false
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 768
      )
    }

    // Only initialize Lenis on desktop devices
    // Mobile devices will use native scroll for better compatibility
    if (isMobile()) {
      setLenis(null)
      return
    }

    const newLenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    setLenis(newLenis)

    function raf(time: number) {
      newLenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      newLenis.destroy()
    }
  }, [])

  // Instantly jump to top on route change (no animation)
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname, lenis])

  return <LenisContext.Provider value={{ lenis }}>{children}</LenisContext.Provider>
}
