"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Home, Zap, Shield, Users, Phone, Mail, Settings, Lightbulb, Thermometer, Speaker, BatteryCharging, Cloud, Smartphone, Wrench, Wifi } from "lucide-react"
import Image from "next/image"

export default function ResidentialCasambiPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const keyFeatures = [
    {
      title: "Wireless Control",
      description: "Bluetooth Low Energy (BLE) mesh network for reliable communication",
      icon: "📶",
      features: ["No New Wiring", "Scalable System", "Future-Proof Technology", "Secure Network"]
    },
    {
      title: "Intuitive App",
      description: "User-friendly interface for complete control over your lighting",
      icon: "📱",
      features: ["Scene Creation", "Dimming & Tuning", "Timer Functions", "Remote Access"]
    },
    {
      title: "Flexibility & Scalability",
      description: "Easily expand your system and integrate with other smart devices",
      icon: "⚙️",
      features: ["Modular Design", "Third-Party Integration", "Firmware Updates", "Multi-User Access"]
    },
    {
      title: "Energy Efficiency",
      description: "Optimize lighting usage to reduce energy consumption and costs",
      icon: "⚡",
      features: ["Daylight Harvesting", "Occupancy Sensors", "Scheduling", "Consumption Monitoring"]
    }
  ]

  const applicationAreas = [
    {
      title: "Living Rooms",
      description: "Create the perfect ambiance for any occasion",
      image: "/placeholder.jpg"
    },
    {
      title: "Bedrooms",
      description: "Personalized lighting for comfort and relaxation",
      image: "/placeholder.jpg"
    },
    {
      title: "Kitchens",
      description: "Task lighting and mood settings for culinary spaces",
      image: "/placeholder.jpg"
    },
    {
      title: "Outdoor Spaces",
      description: "Illuminate gardens, patios, and pathways",
      image: "/placeholder.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-r from-blue-700 to-purple-600">
        <Image
          src="/placeholder.jpg"
          alt="Casambi Smart Lighting"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 bg-white text-blue-700">
              Wireless Lighting Control
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Casambi: Intelligent Wireless Lighting Solutions
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Experience unparalleled flexibility and control with Casambi's cutting-edge Bluetooth mesh technology.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-3 text-lg rounded-full shadow-lg">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 text-lg rounded-full shadow-lg">
                Explore Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Casambi Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Casambi
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Casambi is a wireless lighting control system that revolutionizes how lighting is managed in homes, offices, and commercial spaces. Offering flexibility, ease of use, and energy efficiency, Casambi allows users to effortlessly control and customize lighting through a smartphone or tablet app. Its scalability and integration capabilities make it a versatile solution for creating smart and efficient lighting environments.
          </motion.p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Key Features & Benefits
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center space-x-4 p-0 mb-4">
                    <div className="text-4xl text-blue-600">{feature.icon}</div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-0 mb-4">
                    <CardDescription className="text-gray-600 mb-4">{feature.description}</CardDescription>
                    <ul className="space-y-2 text-gray-700">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Casambi Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            How Casambi Works
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Casambi utilizes a robust Bluetooth Low Energy (BLE) mesh network, where every Casambi-enabled luminaire or device acts as a node. This creates a self-healing, scalable network that ensures reliable communication and control throughout your home, without the need for a central gateway or extensive new wiring.
          </motion.p>
          <motion.div
            className="relative w-full h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/placeholder.jpg"
              alt="How Casambi Works"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <p className="text-white text-2xl md:text-3xl font-bold">Seamless Wireless Mesh Network</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Areas Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Application Areas
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={area.image}
                      alt={area.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardHeader className="p-6 pb-0">
                    <CardTitle className="text-xl font-semibold text-gray-900">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-2 flex-grow">
                    <CardDescription className="text-gray-600">{area.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-purple-600 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Transform Your Home Today With Our Customized Solution
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us today to learn more about our Casambi solutions and get a personalized quote for your smart lighting project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="bg-white text-blue-700 hover:bg-blue-100 px-10 py-4 text-xl rounded-full shadow-lg">
              Contact Us <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Connect With Us</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    +91 962 022 0491
                  </p>
                  <p className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    +91 960 645 7175
                  </p>
                  <p className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" />
                    mail@tanti.co
                  </p>
                  <p className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" />
                    projects@tanti.co
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Service Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Emergency Service Only</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Response</h3>
                <div className="space-y-2 text-gray-600">
                  <p>24/7 Emergency Support</p>
                  <p>Same Day Service Available</p>
                  <p>Free Consultation</p>
                  <p>Warranty on All Work</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}










