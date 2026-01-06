"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

export default function KNXInfoSection() {
  const [showOverlay, setShowOverlay] = useState(false)
  const { scrollYProgress } = useScroll()
  
  // Transform scroll progress to move cards upward only when overlay is shown
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  // Check if Solutions dropdown is open or if we're on the KNX section
  useEffect(() => {
    // Ensure we're on client side
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    const handleHashChange = () => {
      if (window.location.hash === '#knx-solutions') {
        setShowOverlay(true)
      }
    }

    // Check for Solutions dropdown state
    const checkDropdownState = () => {
      const solutionsDropdown = document.querySelector('[data-dropdown-id="solutions"]')
      const mobileSolutionsDropdown = document.querySelector('[data-dropdown-id="mobileSolutions"]')
      
      if (solutionsDropdown?.classList.contains('active') || 
          mobileSolutionsDropdown?.classList.contains('active') ||
          window.location.hash === '#knx-solutions') {
        setShowOverlay(true)
      } else {
        setShowOverlay(false)
      }
    }

    // Check initial state after mount
    handleHashChange()
    checkDropdownState()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    // Listen for dropdown state changes
    const observer = new MutationObserver(checkDropdownState)
    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['class'],
      subtree: true 
    })

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      observer.disconnect()
    }
  }, [])

  const knxCards = [
    {
      id: "knx-solution",
      title: "KNX Solution",
      gradient: "from-blue-500 to-cyan-500",
      content: "KNX (Konnex) is a standardized communication protocol used for building automation and control. In KNX systems, central wiring is a fundamental concept that forms the backbone of the entire automation infrastructure.",
      features: ["Switching", "RGB", "Dimming", "Time"]
    },
    {
      id: "knx-retrofit",
      title: "KNX Retrofit Solution", 
      gradient: "from-gray-600 to-gray-800",
      content: "A KNX retrofit solution refers to the process of upgrading an existing building's electrical system to automation system. by which you can control and manage your home seamlessly from anywhere without pulling wires to central DB. Just loop KNX cable to control boxes.",
      features: [],
      showKnowMore: true
    }
  ]

  return (
    <>
      {/* Fixed overlay that moves up when scrolling - show when Solutions dropdown is open */}
      {showOverlay && (
        <motion.div 
          style={{ y, opacity }}
          className="fixed inset-0 z-50 pointer-events-none"
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="relative h-full flex items-center justify-center p-4">
            <div className="max-w-md w-full max-h-[80vh] overflow-y-auto scrollbar-hide">
              <div className="space-y-4">
                {knxCards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden pointer-events-auto"
                  >
                    {/* Card Header */}
                    <div className={`bg-gradient-to-r ${card.gradient} p-4`}>
                      <h2 className="text-xl font-bold text-white">
                        {card.title}
                      </h2>
                    </div>

                    {/* Card Content */}
                    <div className="p-4">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        {card.content}
                      </p>

                      {/* Horizontal Line Separator */}
                      {card.id === "knx-solution" && (
                        <div className="border-t border-gray-300 my-4"></div>
                      )}

                      {/* Features Grid */}
                      {card.features.length > 0 && (
                        <div className="grid grid-cols-2 gap-2">
                          {card.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                              className="bg-gray-100 rounded-lg p-2 text-center"
                            >
                              <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mx-auto mb-1"></div>
                              <span className="text-xs font-medium text-gray-700">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Know More Button */}
                      {card.showKnowMore && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + 0.2 }}
                          className="mt-4"
                        >
                          <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                            Know more
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Regular page section for navigation anchor */}
      <section id="knx-solutions" className="py-8 px-4 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              KNX Automation Solutions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of KNX-based automation solutions designed to transform your space into a smart, efficient, and secure environment.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Get in touch with our experts to discuss your KNX automation needs and receive a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Our Projects
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

