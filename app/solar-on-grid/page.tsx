"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { PanelsTopLeft, Zap, Settings, Gauge, Grid } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }

// Animation variants for corner entry effects
const slideInFromLeft = {
  hidden: { opacity: 0, x: -100, y: -100 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const slideInFromRight = {
  hidden: { opacity: 0, x: 100, y: 100 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function SolarOnGridPage() {

  return (
    <main className="relative min-h-screen" style={{ backgroundImage: "url('/on grid cover.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-white/30" />
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[55vh] md:min-h-[70vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/on grid cover.jpeg"
            alt="On-grid solar system"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        {/* Decorative soft glow */}
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-cyan-400/20 blur-3xl rounded-full -z-10" />
        <div className="absolute -bottom-20 -left-20 w-[420px] h-[420px] bg-blue-500/25 blur-3xl rounded-full -z-10" />

        <div className="container mx-auto px-4 pt-20 md:pt-24 pb-10 md:pb-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-5">On‑Grid Solar Power System</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              A smart, grid-connected solar solution that connects directly to the utility grid through a bi-directional (net) meter. This system allows you to draw electricity from the grid when needed and send surplus solar energy back, giving you uninterrupted power and measurable savings.
            </p>

            {/* Quick stats */}
            <div className="mt-6 md:mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl -mb-4">
              {[{k:"Grid Connection",v:"24/7"},{k:"Subsidy",v:"₹30K-₹78K"},{k:"Net Metering",v:"Yes"}].map((s)=> (
                <div key={s.k} className="bg-gradient-to-r from-gray-900/70 to-black/60 backdrop-blur-md rounded-lg px-4 py-3 text-sm border border-gray-700/50">
                  <div className="text-white/80">{s.k}</div>
                  <div className="font-semibold text-white">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave divider to avoid awkward gap below hero */}
        <svg className="absolute bottom-0 left-0 right-0 w-full h-16 text-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64L60,74.7C120,85,240,107,360,112C480,117,600,107,720,85.3C840,64,960,32,1080,26.7C1200,21,1320,43,1380,53.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"/>
        </svg>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="w-full bg-gradient-to-r from-gray-900/70 to-black/60 backdrop-blur-md rounded-xl px-4 md:px-6 py-4 md:py-5 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Overview</h2>
              <p className="text-white text-base md:text-lg font-semibold leading-relaxed">
                An on-grid (grid-tied) solar system connects directly to the main utility grid through a bi-directional (net) meter. During the day, solar energy powers your home directly. At night or during cloudy periods, the grid automatically supplies power. Excess energy you produce is fed back to the grid, earning you credits through net metering.
              </p>
            </div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-5 mt-8">
            {[{
              icon: <Grid className="text-white" size={28} />, title: "Grid Integration",
              text: "Seamlessly connect to the utility grid for reliable 24/7 power supply."
            },{
              icon: <Zap className="text-white" size={28} />, title: "Net Metering",
              text: "Earn credits for excess energy exported to the grid, reducing your bills."
            },{
              icon: <Settings className="text-white" size={28} />, title: "Cost Savings",
              text: "Benefit from government subsidies and lower electricity costs over time."
            }].map((c, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6, scale: 1.01 }} className="rounded-2xl p-5 bg-gradient-to-br from-gray-900/70 to-black/60 border border-gray-700/50 backdrop-blur-md glow-card">
                <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center mb-3">{c.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{c.title}</h3>
                <p className="text-white font-semibold">{c.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-8">How It Works</motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              variants={slideInFromLeft} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: false, margin: "-100px" }}
            >
               <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden glow-card">
                 <Image src="/three tier.png" alt="Solar panels connected to grid" fill className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                 <div className="absolute bottom-0 p-4 text-white">
                   <p className="font-semibold flex items-center gap-2"><Zap className="w-4 h-4" /> Grid-Tied Generation</p>
                 </div>
               </div>
            </motion.div>

            <motion.div 
              variants={slideInFromRight} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: false, margin: "-100px" }} 
              className="w-full bg-gradient-to-r from-gray-900/70 to-black/60 backdrop-blur-md rounded-xl px-4 md:px-6 py-4 md:py-5 shadow-lg"
            >
              <ul className="space-y-2 md:space-y-3 text-white text-base md:text-lg font-semibold">
                <li>• PV modules convert sunlight to DC power during the day.</li>
                <li>• Inverter converts DC to AC and synchronizes with the grid.</li>
                <li>• Bi-directional meter tracks energy imported from and exported to the grid.</li>
                <li>• Net metering credits excess energy, reducing your electricity bill.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#2563EB] mb-8">Key Components</motion.h2>
          <div className="grid md:grid-cols-3 gap-5">
            {components.map((c, i) => (
              <motion.article
                key={c.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-2xl bg-gradient-to-br from-gray-900/70 to-black/60 border border-gray-700/50 backdrop-blur-md overflow-hidden glow-card"
              >
                <div className="relative h-40">
                  <Image src={c.image} alt={c.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2 text-white">{c.icon}<span className="font-bold">{c.title}</span></div>
                  <p className="text-white text-sm leading-relaxed font-semibold">{c.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Subsidy */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              variants={slideInFromLeft} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: false, margin: "-100px" }}
              className="w-full bg-gradient-to-r from-gray-900/70 to-black/60 backdrop-blur-md rounded-xl px-4 md:px-6 py-4 md:py-5 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Benefits & Government Support</h2>
              <p className="text-white text-base md:text-lg mb-3 font-semibold leading-relaxed">
                In India, homeowners benefit from government subsidies ranging between ₹30,000 and ₹78,000, depending on system size and capacity. With a reliable grid connection, an on-grid solar system can easily power your entire home — delivering clean energy, long-term savings, and a smaller carbon footprint.
              </p>
              <ul className="text-white list-disc pl-5 space-y-1.5 md:space-y-2 font-semibold">
                <li>Reduce electricity bills significantly through net metering</li>
                <li>Earn credits for excess energy exported to the grid</li>
                <li>Benefit from attractive government subsidies and incentives</li>
                <li>Low maintenance and long-term reliable performance</li>
              </ul>
            </motion.div>
            <motion.div 
              variants={slideInFromRight} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: false, margin: "-100px" }}
            >
               <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden glow-card">
                 <Image src="/three tier.png" alt="Government subsidies and benefits" fill className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                 <div className="absolute bottom-0 p-4 text-white"><span className="font-semibold flex items-center gap-2"><Gauge className="w-4 h-4" /> Smart net metering</span></div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
    </main>
  )
}

const components = [
  {
    title: "Solar Panels",
    desc: "High‑efficiency modules that capture sunlight and convert it into DC electricity using photovoltaic cells.",
    image: "/on%20grid%20solar%20panel.png",
    icon: <PanelsTopLeft size={18} />,
  },
  {
    title: "Solar Inverter",
    desc: "Converts DC electricity from panels into AC power and synchronizes perfectly with the grid for safe energy transfer.",
    image: "/on%20grid%20invertor.png",
    icon: <Zap size={18} />,
  },
  {
    title: "Bi-Directional Meter",
    desc: "Tracks both energy imported from and exported to the grid, enabling net metering credits for excess power.",
    image: "/solar%20panel.jpeg",
    icon: <Gauge size={18} />,
  },
]

