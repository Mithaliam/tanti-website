"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Sun, Building2, Home, Factory } from "lucide-react";
import "./SolarSections.css";

// Roof type data with icons
const roofTypes = [
	{
		id: 1,
		title: "Sleeping Structure",
		shortTitle: "Sleeping",
		description: "Ideal for sloped roofs with traditional construction methods. Our solar solutions are perfectly suited for traditional homes that require careful aesthetic integration.",
		bullets: [
			"Easy installation without damaging roof structure",
			"Optimal tilt angle for maximum efficiency",
			"Traditional home aesthetic preservation"
		],
		image: "/sleeping%20structure.jpeg",
		icon: Home,
	},
	{
		id: 2,
		title: "High Rise Structure",
		shortTitle: "High Rise",
		description: "Solar solutions for modern high-rise buildings and apartments. Maximize your energy generation potential with our specialized commercial systems designed for urban environments.",
		bullets: [
			"Flat roof compatible with heavy-duty mounting",
			"Advanced weight distribution technology",
			"Large-scale commercial installations"
		],
		image: "/high%20rise.jpeg",
		icon: Building2,
	},
	{
		id: 3,
		title: "GI Roof",
		shortTitle: "GI Roof",
		description: "Galvanized Iron sheet roofs perfect for industrial and commercial use. Our specialized mounting systems ensure optimal performance in harsh industrial environments.",
		bullets: [
			"Weather resistant mounting technology",
			"Durable and long-lasting installation",
			"Perfect for industrial applications"
		],
		image: "/GI%20roof.jpeg",
		icon: Factory,
	},
	{
		id: 4,
		title: "Tiles Roof",
		shortTitle: "Tiles Roof",
		description: "Elegant solar solutions for tile-roofed homes and heritage buildings. We preserve the beauty and character of your property while delivering maximum solar efficiency.",
		bullets: [
			"Non-invasive mounting preserves roof integrity",
			"Maintains traditional aesthetic appeal",
			"Heritage-friendly installation process"
		],
		image: "/tiles%20roof.jpeg",
		icon: Sun,
	}
];

export default function SolarSections() {
	const [activeIndex, setActiveIndex] = useState(0);
	const cardRefs = useRef([]);
	const containerRef = useRef(null);


	// Intersection Observer to track active card based on scroll
	useEffect(() => {
		const observers = cardRefs.current.map((card, index) => {
			if (!card) return null;
			
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
						setActiveIndex(index);
					}
				},
				{
					threshold: [0, 0.3, 0.5, 1],
					rootMargin: "-20% 0px -20% 0px"
				}
			);
			
			observer.observe(card);
			return observer;
		});

		return () => {
			observers.forEach(observer => observer?.disconnect());
		};
	}, []);

	return (
		<div ref={containerRef} className="solar-sections-wrapper">
			{/* Cards Container - All 4 cards stacked vertically */}
			<div className="solar-cards-container">
					{roofTypes.map((roof, index) => {
						const Icon = roof.icon;
						const isActive = activeIndex === index;
						
						return (
							<motion.div
								key={roof.id}
								ref={(el) => {
									if (el) cardRefs.current[index] = el;
								}}
								className={`solar-card ${isActive ? "active" : ""}`}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								{/* Text Content - Left Side */}
								<div className="solar-content">
									<h2 className="solar-title">
										<span className="pill-label">
											<Icon className="pill-icon" size={18} />
											{roof.title}
										</span>
									</h2>
									<p className="solar-description">
										{roof.description}
									</p>
									<ul className="solar-bullets">
										{roof.bullets.map((bullet, i) => (
											<li key={i} className="solar-bullet">
												<Check className="bullet-icon" size={18} />
												<span>{bullet}</span>
											</li>
										))}
									</ul>
									<Button
										className="solar-button"
										size="lg"
										onClick={() => {
											console.log(`Talk to expert about ${roof.title}`);
										}}
									>
										Talk to an Expert
									</Button>
								</div>

								{/* Image Container - Right Side */}
								<div className="solar-image-wrapper">
									<div className="solar-image-container">
										<Image
											src={roof.image}
											alt={roof.title}
											fill
											className="object-cover rounded-3xl"
											priority={index < 2}
											loading={index < 2 ? undefined : "lazy"}
										/>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
		</div>
	);
}
