"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
// Tabs removed in favor of a static 2x2 card grid
import { useIsMobile } from "@/hooks/use-mobile"

export default function ModernFeatures() {
  const [activeTab, setActiveTab] = useState("residential")
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  // Set mounted state to true on client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      id: "residential",
      title: "ABB F@H",
      description:
        "Transform your home into a smart haven with our comprehensive residential automation solutions.",
      benefits: [
        "Wired Lighting Automation (KNX)",
        "Wireless Lighting Automation (IoT)",
        "Smart switches and controls",
        "Home entertainment systems",
      ],
      image: "/ABB%20F%40H.jpeg",
    },
    {
      id: "commercial",
      title: "Switching",
      description:
        "Smart and energy efficient buildings with advanced building management systems and lighting control.",
      benefits: [
        "Lighting Management System (LMS)",
        "Building Management System (BMS)",
        "Emergency exit signage lighting",
        "Energy optimization solutions",
      ],
      image: "/Switching.jpg",
    },
    {
      id: "security",
      title: "Video Door Phone",
      description:
        "Comprehensive security solutions to protect your home and business with advanced surveillance and access control.",
      benefits: [
        "IP CCTV with face recognition",
        "Intrusion alarm systems",
        "Video door phone systems",
        "Access control and digital locks",
      ],
      image: "/video%20door%20phone.jpg",
    },
    {
      id: "entertainment",
      title: "IOT",
      description: "Experience world-class cinema and audio solutions tailored to your needs and preferences.",
      benefits: [
        "Home theater systems",
        "Zonal audio distribution",
        "Commercial AV solutions",
        "Conference room setups",
      ],
      image: "/IOT.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Tabs removed; keep component stable

  // Prepare stable dimensions for content to prevent layout shifts
  const contentStyle = { minHeight: "auto" }

  return (
    <section id="features" className="py-2 px-4 sm:py-3 md:py-4 relative" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-0 sm:mb-1"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#06b6d4]">Our Solutions</h2>
          <p className="text-sm sm:text-base md:text-lg text-black/70 max-w-2xl mx-auto">
            Comprehensive automation solutions for residential, commercial, and security needs
          </p>
        </motion.div>

        {/* 2x2 four-card grid replacing tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.slice(0, 4).map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-60 group-hover:opacity-90 transition-opacity"></div>
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white/90 shadow-lg">
                <div className="relative h-64 sm:h-72 md:h-[360px]">
                  <img src={feature.image} alt={feature.title} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow">{feature.title}</h3>
                    <p className="mt-1 text-white/90 max-w-xl hidden sm:block">{feature.description}</p>
                    <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 shadow-md group-hover:shadow-xl transition-all">
                      Discover More
                    </button>
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
