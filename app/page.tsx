"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import ErrorBoundary from "@/components/error-boundary";

// Scroll restoration component
const ScrollRestoration = () => {
  useEffect(() => {
    // Set scroll to top
    window.scrollTo(0, 0);

    // Disable browser's automatic scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
};

// Lazy load components with proper error handling
const Features = dynamic(() => import("@/components/features"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

const HowItWorks = dynamic(() => import("@/components/how-it-works"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

const Testimonials = dynamic(() => import("@/components/testimonials"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

const Pricing = dynamic(() => import("@/components/pricing"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

const Integrations = dynamic(() => import("@/components/integrations"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

const BlogPreview = dynamic(() => import("@/components/blog-preview"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

const FaqSection = dynamic(() => import("@/components/faq"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

const Cta = dynamic(() => import("@/components/cta"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

const TantiGallery = dynamic(() => import("@/components/tanti-gallery"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

// LazyLoad wrapper component
function LazyLoad({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return <div ref={ref}>{inView ? children : null}</div>;
}

export default function Home() {
  return (
    <div className="min-h-screen px-0 sm:px-4 text-black" style={{ backgroundColor: '#F5F5F0' }}>
      <ScrollRestoration />
      <Hero />
      <ErrorBoundary>
        <LazyLoad>
          <HowItWorks />
        </LazyLoad>
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
      <ErrorBoundary>
        <LazyLoad>
          <BlogPreview />
        </LazyLoad>
      </ErrorBoundary>
      <ErrorBoundary>
        <LazyLoad>
          <Pricing />
        </LazyLoad>
      </ErrorBoundary>
      <ErrorBoundary>
        <LazyLoad>
          <FaqSection />
        </LazyLoad>
      </ErrorBoundary>
      <ErrorBoundary>
        <LazyLoad>
          <TantiGallery />
        </LazyLoad>
      </ErrorBoundary>
      <ErrorBoundary>
        <LazyLoad>
          <Cta />
        </LazyLoad>
      </ErrorBoundary>
    </div>
  );
}
