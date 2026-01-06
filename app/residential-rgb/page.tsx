"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResidentialRGBPage() {
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

  const moodZones = [
    {
      title: "Relaxing Blues",
      description: "Create a calming atmosphere perfect for unwinding after a long day",
      color: "from-blue-500 to-blue-700",
      icon: "🌊",
      features: ["Stress Relief", "Better Sleep", "Meditation Space"]
    },
    {
      title: "Energizing Greens",
      description: "Boost your energy and focus with vibrant green lighting",
      color: "from-green-500 to-emerald-600",
      icon: "🌿",
      features: ["Increased Focus", "Natural Feel", "Productivity Boost"]
    },
    {
      title: "Romantic Reds",
      description: "Set the perfect mood for intimate moments and special occasions",
      color: "from-red-500 to-pink-600",
      icon: "❤️",
      features: ["Intimate Ambiance", "Warm Atmosphere", "Special Occasions"]
    },
    {
      title: "Dynamic Rainbow",
      description: "Experience the full spectrum of colors for parties and celebrations",
      color: "from-purple-500 via-pink-500 to-yellow-500",
      icon: "🌈",
      features: ["Party Mode", "Celebrations", "Entertainment"]
    }
  ]

  const colorControlMethods = [
    {
      name: "DALI",
      description: "Digital Addressable Lighting Interface for precise RGB control",
      icon: "💡"
    },
    {
      name: "DMX",
      description: "Professional lighting control protocol for complex RGB setups",
      icon: "🎭"
    },
    {
      name: "RGB Drive Base",
      description: "Advanced control system for seamless RGB integration",
      icon: "⚙️"
    }
  ]

  const applicationAreas = [
    {
      title: "Living Room Ambiance",
      description: "Transform your living space with dynamic color-changing lights that adapt to your mood and activities",
      image: "/images/living-room-rgb.jpg",
      features: ["Entertainment Mode", "Reading Light", "Relaxation Zone"]
    },
    {
      title: "Dining Area Enhancement",
      description: "Create the perfect dining atmosphere with customizable lighting for every meal",
      image: "/images/dining-rgb.jpg",
      features: ["Dinner Parties", "Family Meals", "Romantic Dinners"]
    },
    {
      title: "Bedroom Relaxation",
      description: "Wind down with gentle color transitions that promote better sleep and relaxation",
      image: "/images/bedroom-rgb.jpg",
      features: ["Sleep Mode", "Wake-up Light", "Reading Comfort"]
    },
    {
      title: "Kitchen Workspace",
      description: "Enhance your cooking experience with task-specific lighting and mood enhancement",
      image: "/images/kitchen-rgb.jpg",
      features: ["Task Lighting", "Mood Setting", "Energy Boost"]
    }
  ]

  const rgbProducts = [
    {
      title: "RGB Strip Lights",
      description: "Flexible LED strips for seamless integration into any space",
      features: ["16.7M Colors", "Music Sync", "Easy Installation"],
      icon: "📏"
    },
    {
      title: "RGB Wall Panels",
      description: "Modern wall-mounted panels for dramatic lighting effects",
      features: ["Large Coverage", "Artistic Design", "Remote Control"],
      icon: "🖼️"
    },
    {
      title: "RGB Ceiling Lights",
      description: "Overhead lighting solutions for complete room illumination",
      features: ["Full Room Coverage", "Dimmable", "Smart Control"],
      icon: "💡"
    },
    {
      title: "RGB Accent Lights",
      description: "Decorative lighting elements for highlighting specific areas",
      features: ["Spotlight Effect", "Color Matching", "Versatile Mounting"],
      icon: "✨"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-400 rounded-full opacity-35 animate-bounce"></div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4"
          variants={heroVariants}
          initial="visible"
          animate="visible"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Change The Color Of The Room
            <span className="block text-4xl md:text-5xl mt-2">As Per Your Mood</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your home with intelligent RGB lighting that adapts to your lifestyle, 
            creating the perfect ambiance for every moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Explore RGB Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </section>

      {/* KNX RGB Technology Section */}
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
              KNX RGB Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Utilizing KNX technology, we have the capability to customize the lighting color to match your preferences. 
              KNX-RGB represents a sophisticated element of the KNX building automation system, granting precise management 
              over RGB (Red, Green, Blue) lighting fixtures. This innovative technology empowers users to craft an extensive 
              range of colors and dynamic lighting effects by fine-tuning the strength of individual color channels in RGB lighting sources.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gray-50 rounded-2xl p-8"
            variants={cardVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Color Control Methods</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {colorControlMethods.map((method, index) => (
                <motion.div
                  key={method.name}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  variants={cardVariants}
                  initial="visible"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4 text-center">{method.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">{method.name}</h4>
                  <p className="text-gray-600 text-center">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mood Zones Section */}
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
              Create Your Perfect Mood
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how different colors can transform your space and enhance your daily experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moodZones.map((zone, index) => (
              <motion.div
                key={zone.title}
                className="group"
                variants={cardVariants}
                initial="visible"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <div className={`h-32 bg-gradient-to-br ${zone.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl drop-shadow-lg">{zone.icon}</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{zone.title}</h3>
                    <p className="text-gray-600 mb-4">{zone.description}</p>
                    <div className="space-y-2">
                      {zone.features.map((feature, featureIndex) => (
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

      {/* Application Areas Section */}
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
              Perfect for Every Space
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform every room in your home with intelligent RGB lighting solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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
                  <div className="relative h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-50">🏠</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
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

      {/* RGB Products Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              RGB Lighting Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of RGB lighting solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rgbProducts.map((product, index) => (
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
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Smart Control Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Control your RGB lighting with multiple convenient methods
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              variants={cardVariants}
              initial="visible"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-4xl">📱</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile App</h3>
              <p className="text-gray-600">Control your RGB lighting from anywhere with our intuitive mobile application</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={cardVariants}
              initial="visible"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-4xl">🎤</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Voice Control</h3>
              <p className="text-gray-600">Use voice commands to change colors and create the perfect ambiance</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={cardVariants}
              initial="visible"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-4xl">🎛️</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Switches</h3>
              <p className="text-gray-600">Traditional wall switches with smart RGB control capabilities</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeInVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the magic of RGB lighting and create the perfect ambiance for every moment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                View Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
