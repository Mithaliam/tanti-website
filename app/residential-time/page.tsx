"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResidentialTimePage() {
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }

  const dailyScenarios = [
    {
      time: "3:00 AM",
      cct: "2700K",
      dimming: "0%",
      title: "Deep Night Rest",
      description: "Complete darkness or minimal warm light for undisturbed sleep",
      icon: "😴",
      color: "from-gray-800 to-gray-900"
    },
    {
      time: "6:00 AM",
      cct: "3300K",
      dimming: "0%",
      title: "Gentle Wake-Up",
      description: "Subtle pre-dawn light to gradually prepare for the day",
      icon: "🌅",
      color: "from-orange-200 to-orange-300"
    },
    {
      time: "9:00 AM",
      cct: "4000K",
      dimming: "100%",
      title: "Morning Focus",
      description: "Bright, neutral white light for alertness and daily tasks",
      icon: "💡",
      color: "from-blue-100 to-blue-200"
    },
    {
      time: "12:00 PM",
      cct: "6000K",
      dimming: "100%",
      title: "Midday Energy",
      description: "Cool, bright light mimicking natural midday sun for peak energy",
      icon: "☀️",
      color: "from-yellow-100 to-yellow-200"
    },
    {
      time: "3:00 PM",
      cct: "4000K",
      dimming: "50%",
      title: "Afternoon Transition",
      description: "Softer, dimmed neutral light for a gentle shift from peak brightness",
      icon: "🌥️",
      color: "from-gray-100 to-gray-200"
    },
    {
      time: "6:00 PM",
      cct: "3000K",
      dimming: "50%",
      title: "Evening Comfort",
      description: "Warm, inviting light for relaxation and social gatherings",
      icon: "🌆",
      color: "from-orange-100 to-orange-200"
    },
    {
      time: "9:00 PM",
      cct: "2700K",
      dimming: "10%",
      title: "Late Evening Wind-Down",
      description: "Very dim, warm light to prepare the body for sleep",
      icon: "🌙",
      color: "from-purple-100 to-purple-200"
    },
    {
      time: "10:00 PM",
      cct: "2700K",
      dimming: "0%",
      title: "Bedtime",
      description: "Lights off or minimal ambient light for a peaceful night",
      icon: "🛏️",
      color: "from-gray-800 to-gray-900"
    }
  ]

  const timeFeatures = [
    {
      title: "Schedules",
      description: "Program specific events to occur at predefined times or intervals, ensuring your home operates seamlessly",
      icon: "⏰",
      features: [
        "Daily Routines: Automate lights, blinds, and climate based on your daily schedule",
        "Weekly Programs: Set different scenarios for weekdays and weekends",
        "Special Events: Configure one-time or recurring events for holidays or gatherings"
      ]
    },
    {
      title: "Sequences",
      description: "Create a series of actions that execute in a specific order, enhancing comfort and convenience",
      icon: "▶️",
      features: [
        "Morning Scene: Gradually open blinds, turn on lights, and adjust thermostat",
        "Away Mode: Turn off all lights, lower thermostat, and activate security systems",
        "Movie Night: Dim lights, close blinds, and turn on entertainment system"
      ]
    },
    {
      title: "Calendar Based",
      description: "Integrate with calendars to trigger events based on dates, seasons, or specific calendar entries",
      icon: "📅",
      features: [
        "Seasonal Adjustments: Automatically adapt lighting and heating based on sunrise/sunset times",
        "Holiday Modes: Implement special automation for public holidays",
        "Event Synchronization: Link home automation to your personal or public calendars"
      ]
    }
  ]

  const benefits = [
    {
      title: "Enhanced Well-being",
      description: "Aligns lighting with your body's natural circadian rhythm, improving sleep and mood",
      icon: "✨",
      percentage: "40%"
    },
    {
      title: "Effortless Convenience",
      description: "Lights adjust automatically, eliminating the need for manual intervention",
      icon: "⚙️",
      percentage: "100%"
    },
    {
      title: "Significant Energy Savings",
      description: "Optimizes light usage, dimming and switching off when not needed",
      icon: "⚡",
      percentage: "60%"
    },
    {
      title: "Personalized Ambiance",
      description: "Create the perfect atmosphere for any time of day or activity",
      icon: "🎨",
      percentage: "24/7"
    }
  ]

  const technologies = [
    {
      name: "Color Temperature Control (CCT)",
      description: "Seamlessly shift between warm (2700K) and cool (6000K) white light",
      icon: "🌡️"
    },
    {
      name: "Precise Dimming (1%-100%)",
      description: "Smooth, flicker-free intensity control for perfect brightness",
      icon: "🔆"
    },
    {
      name: "Intelligent Scheduling",
      description: "Program lights to follow your daily routine automatically",
      icon: "⏰"
    },
    {
      name: "Integrated Sensors",
      description: "Optional sensors for occupancy and daylight harvesting to further optimize",
      icon: "📡"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 opacity-95"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-300 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-cyan-300 rounded-full opacity-20 animate-bounce"></div>
        
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto px-4"
          variants={heroVariants}
          initial="visible"
          animate="visible"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Control Lights Without Your Intervention
            <span className="block text-4xl md:text-5xl mt-2">And Automate The Operations</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate comfort and efficiency with intelligent lighting that adapts to your daily rhythm, 
            creating the perfect ambiance for every moment without any manual intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Explore Time Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </section>

      {/* KNX-Time Technology Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              KNX-Time Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              KNX-Time serves as a foundational element within the KNX building automation system, providing precise time-driven control
              and automation for a wide range of devices and systems within a building. It empowers users to schedule events, establish
              timers, and activate actions at specific times or intervals, rendering it a potent tool for optimizing energy efficiency, elevating
              comfort, and automating routine tasks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {timeFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group"
                variants={cardVariants}
                initial="visible"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-6 text-white">
                    <div className="text-6xl mb-4 text-center">{feature.icon}</div>
                    <h3 className="text-2xl font-bold text-center">{feature.title}</h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start text-sm text-gray-600">
                          <span className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
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

      {/* Daily Lighting Journey Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Daily Lighting Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience how your lighting automatically adapts throughout the day, creating the perfect ambiance for every moment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.time}
                className="group"
                variants={cardVariants}
                initial="visible"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <div className={`h-32 bg-gradient-to-br ${scenario.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl drop-shadow-lg">{scenario.icon}</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{scenario.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{scenario.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">{scenario.time}</Badge>
                      <Badge variant="secondary" className="text-xs">{scenario.cct}</Badge>
                      <Badge variant="secondary" className="text-xs">{scenario.dimming}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits of Time-Based Automation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your home with intelligent time-based lighting that offers more than just convenience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="group"
                variants={cardVariants}
                initial="visible"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-3xl">{benefit.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">{benefit.percentage}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Time Control Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powered by cutting-edge technology for seamless, intelligent lighting control
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={cardVariants}
                initial="visible"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-3xl">{tech.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeInVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Automate Your Time?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how KNX-Time can transform your home with intelligent, scheduled automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Get a Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg">
                View Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
