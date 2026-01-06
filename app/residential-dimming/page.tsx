"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResidentialDimmingPage() {
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

  const dimmingTechnologies = [
    {
      name: "Analog Dimming",
      description: "Traditional 0-10V analog control for smooth, flicker-free dimming",
      icon: "📊",
      features: ["0-10V Control", "Smooth Operation", "Wide Compatibility"]
    },
    {
      name: "Universal Dimming",
      description: "Phase-cut dimming technology compatible with most LED fixtures",
      icon: "⚡",
      features: ["Phase Cut", "Triac Compatible", "LED Optimized"]
    },
    {
      name: "DALI Dimming",
      description: "Digital Addressable Lighting Interface for precise individual control",
      icon: "💡",
      features: ["Individual Control", "Digital Precision", "Energy Monitoring"]
    }
  ]

  const dimmingBenefits = [
    {
      title: "Energy Efficiency",
      description: "Reduce energy consumption by up to 80% with intelligent dimming control",
      icon: "🌱",
      percentage: "80%",
      features: ["Lower Bills", "Reduced Carbon Footprint", "Smart Scheduling"]
    },
    {
      title: "Mood Creation",
      description: "Create the perfect ambiance for any occasion with precise light control",
      icon: "🎭",
      percentage: "100%",
      features: ["Dinner Parties", "Relaxation", "Entertainment"]
    },
    {
      title: "Extended Bulb Life",
      description: "Prolong the lifespan of your lighting fixtures with gentle dimming",
      icon: "⏰",
      percentage: "3x",
      features: ["Reduced Heat", "Less Wear", "Cost Savings"]
    },
    {
      title: "Enhanced Comfort",
      description: "Reduce eye strain and create comfortable lighting for every activity",
      icon: "👁️",
      percentage: "50%",
      features: ["Eye Protection", "Task Lighting", "Circadian Rhythm"]
    }
  ]

  const controlMethods = [
    {
      title: "Wall Switches & Dimmers",
      description: "Traditional and smart wall-mounted controls for easy access",
      icon: "🎛️",
      features: ["Manual Control", "Scene Presets", "Easy Installation"]
    },
    {
      title: "Mobile App Control",
      description: "Control your lighting from anywhere with our intuitive mobile app",
      icon: "📱",
      features: ["Remote Access", "Scheduling", "Scene Management"]
    },
    {
      title: "Voice Assistants",
      description: "Hands-free control with popular voice assistant integration",
      icon: "🎤",
      features: ["Alexa Compatible", "Google Assistant", "Siri Integration"]
    },
    {
      title: "Automated Sensors",
      description: "Smart sensors that automatically adjust lighting based on occupancy and daylight",
      icon: "🔍",
      features: ["Motion Detection", "Daylight Harvesting", "Occupancy Sensing"]
    },
    {
      title: "Scheduled Scenes",
      description: "Automated lighting schedules that adapt to your daily routine",
      icon: "⏰",
      features: ["Daily Routines", "Seasonal Adjustments", "Holiday Modes"]
    }
  ]

  const applicationAreas = [
    {
      title: "Living Room",
      description: "Create the perfect atmosphere for relaxation, entertainment, and family time",
      image: "/images/living-room-dimming.jpg",
      features: ["Entertainment Mode", "Reading Light", "Relaxation Zone"],
      icon: "🛋️"
    },
    {
      title: "Dining Room",
      description: "Set the mood for intimate dinners and special occasions",
      image: "/images/dining-dimming.jpg",
      features: ["Dinner Parties", "Romantic Dinners", "Family Meals"],
      icon: "🍽️"
    },
    {
      title: "Bedroom",
      description: "Gentle lighting for better sleep and comfortable morning routines",
      image: "/images/bedroom-dimming.jpg",
      features: ["Sleep Mode", "Wake-up Light", "Reading Comfort"],
      icon: "🛏️"
    },
    {
      title: "Kitchen",
      description: "Task-specific lighting that adapts to your cooking and dining needs",
      image: "/images/kitchen-dimming.jpg",
      features: ["Task Lighting", "Ambient Glow", "Energy Efficiency"],
      icon: "🍳"
    },
    {
      title: "Home Office",
      description: "Optimize productivity with adjustable lighting that reduces eye strain",
      image: "/images/office-dimming.jpg",
      features: ["Focus Mode", "Video Calls", "Document Reading"],
      icon: "💼"
    },
    {
      title: "Media Room",
      description: "Cinema-quality lighting control for the ultimate entertainment experience",
      image: "/images/media-dimming.jpg",
      features: ["Movie Mode", "Gaming Setup", "Party Atmosphere"],
      icon: "🎬"
    }
  ]

  const dimmingProducts = [
    {
      title: "Smart Dimmer Switches",
      description: "Intelligent wall switches with smooth dimming control and scene presets",
      features: ["Smooth Dimming", "Scene Memory", "Energy Monitoring"],
      icon: "🔘"
    },
    {
      title: "Dimmable LED Bulbs",
      description: "High-quality LED bulbs designed for perfect dimming performance",
      features: ["Flicker-Free", "Warm to Cool", "Long Lifespan"],
      icon: "💡"
    },
    {
      title: "Dimmable Pendant Lights",
      description: "Stylish pendant fixtures with integrated dimming capabilities",
      features: ["Modern Design", "Adjustable Brightness", "Easy Installation"],
      icon: "🏮"
    },
    {
      title: "Recessed Dimming Lights",
      description: "Seamless recessed lighting with precise dimming control",
      features: ["Clean Look", "Even Distribution", "Hidden Control"],
      icon: "🔦"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 opacity-95"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-300 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-cyan-300 rounded-full opacity-20 animate-bounce"></div>
        
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto px-4"
          variants={heroVariants}
          initial="visible"
          animate="visible"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Control Intensity Of The Light
            <span className="block text-4xl md:text-5xl mt-2">From 1%-100% Without Flickering</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience perfect ambiance and energy savings with intelligent dimming systems 
            tailored for your home. Create the ideal lighting for every moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Explore Dimming Options
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </section>

      {/* KNX Dimming Technology Section */}
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
              KNX Dimming Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Within the KNX building automation system, KNX dimming stands out as an advanced functionality, 
              offering precise control over the brightness of connected dimmable light sources. This technology 
              empowers users to craft ambient lighting scenes, conserve energy, and elevate comfort levels by 
              seamlessly regulating dimming settings.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gray-50 rounded-2xl p-8"
            variants={cardVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Dimming Technologies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {dimmingTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  variants={cardVariants}
                  initial="visible"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">{tech.name}</h4>
                  <p className="text-gray-600 mb-4 text-center">{tech.description}</p>
                  <div className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-600">
                        <span className="w-4 h-4 text-green-500 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of Smart Dimming
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your home with intelligent dimming solutions that offer more than just light control
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dimmingBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="group"
                variants={cardVariants}
                initial="visible"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 text-white">
                    <div className="text-6xl mb-4 text-center">{benefit.icon}</div>
                    <div className="text-4xl font-bold text-center mb-2">{benefit.percentage}</div>
                    <h3 className="text-xl font-bold text-center">{benefit.title}</h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{benefit.description}</p>
                    <div className="space-y-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-4 h-4 text-green-500 mr-2">✓</span>
                          {feature}
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

      {/* Control Options Section */}
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
              Flexible Control Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Control your lighting the way that works best for you and your lifestyle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {controlMethods.map((method, index) => (
              <motion.div
                key={method.title}
                variants={cardVariants}
                initial="visible"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-3xl">{method.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <div className="space-y-2">
                      {method.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-600">
                          <span className="w-4 h-4 text-green-500 mr-2">✓</span>
                          {feature}
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

      {/* Application Areas Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perfect for Every Space
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform every room in your home with intelligent dimming solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="group"
                variants={cardVariants}
                initial="visible"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="relative h-48 bg-gradient-to-br from-blue-400 to-cyan-500">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-70">{area.icon}</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="px-3 py-1">
                          {feature}
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

      {/* Products Section */}
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
              Dimmable Lighting Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of dimmable lighting solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dimmingProducts.map((product, index) => (
              <motion.div
                key={product.title}
                variants={cardVariants}
                initial="visible"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-3xl">{product.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-600">
                          <span className="w-4 h-4 text-green-500 mr-2">✓</span>
                          {feature}
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

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeInVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Perfect Lighting?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your home with intelligent dimming solutions that adapt to your lifestyle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Request a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                Get a Free Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
