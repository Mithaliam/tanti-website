"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import ErrorBoundary from "@/components/error-boundary";
import HowItWorks from "@/components/how-it-works";

// Lazy load components with proper error handling - optimized for faster loading
// Preload these components earlier by starting import immediately
const Features = dynamic(() => import("@/components/features"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

const Testimonials = dynamic(() => import("@/components/testimonials"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

const Integrations = dynamic(() => import("@/components/integrations"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

// Preload component chunks immediately on page load
if (typeof window !== 'undefined') {
  // Start preloading components in the background
  import("@/components/features").catch(() => {})
  import("@/components/testimonials").catch(() => {})
  import("@/components/integrations").catch(() => {})
}

// Optimized LazyLoad wrapper component - loads content much earlier
function LazyLoad({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || inView) return;

    // Create observer immediately - no delay
    if (observerRef.current || !ref.current) return;

    observerRef.current = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
          }
        }
      },
      { 
        rootMargin: "600px", // Start loading 600px before element is visible (increased for earlier loading)
        threshold: 0.01 
      }
    );
    
    if (ref.current) {
      observerRef.current.observe(ref.current);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [inView]);

  return <div ref={ref} style={{ minHeight: inView ? 'auto' : '200px' }}>{inView ? children : null}</div>;
}

export default function Home() {
  // Preload API data immediately when component mounts
  useEffect(() => {
    // Prefetch API data in the background
    fetch("/api/tanti-media", { 
      method: 'GET',
      cache: 'force-cache',
      priority: 'low' // Low priority to not block critical resources
    }).catch(() => {}) // Silently fail if not needed
  }, [])

  return (
    <div className="min-h-screen px-0 sm:px-4 text-black" style={{ backgroundColor: '#F5F5F0' }}>
      <Hero />
      <ErrorBoundary>
        <HowItWorks />
      </ErrorBoundary>
      <ErrorBoundary>
        <LazyLoad>
          <Features />
        </LazyLoad>
      </ErrorBoundary>
      <ErrorBoundary>
        <LazyLoad>
          <Integrations />
        </LazyLoad>
      </ErrorBoundary>
      <ErrorBoundary>
        <LazyLoad>
          <Testimonials />
        </LazyLoad>
      </ErrorBoundary>
    </div>
  );
}
