"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
						<h1>Sleeping Structure</h1>
						<p>
							Placeholder description for Sleeping Structure. Replace with your content.
						</p>
					</div>
					<div className="col col-visual">
						<div className="illustration">🏠</div>
					</div>
				</div>
			</section>

			<section ref={(el) => setRef(el, 1)} className="section section-2 bg-two">
				<div className="section-inner">
					<div className="col col-text">
						<h1>High Rise Structure</h1>
						<p>
							Placeholder description for High Rise Structure. Replace with your content.
						</p>
					</div>
					<div className="col col-visual">
						<div className="illustration">🏢</div>
					</div>
				</div>
			</section>

			<section ref={(el) => setRef(el, 2)} className="section section-3 bg-three">
				<div className="section-inner">
					<div className="col col-text">
						<h1>GI Roof</h1>
						<p>
							Placeholder description for GI Roof. Replace with your content.
						</p>
					</div>
					<div className="col col-visual">
						<div className="illustration">🏭</div>
					</div>
				</div>
			</section>

			<section ref={(el) => setRef(el, 3)} className="section section-4 bg-four">
				<div className="section-inner">
					<div className="col col-text">
						<h1>Industrial Roof (Placeholder)</h1>
						<p>
							Placeholder description for Industrial Roof. Replace with your content.
						</p>
					</div>
					<div className="col col-visual">
						<div className="illustration">🏗️</div>
					</div>
				</div>
			</section>
		</div>
	);
}


