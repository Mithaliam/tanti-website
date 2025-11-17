"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const accentBlue = "#0064B6"

const categories = [
  {
    title: "Residential Automation",
    description:
      "Curated comfort for villas, apartments, and high-rise residences with unified, KNX-centric control.",
      image: "/res%20sol.jpeg",
    accent: "#0068ff",
    points: [
      "Wired Lighting Automation",
      "Wireless Lighting Automation",
      "KNX-based Scenes",
      "Smart Curtains & Blinds",
      "Gate & Door Automation",
    ],
  },
  {
    title: "Commercial Automation",
    description:
      "Enterprise-grade control layers that align lighting, HVAC, and emergency workflows across campuses.",
      image: "/commercial%20sol.jpeg",
    accent: "#0b2d61",
    points: [
      "LMS (Lighting Management System)",
      "BMS Control",
      "Emergency Exit Signage Lighting",
      "Occupancy-based Controls",
    ],
  },
  {
      title: "Security",
    description:
      "Layered protection with intelligent analytics, remote visibility, and policy-driven access.",
      image: "/security%20sol.jpeg",
    accent: "#0068ff",
    points: [
      "Intrusion Alarm",
      "Video Door Phone",
      "IP CCTV",
      "Access Control",
      "Motorised Shutters",
    ],
  },
  {
      title: "Home Entertainment",
    description:
      "Acoustic engineering and immersive visuals orchestrated for living rooms, lounges, and private theatres.",
      image: "/home%20sol.jpeg",
    accent: "#0b2d61",
    points: ["Zonal Audio", "Home Theatre", "Multi-room AV"],
    },
    {
      title: "Commercial AV",
    description:
      "Boardrooms, experience centres, and auditoriums with cinematic clarity and low-latency collaboration.",
      image: "/commercial%20av.jpeg",
    accent: "#0068ff",
    points: ["Conference Room", "PA System", "LED and Video Wall", "TV Over IP"],
    },
    {
      title: "Energy Management",
    description:
      "Operational intelligence for utilities, smart grids, and distributed energy resources.",
      image: "/energy%20management.jpeg",
    accent: "#0b2d61",
    points: ["ABB Ability", "EMS Dashboards", "Power Monitoring"],
    },
    {
      title: "Central Management Server",
    description:
      "Unified orchestration across subsystems with open APIs, logic engines, and real-time telemetry.",
      image: "/central%20management.jpeg",
    accent: "#0068ff",
    points: ["RTI Corp", "NETX Automation", "Logic Machine"],
  },
]

const heroVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const imageVariant = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const desktopTextVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const mobileTextVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function SolutionsPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 640)
    updateIsMobile()
    window.addEventListener("resize", updateIsMobile)
    return () => window.removeEventListener("resize", updateIsMobile)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f8ff]">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[38rem] h-[38rem] bg-[#bcd9ff]/35 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[30rem] h-[30rem] bg-[#e3f0ff]/60 blur-[110px] rounded-full" />
      </div>

      <div className="relative z-[1] max-w-6xl mx-auto px-4 pb-24 pt-16 md:pt-20 lg:pt-24 space-y-20">
        {/* Hero */}
        <motion.section
          variants={heroVariant}
          initial="hidden"
          animate="visible"
          className="rounded-[32px] border border-white/40 bg-white/80 px-6 py-12 shadow-[0_25px_80px_rgba(0,60,136,0.08)] backdrop-blur-xl text-center md:px-10"
        >
          <h1
            className="text-4xl md:text-6xl font-semibold mb-4"
            style={{ color: accentBlue }}
          >
            Solutions
          </h1>
          <p className="text-lg md:text-xl text-[#0b2d61]/80 max-w-3xl mx-auto">
            Smart, integrated automation for homes, buildings, and enterprise
            environments.
          </p>
        </motion.section>

        {/* Categories */}
        <div className="space-y-16 md:space-y-20">
          {categories.map((category, index) => {
            const reverse = index % 2 === 1
            const imageBlock = (
              <motion.div
                key="image"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative"
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
              >
                <div className="rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(11,45,97,0.15)] h-[400px] md:h-[500px] lg:h-[550px] w-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={800}
                    height={550}
                    className="h-full w-full object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="absolute -bottom-6 left-12 hidden sm:flex gap-3 rounded-3xl border border-white/50 bg-white/80 px-5 py-3 shadow-lg backdrop-blur-md">
                  <span className="text-xs font-semibold tracking-[0.3em] text-[#0b2d61]/70">
                    {category.title}
                  </span>
                </div>
              </motion.div>
            )

            const textBlock = (
              <motion.div
                key="text"
                variants={isMobile ? mobileTextVariant : desktopTextVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                className="rounded-[32px] border border-white/60 bg-white/90 px-6 py-8 shadow-[0_20px_60px_rgba(0,104,255,0.08)] backdrop-blur-xl md:px-10"
              >
                <h2
                  className="text-3xl md:text-4xl font-semibold mb-4"
                  style={{ color: accentBlue }}
                >
                  {category.title}
                </h2>
                <p className="text-lg text-[#0b2d61]/80 mb-8 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-4">
                  {category.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-4 text-[#0b2d61] text-lg font-medium"
                    >
                       <span
                         className="mt-1 flex h-10 w-10 items-center justify-center rounded-3xl border border-white/60 bg-gradient-to-br from-white to-[#f4f8ff] shadow-md"
                         style={{ color: accentBlue }}
                       >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="3" />
                          <path d="M12 2v2" />
                          <path d="M12 20v2" />
                          <path d="m4.93 4.93 1.41 1.41" />
                          <path d="m17.66 17.66 1.41 1.41" />
                          <path d="M2 12h2" />
                          <path d="M20 12h2" />
                          <path d="m6.34 17.66-1.41 1.41" />
                          <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                      </span>
                      <span
                        className="transition-colors duration-200"
                        style={{ color: "#0b2d61" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = accentBlue)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#0b2d61")}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )

            return (
              <section
                key={category.title}
                className="grid gap-10 lg:grid-cols-2 items-center"
              >
                {reverse ? (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                ) : (
                  <>
                    {imageBlock}
                    {textBlock}
          </>
        )}
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
