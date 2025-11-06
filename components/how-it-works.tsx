"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { rememberScroll } from "@/hooks/useScrollRestore";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

// Image component with fallback support
function ImageWithFallback({ 
  src, 
  fallback, 
  alt, 
  fill, 
  className, 
  loading, 
  priority, 
  sizes 
}: { 
  src: string; 
  fallback?: string; 
  alt: string; 
  fill?: boolean; 
  className?: string; 
  loading?: "lazy" | "eager"; 
  priority?: boolean; 
  sizes?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  return (
    <Image
      src={hasError && fallback ? fallback : imgSrc}
      alt={alt}
      fill={fill}
      className={className}
      loading={loading}
      priority={priority}
      sizes={sizes}
      onError={() => {
        if (fallback && !hasError) {
          setHasError(true);
          setImgSrc(fallback);
        }
      }}
    />
  );
}

export default function HowItWorks() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const assetVersion = "v1-20251015";

  const steps = [
    {
      number: "01",
      title: "Commercial",
      description:
        "Intelligent automation systems for commercial spaces. Enhance efficiency, safety, and sustainability with smart building solutions.",
      image: "/Industry%20-%20Commercial%20-%20Institutional%20%26%20Industrial%201.jpeg",
      fallbackImage: "/tanti/commercial.jpg",
    },
    {
      number: "02",
      title: "Residential",
      description:
        "Smart lighting and automation solutions for your home. Control your entire home seamlessly from anywhere.",
      image: "/Res.jpg",
      fallbackImage: "/tanti/residential%20image.jpg",
    },
    {
      number: "03",
      title: "Solar",
      description:
        "Comprehensive solar energy solutions for residential and commercial projects. Reduce costs and environmental impact.",
      image: "/Solar.jpeg",
      fallbackImage: "/images/HowItWorks/step3.webp",
    },
    {
      number: "04",
      title: "MEP",
      description:
        "Expert mechanical, electrical, and plumbing engineering services. Optimal system design, installation, and maintenance.",
      image: "/MEP.jpeg",
      fallbackImage: "/tanti/security.jpg",
    },
  ];

  // Update selected index when the carousel scrolls
  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  // Initialize onSelect callback once emblaApi is available
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Navigation helper
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  // Get navigation path for a step
  const getStepPath = (step: { title: string }) => {
    if (step.title === "Residential") {
      return "/residential";
    } else if (step.title === "Commercial") {
      return "/commercial";
    } else if (step.title === "Solar") {
      return "/solar";
    }
    return "#";
  };

  return (
    <section id="cards-section" className="py-2 sm:py-3 md:py-4 relative overflow-hidden" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-3 sm:mb-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 pb-1 text-[#06b6d4]">
            What We Offer
          </h2>
          
        </motion.div>

        {/* Desktop view - Grid layout with equal height cards */}
        <div className="hidden sm:grid sm:grid-cols-2 sm:px-[5%] lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link
                href={getStepPath(step)}
                scroll={false}
                onClick={rememberScroll}
                className={`relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col shadow-lg transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:-translate-y-1 group-hover:shadow-2xl ${roboto.className} ${step.title === "Residential" || step.title === "Commercial" || step.title === "Solar" ? "cursor-pointer" : ""}`}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <ImageWithFallback
                    src={step.image}
                    fallback={step.fallbackImage}
                    alt={step.title}
                    fill
                    className="object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold">
                    {step.number}
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-black">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black mb-4 flex-grow">
                    {step.description}
                  </p>

                  {(index < steps.length - 1 || step.title === "MEP") && (
                    <div className="hidden lg:flex items-center justify-end text-blue-500 mt-auto">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile view - Using Embla Carousel - Simplified */}
        <div className="sm:hidden">
          {/* Remove overflow-hidden from container and apply to carousel only */}
          <div className="overflow-visible -mx-4 px-4" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {steps.map((step, index) => (
                <Link
                  key={index}
                  href={getStepPath(step)}
                  scroll={false}
                  onClick={rememberScroll}
                  className={`flex-[0_0_85%] min-w-0 ml-4 first:ml-4 ${step.title === "Residential" || step.title === "Commercial" || step.title === "Solar" ? "cursor-pointer" : ""}`}
                >
                  <div className="relative h-32 overflow-hidden">
                    <ImageWithFallback
                      src={step.image}
                      fallback={step.fallbackImage}
                      alt={step.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="85vw"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  <div className="p-3 flex-grow flex flex-col">
                    <h3 className="text-base font-bold mb-1 text-black">
                      {step.title}
                    </h3>
                    <p className="text-xs text-black">
                      {step.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center mt-6 sm:mt-10 gap-2" aria-hidden="true">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2 bg-white/20 ${selectedIndex === i ? "h-6" : "h-3"} transition-all duration-300 rounded-full`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
