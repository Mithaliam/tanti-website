"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Home, Zap, Shield, Users, Phone, Mail, Lightbulb, Thermometer, Music, Smartphone, Laptop } from "lucide-react"
import Image from "next/image"

export default function ResidentialABBFHPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const keyFeatures = [
    {
      title: "Lighting Control",
      description: "Intelligent lighting management for ambiance and energy saving",
      icon: "💡",
      features: ["Smart Switches", "Dimmer Controls", "Scene Management", "Energy Monitoring"]
    },
    {
      title: "Climate Control",
      description: "Automated temperature and humidity regulation for comfort",
      icon: "🌡️",
      features: ["HVAC Integration", "Zone Control", "Smart Thermostats", "Weather Adaptation"]
    },
    {
      title: "Security & Safety",
      description: "Advanced security systems for peace of mind",
      icon: "🛡️",
      features: ["Access Control", "Surveillance", "Alarm Systems", "Emergency Response"]
    },
    {
      title: "Entertainment",
      description: "Seamless integration of audio and video systems",
      icon: "🎵",
      features: ["Multi-room Audio", "Video Distribution", "Smart TVs", "Streaming Integration"]
    }
  ]

  const benefits = [
    {
      title: "Enhanced Comfort",
      description: "Personalized automation creates the perfect living environment",
      icon: "🏠"
    },
    {
      title: "Energy Efficiency",
      description: "Reduce energy consumption by up to 40% with smart controls",
      icon: "⚡"
    },
    {
      title: "Increased Security",
      description: "Advanced security features protect your home and family",
      icon: "🔒"
    },
    {
      title: "Convenience & Control",
      description: "Control everything from wall switches, laptop, or smartphone",
      icon: "📱"
    },
    {
      title: "Future-Proof Technology",
      description: "ABB-free@home® ensures long-term compatibility and updates",
      icon: "🚀"
    }
  ]

  const controlMethods = [
    {
      title: "Wall Switches",
      description: "Intuitive touch panels for easy local control",
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Smartphone App",
      description: "Control your home from anywhere with the ABB-free@home® app",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Web Interface",
      description: "Manage your home automation through any web browser",
      icon: <Laptop className="w-8 h-8 text-blue-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <Home className="w-4 h-4 mr-2" />
                ABB-free@home® Solution
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                ABB F@H Solution
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Complete Home Automation for a Smarter Living
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.jpg"
                  alt="Smart Home Living Room"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABB F@H Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              ABB F@H
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Experience the ultimate in home automation with ABB-free@home®. This smart system turns your house or apartment into a
              fully intelligent home, offering control over blinds, lighting, heating, air conditioning, door communication, and personalized
              scenes. You can easily manage it using wall switches, your laptop, or smartphone. It&apos;s not only incredibly convenient and
              comfortable but also highly energy-efficient. Plus, it&apos;s cost-effective compared to traditional electrical installations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
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
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive home automation features for complete control and comfort
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
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
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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

      {/* Control Methods Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Multiple Control Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Control your smart home the way that suits you best
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {controlMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of ABB F@H
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why ABB-free@home® is the smart choice for modern living
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* Call to Action Banner */}
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
                  alt="Tanti Team Meeting"
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






