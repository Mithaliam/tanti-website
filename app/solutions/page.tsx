"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function SolutionsPage() {
  // State for modal - stores the active modal content key
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const handleServiceClick = (serviceId: string, item: string) => {
    // Generate a unique key for this modal
    const modalKey = `${serviceId}-${item}`
    
    // Toggle modal - if clicking same item, close it; otherwise open new one
    if (activeModal === modalKey) {
      setActiveModal(null)
    } else {
      setActiveModal(modalKey)
    }
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  // Get modal content based on active modal key
  const getModalContent = () => {
    if (!activeModal) return null

    // The modal key format is "serviceId-item", but items can have spaces
    // So we need to find the first occurrence of a service ID prefix
    // Check longer IDs first to avoid partial matches (e.g., "commercial-av" before "commercial")
    const serviceIds = ["home-entertainment", "commercial-av", "energy-management", "central-management", "residential", "commercial", "security"]
    let serviceId = ""
    let item = ""
    
    // Find which service ID matches (check longer IDs first)
    for (const sid of serviceIds) {
      if (activeModal.startsWith(sid + "-")) {
        serviceId = sid
        item = activeModal.substring(sid.length + 1) // Remove "serviceId-" prefix
        break
      }
    }

    if (!serviceId) return null

    // Helper function to check if modal matches
    const matches = (sid: string, itm: string) => serviceId === sid && item === itm

    // KNX Information
    if (matches("residential", "Wired Lighting Automation")) {
      return {
        title: "KNX Solution",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              KNX (Konnex) is a standardized communication protocol used for building automation and control. In KNX systems, central wiring is a fundamental concept that forms the backbone of the entire automation infrastructure.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {["Switching", "RGB", "Dimming", "Time"].map((feat) => (
                <div key={feat} className="flex items-center bg-blue-100 rounded-lg px-4 py-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm text-blue-700 font-medium">{feat}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-blue-200 my-6"></div>
            <h4 className="text-xl font-semibold mb-4 text-blue-700">KNX Retrofit Solution</h4>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              A KNX retrofit solution refers to the process of upgrading an existing building's electrical system to automation system. by which you can control and manage your home seamlessly from anywhere without pulling wires to central DB. Just loop KNX cable to control boxes.
            </p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // Wireless Information
    if (matches("residential", "Wireless Lighting Automation")) {
      return {
        title: "Wireless Lighting Automation",
        content: (
          <>
            <h4 className="text-xl font-semibold mb-4 text-blue-700">Retrofit IoT</h4>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Wireless IoT solutions for smart home automation with easy installation and flexible control.
            </p>
            <div className="border-t border-blue-200 my-6"></div>
            <h4 className="text-xl font-semibold mb-4 text-blue-700">Flush Mount</h4>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Sleek flush mount solutions for modern homes with wireless connectivity and intuitive control.
            </p>
            <div className="border-t border-blue-200 my-6"></div>
            <h4 className="text-xl font-semibold mb-4 text-blue-700">Technologies</h4>
            <div className="space-y-3">
              {["Zigbee", "WiFi", "Bluetooth"].map((tech) => (
                <div key={tech} className="flex items-center bg-blue-100 rounded-lg px-4 py-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-base text-blue-700 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </>
        )
      }
    }

    // LMS Information
    if (matches("commercial", "LMS")) {
      return {
        title: "Lighting Management System",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              KNX-based Lighting Management System (LMS) with DALI Based Solutions and Day Light Harvesting for optimal energy efficiency and intelligent lighting control.
            </p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // BMS Information
    if (matches("commercial", "BMS Control")) {
      return {
        title: "Building Management System",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Comprehensive Building Management System (BMS) for integrated control of HVAC, lighting, security, and energy management. Companies: ABB Cylon, NETX Automation.
            </p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // Emergency Exit Information
    if (matches("commercial", "Emergency Exit Signage Lighting")) {
      return {
        title: "Emergency Exit Signage Lighting",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Critical safety lighting systems for emergency exits with battery backup and compliance with safety regulations.
            </p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // Intrusion Alarm Information
    if (matches("security", "Intrusion Alarm")) {
      return {
        title: "Intrusion Alarm",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Advanced intrusion detection systems with motion sensors, door/window contacts, and 24/7 monitoring capabilities.
            </p>
            <button className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-rose-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // Video Door Phone Information
    if (matches("security", "Video Door Phone")) {
      return {
        title: "Video Door Phone",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Smart video door phone systems with HD cameras, two-way audio, and mobile app integration for remote access control.
            </p>
            <button className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-rose-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // IP CCTV Information
    if (matches("security", "IP CCTV")) {
      return {
        title: "IP CCTV",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              High-definition IP surveillance systems with advanced features including:
            </p>
            <div className="space-y-3 mb-6">
              {["Face Recognition", "Intrusion Detection", "Number Plate Reading"].map((feat) => (
                <div key={feat} className="flex items-center bg-blue-100 rounded-lg px-4 py-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span className="text-base text-blue-700 font-medium">{feat}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-rose-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // Access Control Information
    if (matches("security", "Access Control")) {
      return {
        title: "Access Control",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Comprehensive access control systems with biometric authentication, card readers, and digital door locks for enhanced security.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center bg-blue-100 rounded-lg px-4 py-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                <span className="text-base text-blue-700 font-medium">Digital Door Locks</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-rose-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // Motorised Shutters Information
    if (matches("security", "Motorised Shutters")) {
      return {
        title: "Motorised Shutters",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Automated shutter systems for enhanced security and convenience with remote control and scheduling capabilities.
            </p>
            <button className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-rose-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // Zonal Audio Information
    if (matches("home-entertainment", "Zonal Audio")) {
      return {
        title: "Zonal Audio",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Multi-zone audio systems allowing independent music control in different areas of your home with wireless connectivity and high-quality sound.
            </p>
            <button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-violet-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // Home Theatre Information
    if (matches("home-entertainment", "Home Theatre")) {
      return {
        title: "Home Theatre",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Complete home theatre solutions with surround sound, 4K projection, and immersive audio-visual experiences for the ultimate entertainment setup.
            </p>
            <button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-violet-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // Conference Room Information
    if (matches("commercial-av", "Conference Room")) {
      return {
        title: "Conference Room",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Professional conference room solutions with video conferencing, presentation systems, and integrated audio-visual equipment for seamless meetings.
            </p>
            <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // PA System Information
    if (matches("commercial-av", "PA System")) {
      return {
        title: "PA System",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Public address systems for clear communication across large spaces with background music capabilities and emergency announcement features.
            </p>
            <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // LED and Video Wall Information
    if (matches("commercial-av", "LED and Video Wall")) {
      return {
        title: "LED and Video Wall",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Large format LED displays and video walls for digital signage, presentations, and immersive visual experiences in commercial environments.
            </p>
            <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // TV Over IP Information
    if (matches("commercial-av", "TV Over IP")) {
      return {
        title: "TV Over IP",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              IP-based television distribution systems for delivering content to multiple displays across your network with centralized control and management.
            </p>
            <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // ABB Ability Information
    if (matches("energy-management", "ABB Ability")) {
      return {
        title: "ABB Ability",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Advanced energy management platform providing real-time monitoring, analytics, and optimization of energy consumption across your facility.
            </p>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-amber-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // RTI Corp Information
    if (matches("central-management", "RTI Corp")) {
      return {
        title: "RTI Corp",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Professional control systems and automation solutions for residential and commercial environments with intuitive user interfaces.
            </p>
            <button className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // NETX Automation Information
    if (matches("central-management", "NETX Automation")) {
      return {
        title: "NETX Automation",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Comprehensive automation solutions integrating building management, security, and energy systems for seamless control and monitoring.
            </p>
            <button className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    // Logic Machine Information
    if (matches("central-management", "Logic Machine")) {
      return {
        title: "Logic Machine",
        content: (
          <>
            <p className="text-base text-blue-700 mb-6 leading-relaxed">
              Advanced automation controllers with KNX integration, web-based configuration, and extensive protocol support for complex automation scenarios.
            </p>
            <button className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all shadow-lg">
              Know more
            </button>
          </>
        )
      }
    }

    return null
  }

  const services = [
    {
      id: "residential",
      title: "Residential",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      ),
      services: ["Wired Lighting Automation", "Wireless Lighting Automation"],
      cta: "More Residential →",
      color: "from-green-400 to-green-600",
      darkColor: "from-green-600 to-green-700",
      bgColor: "bg-green-500",
      image: "/res%20sol.jpeg",
    },
    {
      id: "commercial",
      title: "Commercial",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      services: ["LMS", "BMS Control", "Emergency Exit Signage Lighting"],
      cta: "More Commercial →",
      color: "from-blue-400 to-blue-600",
      darkColor: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-500",
      image: "/commercial%20sol.jpeg",
    },
    {
      id: "security",
      title: "Security",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <circle cx="12" cy="16" r="1" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      services: ["Intrusion Alarm", "Video Door Phone", "IP CCTV", "Access Control", "Motorised Shutters"],
      cta: "More Security →",
      color: "from-red-400 to-red-600",
      darkColor: "from-red-600 to-red-700",
      bgColor: "bg-red-500",
      image: "/security%20sol.jpeg",
    },
    {
      id: "home-entertainment",
      title: "Home Entertainment",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
      services: ["Zonal Audio", "Home Theatre"],
      cta: "More Home Entertainment →",
      color: "from-purple-400 to-purple-600",
      darkColor: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-500",
      image: "/home%20sol.jpeg",
    },
    {
      id: "commercial-av",
      title: "Commercial AV",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      services: ["Conference Room", "PA System", "LED and Video Wall", "TV Over IP"],
      cta: "More Commercial AV →",
      color: "from-teal-400 to-teal-600",
      darkColor: "from-teal-600 to-teal-700",
      bgColor: "bg-teal-500",
      image: "/commercial%20av.jpeg",
    },
    {
      id: "energy-management",
      title: "Energy Management",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4m0-7v7m0-7h10a2 2 0 0 1 2 2v3c0 1.1-.9 2-2 2h-4m0-7v7" />
        </svg>
      ),
      services: ["ABB Ability"],
      cta: "More Energy Management →",
      color: "from-yellow-400 to-yellow-600",
      darkColor: "from-yellow-600 to-yellow-700",
      bgColor: "bg-yellow-500",
      image: "/energy%20management.jpeg",
    },
    {
      id: "central-management",
      title: "Central Management Server",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      services: ["RTI Corp", "NETX Automation", "Logic Machine"],
      cta: "More Central Management →",
      color: "from-indigo-400 to-indigo-600",
      darkColor: "from-indigo-600 to-indigo-700",
      bgColor: "bg-indigo-500",
      image: "/central%20management.jpeg",
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50" style={{ backgroundColor: '#E0F2F7' }}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
          Solutions
        </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Comprehensive automation solutions for residential, commercial, and security needs
        </p>
        </motion.div>

        {/* Modern Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
                <motion.div
                  key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div 
                className="h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100 flex flex-col relative group/card"
                style={{
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.15), 0 0 40px rgba(59, 130, 246, 0.1), 0 0 60px rgba(59, 130, 246, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.25), 0 0 50px rgba(59, 130, 246, 0.15), 0 0 70px rgba(59, 130, 246, 0.1), 0 8px 12px -2px rgba(0, 0, 0, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.15), 0 0 40px rgba(59, 130, 246, 0.1), 0 0 60px rgba(59, 130, 246, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Enhanced Header with Image - White and Blue Theme */}
                <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 relative overflow-hidden p-6 flex items-center justify-center">
                  {/* Background Image */}
                  {service.image && (
                    <div className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      </div>
                    )}

                  {/* Subtle blue overlay for theme */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
                      </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  {/* Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                      <div className="text-white text-lg">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-700 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Services List */}
                  <div className="flex-1">
                    <ul className="space-y-2.5">
                      {service.services.map((item, idx) => (
                        <motion.li
                          key={idx}
                          whileHover={{ x: 4 }}
                          className="text-blue-700 hover:text-blue-800 cursor-pointer transition-all duration-200 flex items-center group/item"
                          onClick={() => handleServiceClick(service.id, item)}
                        >
                          <motion.div
                            className="w-2 h-2 bg-blue-500 rounded-full mr-3"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="font-bold">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                          </div>
                        </div>
                        
            </motion.div>
          ))}
        </motion.div>
                      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeModal && getModalContent() && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-white via-gray-100 to-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-200 relative"
                style={{ background: 'linear-gradient(to bottom right, #ffffff, #f3f4f6, #ffffff)' }}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center text-blue-700 hover:text-blue-800 transition-all z-10"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                        </button>

                {/* Modal Body */}
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-blue-700 mb-6 pr-12">
                    {getModalContent()?.title}
                  </h2>
                  <div className="text-blue-700">
                    {getModalContent()?.content}
                  </div>
                    </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}