"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

export default function ResidentialPage() {
  const router = useRouter()
  
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  // Handle feature button click
  const handleFeatureClick = (feature: string) => {
    if (feature === "Switching") {
      router.push("/switching")
    } else if (feature === "RGB") {
      router.push("/residential-rgb")
    } else if (feature === "Dimming") {
      router.push("/residential-dimming")
    } else if (feature === "Time") {
      router.push("/residential-time")
    } else if (feature === "ABB F@H") {
      router.push("/residential-abbf@h")
    } else if (feature === "IoT") {
      router.push("/residential-iot")
    } else if (feature === "Rako") {
      router.push("/residential-rako")
    } else if (feature === "Casambi") {
      router.push("/residential-casambi")
    }
    // Add other feature redirects as needed
  }

  // Handle discover more button click
  const handleDiscoverMoreClick = (solutionTitle: string) => {
    if (solutionTitle === "KNX Retrofit Solution") {
      router.push("/residential-coverage")
    }
    // Add other solution redirects as needed
  }

  const wiredLightingSolutions = [
    {
      title: "KNX Solution",
      description: "KNX (Konnex) is a standardized communication protocol used for building automation and control. In KNX systems, central wiring is a fundamental concept that forms the backbone of the entire automation infrastructure.",
      features: ["Switching", "RGB", "Dimming", "Time"],
      image: "/images/knx-panel.jpg",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "KNX Retrofit Solution",
      description: "A KNX retrofit solution refers to the process of upgrading an existing building's electrical system to automation system. By which you can control and manage your home seamlessly from anywhere without pulling wires to central DB. Just loop KNX cable to existing electrical points.",
      features: [],
      image: "/images/knx-switch.jpg",
      gradient: "from-gray-600 to-gray-800"
    }
  ]

  const wirelessLightingSolutions = [
    {
      title: "Retrofit IoT",
      description: "IoT in residential lighting merges smart lights with the internet for remote control, convenience, and energy savings, integrating with other smart devices.",
      features: ["ABB F@H", "IoT"],
      image: "/images/iot-switch.jpg",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Flush Mount",
      description: "Flush mount automation devices discreetly upgrade your existing system without replacing switches in homes or offices.",
      features: ["Rako", "Casambi"],
      image: "/images/flush-mount.jpg",
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  const technologies = [
    { name: "KNX", icon: "⚙️" },
    { name: "DALI", icon: "💡" },
    { name: "Z-Wave", icon: "📡" },
    { name: "Zigbee", icon: "⚡" },
    { name: "Casambi", icon: "📱" },
    { name: "Free@home", icon: "🏠" },
    { name: "IoT", icon: "🌐" }
  ]

  const residentialSolutions = [
    {
      title: "Smart Lighting Automation",
      description: "Transform your home with intelligent lighting that adapts to your lifestyle, mood, and schedule.",
      icon: "💡",
      features: ["Ambient Control", "Energy Efficiency", "Mood Settings", "Schedule Automation"]
    },
    {
      title: "Climate Control",
      description: "Maintain perfect comfort with smart thermostats and multi-zone heating and cooling systems.",
      icon: "🌡️",
      features: ["Multi-Zone Control", "Energy Savings", "Remote Access", "Smart Scheduling"]
    },
    {
      title: "Home Security",
      description: "Protect your family with comprehensive security systems including smart locks, CCTV, and alarm systems.",
      icon: "🛡️",
      features: ["Smart Locks", "CCTV Systems", "Alarm Integration", "Access Control"]
    },
    {
      title: "Entertainment & Media",
      description: "Create immersive entertainment experiences with integrated audio/video and home theater systems.",
      icon: "🎵",
      features: ["Multi-Room Audio", "Home Theater", "Smart TV Integration", "Voice Control"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Let's Transform
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold text-amber-300">
                  Your Own Home Into
                </h2>
                <h3 className="text-4xl lg:text-5xl font-bold">
                  A Smart Haven
                </h3>
              </div>
              <p className="text-xl text-blue-100 max-w-lg">
                Experience the future of living with our comprehensive residential automation solutions. 
                Transform your home into an intelligent, efficient, and secure environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                  View Our Projects
                </Button>
              </div>
            </motion.div>
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl text-white/60">🏠</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wired Lighting Automation Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Wired Lighting Automation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade wired automation solutions for ultimate reliability and performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {wiredLightingSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className={`bg-gradient-to-r ${solution.gradient} text-white rounded-t-lg`}>
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
                      {solution.features.length > 0 && (
                        <div className="grid grid-cols-2 gap-2">
                          {solution.features.map((feature, featureIndex) => (
                            <Badge 
                              key={featureIndex} 
                              variant="secondary" 
                              className={`justify-center py-2 ${feature === "Switching" || feature === "RGB" || feature === "Dimming" || feature === "Time" ? "cursor-pointer hover:bg-blue-600 hover:text-white transition-colors" : ""}`}
                              onClick={() => (feature === "Switching" || feature === "RGB" || feature === "Dimming" || feature === "Time") ? handleFeatureClick(feature) : undefined}
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <Button 
                        className="w-full cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
                        onClick={() => handleDiscoverMoreClick(solution.title)}
                      >
                        Discover More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wireless Lighting Automation Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Wireless Lighting Automation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible wireless solutions for easy installation and seamless integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {wirelessLightingSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className={`bg-gradient-to-r ${solution.gradient} text-white rounded-t-lg`}>
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
                      {solution.features.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {solution.features.map((feature, featureIndex) => (
                            <Badge 
                              key={featureIndex} 
                              variant="outline" 
                              className={`px-4 py-2 ${feature === "ABB F@H" || feature === "IoT" || feature === "Rako" || feature === "Casambi" ? "cursor-pointer hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors" : ""}`}
                              onClick={() => (feature === "ABB F@H" || feature === "IoT" || feature === "Rako" || feature === "Casambi") ? handleFeatureClick(feature) : undefined}
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <Button className="w-full">
                        Discover More →
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We leverage a wide spectrum of leading technologies including KNX, DALI, Z-Wave, Zigbee, 
              Casambi, Free@home, and IoT to deliver holistic solutions tailored to diverse customer 
              requirements, spanning residential, commercial, and hospitality settings.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Discover More
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={cardVariants}
                initial="hidden"
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

      {/* Residential Solutions Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Residential Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform every aspect of your home with our comprehensive automation solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {residentialSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-3xl">{solution.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
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

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Ready to Transform Your Home?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your residential automation needs and receive a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Get Free Consultation
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
