"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SolarPanelsPage() {
	const heroVariants = {
		hidden: { opacity: 0, y: 24 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	}

	const cardVariants = {
		hidden: { opacity: 0, y: 16 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	}

	return (
		<div className="min-h-screen bg-white">
			{/* Hero */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
				<div className="container mx-auto px-4 py-16 md:py-24">
					<motion.div
						variants={heroVariants}
						initial="visible"
						animate="visible"
						className="grid lg:grid-cols-2 gap-10 items-center"
					>
						<div>
							<h1 className="text-4xl md:text-6xl font-bold text-[#3B82F6] mb-4">High‑Efficiency Solar Panels</h1>
							<p className="text-gray-600 text-lg md:text-xl mb-8">
								Engineered for maximum energy yield, durability, and beautiful aesthetics. Our panel
								systems are optimized for Indian climates with best‑in‑class warranties.
							</p>
							<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                                <div className="rounded-2xl border border-white/50 bg-gradient-to-br from-white/70 via-white/30 to-white/10 backdrop-blur-md shadow-md p-4 glow-card">
									<p className="text-sm text-gray-500">Module Efficiency</p>
									<p className="text-2xl font-bold text-[#3B82F6]">up to 22.5%</p>
									<p className="text-gray-600 mt-1">More energy from the same roof area</p>
								</div>
                                <div className="rounded-2xl border border-white/50 bg-gradient-to-br from-white/70 via-white/30 to-white/10 backdrop-blur-md shadow-md p-4 glow-card">
									<p className="text-sm text-gray-500">Warranty Coverage</p>
									<p className="text-2xl font-bold text-[#3B82F6]">25 Years</p>
									<p className="text-gray-600 mt-1">Performance and product assurance</p>
								</div>
                                <div className="rounded-2xl border border-white/50 bg-gradient-to-br from-white/70 via-white/30 to-white/10 backdrop-blur-md shadow-md p-4 glow-card">
									<p className="text-sm text-gray-500">Standards</p>
									<p className="text-2xl font-bold text-[#3B82F6]">BIS / ALMM</p>
									<p className="text-gray-600 mt-1">Compliant for government subsidies</p>
								</div>
							</div>
						</div>
                        <div className="relative h-64 md:h-80 lg:h-[28rem] rounded-2xl overflow-hidden glow-card">
							<Image
								src="/solar%20panel.jpeg"
								alt="Modern rooftop solar panel array at sunset"
								fill
								priority
                                className="object-cover object-top"
							/>
							<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
						</div>
					</motion.div>
				</div>
			</section>

			{/* Why our panels */}
			<section className="pt-8 pb-16">
				<div className="container mx-auto px-4">
					<motion.h2
						variants={cardVariants}
						initial="visible"
						whileInView="visible"
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold text-[#3B82F6] text-center mb-12"
					>
						Why Choose Our Solar Panels
					</motion.h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Monocrystalline Efficiency",
                                desc: "Premium cells with high conversion efficiency for maximum output in limited space.",
                                img: "/monocrystalline.jpeg",
                            },
                            {
                                title: "Durability & Weather Resistance",
                                desc: "Salt‑mist, ammonia, and PID resistant. Built to withstand heat, wind, and hail.",
                                img: "/weather%20resistance.jpeg",
                            },
                            {
                                title: "Smart Monitoring Ready",
                                desc: "Seamlessly integrates with inverters and apps for real‑time performance tracking.",
                                img: "/smart%20monitoring.jpg",
                            },
						].map((f, idx) => (
							<motion.div key={idx} variants={cardVariants} initial="visible" whileInView="visible" viewport={{ once: true }}>
                                <Card className="h-full bg-gradient-to-br from-white/20 via-white/5 to-transparent backdrop-blur-sm border border-white/30 glow-card">
									<CardHeader>
                                        <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                                            <Image 
                                              src={f.img} 
                                              alt={f.title} 
                                              fill 
                                              className="object-cover" 
                                              loading="eager"
                                              priority
                                              style={{ objectPosition: f.title === 'Durability & Weather Resistance' ? 'center 70%' : 'center top' }}
                                            />
										</div>
										<CardTitle className="text-xl">{f.title}</CardTitle>
										<CardDescription>{f.desc}</CardDescription>
									</CardHeader>
									<CardContent>
										<ul className="space-y-2 text-gray-600">
											<li>• 25+ year performance warranty</li>
											<li>• Excellent low‑light performance</li>
											<li>• Corrosion‑resistant anodized frames</li>
										</ul>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Panel types */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<motion.h2
						variants={cardVariants}
						initial="visible"
						whileInView="visible"
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold text-[#3B82F6] text-center mb-12"
					>
						Popular Panel Types
					</motion.h2>
					<div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Monocrystalline", img: "/monocrystalline%20-1.jpeg", points: ["Highest efficiency", "Sleek black look", "Great for limited roof area"] },
                            { name: "Polycrystalline", img: "/polycrystalline.jpeg", points: ["Balanced price‑to‑performance", "Proven reliability", "Ideal for larger roofs"] },
                            { name: "Thin‑Film", img: "/thin%20film.jpeg", points: ["Lightweight & flexible", "Performs well in heat", "Aesthetic integration"] },
						].map((t, idx) => (
							<motion.div key={idx} variants={cardVariants} initial="visible" whileInView="visible" viewport={{ once: true }}>
                                <Card className="h-full group bg-gradient-to-br from-white/20 via-white/5 to-transparent backdrop-blur-sm border border-white/30 glow-card">
									<CardHeader>
                                        <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4">
                                            <Image 
                                              src={t.img} 
                                              alt={t.name} 
                                              fill 
                                              className={`object-cover transition-transform duration-500 group-hover:scale-105`} 
                                              loading="eager"
                                              priority
                                              style={{ objectPosition: t.name === 'Thin‑Film' ? 'center 85%' : 'center top' }}
                                            />
										</div>
										<CardTitle className="text-xl">{t.name}</CardTitle>
										<CardDescription>Optimized for different budgets and aesthetics.</CardDescription>
									</CardHeader>
									<CardContent>
										<ul className="space-y-2 text-gray-700">
											{t.points.map((p, i) => (
												<li key={i}>✓ {p}</li>
											))}
										</ul>
										{/* CTA removed per request */}
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA removed per request */}
		</div>
	)
}


