"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

/**
 * Commercial Page with Modern Hover Effects
 * 
 * HOVER EFFECTS CONFIGURATION:
 * 
 * 1. Card Scale Animation (whileHover={{ scale: 1.03 }}):
 *    - Adjust scale value: Change 1.03 to any value (e.g., 1.05 for more zoom, 1.02 for subtle)
 *    - Located in: <motion.div whileHover={{ scale: X }} />
 * 
 * 2. Image Zoom (group-hover:scale-110):
 *    - Change scale-110 to scale-105 (subtle) or scale-125 (dramatic)
 *    - Speed: duration-500 (500ms) → change to duration-300 (faster) or duration-700 (slower)
 *    - Located in: <Image className="group-hover:scale-X transition-transform duration-X" />
 * 
 * 3. Blue Overlay Intensity (opacity-0 group-hover:opacity-100):
 *    - Change opacity-100 to opacity-50 for subtle overlay or opacity-100 for strong
 *    - Adjust color: Change from-blue-600 to from-purple-600, from-green-600, etc.
 *    - Speed: duration-500 → change to duration-300 (faster) or duration-700 (slower)
 *    - Located in: <div className="opacity-0 group-hover:opacity-X transition-opacity duration-X" />
 * 
 * 4. Shadow Effect (hover:shadow-2xl):
 *    - Change shadow-2xl to shadow-xl (subtle) or shadow-3xl (more dramatic)
 *    - Located in: <Card className="hover:shadow-X" />
 * 
 * 5. Button Hover Color:
 *    - Change hover:bg-blue-700 to any color (e.g., hover:bg-purple-700)
 *    - Located in: <Button className="hover:bg-X" />
 * 
 * ALL EFFECTS:
 * - Animation speed: duration-500 (500ms) - adjust as needed
 * - Card lift: scale: 1.03 (3% larger on hover) - adjust scale value
 * - Image zoom: scale-110 (10% larger on hover) - adjust scale value
 * - Overlay intensity: opacity-0 to opacity-100 on hover - adjust opacity
 * - Shadow intensity: shadow-lg to shadow-2xl on hover - adjust shadow level
 */
