"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Home, Zap, Shield, Users, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function ResidentialCoveragePage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const coverageAreas = [
    {
      title: "Lighting Control",
      description: "Complete lighting automation without central wiring",
      icon: "💡",
      features: ["Smart Switches", "Dimmer Controls", "Scene Management", "Energy Efficiency"]
    },
    {
      title: "Climate Control",
      description: "Intelligent temperature and ventilation management",
      icon: "🌡️",
      features: ["HVAC Integration", "Zone Control", "Energy Monitoring", "Comfort Optimization"]
    },
    {
      title: "Security Systems",
      description: "Advanced security and access control solutions",
      icon: "🔒",
      features: ["Access Control", "Surveillance", "Alarm Systems", "Remote Monitoring"]
    },
    {
      title: "Entertainment",
      description: "Integrated home entertainment and multimedia",
      icon: "🎵",
      features: ["Audio Distribution", "Video Systems", "Smart TVs", "Multi-room Audio"]
    }
  ]

  const retrofitBenefits = [
    {
      title: "No Central Wiring Required",
      description: "Transform existing homes without major construction work",
      icon: "⚡"
    },
    {
      title: "Seamless Integration",
      description: "Works with existing electrical infrastructure",
      icon: "🔗"
    },
    {
      title: "Future-Proof Technology",
      description: "KNX standard ensures long-term compatibility",
      icon: "🚀"
    },
    {
      title: "Energy Efficient",
      description: "Reduce energy consumption by up to 30%",
      icon: "🌱"
    }
  ]

  const serviceAreas = [
    "Bangalore Urban",
    "Bangalore Rural", 
    "Electronic City",
    "Whitefield",
    "Sarjapur",
    "Hebbal",
    "Yelahanka",
    "Rajajinagar",
    "Malleshwaram",
    "Indiranagar",
    "Koramangala",
    "JP Nagar"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              <Home className="w-4 h-4 mr-2" />
              Residential Coverage
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              KNX Retrofit Solution
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              A KNX retrofit solution refers to the process of upgrading an existing building's electrical and automation system to integrate KNX technology. KNX is a standardized communication protocol for home and building automation, which allows various devices and systems to communicate and work together seamlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Coverage Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Service Areas
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Areas Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Complete Residential Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive KNX retrofit solutions covering all aspects of home automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverageAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
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

      {/* Retrofit Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose KNX Retrofit?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your existing home into a smart home without the hassle of major renovations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {retrofitBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Service Coverage Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide KNX retrofit services across Bangalore and surrounding areas
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="text-center hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="w-full justify-center">
                      {area}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transform Your Home
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Today With Our Customized Solution
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.jpg"
                  alt="Tanti Team"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-4 right-4">
                  <div className="bg-green-500 p-3 rounded-full shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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










