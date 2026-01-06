"use client";

import { useState, useEffect, useRef, useMemo, memo } from "react";
// Tree-shake Framer Motion - only import what we use
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { rememberScroll } from "@/hooks/useScrollRestore";

// Normalize image URL to ensure consistent encoding between server and client
// This prevents hydration mismatches with Next.js Image component
function normalizeImageUrl(url: string): string {
  // If URL is already encoded (contains %), return as-is to avoid double encoding
  if (url.includes('%')) {
    return url;
  }
  
  // If URL starts with '/', encode it consistently
  if (url.startsWith('/')) {
    try {
      // Split path into segments
      const parts = url.split('/').filter(Boolean);
      
      // Encode each segment consistently using encodeURIComponent
      // This ensures spaces become %20, & becomes %26, etc.
      const encodedParts = parts.map(part => encodeURIComponent(part));
      
      // Reconstruct path with leading slash
      return '/' + encodedParts.join('/');
    } catch {
      // If any error occurs, return original URL
      return url;
    }
  }
  return url;
}

// Image component with fallback support
// This component ensures server/client hydration consistency by using regular img tag for problematic files
function ImageWithFallback({ 
  src, 
  fallback, 
  alt, 
  fill, 
  className, 
  loading = "eager", 
  priority = true, 
  sizes 
}: { 
  src: string; 
  fallback?: string; 
  alt: string; 
  fill?: boolean; 
  className?: string; 
  loading?: "lazy" | "eager" | undefined; 
  priority?: boolean; 
  sizes?: string;
}) {
  // Check if src contains special characters that cause hydration issues with Next.js Image
  const hasSpecialChars = useMemo(() => {
    return src.includes(' ') || src.includes('&') || src.includes('%');
  }, [src]);
  
  const [hasError, setHasError] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Track mount state to prevent hydration mismatches
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Reset error when src changes (only after mount)
  useEffect(() => {
    if (isMounted) {
    setHasError(false);
    }
  }, [src, isMounted]);

  // For images with special characters, use regular img tag to avoid Next.js URL encoding issues
  // Always use src directly for initial render to ensure server/client match
  // Only switch to fallback after mount and error (client-side only)
  if (hasSpecialChars) {
    // Use src directly for initial render - this ensures server/client match
    const imageSrc = (hasError && fallback) ? fallback : src;
    
    return (
      <img
        src={imageSrc}
        alt={alt}
        className={className}
        loading={loading}
        onError={() => {
          // Only handle error after mount to prevent hydration mismatch
          if (fallback && !hasError && isMounted) {
            setHasError(true);
          }
        }}
        style={fill ? {
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        } : undefined}
      />
    );
  }

  // For normal images, use Next.js Image component
  const normalizedSrc = useMemo(() => normalizeImageUrl(src), [src]);
  const normalizedFallback = useMemo(() => fallback ? normalizeImageUrl(fallback) : undefined, [fallback]);
  const normalizedImageSrc = hasError && normalizedFallback ? normalizedFallback : normalizedSrc;

  // When priority is true, Next.js Image handles loading automatically
  // Don't pass loading prop when priority is true to avoid hydration mismatch
  const imageProps = priority 
    ? { priority: true }
    : loading ? { loading } : {};

  return (
    <Image
      key={normalizedSrc}
      src={normalizedImageSrc}
      alt={alt}
      fill={fill}
      className={className}
      {...imageProps}
      sizes={sizes}
      quality={85}
      onError={() => {
        if (normalizedFallback && !hasError) {
          setHasError(true);
        }
      }}
    />
  );
}

