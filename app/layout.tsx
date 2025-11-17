import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ModernHeader from "@/components/header"
import ModernFooter from "@/components/footer"
import ScrollRestorationProvider from "@/app/providers/ScrollRestorationProvider"

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true
})

export const metadata: Metadata = {
  title: "Tanti - Intelligent Building Systems & LMS",
  description: "Comprehensive automation solutions for residential, commercial, and security needs. Smart building systems and lighting management.",
  icons: {
    icon: "/tanti-favicon.svg",
    shortcut: "/tanti-favicon.svg",
    apple: "/web-app-manifest-192x192.png",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Preload critical above-the-fold resources - HIGHEST PRIORITY */}
        {/* Logo - always visible */}
        <link rel="preload" as="image" href="/tanti-automatics-logo.png" fetchPriority="high" />
        
        {/* Preload videos for instant playback - HIGHEST PRIORITY */}
        <link rel="preload" as="video" href="/tanti Main background.mp4" type="video/mp4" fetchPriority="high" />
        <link rel="preload" as="video" href="/solar%20video.mp4" type="video/mp4" fetchPriority="high" />
        
        {/* Preload homepage hero section images - HIGH PRIORITY */}
        <link rel="preload" as="image" href="/ABB%20F%40H.jpeg" fetchPriority="high" />
        <link rel="preload" as="image" href="/Switching.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/video%20door%20phone.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/IOT.jpg" fetchPriority="high" />
        
        {/* Preload commercial page critical images - HIGH PRIORITY */}
        <link rel="preload" as="image" href="/Commercial-Large.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/LMS.jpeg" fetchPriority="high" />
        <link rel="preload" as="image" href="/BMS.jpeg" fetchPriority="high" />
        <link rel="preload" as="image" href="/energy management.jpeg" fetchPriority="high" />
        <link rel="preload" as="image" href="/central management.jpeg" fetchPriority="high" />
        
        {/* Prefetch (non-blocking) for below-the-fold content - MEDIUM PRIORITY */}
        <link rel="prefetch" as="image" href="/tanti/Solar.jpeg" />
        <link rel="prefetch" as="image" href="/tanti/Res.jpg" />
        <link rel="prefetch" as="image" href="/AIC_building-1.jpg" />
        
        {/* Prefetch API routes and data - HIGH PRIORITY */}
        <link rel="prefetch" href="/api/tanti-media" as="fetch" crossOrigin="anonymous" />
        
        {/* Prefetch critical routes for faster navigation */}
        <link rel="prefetch" href="/commercial" />
        <link rel="prefetch" href="/residential" />
        <link rel="prefetch" href="/solar" />
        <link rel="prefetch" href="/solutions" />
        
        {/* Preload data script - starts fetching data immediately */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Preload API data immediately
              if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
                requestIdleCallback(() => {
                  fetch('/api/tanti-media', { 
                    cache: 'force-cache',
                    priority: 'low'
                  }).catch(() => {});
                }, { timeout: 2000 });
              } else {
                setTimeout(() => {
                  fetch('/api/tanti-media', { 
                    cache: 'force-cache',
                    priority: 'low'
                  }).catch(() => {});
                }, 100);
              }
            `,
          }}
        />
        {/* Add any other head tags if needed, metadata object handles common ones */}
      </head>
      <body className={`${roboto.className} text-black bg-white`} suppressHydrationWarning>
        <ScrollRestorationProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <ModernHeader />
            <main className="bg-white">{children}</main>
            <ModernFooter />
          </ThemeProvider>
        </ScrollRestorationProvider>
      </body>
    </html>
  )
}