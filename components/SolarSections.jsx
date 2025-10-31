"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import "./SolarSections.css";

gsap.registerPlugin(ScrollTrigger);

export default function SolarSections() {
	const containerRef = useRef(null);
	const sectionsRef = useRef([]);
	sectionsRef.current = [];

	const setRef = (el, idx) => {
		if (el) {
			sectionsRef.current[idx] = el;
		}
	};

	useEffect(() => {
		const ctx = gsap.context(() => {
            sectionsRef.current.forEach((section) => {
                // Keep all sections fully readable immediately; animate only slight settling while pinned.
                gsap.fromTo(
                    section,
                    { opacity: 1, yPercent: 0 },
                    { opacity: 1, yPercent: 0, ease: "none",
						scrollTrigger: {
							trigger: section,
							start: "top top",
							end: "+=100%",
							pin: true,
							pinSpacing: false,
							scrub: true,
							anticipatePin: 1,
						},
					}
				);
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={containerRef} className="solar-stack">
			<section ref={(el) => setRef(el, 0)} className="section section-1 bg-one">
				<div className="section-inner">
					<div className="col col-text">
						<h2><span className="pill-label">Sleeping Structure</span></h2>
						<p>
							Ideal for sloped roofs with traditional construction methods. Our solar solutions are perfectly suited for traditional homes that require careful aesthetic integration.
						</p>
						<ul>
							<li>Easy installation without damaging roof structure</li>
							<li>Optimal tilt angle for maximum efficiency</li>
							<li>Traditional home aesthetic preservation</li>
						</ul>
						{/* Learn More button removed per request */}
					</div>
					<div className="col col-visual">
						<div className="illustration">
							<Image
								src="/sleeping%20structure.jpeg"
								alt="Sleeping Structure"
								fill
								className="object-cover rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</section>

			<section ref={(el) => setRef(el, 1)} className="section section-2 bg-two">
				<div className="section-inner">
					<div className="col col-text">
						<h2><span className="pill-label">High Rise Structure</span></h2>
						<p>
							Solar solutions for modern high-rise buildings and apartments. Maximize your energy generation potential with our specialized commercial systems designed for urban environments.
						</p>
						<ul>
							<li>Flat roof compatible with heavy-duty mounting</li>
							<li>Advanced weight distribution technology</li>
							<li>Large-scale commercial installations</li>
						</ul>
						{/* Learn More button removed per request */}
					</div>
					<div className="col col-visual">
						<div className="illustration">
							<Image
								src="/high%20rise.jpeg"
								alt="High Rise Structure"
								fill
								className="object-cover rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</section>

			<section ref={(el) => setRef(el, 2)} className="section section-3 bg-three">
				<div className="section-inner">
					<div className="col col-text">
						<h2><span className="pill-label">GI Roof</span></h2>
						<p>
							Galvanized Iron sheet roofs perfect for industrial and commercial use. Our specialized mounting systems ensure optimal performance in harsh industrial environments.
						</p>
						<ul>
							<li>Weather resistant mounting technology</li>
							<li>Durable and long-lasting installation</li>
							<li>Perfect for industrial applications</li>
						</ul>
						{/* Learn More button removed per request */}
					</div>
					<div className="col col-visual">
						<div className="illustration">
							<Image
								src="/GI%20roof.jpeg"
								alt="GI Roof"
								fill
								className="object-cover rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</section>

			<section ref={(el) => setRef(el, 3)} className="section section-4 bg-four">
				<div className="section-inner">
					<div className="col col-text">
						<h2><span className="pill-label">Tiles Roof</span></h2>
						<p>
							Elegant solar solutions for tile-roofed homes and heritage buildings. We preserve the beauty and character of your property while delivering maximum solar efficiency.
						</p>
						<ul>
							<li>Non-invasive mounting preserves roof integrity</li>
							<li>Maintains traditional aesthetic appeal</li>
							<li>Heritage-friendly installation process</li>
						</ul>
						{/* Learn More button removed per request */}
					</div>
					<div className="col col-visual">
						<div className="illustration">
							<Image
								src="/tiles%20roof.jpeg"
								alt="Tiles Roof"
								fill
								className="object-cover rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}


