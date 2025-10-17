"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

type Card = {
  title: string
  subtitle?: string
  image: string
}

const cards: Card[] = [
  { title: "Lighting", subtitle: "Control", image: "/tanti/residential image.jpg" },
  { title: "Security", subtitle: "Surveillance", image: "/tanti/security.jpg" },
  { title: "Entertainment", subtitle: "AV", image: "/tanti/home entertainment.jpg" },
  { title: "Energy", subtitle: "Management", image: "/images/analytics.png" },
  { title: "Networking", subtitle: "IoT", image: "/images/automation.png" },
]

export default function ParallaxCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: containerRef })
  const y = useTransform(scrollXProgress, [0, 1], [0, -40])

  useEffect(() => {
    // Ensure the container is horizontally scrollable with smooth snapping
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0
    }
  }, [])

  return (
    <section className="py-8 sm:py-12" style={{ backgroundColor: '#F5F5F0' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#06b6d4]">Featured</h2>
        <p className="text-black/70 mb-4">Swipe to explore</p>
      </div>
      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide"
      >
        <div className="flex gap-4 sm:gap-6 px-4 snap-x snap-mandatory">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="relative w-[80%] sm:w-[55%] md:w-[40%] lg:w-[28%] snap-start shrink-0"
              style={{ y }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-md opacity-60"></div>
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white/90 shadow-lg">
                <div className="relative h-56 sm:h-64 md:h-72">
                  <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-bold">{card.title}</h3>
                    {card.subtitle && <p className="text-white/90 text-sm">{card.subtitle}</p>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



