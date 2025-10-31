"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Battery, Cable, PanelsTopLeft, ShieldCheck, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }

export default function SolarOffGridPage() {
  return (
    <main className="relative min-h-screen" style={{ backgroundImage: "url('/solar%20off%20img%201.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-white/30" />
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[55vh] md:min-h-[70vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/solar%20off%20img%201.jpg"
            alt="Off-grid solar system"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-5">Off‑Grid Solar Power System</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              A self‑sufficient solar solution that stores energy in batteries and powers your
              space without relying on the utility grid.
            </p>
            {/* CTA buttons removed per request */}

            {/* Quick stats */}
            <div className="mt-6 md:mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl -mb-4">
              {[{k:"Autonomy",v:"24–72 hrs"},{k:"Battery",v:"Li‑ion/VRLA"},{k:"Uptime",v:">99%"}].map((s)=> (
                <div key={s.k} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-sm">
                  <div className="opacity-80">{s.k}</div>
                  <div className="font-semibold">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Removed figurines row as requested */}
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
            <div className="w-full bg-gradient-to-r from-blue-100/70 to-blue-200/60 backdrop-blur-md rounded-xl px-4 md:px-6 py-4 md:py-5 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2563EB] mb-2">Overview</h2>
              <p className="text-[#2563EB] text-base md:text-lg font-semibold leading-relaxed">
                An off‑grid (standalone) system works like an on‑grid PV array, but remains completely
                independent of the utility. Energy produced during the day is consumed directly or
                stored in batteries for use at night and during cloudy periods.
              </p>
            </div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-5 mt-8">
            {[{
              icon: <PanelsTopLeft className="text-blue-600" size={28} />, title: "Independence",
              text: "Operate entirely without the utility grid—perfect for remote sites."
            },{
              icon: <Battery className="text-blue-600" size={28} />, title: "Energy Storage",
              text: "High‑performance batteries supply reliable power day and night."
            },{
              icon: <ShieldCheck className="text-blue-600" size={28} />, title: "Resilience",
              text: "Keep essential loads running during outages and bad weather."
            }].map((c, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6, scale: 1.01 }} className="rounded-2xl p-5 bg-gradient-to-br from-blue-100/80 to-blue-200/60 border border-blue-100 glow-card">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">{c.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#2563EB]">{c.title}</h3>
                <p className="text-[#2563EB] font-semibold">{c.text}</p>
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
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden glow-card">
                <Image src="/off%20grid%20pg%20panel.jpg" alt="Panels charging batteries" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 p-4 text-white">
                  <p className="font-semibold flex items-center gap-2"><Zap className="w-4 h-4" /> Daytime Generation</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full bg-gradient-to-r from-blue-100/70 to-blue-200/60 backdrop-blur-md rounded-xl px-4 md:px-6 py-4 md:py-5 shadow-lg">
              <ul className="space-y-2 md:space-y-3 text-[#2563EB] text-base md:text-lg font-semibold">
                <li>• PV modules convert sunlight to DC power.</li>
                <li>• A charge controller routes energy to loads and to batteries.</li>
                <li>• Inverter converts stored DC to AC for appliances when needed.</li>
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
                className="group rounded-2xl bg-gradient-to-br from-blue-50/80 to-blue-200/60 border border-blue-100 overflow-hidden glow-card"
              >
                <div className="relative h-40">
                  <Image src={c.image} alt={c.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2 text-[#2563EB]">{c.icon}<span className="font-bold">{c.title}</span></div>
                  <p className="text-[#2563EB] text-sm leading-relaxed font-semibold">{c.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Cost & maintenance */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full bg-gradient-to-r from-blue-100/70 to-blue-200/60 backdrop-blur-md rounded-xl px-4 md:px-6 py-4 md:py-5 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2563EB] mb-2">Cost & Maintenance</h2>
              <p className="text-[#2563EB] text-base md:text-lg mb-3 font-semibold leading-relaxed">
                Off‑grid systems are typically more expensive than on‑grid solutions due to the
                battery bank. Batteries also require periodic replacement and basic upkeep, but you
                gain complete energy independence—ideal for remote locations or unreliable grids.
              </p>
              <ul className="text-[#2563EB] list-disc pl-5 space-y-1.5 md:space-y-2 font-semibold">
                <li>Right‑sized battery capacity for your critical loads</li>
                <li>Smart monitoring and protections for long battery life</li>
                <li>Modular designs that grow with your energy needs</li>
              </ul>
            </div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden glow-card">
                <Image src="/cost%20n%20maintainance.jpg" alt="Cost & Maintenance" fill className="object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 p-4 text-white"><span className="font-semibold flex items-center gap-2"><Sparkles className="w-4 h-4" /> Long‑life Li‑ion options</span></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA removed per request */}
    </main>
  )
}

const components = [
  {
    title: "Solar Panels",
    desc: "High‑efficiency modules that convert sunlight into DC electricity.",
    image: "/off%20grid%20ex%20panel.jpg",
    icon: <PanelsTopLeft size={18} />,
  },
  {
    title: "Charge Controller",
    desc: "Optimizes power flow and protects batteries from over‑/under‑charging.",
    image: "/charge.jpg",
    icon: <Cable size={18} />,
  },
  {
    title: "Battery Storage",
    desc: "Stores surplus energy for use at night or during cloudy periods.",
    image: "/battery.jpg",
    icon: <Battery size={18} />,
  },
]


