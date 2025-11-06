"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollToTop } from "@/hooks/useScrollRestore"

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
  // Ensure page starts at top when navigated to
  useScrollToTop()
  
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
      image: "/LMS.jpeg",
      button1: "DALI Based Solutions",
      button2: "Day Light Harvesting"
    },
    {
      title: "BMS Control",
      description: "A Building Management System (BMS) is a centralized control system for monitoring and managing various building services like HVAC, lighting, security, and more. It optimizes energy usage, ensures comfort and safety, and provides data for efficient building operation.",
      image: "/BMS.jpeg",
      button1: "ABB Cylon",
      button2: "NETX Automation"
    }
  ]

  const technologies = [
    { name: "KNX", icon: "⚙️" },
    { name: "DALI", icon: "💡" },
    { name: "BACnet", icon: "🔗" },
    { name: "Modbus", icon: "🔌" },
    { name: "IoT Platforms", icon: "🌐" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-4 overflow-hidden"
        style={{
          // Dark blue transparent gradient
          backgroundImage:
            'linear-gradient(to bottom right, rgba(10, 28, 74, 0.88), rgba(15, 49, 114, 0.78), rgba(24, 78, 174, 0.68))'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Smart And Energy
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold text-amber-300">
                  Efficient Buildings
                </h2>
              </div>
              <p className="text-xl text-blue-100 max-w-lg">
                Transform your commercial space into an intelligent, energy-efficient environment with our comprehensive building automation solutions.
              </p>
              <div className="flex justify-center">
                <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                  <Link href="/solutions">Explore Solutions</Link>
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
                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl overflow-hidden relative">
                  <Image 
                    src="/commerial%20poster.jpeg"
                    alt="Commercial Building Automation"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
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
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={solution.title === "LMS"}
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
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-28 flex flex-col items-center justify-center w-full">
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}





