"use client"

import { motion } from "framer-motion"
import Image from "next/image"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const lmsSolutions = [
    {
      title: "LMS",
      description: "A KNX-based Lighting Management System (LMS) is a smart solution that utilizes the KNX protocol to efficiently control and automate lighting in buildings, optimizing energy use and enabling seamless integration with other KNX-compatible devices and systems.",
      image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=2069&auto=format&fit=crop",
      button1: "DALI Based Solutions",
      button2: "Day Light Harvesting"
    },
    {
      title: "BMS Control",
      description: "A Building Management System (BMS) is a centralized control system for monitoring and managing various building services like HVAC, lighting, security, and more. It optimizes energy usage, ensures comfort and safety, and provides data for efficient building operation.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
      button1: "ABB Cylon",
      button2: "NETX Automation"
    }
  ]

  const commercialSolutions = [
    {
      title: "Smart Office Automation",
      description: "Transform your workspace with intelligent lighting, climate control, and access management systems for enhanced productivity and employee comfort.",
      icon: "🏢",
      features: ["Automated Lighting", "Climate Control", "Access Management", "Meeting Room Booking"]
    },
    {
      title: "Retail & Hospitality",
      description: "Create engaging customer experiences with dynamic lighting, security systems, and energy management solutions tailored for commercial spaces.",
      icon: "🛍️",
      features: ["Dynamic Lighting", "CCTV Integration", "Energy Monitoring", "Guest Comfort"]
    },
    {
      title: "Industrial Automation",
      description: "Enhance efficiency and safety in industrial environments with robust automation for machinery, energy, and environmental control systems.",
      icon: "🏭",
      features: ["Process Automation", "Energy Optimization", "Safety Systems", "Remote Monitoring"]
    },
    {
      title: "Healthcare Facilities",
      description: "Specialized automation solutions for healthcare environments, ensuring patient comfort, staff efficiency, and regulatory compliance.",
      icon: "🏥",
      features: ["Patient Comfort", "Staff Efficiency", "Compliance", "Emergency Systems"]
    }
  ]

  const technologies = [
    { name: "KNX", icon: "⚙️" },
    { name: "DALI", icon: "💡" },
    { name: "BACnet", icon: "🔗" },
    { name: "Modbus", icon: "🔌" },
    { name: "IoT Platforms", icon: "🌐" },
    { name: "Cloud Integration", icon: "☁️" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Smart And Energy
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold text-amber-300">
                  Efficient Buildings
                </h2>
              </div>
              <p className="text-xl text-blue-100 max-w-lg">
                Transform your commercial space into an intelligent, energy-efficient environment with our comprehensive building automation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                  Explore Solutions
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                  Get Free Consultation
                </Button>
              </div>
            </motion.div>
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl text-white/60">🏢</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LMS Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">LMS - Lighting Management System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A KNX-based Lighting Management System (LMS) is a smart solution that utilizes the KNX protocol to efficiently control and automate lighting in buildings, optimizing energy use and enabling seamless integration with other KNX-compatible devices and systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-1 max-w-5xl mx-auto">
            {lmsSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer"
              >
                <Card className="h-full shadow-lg bg-white max-w-md mx-auto overflow-hidden group relative">
                  {solution.image ? (
                    <>
                      <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative h-96 mx-auto w-full">
                        <Image 
                          src={solution.image} 
                          alt={solution.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Blue overlay that rises from bottom on hover with content */}
                      <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-90 transition-all duration-500 transform translate-y-full group-hover:translate-y-0 flex items-center justify-center">
                        <div className="text-white text-center p-6">
                          <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                          <p className="text-sm leading-relaxed">{solution.description}</p>
                          <div className="mt-4 flex flex-col gap-2">
                            {solution.button1 && (
                              <div className="px-4 py-2 border-2 border-white rounded-lg">
                                {solution.button1}
                              </div>
                            )}
                            {solution.button2 && (
                              <div className="px-4 py-2 border-2 border-white rounded-lg">
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
      </section>

      {/* Emergency Exit Signage Lighting Section */}
      <section className="py-2 px-4 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer"
          >
            <Card className="bg-white rounded-lg shadow-lg overflow-hidden border-none max-w-md mx-auto group relative">
              <div className="bg-blue-600 h-1 w-full"></div>
              <div className="p-6">
                <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center mx-auto">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 blur-xl opacity-50"></div>
                    <div className="relative bg-white px-6 py-4 rounded-lg shadow-2xl">
                      <div className="text-4xl font-bold bg-gradient-to-br from-red-500 to-orange-500 bg-clip-text text-transparent">
                        EXIT
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Blue overlay rises from bottom with content on hover */}
              <div className="absolute inset-0 bg-blue-600/95 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0 flex items-center justify-center">
                <div className="text-white text-center px-6">
                  <h3 className="text-2xl font-bold mb-3">Emergency Exit Signage Lighting</h3>
                  <p className="text-sm leading-relaxed mb-4">Smart buildings are transforming the commercial landscape by leveraging advanced technologies to enhance efficiency, safety, and sustainability. Commercial emergency exit signage lighting is a critical component of building safety and compliance, ensuring clear visibility and guidance during emergencies.</p>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold text-sm">Discover More</Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Commercial Solutions Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Commercial Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions designed to transform every aspect of your commercial space
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commercialSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-3xl">{solution.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-4 h-4 text-green-500 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We leverage a wide spectrum of leading technologies including KNX, DALI, BACnet, Modbus, IoT platforms, and cloud integration to deliver holistic solutions tailored to diverse commercial requirements.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Discover More
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mx-auto mb-4">{tech.icon}</div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                View Our Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}





