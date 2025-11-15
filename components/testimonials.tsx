"use client"

import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform, useScroll, type MotionValue } from "framer-motion"
import { Quote, UserRound } from "lucide-react"

export default function ModernTestimonials() {
  const testimonials = [
    {
      quote:
        "Tanti's automation has truly changed our life. Now, we have complete freedom to control any device from anywhere. You can always trust Tanti's services. 100% recommended from my side.",
      author: "Veena Ashok",
      role: "Client",
      avatar: "/tanti/clientspeak1.png",
      company: "Mysore",
      rating: 5,
    },
    {
      quote:
        "Exceptional execution on our smart home. Installation was flawless and support is outstanding.",
      author: "Rajesh Kumar",
      role: "Homeowner",
      avatar: "/placeholder-user.jpg",
      company: "Bengaluru",
      rating: 5,
    },
    {
      quote:
        "Energy savings and efficiency improvements have been remarkable. Highly professional team.",
      author: "Priya Sharma",
      role: "Facilities Manager",
      avatar: "/placeholder-user.jpg",
      company: "Mumbai",
      rating: 5,
    },
  ]

  // Parallax values
  const { scrollYProgress } = useScroll()
  const yBackLeft = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yBackRight = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
      style={{ backgroundColor: '#F5F5F0' }}
    >
      {/* Parallax background blobs */}
      <motion.div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[100px]" style={{ y: yBackLeft }} aria-hidden="true" />
      <motion.div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-amber-500/10 rounded-full blur-[100px]" style={{ y: yBackRight }} aria-hidden="true" />

      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 id="testimonials-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#3B82F6]">What Our Customers Say</h2>
          <p className="text-base sm:text-lg text-black/70 max-w-2xl mx-auto">Real stories from our clients about the impact of our solutions.</p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <TiltGlowCard key={t.author} idx={idx} yBackLeft={yBackLeft} data={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

type Testimonial = {
  quote: string
  author: string
  role: string
  avatar: string
  company: string
  rating: number
}

import { useState } from "react"

function TiltGlowCard({ data, idx, yBackLeft }: { data: Testimonial; idx: number; yBackLeft: MotionValue<number> }) {
  const cardX = useMotionValue(0)
  const cardY = useMotionValue(0)
  const springX = useSpring(cardX, { stiffness: 300, damping: 30 })
  const springY = useSpring(cardY, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(springY, [-80, 80], [15, -15])
  const rotateY = useTransform(springX, [-80, 80], [-15, 15])

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    cardX.set(Math.max(-80, Math.min(80, relX / 3)))
    cardY.set(Math.max(-80, Math.min(80, relY / 3)))
  }

  const handleLeave = () => {
    cardX.set(0)
    cardY.set(0)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-sm p-6 overflow-hidden will-change-transform glow-card"
    >
      {/* Floating quote mark */}
      <motion.div className="absolute -top-6 -left-2 text-red-500/20" style={{ y: yBackLeft }} aria-hidden="true">
        <Quote size={56} />
      </motion.div>

      {/* Cursor-follow glow (scoped to card) */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-500/10 blur-2xl"
        aria-hidden="true"
      />

      {/* Avatar */}
      <div className="flex items-center gap-4 mb-4" style={{ transform: "translateZ(30px)" }}>
        <Avatar src={data.avatar} alt={`Portrait of ${data.author}`} />
        <div>
          <h4 className="font-semibold text-black leading-tight">{data.author}</h4>
          <p className="text-sm text-black/60">{data.role} • {data.company}</p>
        </div>
      </div>

      <p className="text-black/90" style={{ transform: "translateZ(20px)" }}>“{data.quote}”</p>

      {/* Underline accent */}
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-blue-500 to-cyan-500" aria-hidden="true" />

      {/* Hover ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-blue-300/60 transition-all" />
    </motion.article>
  )
}

function Avatar({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative w-14 h-14">
      {failed ? (
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center ring-1 ring-blue-300/40">
          <UserRound className="text-blue-600" size={28} />
        </div>
      ) : (
        <Image src={src} alt={alt} fill sizes="56px" className="rounded-full object-cover" onError={() => setFailed(true)} loading="eager" priority />
      )}
    </div>
  )
}
