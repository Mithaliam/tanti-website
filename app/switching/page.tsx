"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SwitchingPage() {
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const smartSwitchFeatures = [
    {
      title: "Floor Lighting Control",
      description: "Intuitive control for floor lighting with smart switching capabilities",
      icon: "💡",
      features: ["On/Off Control", "Dimming", "Scene Setting", "Scheduling"]
    },
    {
      title: "Climate Management",
      description: "Smart temperature control with 21.0°C display and adjustment controls",
      icon: "🌡️",
      features: ["Temperature Display", "Adjustment Controls", "Fan Control", "Mode Switching"]
    },
    {
      title: "Privacy & Security",
      description: "Enhanced privacy controls with dedicated privacy function",
      icon: "🔒",
      features: ["Privacy Mode", "Security Settings", "Access Control", "Monitoring"]
    },
    {
      title: "Service Access",
      description: "Quick access to service options for maintenance and assistance",
      icon: "👨‍🔧",
      features: ["Service Requests", "Maintenance Alerts", "Technical Support", "Remote Assistance"]
    },
    {
      title: "Bathroom Control",
      description: "Dedicated bathroom lighting and appliance control",
      icon: "🚿",
      features: ["Lighting Control", "Ventilation", "Heating", "Water Management"]
    },
    {
      title: "ABB Integration",
      description: "Seamless integration with ABB smart home systems",
      icon: "⚙️",
      features: ["ABB Compatibility", "System Integration", "Protocol Support", "Advanced Control"]
    }
  ]

  const switchingSolutions = [
    {
      title: "Smart Lighting Control",
      description: "Automate and control your lights with precision, enhancing comfort and energy efficiency.",
      features: ["On/Off Control", "Dimming", "Scene Setting", "Scheduling"]
    },
    {
      title: "Power Outlet Management",
      description: "Gain control over your power outlets to manage appliances and reduce standby power consumption.",
      features: ["Remote On/Off", "Energy Monitoring", "Scheduling", "Overload Protection"]
    },
    {
      title: "Curtain & Blind Automation",
      description: "Integrate motorized curtains and blinds for automated privacy, daylight management, and energy saving.",
      features: ["Open/Close Control", "Position Presets", "Scheduling", "Sunlight Tracking"]
    },
    {
      title: "HVAC Integration",
      description: "Seamlessly integrate your heating, ventilation, and air conditioning systems for optimal climate control.",
      features: ["Temperature Control", "Mode Switching", "Fan Speed Control", "Zone Management"]
    }
  ]

  const technologies = [
    { name: "KNX", icon: "⚙️" },
    { name: "DALI", icon: "💡" },
    { name: "ABB", icon: "🏢" },
    { name: "Z-Wave", icon: "📡" },
    { name: "Zigbee", icon: "⚡" },
    { name: "IoT", icon: "🌐" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={heroVariants}
              initial="visible"
              animate="visible"
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Switches Which Are Just
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold text-amber-300">
                  WOW...
                </h2>
                <h3 className="text-3xl lg:text-4xl font-bold text-blue-200">
                  for Comfortable Living Spaces
                </h3>
              </div>
              <p className="text-xl text-blue-100 max-w-lg">
                Experience the future of home control with our intelligent switching solutions that bring convenience, efficiency, and elegance to your living space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                  Explore Solutions
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                  Get Free Consultation
                </Button>
              </div>
            </motion.div>
            <motion.div
              variants={heroVariants}
              initial="visible"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl text-white/60">🔌</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KNX Switching Information Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            variants={cardVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <Card>
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                <CardTitle className="text-3xl font-bold">Switching</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  KNX switching refers to the intelligent control and automation of electrical loads, such as lighting, heating, ventilation, and other electrical appliances, using the KNX building automation system. With KNX switching, users can remotely and automatically manage the status of these loads based on various inputs, schedules, and predefined scenarios, leading to enhanced energy efficiency, convenience, and comfort.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Smart Switch Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={cardVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Switch Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advanced features of our intelligent switching solutions designed for modern living
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartSwitchFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                initial="visible"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-3xl">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.features.map((item, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600 justify-center">
                          <span className="w-4 h-4 text-green-500 mr-2">✓</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Switching Solutions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={cardVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Switching Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive switching solutions designed to transform every aspect of your electrical control
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {switchingSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                variants={cardVariants}
                initial="visible"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-t-lg">
                    <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {solution.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="secondary" className="justify-center py-2">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full">
                        Learn More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={cardVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We leverage a wide spectrum of leading technologies including KNX, DALI, ABB, Z-Wave, Zigbee, and IoT to deliver holistic switching solutions tailored to diverse customer requirements.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Discover More
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={cardVariants}
                initial="visible"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
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
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Transform Your Home Today With Our Customized Solution</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your switching automation needs and receive a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                View Our Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}













