"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Home, Zap, Shield, Phone, Building2, Wifi, Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ABBFreeAtHomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Use visible initial state to prevent hydration errors
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  }

  const freeAtHomeFeatures = [
    {
      title: "Elegant Control",
      description: "Beautiful switches and intuitive app interface",
      icon: "📱"
    },
    {
      title: "Faster Deployment",
      description: "Quick installation and setup process",
      icon: "⚡"
    },
    {
      title: "Excellent Value",
      description: "Cost-effective solution for apartments and villas",
      icon: "✅"
    },
    {
      title: "Local Operation",
      description: "Works reliably even without internet",
      icon: "🔌"
    }
  ]

  const knxFeatures = [
    {
      title: "Unlimited Customization",
      description: "Complete flexibility for complex projects",
      icon: "⚙️"
    },
    {
      title: "Multi-Brand Integration",
      description: "Works with multiple manufacturers",
      icon: "🏢"
    },
    {
      title: "Long-Term Flexibility",
      description: "Future-proof technology for large villas",
      icon: "🛡️"
    },
    {
      title: "Local Operation",
      description: "Works reliably even without internet",
      icon: "🔌"
    }
  ]

  const comparisonPoints = [
    {
      aspect: "Best For",
      freeAtHome: "Apartments and villas",
      knx: "Large villas and complex projects"
    },
    {
      aspect: "Deployment",
      freeAtHome: "Faster installation",
      knx: "More comprehensive setup"
    },
    {
      aspect: "Customization",
      freeAtHome: "Elegant pre-configured solutions",
      knx: "Unlimited customization options"
    },
    {
      aspect: "Integration",
      freeAtHome: "ABB ecosystem",
      knx: "Multi-brand integration"
    },
    {
      aspect: "Value",
      freeAtHome: "Excellent value proposition",
      knx: "Premium long-term investment"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-white overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/promo-image-alt.png"
            alt="Luxury smart home automation background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={mounted ? { opacity: 0, x: -30 } : { opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <Home className="w-4 h-4 mr-2" />
                Smart Home Solutions
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                ABB Free@home® Smart Home Solutions
              </h1>
              
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                At Tanti Automatics, we design and deliver premium smart home systems using KNX and ABB Free@home—chosen carefully based on your project needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                    Get a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#comparison">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Compare Systems
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={mounted ? { opacity: 0, x: 30 } : { opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="p-6">
                  <p className="text-white text-lg font-medium text-center">Luxury smart home automation by Tanti Automatics</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Don&apos;t Push Technology Blindly
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We design what fits—technically, financially, and long term.
            </p>
            <div className="pt-8 space-y-6 text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>ABB Free@home®</strong> is ideal for apartments and villas, offering elegant control of lighting, blinds, climate, and scenes with faster deployment and excellent value.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>KNX</strong> is best suited for large villas and complex projects where unlimited customization, multi-brand integration, and long-term flexibility are essential.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Both systems work locally, remain reliable even without internet, and deliver a seamless smart living experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABB Free@home Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial={mounted ? "hidden" : "visible"}
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/ABB F@H.jpeg"
                  alt="ABB Free@home smart home switch and mobile app interface"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">ABB Free@home® smart switches and app control</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial={mounted ? "hidden" : "visible"}
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                  <Zap className="w-4 h-4 mr-2" />
                  ABB Free@home®
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Perfect for Apartments & Villas
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Elegant control of lighting, blinds, climate, and scenes with faster deployment and excellent value.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {freeAtHomeFeatures.map((feature, index) => (
                  <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-2xl">{feature.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KNX System Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInRight}
              initial={mounted ? "hidden" : "visible"}
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 order-2 lg:order-1"
            >
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                  <Building2 className="w-4 h-4 mr-2" />
                  KNX System
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Best for Large Villas & Complex Projects
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Unlimited customization, multi-brand integration, and long-term flexibility for premium residences.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {knxFeatures.map((feature, index) => (
                  <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-2xl">{feature.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={slideInLeft}
              initial={mounted ? "hidden" : "visible"}
              whileInView="visible"
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/ABB F@H.jpeg"
                  alt="KNX smart home touch panel and automation system architecture"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">KNX automation for premium and large residences</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choosing the Right Smart Home System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              KNX vs ABB Free@home® - We help you choose what fits your needs
            </p>
          </motion.div>

          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/ABB F@H.jpeg"
                alt="Comparison between KNX and ABB Free@home smart home systems"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">Choosing the right smart home system: KNX vs Free@home</p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ABB Free@home Card */}
            <motion.div
              variants={cardVariants}
              initial={mounted ? "hidden" : "visible"}
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Zap className="w-6 h-6 text-blue-600" />
                    ABB Free@home®
                  </CardTitle>
                  <CardDescription className="text-base">
                    Ideal for apartments and villas
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {comparisonPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-gray-900">{point.aspect}:</span>
                          <span className="text-gray-700 ml-2">{point.freeAtHome}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* KNX Card */}
            <motion.div
              variants={cardVariants}
              initial={mounted ? "hidden" : "visible"}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    KNX System
                  </CardTitle>
                  <CardDescription className="text-base">
                    Best for large villas and complex projects
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {comparisonPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-gray-900">{point.aspect}:</span>
                          <span className="text-gray-700 ml-2">{point.knx}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Both Systems Work Locally
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Remain reliable even without internet, and deliver a seamless smart living experience.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Lock className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Local Operation</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Reliable</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Wifi className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">No Internet Required</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Approach
            </h2>
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  We don&apos;t push technology blindly.
                </p>
                <p className="text-xl md:text-2xl text-gray-700 font-medium">
                  We design what fits—technically, financially, and long term.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us help you choose the perfect smart home solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/residential">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Explore More Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

