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
        {/* Preload critical above-the-fold resources */}
        <link rel="preload" as="image" href="/tanti-automatics-logo.png" imageSrcSet="/tanti-automatics-logo.png" />
        {/* Preload videos for instant playback */}
        <link rel="preload" as="video" href="/tanti Main background.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/solar%20video.mp4" type="video/mp4" />
        {/* Prefetch (non-blocking) for below-the-fold content */}
        <link rel="prefetch" as="image" href="/tanti/Solar.jpeg" imageSrcSet="/tanti/Solar.jpeg" />
        <link rel="prefetch" as="image" href="/tanti/Res.jpg" imageSrcSet="/tanti/Res.jpg" />
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