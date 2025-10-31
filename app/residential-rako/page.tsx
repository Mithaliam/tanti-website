"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Home, Zap, Shield, Users, Phone, Mail, Settings, Lightbulb, Thermometer, Speaker, BatteryCharging, Cloud, Smartphone, Wrench } from "lucide-react"
import Image from "next/image"

export default function ResidentialRakoPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const keyFeatures = [
    {
      title: "Flush Mount Technology",
      description: "Cutting-edge digital dimming technology for seamless integration",
      icon: "⚡",
      features: ["Discrete Installation", "No Wall Chasing", "Minimal Disruption", "Professional Finish"]
    },
    {
      title: "Smart Lighting Controls",
      description: "Advanced control systems for diverse lighting applications",
      icon: "💡",
      features: ["Digital Dimming", "Scene Control", "Energy Efficiency", "Smooth Operation"]
    },
    {
      title: "Multi-Protocol Support",
      description: "Compatible with various automation protocols and standards",
      icon: "🔗",
      features: ["DALI Support", "KNX Integration", "0-10V Control", "CE & UKCA Certified"]
    },
    {
      title: "Expert Support",
      description: "Comprehensive support from experienced team and trained dealers",
      icon: "👥",
      features: ["24/7 Support", "Trained Dealers", "Project Planning", "Technical Assistance"]
    }
  ]

  const rakoBenefits = [
    {
      title: "Reliable Performance",
      description: "Consistent and dependable operation for all your lighting needs",
      icon: "🛡️"
    },
    {
      title: "Easy Installation",
      description: "Quick and clean installation with minimal disruption to your home",
      icon: "🔧"
    },
    {
      title: "Energy Efficient",
      description: "Reduce energy consumption while maintaining perfect lighting control",
      icon: "⚡"
    },
    {
      title: "Future-Proof",
      description: "Designed to work with current and future lighting technologies",
      icon: "🚀"
    },
    {
      title: "Professional Quality",
      description: "High-quality components built to last in residential environments",
      icon: "⭐"
    }
  ]

  const productRange = [
    {
      title: "Dimmer Modules",
      description: "Advanced digital dimming modules for various lamp types",
      icon: "🎛️",
      specs: ["0-10V Control", "DALI Compatible", "CE Certified"]
    },
    {
      title: "Control Interfaces",
      description: "Intuitive control interfaces for seamless operation",
      icon: "📱",
      specs: ["Touch Control", "Scene Setting", "Remote Access"]
    },
    {
      title: "Installation Accessories",
      description: "Complete range of accessories for professional installation",
      icon: "🔌",
      specs: ["Terminal Blocks", "Mounting Hardware", "Cable Management"]
    }
  ]

  const installationProcess = [
    {
      step: "Assessment",
      description: "Evaluate your current lighting setup and requirements",
      icon: "🔍"
    },
    {
      step: "Planning",
      description: "Design the optimal flush mount solution for your space",
      icon: "📐"
    },
    {
      step: "Installation",
      description: "Professional installation with minimal disruption",
      icon: "⚡"
    },
    {
      step: "Configuration",
      description: "Set up scenes and customize your lighting experience",
      icon: "⚙️"
    },
    {
      step: "Support",
      description: "Ongoing support from our expert team and dealer network",
      icon: "📞"
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
                <Settings className="w-4 h-4 mr-2" />
                Reliable Flush Mount Automation Solution
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Rako
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Smart Lighting Controls for Modern Homes
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Products
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
                  alt="Luxurious Bedroom with Rako Automation"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/80 p-3 rounded-lg">
                    <div className="text-white text-sm font-semibold">Rako Device</div>
                    <div className="text-xs text-gray-300">Flush Mount Module</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rako Introduction Section */}
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
              Rako
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Flush mount actuators are at the forefront of Rako's smart lighting controls, offering cutting-edge digital dimming technology to address the diverse requirements of various applications. We understand that project planning can be daunting, given the wide range of lamp types and fixtures available today. With our extensive product range, backed by a highly experienced support team and a network of trained dealers, you'll always find someone ready and eager to assist.
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
              Key Features of Rako Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced flush mount technology for seamless home automation
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

      {/* Product Range Section */}
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
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your smart lighting needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {productRange.map((product, index) => (
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
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {spec}
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
              Benefits of Rako Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why choose Rako for your smart lighting needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rakoBenefits.map((benefit, index) => (
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

      {/* Installation Process Section */}
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
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional installation with minimal disruption to your home
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {installationProcess.map((step, index) => (
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








