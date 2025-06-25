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

  // Scroll to top on route change
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: false })
    }
  }, [pathname, lenis])

  return <LenisContext.Provider value={{ lenis }}>{children}</LenisContext.Provider>
}
