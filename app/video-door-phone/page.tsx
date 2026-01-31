"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Home, Shield, Smartphone, Settings, Building2, Camera, Lock, QrCode, Wifi, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VideoDoorPhonePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  }

  const keyFeatures = [
    {
      title: "IP-based Video & Audio",
      description: "High-quality video and audio door communication",
      icon: Camera
    },
    {
      title: "Remote Access",
      description: "Control from anywhere via mobile app (iOS & Android)",
      icon: Smartphone
    },
    {
      title: "Indoor Touch Panels",
      description: "Elegant 7\" & 10\" touch panels with intuitive interface",
      icon: Home
    },
    {
      title: "Outdoor Stations",
      description: "Robust panels with camera, keypad & RFID options",
      icon: Building2
    },
    {
      title: "QR Code Commissioning",
      description: "Fast setup with easy QR-code scanning",
      icon: QrCode
    },
    {
      title: "Smart Integration",
      description: "Seamless building & automation system integration",
      icon: Wifi
    }
  ]

  const benefits = [
    {
      title: "Enhanced Security",
      description: "Know who's at the door before granting access. High-resolution video and clear audio communication ensure complete control over building entry.",
      icon: Shield
    },
    {
      title: "Control from Anywhere",
      description: "Answer door calls, view live video, and unlock doors directly from your smartphone — whether you're at home or away.",
      icon: Smartphone
    },
    {
      title: "Simple Setup & Easy Management",
      description: "Fast commissioning with QR code scanning and centralized configuration tools reduce installation time and simplify maintenance.",
      icon: Settings
    },
    {
      title: "Scalable & Future-Ready",
      description: "From single homes to large residential complexes, ABB-Welcome IP adapts to projects of any size — supporting multi-building systems with ease.",
      icon: Building2
    }
  ]

  const applications = [
    {
      title: "Private Homes & Villas",
      description: "Perfect for individual residences requiring secure access control"
    },
    {
      title: "Apartment Buildings",
      description: "Ideal for multi-unit residential buildings with centralized management"
    },
    {
      title: "Residential Complexes",
      description: "Scalable solution for large residential developments"
    },
    {
      title: "Offices & Mixed-Use",
      description: "Versatile system for commercial and mixed-use developments"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-white overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner---taller.jpg"
            alt="ABB-Welcome IP video door entry system background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="visible"
              animate="visible"
              variants={fadeIn}
            >
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-2" />
                Video Door Entry System
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                ABB-Welcome IP
              </h1>
              
              <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed drop-shadow-lg font-semibold">
                Intelligent IP Video Door Entry System
              </p>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-lg">
                Smart security. Seamless communication. Total control.
              </p>
            </motion.div>

            <motion.div
              initial="visible"
              animate="visible"
              variants={fadeIn}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="p-6">
                  <p className="text-white text-lg font-medium text-center">
                    Next-generation IP-based video door entry and access control system
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="visible"
            whileInView={mounted ? "visible" : "visible"}
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Smart Security for Modern Buildings
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              ABB-Welcome IP is a next-generation <strong>IP-based video door entry and access control system</strong> designed for modern residential and commercial buildings. It combines elegant design, high-quality video communication, and remote access to deliver a secure and convenient experience for users and property managers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why ABB-Welcome IP Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="visible"
            whileInView={mounted ? "visible" : "visible"}
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why ABB-Welcome IP?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="visible"
                  whileInView={mounted ? "visible" : "visible"}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-gray-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="visible"
            whileInView={mounted ? "visible" : "visible"}
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features at a Glance
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="visible"
                  whileInView={mounted ? "visible" : "visible"}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <IconComponent className="w-10 h-10 text-blue-600" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Designed for Modern Living Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="visible"
            whileInView={mounted ? "visible" : "visible"}
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Designed for Modern Living
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Indoor Stations */}
            <motion.div
              variants={cardVariants}
              initial="visible"
              whileInView={mounted ? "visible" : "visible"}
              viewport={{ once: true }}
            >
              <Card className="h-full border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Home className="w-6 h-6 text-blue-600" />
                    Indoor Stations
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src="/ip-touch---black-update (1).jpg"
                      alt="ABB-Welcome IP indoor touch panel"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Elegant touch panels and audio units with intuitive user interfaces, delivering comfort and simplicity inside the building.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Outdoor Stations */}
            <motion.div
              variants={cardVariants}
              initial="visible"
              whileInView={mounted ? "visible" : "visible"}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    Outdoor Stations
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src="/ip-touch---white-update.jpg"
                      alt="ABB-Welcome IP outdoor entrance panel"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Robust and stylish entrance panels with advanced identification options, ensuring secure access at every entry point.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mobile App & Cloud */}
            <motion.div
              variants={cardVariants}
              initial="visible"
              whileInView={mounted ? "visible" : "visible"}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                    Mobile App & Cloud
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src="/ip-touch-10.png"
                      alt="ABB-Welcome IP mobile app interface"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Stay connected at all times with secure cloud access — no complex network configuration required.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ideal Applications Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="visible"
            whileInView={mounted ? "visible" : "visible"}
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ideal Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect for a wide range of residential and commercial applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="visible"
                whileInView={mounted ? "visible" : "visible"}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-gray-200 hover:shadow-md transition-shadow text-center">
                  <CardContent className="p-6">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{app.title}</h3>
                    <p className="text-sm text-gray-600">{app.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

