"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Home, Zap, Shield, Users, Phone, Mail, Wifi, Settings, Lightbulb, Thermometer, Speaker, BatteryCharging, Cloud, Smartphone } from "lucide-react"
import Image from "next/image"

export default function ResidentialIOTPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const keyFeatures = [
    {
      title: "Wireless Connectivity",
      description: "Seamless communication between devices without extensive wiring",
      icon: "📶",
      features: ["Zigbee", "Z-Wave", "Bluetooth Mesh", "Wi-Fi Integration"]
    },
    {
      title: "Retrofit Compatibility",
      description: "Easily integrate into existing homes without major renovations",
      icon: "🛠️",
      features: ["No Wall Chasing", "Quick Installation", "Minimal Disruption", "Scalable"]
    },
    {
      title: "Intuitive Touch Control",
      description: "Modern and responsive interface for effortless smart home management",
      icon: "👆",
      features: ["Customizable Scenes", "Gesture Control", "LED Indicators", "Haptic Feedback"]
    },
    {
      title: "Integrated Automation",
      description: "Centralized control for lighting, climate, security, and entertainment",
      icon: "⚙️",
      features: ["Lighting Automation", "Climate Management", "Security Integration", "Entertainment Control"]
    },
    {
      title: "Energy Efficiency",
      description: "Optimize energy consumption and reduce utility bills",
      icon: "⚡",
      features: ["Smart Scheduling", "Presence Detection", "Energy Monitoring", "Automated Shut-off"]
    }
  ]

  const legrandFeatures = [
    {
      title: "Seamless Transformation",
      description: "Retrofitting Legrand IoT seamlessly upgrades conventional spaces into smart environments, leveraging IoT-enabled devices, wireless connectivity, and cloud integration.",
      icon: "🔄"
    },
    {
      title: "Enhanced Experience",
      description: "The integration brings benefits like energy efficiency, personalized comfort through automation, and remote control, improving convenience and well-being.",
      icon: "✨"
    },
    {
      title: "Future-Ready Evolution",
      description: "Beyond its immediate impact, retrofitting Legrand IoT paves the way for broader smart ecosystems, potential AI integration, and sustainable living practices.",
      icon: "🚀"
    }
  ]

  const retrofitProcess = [
    {
      step: "Assessment",
      description: "Our experts evaluate your current home setup and your smart home needs",
      icon: "🔍"
    },
    {
      step: "Design",
      description: "We design a tailored wireless IoT solution that fits your lifestyle and budget",
      icon: "📐"
    },
    {
      step: "Installation",
      description: "Quick and clean installation of wireless devices with minimal disruption",
      icon: "⚡"
    },
    {
      step: "Configuration",
      description: "Setting up your system, creating scenes, and ensuring seamless operation",
      icon: "⚙️"
    },
    {
      step: "Support",
      description: "Ongoing support and maintenance to keep your smart home running perfectly",
      icon: "📞"
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
      description: "IoT ensures long-term compatibility and updates",
      icon: "🌐"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <Wifi className="w-4 h-4 mr-2" />
                Wireless Solution With Retrofit Option
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Residential IoT
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Transform Your Home with Smart Wireless Solutions
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
                  alt="Wireless IoT Smart Home Device"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IoT Introduction Section */}
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
              IOT
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Retrofitting IoT technology offers a revolutionary approach to upgrading conventional spaces into intelligent, connected environments. By seamlessly integrating Legrand's cutting-edge IoT solutions, existing homes and businesses can be transformed into energy-efficient, convenient, and secure smart spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legrand IoT Features Section */}
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
              Key Benefits of Legrand IoT Retrofit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Legrand IoT solutions transform conventional spaces into intelligent environments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {legrandFeatures.map((feature, index) => (
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
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
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
              Key Features of Our IoT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive wireless home automation features for complete control and comfort
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="flex flex-wrap gap-2">
                      {feature.features.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retrofit Process Section */}
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
              Our Retrofit Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to transform your home into a smart, connected environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {retrofitProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.step}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of a Smart Wireless Home
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why IoT solutions are the smart choice for modern living
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
                <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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








