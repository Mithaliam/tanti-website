"use client"

import { useState, useEffect, useCallback, useRef, memo } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Logo from "./Logo"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showWhiteGradient, setShowWhiteGradient] = useState(false)
  const lastYRef = useRef(0)
  const rafIdRef = useRef<number | null>(null)
  
  // Guard client-only logic - ensures server and client match on initial render
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Throttled scroll handler using requestAnimationFrame for better performance
  const handleScroll = useCallback(() => {
    if (rafIdRef.current) return // Skip if already scheduled
    
    rafIdRef.current = requestAnimationFrame(() => {
      if (typeof window === 'undefined') return
      const currentY = window.scrollY
      const lastY = lastYRef.current
      const isScrollingUp = currentY < lastY
      const pastThreshold = currentY > 80
      
      setScrolled(currentY > 20)
      setShowWhiteGradient(isScrollingUp && pastThreshold)
      lastYRef.current = currentY
      rafIdRef.current = null
    })
  }, [])
  
  // Handle scroll effect with throttling - only after mount
  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return
    
    lastYRef.current = window.scrollY
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [handleScroll, mounted])

  // Prevent body scroll when mobile menu is open - only after mount
  useEffect(() => {
    if (!mounted || typeof document === 'undefined') return
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, mounted]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[60px] flex items-center",
        "bg-white shadow-lg shadow-gray-200 border-b border-gray-200"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-black focus-visible:ring-2 focus-visible:ring-amber-500/70 h-9 w-9" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}

// Memoize header to prevent re-renders when parent updates
export default memo(ModernHeader)
