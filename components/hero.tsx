"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Sparkles, Lightbulb, Building2, Zap, Home } from "lucide-react"
import Link from "next/link"

export default function ModernHero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only enable parallax effect on desktop devices
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current || window.innerWidth < 768) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const moveX = (clientX - innerWidth / 2) / 50
      const moveY = (clientY - innerHeight / 2) / 50

      parallaxRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="hero-section" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/tanti Main background.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-2 sm:py-0">
          {/* Hero content */}
          <div className="flex-1 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm"
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />
              <span className="font-medium text-white">To make people life easy</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="block text-white">Smart Building</span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solution
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl mx-auto"
            >
              for Comfortable Living Spaces. We offer a comprehensive range of solutions to enhance your home automation experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col max-w-[80%] mx-auto sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12"
            >
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Solution Cards - Elementor icon box structure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8"
            >
              {/* LMS Card */}
              <div className="elementor-icon-box-wrapper flex items-center gap-3">
                <div className="elementor-icon-box-icon w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center flex-shrink-0">
                  <span className="elementor-icon">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {/* Complex wireframe geometric shape - dodecahedron-like */}
                      <path d="M12 2L7 4.5L9 8L12 6.5L15 8L17 4.5L12 2Z" />
                      <path d="M17 4.5L20 6.5L18 10L15 8L17 4.5Z" />
                      <path d="M7 4.5L4 6.5L6 10L9 8L7 4.5Z" />
                      <path d="M9 8L6 10L8 13.5L12 12L9 8Z" />
                      <path d="M15 8L18 10L16 13.5L12 12L15 8Z" />
                      <path d="M12 12L8 13.5L10 17L12 15.5L14 17L16 13.5L12 12Z" />
                      <path d="M8 13.5L6 10L4 13L6 16.5L8 13.5Z" />
                      <path d="M16 13.5L18 10L20 13L18 16.5L16 13.5Z" />
                      <path d="M12 15.5L10 17L12 20L14 17L12 15.5Z" />
                      <path d="M6 16.5L4 13L2 16L4 19.5L6 16.5Z" />
                      <path d="M18 16.5L20 13L22 16L20 19.5L18 16.5Z" />
                      <path d="M12 20L14 17L16 19.5L14 22L12 20Z" />
                      <path d="M12 20L10 17L8 19.5L10 22L12 20Z" />
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <p className="elementor-icon-box-description text-white text-sm sm:text-base md:text-lg font-medium whitespace-nowrap m-0">LMS</p>
                </div>
              </div>

              {/* BMS Card */}
              <div className="elementor-icon-box-wrapper flex items-center gap-3">
                <div className="elementor-icon-box-icon w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center flex-shrink-0">
                  <span className="elementor-icon">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {/* Complex wireframe architectural shape */}
                      <path d="M12 2L8 4L6 7L8 10L12 8L16 10L18 7L16 4L12 2Z" />
                      <path d="M6 7L4 10L6 13L8 10L6 7Z" />
                      <path d="M18 7L20 10L18 13L16 10L18 7Z" />
                      <path d="M8 10L6 13L8 16L12 14L16 16L18 13L16 10L12 8L8 10Z" />
                      <path d="M8 16L6 13L4 16L6 19L8 16Z" />
                      <path d="M16 16L18 13L20 16L18 19L16 16Z" />
                      <path d="M12 14L8 16L10 19L12 17L14 19L16 16L12 14Z" />
                      <path d="M10 19L8 16L6 19L8 22L10 19Z" />
                      <path d="M14 19L16 16L18 19L16 22L14 19Z" />
                      <path d="M12 17L10 19L12 22L14 19L12 17Z" />
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <p className="elementor-icon-box-description text-white text-sm sm:text-base md:text-lg font-medium whitespace-nowrap m-0">BMS</p>
                </div>
              </div>

              {/* EMS Card */}
              <div className="elementor-icon-box-wrapper flex items-center gap-3">
                <div className="elementor-icon-box-icon w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center flex-shrink-0">
                  <span className="elementor-icon">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {/* Complex wireframe layered geometric shape */}
                      <path d="M12 2L9 3.5L7 6L9 8.5L12 7L15 8.5L17 6L15 3.5L12 2Z" />
                      <path d="M7 6L5 8.5L7 11L9 8.5L7 6Z" />
                      <path d="M17 6L19 8.5L17 11L15 8.5L17 6Z" />
                      <path d="M9 8.5L7 11L9 13.5L12 12L15 13.5L17 11L15 8.5L12 7L9 8.5Z" />
                      <path d="M9 13.5L7 11L5 13.5L7 16L9 13.5Z" />
                      <path d="M15 13.5L17 11L19 13.5L17 16L15 13.5Z" />
                      <path d="M12 12L9 13.5L11 16L12 14.5L13 16L15 13.5L12 12Z" />
                      <path d="M11 16L9 13.5L7 16L9 18.5L11 16Z" />
                      <path d="M13 16L15 13.5L17 16L15 18.5L13 16Z" />
                      <path d="M12 14.5L11 16L12 18.5L13 16L12 14.5Z" />
                      <path d="M9 18.5L7 16L5 18.5L7 21L9 18.5Z" />
                      <path d="M15 18.5L17 16L19 18.5L17 21L15 18.5Z" />
                      <path d="M12 18.5L11 16L9 18.5L11 21L12 19.5L13 21L15 18.5L13 16L12 18.5Z" />
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <p className="elementor-icon-box-description text-white text-sm sm:text-base md:text-lg font-medium whitespace-nowrap m-0">EMS</p>
                </div>
              </div>

              {/* Residential Solution Card */}
              <div className="elementor-icon-box-wrapper flex items-center gap-3">
                <div className="elementor-icon-box-icon w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center flex-shrink-0">
                  <span className="elementor-icon">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {/* Complex wireframe stacked blocks */}
                      <path d="M5 14L3 16L5 18L7 16L5 14Z" />
                      <path d="M7 16L5 18L7 20L9 18L7 16Z" />
                      <path d="M9 10L7 12L9 14L11 12L9 10Z" />
                      <path d="M11 12L9 14L11 16L13 14L11 12Z" />
                      <path d="M13 6L11 8L13 10L15 8L13 6Z" />
                      <path d="M15 8L13 10L15 12L17 10L15 8Z" />
                      <path d="M17 2L15 4L17 6L19 4L17 2Z" />
                      <path d="M19 4L17 6L19 8L21 6L19 4Z" />
                      <path d="M5 14L7 12L9 14L7 16L5 14Z" />
                      <path d="M9 10L11 8L13 10L11 12L9 10Z" />
                      <path d="M13 6L15 4L17 6L15 8L13 6Z" />
                      <path d="M17 2L19 4L21 6L19 8L17 6L17 2Z" />
                      <path d="M7 16L9 14L11 16L9 18L7 16Z" />
                      <path d="M11 12L13 10L15 12L13 14L11 12Z" />
                      <path d="M15 8L17 6L19 8L17 10L15 8Z" />
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <p className="elementor-icon-box-description text-white text-sm sm:text-base md:text-lg font-medium whitespace-nowrap m-0">Residential Solution</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
