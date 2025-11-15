"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Sun, Building2, Home, Factory } from "lucide-react";
import "./SolarSections.css";

gsap.registerPlugin(ScrollTrigger);

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
		layout: "text-left" // text left, image right
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
		layout: "image-left" // image left, text right
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
		layout: "text-left" // text left, image right
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
		layout: "image-left" // image left, text right
	}
];

export default function SolarSections() {
	const containerRef = useRef(null);
	const sectionsRef = useRef([]);
	const stepperRef = useRef(null);
	const [activeStep, setActiveStep] = useState(0);
	sectionsRef.current = [];

	const setRef = (el, idx) => {
		if (el) {
			sectionsRef.current[idx] = el;
		}
	};

	// Scroll to specific section
	const scrollToSection = (index) => {
		if (sectionsRef.current[index]) {
			sectionsRef.current[index].scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	useEffect(() => {
		let ctx;
		let timeoutId;
		const scrollTriggers = [];

		// Wait for DOM to be fully ready before initializing
		timeoutId = setTimeout(() => {
			if (!containerRef.current) return;

			ctx = gsap.context(() => {
				sectionsRef.current.forEach((section, index) => {
					if (!section) return;

					const card = section.querySelector(".solar-card");
					const image = section.querySelector(".solar-image");
					const title = section.querySelector(".solar-title");
					const description = section.querySelector(".solar-description");
					const bullets = section.querySelectorAll(".solar-bullet");
					const button = section.querySelector(".solar-button");
					const floatingElements = section.querySelectorAll(".floating-element");

					// Initial state for fade-in animations
					gsap.set([title, description, bullets, button], { opacity: 0, y: 30 });
					gsap.set(image, { scale: 1.05, opacity: 0 });
					gsap.set(floatingElements, { opacity: 0, scale: 0.8 });

					// ScrollTrigger for pinning and transitions - One card per screen
					const st = gsap.fromTo(
						section,
						{ opacity: 1, yPercent: 0 },
						{
							opacity: 1,
							yPercent: 0,
							ease: "none",
							scrollTrigger: {
								trigger: section,
								start: "top top",
								end: "+=100vh", /* Full viewport height - ensures one card at a time */
								pin: true,
								pinSpacing: false,
								scrub: true,
								anticipatePin: 1,
								onEnter: () => {
									setActiveStep(index);
									// Animate content in
									gsap.to([title, description], {
										opacity: 1,
										y: 0,
										duration: 0.8,
										ease: "power2.out",
										stagger: 0.1
									});
									gsap.to(bullets, {
										opacity: 1,
										y: 0,
										duration: 0.6,
										ease: "power2.out",
										stagger: 0.1,
										delay: 0.3
									});
									gsap.to(button, {
										opacity: 1,
										y: 0,
										duration: 0.6,
										ease: "power2.out",
										delay: 0.6
									});
									gsap.to(image, {
										scale: 1,
										opacity: 1,
										duration: 1,
										ease: "power2.out"
									});
									gsap.to(floatingElements, {
										opacity: 1,
										scale: 1,
										duration: 0.8,
										ease: "back.out(1.7)",
										stagger: 0.15
									});
								},
								onLeave: () => {
									// Fade out when leaving
									gsap.to([title, description, bullets, button, image], {
										opacity: 0.3,
										duration: 0.3,
										ease: "power2.in"
									});
								},
								onEnterBack: () => {
									setActiveStep(index);
									// Re-animate when scrolling back
									gsap.to([title, description, bullets, button, image], {
										opacity: 1,
										duration: 0.5,
										ease: "power2.out"
									});
								}
							}
						}
					);
					scrollTriggers.push(st);

					// Parallax effect for image as user scrolls within section
					gsap.to(image, {
						scale: 1.05,
						scrollTrigger: {
							trigger: section,
							start: "top top",
							end: "bottom top",
							scrub: 1,
							onUpdate: (self) => {
								const progress = self.progress;
								gsap.set(image, { scale: 1 + progress * 0.05 });
							}
						}
					});

					// Floating elements parallax
					floatingElements.forEach((el, i) => {
						gsap.to(el, {
							y: (i % 2 === 0 ? -20 : 20),
							x: (i % 2 === 0 ? 10 : -10),
							rotation: (i % 2 === 0 ? 5 : -5),
							scrollTrigger: {
								trigger: section,
								start: "top top",
								end: "bottom top",
								scrub: 1
							}
						});
					});
				});

				// Sync stepper with scroll position
				sectionsRef.current.forEach((section, index) => {
					if (!section) return;
					ScrollTrigger.create({
						trigger: section,
						start: "top center",
						end: "bottom center",
						onEnter: () => setActiveStep(index),
						onEnterBack: () => setActiveStep(index)
					});
				});

				// Refresh ScrollTrigger to ensure proper setup
				ScrollTrigger.refresh();
			}, containerRef);
		}, 100);

		return () => {
			if (timeoutId) clearTimeout(timeoutId);
			if (ctx) ctx.revert();
			scrollTriggers.forEach(st => st?.kill());
		};
	}, []);

	return (
		<div ref={containerRef} className="solar-stack-wrapper">
			{/* Vertical Stepper - Desktop Only */}
			<div ref={stepperRef} className="solar-stepper">
				{roofTypes.map((roof, index) => {
					const Icon = roof.icon;
					return (
						<button
							key={roof.id}
							className={`stepper-item ${activeStep === index ? "active" : ""}`}
							onClick={() => scrollToSection(index)}
							aria-label={`Go to ${roof.title}`}
						>
							<div className="stepper-number">
								{String(index + 1).padStart(2, "0")}
							</div>
							<div className="stepper-content">
								<Icon className="stepper-icon" size={16} />
								<span className="stepper-label">{roof.shortTitle}</span>
							</div>
							{index < roofTypes.length - 1 && <div className="stepper-line" />}
						</button>
					);
				})}
			</div>

			{/* Main Scroll Stack Container */}
			<div className="solar-stack">
				{roofTypes.map((roof, index) => {
					const Icon = roof.icon;
					const isTextLeft = roof.layout === "text-left";

					return (
						<section
							key={roof.id}
							ref={(el) => setRef(el, index)}
							className={`section section-${index + 1} bg-gradient`}
						>
							<div className="section-container">
								<div className={`solar-card ${isTextLeft ? "layout-text-left" : "layout-image-left"}`}>
									{/* Text Content */}
									<div className="solar-content">
										<h2 className="solar-title">
											<span className="pill-label">
												<Icon className="pill-icon" size={18} />
												{roof.title}
											</span>
										</h2>
										<p className="solar-description">{roof.description}</p>
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
												// Handle CTA click - you can add navigation or modal here
												console.log(`Talk to expert about ${roof.title}`);
											}}
										>
											Talk to an Expert
										</Button>
									</div>

									{/* Image Container */}
									<div className="solar-image-wrapper">
										<div className="solar-image-container">
											<div className="solar-image">
												<Image
													src={roof.image}
													alt={roof.title}
													fill
													className="object-cover"
													loading="eager"
													priority={index < 2}
												/>
											</div>
											{/* Gradient border glow */}
											<div className="image-glow" />
											{/* Shine overlay for hover effect */}
											<div className="image-shine" />
										</div>

										{/* Floating Decorative Elements */}
										<div className="floating-element floating-1">
											<Sun size={24} />
										</div>
										<div className="floating-element floating-2">
											<div className="glow-dot" />
										</div>
									</div>
								</div>
							</div>
						</section>
					);
				})}
			</div>

			{/* Horizontal Progress Indicator - Tablet/Mobile */}
			<div className="solar-progress-mobile">
				{roofTypes.map((roof, index) => (
					<button
						key={roof.id}
						className={`progress-dot ${activeStep === index ? "active" : ""}`}
						onClick={() => scrollToSection(index)}
						aria-label={`Go to ${roof.title}`}
					/>
				))}
			</div>
		</div>
	);
}
