import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ModernHeader from "@/components/header"
import ScrollRestorationProvider from "@/app/providers/ScrollRestorationProvider"

// Lazy load Footer since it's below the fold
// Note: Footer uses usePathname() which requires Suspense boundary
const ModernFooter = dynamic(() => import("@/components/footer"), {
  ssr: true, // Keep SSR for SEO
  loading: () => <div className="h-32 bg-white" /> // Placeholder height
})

// Optimize font loading - only load essential weights
const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["400", "700"], // Removed 500 to reduce font file size
  display: "swap", // Show fallback immediately, swap when font loads
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: "Tanti - Intelligent Building Systems & LMS",
  description: "Comprehensive automation solutions for residential, commercial, and security needs. Smart building systems and lighting management.",
  icons: {
    icon: "/tanti-favicon.svg",
    shortcut: "/tanti-favicon.svg",
    apple: "/icon.svg",
  },
  manifest: "/site.webmanifest",
  generator: "Mohamed Djoudir",
  openGraph: {
    title: "Tanti - Intelligent Building Systems & LMS",
    description: "Comprehensive automation solutions for residential, commercial, and security needs. Smart building systems and lighting management.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
        {/* Critical resource hints - optimized for instant loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload only critical above-the-fold resources */}
        <link rel="preload" as="image" href="/tanti-automatics-logo.png" fetchPriority="high" />
        <link rel="preload" as="video" href="/tanti Main background.mp4" type="video/mp4" fetchPriority="high" />
        
        {/* Development mode: Clear browser cache to prevent stale JavaScript */}
        {process.env.NODE_ENV === 'development' && (
          <>
            <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
            <meta httpEquiv="Pragma" content="no-cache" />
            <meta httpEquiv="Expires" content="0" />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    // Clear all caches in development to prevent stale JavaScript
                    if ('caches' in window) {
                      caches.keys().then(function(names) {
                        for (let name of names) {
                          caches.delete(name);
                        }
                      });
                    }
                    
                    // Force reload if service worker exists
                    if ('serviceWorker' in navigator) {
                      navigator.serviceWorker.getRegistrations().then(function(registrations) {
                        for(let registration of registrations) {
                          registration.unregister();
                        }
                      });
                    }
                    
                    // Clear sessionStorage and localStorage of old data
                    try {
                      const keys = Object.keys(sessionStorage);
                      keys.forEach(key => {
                        if (key.includes('residential') || key.includes('scroll:') || key.includes('features')) {
                          sessionStorage.removeItem(key);
                        }
                      });
                    } catch(e) {}
                    
                    // Force reload JavaScript modules on navigation
                    if (window.location.search.indexOf('_cache_bust=') === -1) {
                      const url = new URL(window.location.href);
                      url.searchParams.set('_cache_bust', Date.now().toString());
                      // Only reload if we're not already in a reload loop
                      if (!sessionStorage.getItem('cache_bust_reload')) {
                        sessionStorage.setItem('cache_bust_reload', '1');
                        setTimeout(() => {
                          sessionStorage.removeItem('cache_bust_reload');
                        }, 1000);
                      }
                    }
                  })();
                `,
              }}
            />
          </>
        )}
        {/* Defer non-critical preloads using requestIdleCallback */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Prefetch routes and images after critical resources load
                function prefetchResources() {
                  const routes = ['/commercial', '/abb-free-at-home', '/solar', '/solutions', '/contact'];
                  routes.forEach(route => {
                    const link = document.createElement('link');
                    link.rel = 'prefetch';
                    link.href = route;
                    document.head.appendChild(link);
                  });
                  
                  // Prefetch API data
                  fetch('/api/tanti-media', { cache: 'force-cache', priority: 'low' }).catch(() => {});
                }
                
                if (document.readyState === 'complete') {
                  prefetchResources();
                } else {
                  window.addEventListener('load', prefetchResources);
                }
              })();
            `,
          }}
        />
        {/* Add any other head tags if needed, metadata object handles common ones */}
      </head>
      <body className={`${roboto.variable} ${roboto.className} text-black bg-white`} suppressHydrationWarning>
        <Suspense fallback={null}>
          <ScrollRestorationProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false}
              disableTransitionOnChange
            >
              <ModernHeader />
              <main className="bg-white">{children}</main>
              <Suspense fallback={<div className="h-32 bg-white" />}>
                <ModernFooter />
              </Suspense>
            </ThemeProvider>
          </ScrollRestorationProvider>
        </Suspense>
      </body>
    </html>
  )
}