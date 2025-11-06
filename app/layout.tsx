import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ModernHeader from "@/components/header"
import ModernFooter from "@/components/footer"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] })

export const metadata: Metadata = {
  title: "Tanti - Intelligent Building Systems & LMS",
  description: "Comprehensive automation solutions for residential, commercial, and security needs. Smart building systems and lighting management.",
  icons: {
    icon: [
      { url: "/tanti-favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96" },
    ],
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
        {/* Add any other head tags if needed, metadata object handles common ones */}
      </head>
      <body className={`${roboto.className} text-black bg-white`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ModernHeader />
          {/* Global running disclaimer banner */}
          <div className="w-full bg-yellow-200/90 text-blue-900 py-3 md:py-4 border-b border-yellow-300 mt-[60px] overflow-hidden">
            <div className="whitespace-nowrap font-semibold text-base md:text-lg tracking-wide animate-[marquee-single_16s_linear_infinite]">
              Our smart switches are still arguing about who should turn this page on ⚡🤖🔌😤.
            </div>
          </div>
          <main className="bg-white">{children}</main>
          <ModernFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}