// Premium 3D Card Component with Glassmorphism
function PremiumCard({ 
  step, 
  index, 
  getStepPath 
}: { 
  step: { number: string; title: string; description: string; image: string; fallbackImage: string };
  index: number;
  getStepPath: (step: { title: string }) => string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "200px" }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      {/* Animated gradient border glow - Always visible with enhanced intensity */}
      <motion.div 
        className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-500"
        animate={{
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Additional outer glow shadow for depth */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glassmorphism card */}
      <Link
        href={getStepPath(step)}
        scroll={step.title === "Solar" ? true : false}
        onClick={step.title === "Solar" ? () => window.scrollTo(0, 0) : rememberScroll}
        className={`relative h-full flex flex-col rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 border border-white/30 shadow-2xl transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] ${step.title === "Residential" || step.title === "Commercial" || step.title === "Solar" ? "cursor-pointer" : ""}`}
        style={{ transform: "translateZ(0)" }}
      >
        {/* Floating badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: index * 0.1 + 0.2
          }}
          className="absolute top-6 left-6 z-20 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl w-14 h-14 flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-500/50"
          style={{ transform: "translateZ(20px)" }}
        >
          {step.number}
        </motion.div>

        {/* Image container with parallax effect */}
        <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-2xl">
          <motion.div
            style={{
              rotateX: useTransform(mouseYSpring, [-0.5, 0.5], ["-5deg", "5deg"]),
              rotateY: useTransform(mouseXSpring, [-0.5, 0.5], ["5deg", "-5deg"]),
              scale: 1.1,
            }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={step.image}
              fallback={step.fallbackImage}
              alt={step.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={index < 2}
              loading={index < 2 ? undefined : "lazy"}
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Animated light streak */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Content section */}
        <div className="p-6 sm:p-8 flex-grow flex flex-col bg-gradient-to-b from-white/90 to-white/70" style={{ transform: "translateZ(10px)" }}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {step.title}
          </h3>
          
          <p className="text-sm sm:text-base text-gray-700 mb-6 flex-grow leading-relaxed">
            {step.description}
          </p>

          {/* Animated arrow */}
          <motion.div
            className="flex items-center justify-end text-blue-500 mt-auto"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ArrowRight className="w-6 h-6 group-hover:text-cyan-500 transition-colors duration-300" />
          </motion.div>
        </div>

        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none" />
      </Link>
    </motion.div>
  );
}

function HowItWorks() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Commercial",
      description:
        "Intelligent automation systems for commercial spaces. Enhance efficiency, safety, and sustainability with smart building solutions.",
      image: "/Industry - Commercial - Institutional & Industrial 1.jpeg",
      fallbackImage: "/tanti/commercial.jpg",
    },
    {
      number: "02",
      title: "Residential",
      description:
        "Smart lighting and automation solutions for your home. Control your entire home seamlessly from anywhere.",
      image: "/Res.jpg",
      fallbackImage: "/tanti/residential image.jpg",
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
    <section id="cards-section" className="py-16 sm:py-20 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Animated background - gradient waves and blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-[0.03]" />
        
        {/* Light streaks */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
            What We Offer
          </h2>
        </motion.div>

        {/* Desktop view - Premium cards grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <PremiumCard
              key={index}
              step={step}
              index={index}
              getStepPath={getStepPath}
            />
          ))}
        </div>

        {/* Mobile view - Using Embla Carousel with Premium Effects */}
        <div className="sm:hidden">
          <div className="overflow-visible -mx-4 px-4" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "200px" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.1
                  }}
                  className="flex-[0_0_85%] min-w-0 ml-4 first:ml-4 group"
                >
                  <Link
                    href={getStepPath(step)}
                    scroll={step.title === "Solar" ? true : false}
                    onClick={step.title === "Solar" ? () => window.scrollTo(0, 0) : rememberScroll}
                    className={`relative h-full flex flex-col rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 border border-white/30 shadow-2xl transition-all duration-500 ease-out active:scale-[0.98] active:shadow-[0_20px_50px_rgba(59,130,246,0.3)] ${step.title === "Residential" || step.title === "Commercial" || step.title === "Solar" ? "cursor-pointer" : ""}`}
                    style={{ transform: "translateZ(0)" }}
                  >
                    {/* Animated gradient border glow - Always visible with enhanced intensity */}
                    <motion.div 
                      className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 opacity-60 group-active:opacity-100 blur-sm transition-opacity duration-500"
                      animate={{
                        opacity: [0.6, 0.8, 0.6],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Additional outer glow shadow for depth */}
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30 blur-lg opacity-60 group-active:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: index * 0.1 + 0.2
                      }}
                      className="absolute top-4 left-4 z-20 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg shadow-blue-500/50"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Image container */}
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                      <ImageWithFallback
                        src={step.image}
                        fallback={step.fallbackImage}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-700 group-active:scale-110"
                        priority={index < 2}
                        loading={index < 2 ? undefined : "lazy"}
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Animated light streak */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut"
                        }}
                      />
                    </div>

                    {/* Content section */}
                    <div className="p-5 flex-grow flex flex-col bg-gradient-to-b from-white/90 to-white/70" style={{ transform: "translateZ(10px)" }}>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-active:text-blue-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm text-gray-700 mb-4 flex-grow leading-relaxed">
                        {step.description}
                      </p>

                      {/* Animated arrow */}
                      <motion.div
                        className="flex items-center justify-end text-blue-500"
                        whileTap={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <ArrowRight className="w-5 h-5 group-active:text-cyan-500 transition-colors duration-300" />
                      </motion.div>
                    </div>

                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-purple-500/0 group-active:from-blue-500/10 group-active:via-cyan-500/10 group-active:to-purple-500/10 transition-all duration-500 pointer-events-none" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center mt-8 sm:mt-12 gap-2" aria-hidden="true">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2 rounded-full transition-all duration-300 ${
                selectedIndex === i 
                  ? "h-6 bg-gradient-to-r from-blue-500 to-cyan-500" 
                  : "h-3 bg-white/30"
              }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Memoize component to prevent unnecessary re-renders
export default memo(HowItWorks)
