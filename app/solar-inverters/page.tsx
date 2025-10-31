"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SolarInvertersPage() {
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
						initial="hidden"
						animate="visible"
						className="grid lg:grid-cols-2 gap-10 items-center"
					>
						<div>
							<h1 className="text-4xl md:text-6xl font-bold text-[#3B82F6] mb-4">Smart Solar Inverters</h1>
							<p className="text-gray-600 text-lg md:text-xl mb-8">
								High‑efficiency inverters that convert DC to AC with superior reliability,
								advanced safety, and real‑time monitoring.
							</p>
							<div className="grid sm:grid-cols-3 gap-4">
								<div className="rounded-2xl border border-blue-100 bg-white/70 p-4 glow-card">
									<p className="text-sm text-gray-500">Max Efficiency</p>
									<p className="text-2xl font-bold text-[#3B82F6]">98%+</p>
									<p className="text-gray-600 mt-1">Peak conversion efficiency</p>
								</div>
								<div className="rounded-2xl border border-blue-100 bg-white/70 p-4 glow-card">
									<p className="text-sm text-gray-500">Safety</p>
									<p className="text-2xl font-bold text-[#3B82F6]">AFCI / SPD</p>
									<p className="text-gray-600 mt-1">Arc‑fault & surge protection</p>
								</div>
								<div className="rounded-2xl border border-blue-100 bg-white/70 p-4 glow-card">
									<p className="text-sm text-gray-500">Connectivity</p>
									<p className="text-2xl font-bold text-[#3B82F6]">Wi‑Fi / 4G</p>
									<p className="text-gray-600 mt-1">App & cloud monitoring</p>
								</div>
							</div>
						</div>
						<div className="relative h-64 md:h-80 lg:h-[28rem] rounded-2xl overflow-hidden glow-card">
							<Image
								src="/solar%20inverter.jpeg"
								alt="Utility‑scale inverters on a solar plant"
								fill
								priority
								className="object-cover"
							/>
							<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
						</div>
					</motion.div>
				</div>
			</section>

			{/* Inverter Types */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<motion.h2
						variants={cardVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold text-[#3B82F6] text-center mb-12"
					>
						Popular Inverter Options
					</motion.h2>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								name: "String Inverters",
								desc: "Cost‑effective and efficient for most residential & commercial rooftops.",
								img: "/images/analytics.png",
								points: ["High efficiency 97–98%", "Easy servicing", "Works with optimizers"],
							},
							{
								name: "Micro Inverters",
								desc: "Panel‑level conversion for shade tolerance and granular monitoring.",
								img: "/images/automation.png",
								points: ["Best for complex roofs", "Per‑panel monitoring", "Scalable"],
							},
							{
								name: "Hybrid Inverters",
								desc: "Seamlessly integrates batteries for backup and energy management.",
								img: "/lithum%20battery.png",
								points: ["Backup during outages", "Export to grid", "Time‑of‑use savings"],
							},
						].map((t, idx) => (
							<motion.div key={idx} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
								<Card className="h-full group glow-card">
									<CardHeader>
										<div className="relative w-full h-44 rounded-xl overflow-hidden mb-4">
											<Image src={t.img} alt={t.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
										</div>
										<CardTitle className="text-xl font-bold text-[#3B82F6]">{t.name}</CardTitle>
										<CardDescription>{t.desc}</CardDescription>
									</CardHeader>
									<CardContent>
										<ul className="space-y-2 text-gray-700">
											{t.points.map((p, i) => (
												<li key={i}>✓ {p}</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500">
				<div className="container mx-auto px-4 text-center text-white">
					<motion.h2
						variants={cardVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold mb-4"
					>
						Upgrade your solar with the right inverter
					</motion.h2>
					<p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
						Talk to our engineers for sizing, brand options, and compatibility with batteries.
					</p>
					<Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
						Request Consultation
					</Button>
				</div>
			</section>
		</div>
	)
}


