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
    icon: "/tanti-automatics-logo.png",
    shortcut: "/tanti-automatics-logo.png",
    apple: "/tanti-automatics-logo.png",
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
      <html lang="en" suppressHydrationWarning>
        <head>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="msapplication-navbutton-color" content="#FFFFFF" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
        {/* Add any other head tags if needed, metadata object handles common ones */}
      </head>
      <body className={`${roboto.className} text-black bg-white`}>
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
      </body>
    </html>
  )
}