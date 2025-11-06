"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import ErrorBoundary from "@/components/error-boundary";
import { useScrollRestore } from "@/hooks/useScrollRestore";

// Scroll position persistence for Home page
const ScrollRestoration = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const STORAGE_KEY = `scroll:${window.location.pathname}`;
    const STORAGE_KEY_ID = `scrollId:${window.location.pathname}`;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const getNearestSectionId = () => {
      try {
        const centerY = (window.scrollY || window.pageYOffset) + window.innerHeight / 2;
        const candidates = Array.from(document.querySelectorAll<HTMLElement>(
          '[data-section-id], section[id], h1[id], h2[id], h3[id], [id]'
        ));
        let bestId = '';
        let bestDist = Number.POSITIVE_INFINITY;
        for (const el of candidates) {
          const id = el.getAttribute('data-section-id') || el.id || '';
          if (!id) continue;
          const rect = el.getBoundingClientRect();
          const elCenter = (window.scrollY || window.pageYOffset) + rect.top + rect.height / 2;
          const dist = Math.abs(centerY - elCenter);
          if (dist < bestDist) { bestDist = dist; bestId = id; }
        }
        return bestId || '';
      } catch { return ''; }
    };

    const storeY = () => {
      try {
        sessionStorage.setItem(STORAGE_KEY, String(window.scrollY || 0));
        const id = getNearestSectionId();
        if (id) sessionStorage.setItem(STORAGE_KEY_ID, id);
      } catch {}
    };

    // Throttled save on scroll
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        storeY();
        ticking = false;
      });
    };

    // Save before unload and on history/nav events
    window.addEventListener("beforeunload", storeY);
    window.addEventListener("pagehide", storeY);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === 'hidden') storeY();
    });
    window.addEventListener("scroll", onScroll, { passive: true });

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target && (target.closest as any)?.call(target, 'a[href]');
      if (!a) return;
      const url = new URL(a.href, window.location.origin);
      const modified = (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (a as HTMLAnchorElement).target === '_blank');
      if (!modified && url.origin === window.location.origin) storeY();
    };
    document.addEventListener('click', onClick, true);

    (['pushState','replaceState'] as const).forEach((m) => {
      const orig = (history as any)[m];
      (history as any)[m] = function () { storeY(); return orig.apply(this, arguments as any); };
    });
    // Handle back navigation specifically for "What We Offer" section
    const handlePopState = () => {
      storeY();
      // Check if we're returning to home page from commercial/residential/solar
      if (window.location.pathname === '/') {
        const navigatedFromWhatWeOffer = (() => {
          try { return sessionStorage.getItem('navigatedFromWhatWeOffer') === 'true'; } catch { return false; }
        })();
        
        if (navigatedFromWhatWeOffer) {
          setTimeout(() => {
            const section = document.getElementById('what-we-offer');
            if (section) {
              const html = document.documentElement;
              const prevBehavior = html.style.scrollBehavior;
              html.style.scrollBehavior = 'smooth';
              
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              
              // Clear the flag after scrolling
              try { sessionStorage.removeItem('navigatedFromWhatWeOffer'); } catch {}
              
              // Restore previous scroll-behavior after scrolling
              setTimeout(() => { html.style.scrollBehavior = prevBehavior; }, 1000);
            }
          }, 100);
        }
      }
    };
    
    window.addEventListener('popstate', handlePopState);

    const restore = () => {
      // Skip only on full reloads; for SPA navigations and back/forward, attempt restore
      const nav = (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined);
      const navType = nav?.type;
      if (navType === 'reload') {
        try { 
          sessionStorage.removeItem(STORAGE_KEY);
          sessionStorage.removeItem('navigatedFromWhatWeOffer');
        } catch {}
        window.scrollTo(0, 0);
        return;
      }

      // Check if we navigated from "What We Offer" section (only on back navigation)
      const navigatedFromWhatWeOffer = (() => {
        try { return sessionStorage.getItem('navigatedFromWhatWeOffer') === 'true'; } catch { return false; }
      })();

      if (navigatedFromWhatWeOffer && window.location.pathname === '/') {
        // Scroll smoothly to "What We Offer" section
        setTimeout(() => {
          const section = document.getElementById('what-we-offer');
          if (section) {
            const html = document.documentElement;
            const prevBehavior = html.style.scrollBehavior;
            html.style.scrollBehavior = 'smooth';
            
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Clear the flag after scrolling
            try { sessionStorage.removeItem('navigatedFromWhatWeOffer'); } catch {}
            
            // Restore previous scroll-behavior after scrolling
            setTimeout(() => { html.style.scrollBehavior = prevBehavior; }, 1000);
          }
        }, 100);
        return;
      }

      let y = 0;
      try { y = parseInt(sessionStorage.getItem(STORAGE_KEY) || '0', 10) || 0; } catch { y = 0; }
      const savedId = (() => { try { return sessionStorage.getItem(STORAGE_KEY_ID) || ''; } catch { return ''; } })();
      if (!y && !savedId) return;

      // Temporarily disable smooth scroll so jump is immediate
      const html = document.documentElement;
      const prevBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      let rafTries = 0;
      const tick = () => {
        window.scrollTo(0, y);
        if (Math.abs((window.scrollY || window.pageYOffset) - y) < 2 || ++rafTries > 60) return;
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);

      // Safety retry after images/fonts/layout settle
      let timeoutTries = 0;
      const retry = () => {
        const near = Math.abs((window.scrollY || window.pageYOffset) - y) < 2;
        if (near || ++timeoutTries > 10) {
          // Fallback: if still off, try section id scroll
          if (!near && savedId) {
            const el = document.querySelector(`#${CSS.escape(savedId)}`) as HTMLElement | null;
            if (el) el.scrollIntoView({ block: 'start', inline: 'nearest' });
          }
          return;
        }
        window.scrollTo(0, y);
        setTimeout(retry, 100);
      };
      setTimeout(retry, 100);

      // Restore previous scroll-behavior after finishing attempts
      setTimeout(() => { html.style.scrollBehavior = prevBehavior; }, 1200);
    };

    const onDOMContentLoaded = () => setTimeout(restore, 0);
    const onLoad = () => setTimeout(restore, 0);
    const onPageShow = (e: PageTransitionEvent) => {
      // Let the browser restore scroll for BFCache/back-forward first
      const hadManual = (history as any).scrollRestoration === 'manual';
      (history as any).scrollRestoration = 'auto';
      setTimeout(() => {
        const stored = (() => { try { return parseInt(sessionStorage.getItem(STORAGE_KEY) || '0', 10) || 0; } catch { return 0; } })();
        if ((window.scrollY || window.pageYOffset) < 2 && stored > 0) {
          // Browser didn't restore; fallback to our logic
          restore();
        }
        // Re-enable manual to keep our reload behavior
        if (hadManual) (history as any).scrollRestoration = 'manual';
      }, 0);
    };

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(restore, 0);
    } else {
      document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
    }
    window.addEventListener('load', onLoad);
    window.addEventListener('pageshow', onPageShow as any);

    return () => {
      window.removeEventListener("beforeunload", storeY);
      window.removeEventListener("scroll", onScroll as any);
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('load', onLoad);
      window.removeEventListener('pageshow', onPageShow as any);
      document.removeEventListener('DOMContentLoaded', onDOMContentLoaded);
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

const Integrations = dynamic(() => import("@/components/integrations"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

// LazyLoad wrapper component
function LazyLoad({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // If we are restoring a previous scroll position, render immediately
    if (typeof window === 'undefined') return;
    try {
      const stored = sessionStorage.getItem(`scroll:${window.location.pathname}`);
      if (stored && parseInt(stored, 10) > 0) {
        setInView(true);
        return;
      }
    } catch {}

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
  useScrollRestore('cards-section');
  
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
    </div>
  );
}