export default function CommercialPage() {
  
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as const
      } 
    }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as const,
        delay: 0.2
      } 
    }
  }

  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as const
      } 
    }
  }

  const slideInButton = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const,
        delay: 0.8
      } 
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  }

  const lmsSolutions = [
    {
      title: "LMS",
      tag: "LMS",
      description: "A KNX-based Lighting Management System (LMS) is a smart solution that utilizes the KNX protocol to efficiently control and automate lighting in buildings, optimizing energy use and enabling seamless integration with other KNX-compatible devices and systems.",
      image: "/LMS.jpeg",
      button1: "DALI Based Solutions",
      button2: "Day Light Harvesting"
    },
    {
      title: "BMS Control",
      tag: "BMS",
      description: "A Building Management System (BMS) is a centralized control system for monitoring and managing various building services like HVAC, lighting, security, and more. It optimizes energy usage, ensures comfort and safety, and provides data for efficient building operation.",
      image: "/BMS.jpeg",
      button1: "ABB Cylon",
      button2: "NETX Automation"
    },
    {
      title: "EMS",
      tag: "EMS",
      description: "An Energy Management System (EMS) is an advanced solution that monitors, controls, and optimizes energy consumption across buildings. It provides real-time insights, demand forecasting, and automated energy-saving strategies to reduce costs and improve sustainability.",
      image: "/energy management.jpeg",
      button1: "Energy Monitoring",
      button2: "Demand Management"
    },
    {
      title: "Additional Services",
      tag: "Additional Services",
      description: "",
      image: "/central management.jpeg",
      button1: "",
      button2: "",
      services: [
        "Lighting Controls",
        "HVAC Integration & Control",
        "Sensor Based Control",
        "Daylight Harvesting",
        "Fire Exit Management",
        "BMS & LMS Integration",
        "UI Generation",
        "Remote Monitoring Control",
        "Electrical System Monitoring",
        "CCTV with Video Analytics",
        "AV over IP & more"
      ]
    }
  ]

  const technologies = [
    { name: "KNX", logo: "/KNX_logo.svg.png" },
    { name: "DALI", logo: "/dali logo.png" },
    { name: "BACnet", logo: "/BACNET.jpeg" },
    { name: "Modbus", logo: "/MODBUS.png" },
    { name: "IoT Platforms", logo: "/IOT logo image.png" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white pt-32 pb-52 px-4 overflow-hidden min-h-[90vh]"
        style={{
          backgroundImage: 'url(/Commercial-Large.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex justify-center">
            <div className="space-y-8 text-center max-w-4xl">
              <div className="space-y-4">
                <motion.h1 
                  variants={slideInLeft}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl lg:text-6xl font-bold leading-tight text-white"
                >
                  Smart And Energy
                </motion.h1>
                <motion.h2 
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl lg:text-5xl font-bold text-amber-300"
                >
                  Efficient Buildings
                </motion.h2>
              </div>
              <motion.div 
                variants={slideInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="text-xl text-white max-w-3xl mx-auto space-y-4"
              >
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  A system or a solution which has ability to control, manage entire building & all the electrical services within building; just not restricted BMS or any solutions.
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  Providing solution for greater control, starting with BMS, LMS, EMS, security, water management, renewable energy integration & much more.
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  Creating one comprehensive — entire task load to manage all energy.
                </motion.span>
              </motion.div>
              <motion.div 
                variants={slideInButton}
                initial="hidden"
                animate="visible"
                className="flex justify-center"
              >
                <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                  <Link href="/solutions">Explore Solutions</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* LMS Section */}
      <section className="pt-12 pb-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white/95 shadow-[0_12px_60px_rgba(15,23,42,0.08)] px-6 py-10 sm:px-12 sm:py-12">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),transparent_55%)] opacity-80 rounded-[32px]" />
              <div className="relative z-10 grid gap-8 text-center md:text-left md:grid-cols-[1.35fr_0.65fr]">
                <div className="flex flex-col gap-5">
                  <span className="inline-flex items-center justify-center md:justify-start gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                    Smart Building Ecosystem
                  </span>
                  <div>
                    <h2 className="text-4xl font-bold text-slate-900">Commercial Solutions</h2>
                    <p className="mt-3 text-lg text-slate-600 leading-relaxed">
                      Comprehensive commercial building automation suite covering Lighting Management Systems (LMS), Building Management Systems (BMS), Energy Management Systems (EMS), integrated water management, and renewable energy services. Our connected architecture ensures consistent performance, energy efficiency, and unified control across every building discipline.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                    {["LMS Control", "BMS Automation", "EMS Insights", "Water Management", "Renewable Integration", "Central Monitoring"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-semibold text-slate-700 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 text-left">
                  {[
                    { title: "Operational Readiness", value: "24/7", desc: "Centralized monitoring & alerting" },
                    { title: "Energy Savings", value: "30%", desc: "Average efficiency gain" },
                    { title: "Systems Integrated", value: "15+", desc: "LMS, BMS, EMS, Security, Water" },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white px-5 py-4 shadow-sm">
                      <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">{item.title}</p>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-blue-600">{item.value}</span>
                        <span className="text-sm text-slate-500">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="overflow-x-auto pb-4 -mx-4 px-4 commercial-scrollbar">
            <div className="flex gap-6 min-w-max pl-4 pr-16">
              {lmsSolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="cursor-pointer flex-shrink-0"
                  style={{ width: '400px' }}
                >
                  <Card className="h-full shadow-lg bg-white overflow-hidden group relative w-full">
                  {solution.image ? (
                    <>
                      <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative h-96 mx-auto w-full">
                        <Image 
                          src={solution.image} 
                          alt={solution.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 4}
                          loading={index < 4 ? undefined : "lazy"}
                          quality={85}
                        />
                        {/* Pill-shaped tag */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/90 backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-[#0b2d61] shadow-lg">
                            {solution.tag || solution.title}
                          </span>
                        </div>
                      </div>
                      {/* Light blue overlay that rises from bottom on hover with content */}
                      <div className="absolute inset-0 bg-[#E3F2FD] opacity-0 group-hover:opacity-95 transition-all duration-500 transform translate-y-full group-hover:translate-y-0 flex items-center justify-center">
                        <div className="text-gray-900 text-center p-6">
                          <h3 className="text-2xl font-bold mb-3 text-blue-900">{solution.title}</h3>
                          {solution.description && (
                            <p className="text-sm leading-relaxed text-gray-700">{solution.description}</p>
                          )}
                          {solution.services && (
                            <ul className="text-left text-sm leading-relaxed mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                              {solution.services.map((service) => (
                                <li key={service} className="flex items-start gap-2">
                                  <span className="text-blue-600 mt-1">•</span>
                                  <span className="flex-1 text-gray-700">{service}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          <div className="mt-4 flex flex-col gap-2">
                            {solution.button1 && (
                              <div className="px-4 py-2 border-2 border-blue-600 rounded-lg text-blue-700 font-medium">
                                {solution.button1}
                              </div>
                            )}
                            {solution.button2 && (
                              <div className="px-4 py-2 border-2 border-blue-600 rounded-lg text-blue-700 font-medium">
                                {solution.button2}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 text-center">
                        {solution.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed text-center">
                        {solution.description}
                      </p>
                    </CardContent>
                  )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We leverage a wide spectrum of leading technologies including KNX, DALI, BACnet, Modbus, IoT platforms, and cloud integration to deliver holistic solutions tailored to diverse commercial requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center w-full"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-32 flex flex-col items-center justify-center w-full border border-slate-100 bg-white">
                  <div className="mx-auto mb-4 h-14 w-28 relative">
                    <Image
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      fill
                      className="object-contain"
                      sizes="112px"
                      priority={index < 2}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Ready to Transform Your Commercial Space?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your commercial automation needs and receive a customized solution.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}





