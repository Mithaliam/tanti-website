"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SolarBatteryPage() {
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
				<div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
				<div className="container mx-auto px-4 py-16 md:py-24">
					<motion.div
						variants={heroVariants}
						initial="hidden"
						animate="visible"
						className="grid lg:grid-cols-2 gap-10 items-center"
					>
						<div>
							<h1 className="text-4xl md:text-6xl font-bold text-[#3B82F6] mb-4">Lithium Ion Battery</h1>
							<p className="text-gray-600 text-lg md:text-xl mb-8">
								Store excess solar energy in high‑cycle lithium batteries for backup power,
								bill savings, and energy independence.
							</p>
							<div className="grid sm:grid-cols-3 gap-4">
								<div className="rounded-2xl border border-blue-100 bg-white/70 p-4 glow-card">
									<p className="text-sm text-gray-500">Chemistry</p>
									<p className="text-2xl font-bold text-[#3B82F6]">LiFePO₄</p>
									<p className="text-gray-600 mt-1">Safe, thermally stable, long cycle life</p>
								</div>
								<div className="rounded-2xl border border-blue-100 bg-white/70 p-4 glow-card">
									<p className="text-sm text-gray-500">Cycle Life</p>
									<p className="text-2xl font-bold text-[#3B82F6]">6000+ cycles</p>
									<p className="text-gray-600 mt-1">At 80% Depth of Discharge</p>
								</div>
								<div className="rounded-2xl border border-blue-100 bg-white/70 p-4 glow-card">
									<p className="text-sm text-gray-500">Warranty</p>
									<p className="text-2xl font-bold text-[#3B82F6]">10 Years</p>
									<p className="text-gray-600 mt-1">Reliable performance assurance</p>
								</div>
							</div>
						</div>
						<div className="relative h-64 md:h-80 lg:h-[28rem] rounded-2xl overflow-hidden glow-card">
							<Image
								src="/lithum%20battery.png"
								alt="Lithium battery for solar storage"
								fill
								priority
								className="object-cover"
							/>
							<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
						</div>
					</motion.div>
				</div>
			</section>

			{/* Use cases */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<motion.h2
						variants={cardVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold text-[#3B82F6] text-center mb-12"
					>
						Where Battery Storage Helps
					</motion.h2>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{ name: "Backup During Outages", img: "/battery.jpg", points: ["Instant switchover", "Critical loads support", "Quiet & clean"] },
							{ name: "Time‑of‑Use Savings", img: "/images/webinar.png", points: ["Charge off‑peak", "Use at peak tariff", "Lower bills"] },
							{ name: "Self‑Consumption", img: "/solar%20panel.jpeg", points: ["Use more of your solar", "Reduce grid imports", "Increase ROI"] },
						].map((t, idx) => (
							<motion.div key={idx} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
								<Card className="h-full group glow-card">
									<CardHeader>
										<div className="relative w-full h-44 rounded-xl overflow-hidden mb-4">
											<Image src={t.img} alt={t.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
										</div>
										<CardTitle className="text-xl font-bold text-[#3B82F6]">{t.name}</CardTitle>
										<CardDescription>Practical advantages for homes and businesses.</CardDescription>
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
						Design your battery‑ready solar system
					</motion.h2>
					<p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
						We help size the battery bank, choose compatible inverters, and set smart controls.
					</p>
					<Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
						Request Battery Quote
					</Button>
				</div>
			</section>
		</div>
	)
}


