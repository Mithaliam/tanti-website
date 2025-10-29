"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function DigitalMarketingPage() {
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const services = [
    {
      id: "web-design",
      title: "Web Design",
      icon: "🖥️",
      services: [
        "WordPress Design",
        "Magento Design", 
        "Shopify Design",
        "Custom Development",
        "Site Maintenance"
      ],
      cta: "More Web Design →"
    },
    {
      id: "ppc",
      title: "Pay Per Click Advertising",
      icon: "💰",
      services: [
        "Google Ads",
        "Facebook Ads",
        "Ecommerce",
        "Remarketing",
        "Landing Pages"
      ],
      cta: "More Pay Per Click →"
    },
    {
      id: "seo",
      title: "Search Engine Optimization",
      icon: "📈",
      services: [
        "Local SEO",
        "Ecommerce SEO",
        "National SEO",
        "Blogging",
        "Technical SEO Audit",
        "Franchise SEO"
      ],
      cta: "More Organic SEO →"
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with dark blue/teal overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        {/* Blurred office background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 blur-sm"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"%3E%3Crect fill=\"%234a5568\" width=\"1200\" height=\"800\"/%3E%3Crect fill=\"%236b7280\" x=\"200\" y=\"100\" width=\"300\" height=\"200\" rx=\"10\"/%3E%3Crect fill=\"%23737475\" x=\"600\" y=\"200\" width=\"250\" height=\"150\" rx=\"8\"/%3E%3Crect fill=\"%23555656\" x=\"100\" y=\"400\" width=\"200\" height=\"120\" rx=\"6\"/%3E%3Crect fill=\"%236b7280\" x=\"700\" y=\"450\" width=\"180\" height=\"100\" rx=\"5\"/%3E%3C/svg%3E')"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Content Area */}
        <div className="flex-1 px-8 py-16">
          {/* Main Title */}
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Solutions
            </h1>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
              >
                {/* Service Icon */}
                <div className="text-6xl mb-6 text-yellow-400 text-center">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {service.title}
                </h3>

                {/* Services List */}
                <ul className="space-y-3 mb-8">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="text-white/90 text-lg flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Call to Action */}
                <div className="text-center">
                  <button className="text-yellow-400 font-semibold text-lg hover:text-yellow-300 transition-colors">
                    {service.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Book Meeting */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 bg-yellow-400 flex flex-col items-center justify-center relative"
        >
          {/* Profile Picture */}
          <div className="absolute top-8">
            <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                👨‍💼
              </div>
            </div>
          </div>

          {/* Vertical Text */}
          <div className="transform -rotate-90 whitespace-nowrap">
            <span className="text-black font-bold text-xl tracking-wider">
              Book Meeting
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
