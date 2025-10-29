"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import dynamic from "next/dynamic"
const SolarSections = dynamic(() => import("@/components/SolarSections"), { ssr: false })
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function SolarPage() {
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
    if (feature === "Solar Panels") {
      router.push("/solar-panels")
    } else if (feature === "Inverters") {
      router.push("/solar-inverters")
    } else if (feature === "Battery Storage") {
      router.push("/solar-battery")
    } else if (feature === "Monitoring") {
      router.push("/solar-monitoring")
    }
  }

  // Handle discover more button click
  const handleDiscoverMoreClick = (solutionTitle: string) => {
    if (solutionTitle === "Solar Installation") {
      router.push("/solar-installation")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#3B82F6] mb-6">
              Solar Energy Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Harness the power of the sun with our comprehensive solar energy solutions. 
              From residential installations to commercial projects, we provide sustainable 
              energy solutions that reduce costs and environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 text-lg"
              >
                Get Solar Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Types of Installation inline section removed to avoid duplication */}
          </motion.div>
        </div>
      </section>
      {/* Types of Installation - Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#3B82F6] mb-4">Types of Installation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">ON-Grid, OFF-Grid, and Hybrid configurations to match your needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ON-Grid */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full transition-shadow duration-300 group cursor-pointer glow-card">
                <CardHeader>
                  <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                    <div className="absolute inset-x-0 top-1 z-30 bg-white/90 border border-white/70 text-[#3B82F6] font-semibold px-4 py-2 rounded-xl shadow-sm text-center w-full">
                      ON-Grid
                    </div>
                    <Image
                      src="/on%20grid.png"
                      alt="ON-Grid Installation"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 installation-card-hover-gradient opacity-0 group-hover:opacity-90 transition-all duration-500 transform translate-y-full group-hover:translate-y-0 flex items-center justify-center z-20">
                      <div className="text-white text-center p-6">
                        <ul className="text-left space-y-2 mb-4">
                          <li>✓ Net metering enabled</li>
                          <li>✓ No batteries required</li>
                          <li>✓ Best return on investment</li>
                        </ul>
                        <Button className="bg-white text-blue-600 hover:bg-gray-100">
                          Explore ON-Grid
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            {/* OFF-Grid */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full transition-shadow duration-300 group cursor-pointer glow-card">
                <CardHeader>
                  <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                    <div className="absolute inset-x-0 top-1 z-30 bg-white/90 border border-white/70 text-[#3B82F6] font-semibold px-4 py-2 rounded-xl shadow-sm text-center w-full">
                      OFF-Grid
                    </div>
                    <Image
                      src="/off%20grid.png"
                      alt="OFF-Grid Installation"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 installation-card-hover-gradient opacity-0 group-hover:opacity-90 transition-all duration-500 transform translate-y-full group-hover:translate-y-0 flex items-center justify-center z-20">
                      <div className="text-white text-center p-6">
                        <ul className="text-left space-y-2 mb-4">
                          <li>✓ Works without grid</li>
                          <li>✓ Battery bank required</li>
                          <li>✓ Optional generator backup</li>
                        </ul>
                        <Button className="bg-white text-blue-600 hover:bg-gray-100">
                          Explore OFF-Grid
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Hybrid */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full transition-shadow duration-300 group cursor-pointer glow-card">
                <CardHeader>
                  <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                    <div className="absolute inset-x-0 top-1 z-30 bg-white/90 border border-white/70 text-[#3B82F6] font-semibold px-4 py-2 rounded-xl shadow-sm text-center w-full">
                      Hybrid
                    </div>
                    <Image
                      src="/hybrid.png"
                      alt="Hybrid Installation"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 installation-card-hover-gradient opacity-0 group-hover:opacity-90 transition-all duration-500 transform translate-y-full group-hover:translate-y-0 flex items-center justify-center z-20">
                      <div className="text-white text-center p-6">
                        <ul className="text-left space-y-2 mb-4">
                          <li>✓ Battery backup during outages</li>
                          <li>✓ Export excess to grid</li>
                          <li>✓ Best of both worlds</li>
                        </ul>
                        <Button className="bg-white text-blue-600 hover:bg-gray-100">
                          Explore Hybrid
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types of Roof Structure (GSAP overlap only here) */}
      <section className="py-20 bg-white relative z-0">
        <div className="container mx-auto px-4">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#3B82F6] mb-4">
              Types of Roof Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect solar solution for your roof type. We offer professional installation on all roof structures.
            </p>
          </motion.div>

          {/* GSAP ScrollTrigger pinned overlap component - isolated */}
          <div className="relative z-0">
            <SolarSections />
          </div>
        </div>
      </section>

      {/* Solar Technology Overview */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#3B82F6] mb-4">
              Solar Technology Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our advanced solar technology solutions provide efficient, reliable, and sustainable energy 
              for homes and businesses. Choose from our range of solar products and services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Solar Panels */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">☀️</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Solar Panels</CardTitle>
                  <CardDescription className="text-gray-600">
                    High-efficiency photovoltaic panels for maximum energy generation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Monocrystalline Technology</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">25+ Year Warranty</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Weather Resistant</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Easy Installation</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                    onClick={() => handleFeatureClick("Solar Panels")}
                  >
                    Explore Solar Panels
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Inverters */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Solar Inverters</CardTitle>
                  <CardDescription className="text-gray-600">
                    Convert DC power to AC with maximum efficiency and reliability
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">String Inverters</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Micro Inverters</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Power Optimizers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Smart Monitoring</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                    onClick={() => handleFeatureClick("Inverters")}
                  >
                    Explore Inverters
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Battery Storage */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔋</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Battery Storage</CardTitle>
                  <CardDescription className="text-gray-600">
                    Store excess solar energy for use during peak hours and outages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Lithium-Ion Technology</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">10+ Year Lifespan</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Backup Power</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Smart Management</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                    onClick={() => handleFeatureClick("Battery Storage")}
                  >
                    Explore Battery Storage
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solar Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Solar Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From design to installation and maintenance, we provide comprehensive solar energy solutions 
              tailored to your specific needs and energy requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential Solar */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-3xl text-white">🏠</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Residential Solar</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    Power your home with clean, renewable solar energy. Reduce your electricity bills 
                    and increase your property value.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Custom System Design</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Professional Installation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">25-Year Performance Guarantee</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Monitoring & Maintenance</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">3kW - 10kW Systems</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Net Metering</Badge>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Tax Credits</Badge>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                    onClick={() => handleDiscoverMoreClick("Solar Installation")}
                  >
                    Get Residential Quote
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Commercial Solar */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-3xl text-white">🏢</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Commercial Solar</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    Large-scale solar installations for businesses, factories, and commercial properties. 
                    Maximize your ROI with our commercial solar solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Scalable System Design</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Fast Installation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Performance Monitoring</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">O&M Services</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">10kW - 1MW+ Systems</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">PPA Options</Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">ROI Analysis</Badge>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                    onClick={() => handleDiscoverMoreClick("Solar Installation")}
                  >
                    Get Commercial Quote
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Solar Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Solar Energy?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Solar energy offers numerous benefits for both residential and commercial applications. 
              Discover why solar is the smart choice for your energy needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Savings</h3>
              <p className="text-gray-600">
                Reduce your electricity bills by up to 90% with solar energy. 
                Payback period typically 5-7 years.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Impact</h3>
              <p className="text-gray-600">
                Reduce your carbon footprint and contribute to a cleaner, 
                more sustainable future for generations to come.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Property Value</h3>
              <p className="text-gray-600">
                Increase your property value by up to 4% with solar installation. 
                Solar homes sell faster and at higher prices.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Energy Independence</h3>
              <p className="text-gray-600">
                Protect yourself from rising electricity costs and power outages 
                with your own renewable energy source.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="container mx-auto px-4">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Go Solar?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of satisfied customers who have made the switch to solar energy. 
              Get your free solar assessment today and start saving on your electricity bills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Get Free Solar Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
              >
                Call: +919606457175
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}




