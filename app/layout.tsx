import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ModernHeader from "@/components/header"
import ModernFooter from "@/components/footer"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] })

export const metadata: Metadata = {
  title: "Tanti - Elevate Your Digital Experience",
  description: "Transform how you work with our AI-powered platform. Automate workflows, gain insights, and boost productivity.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  generator: "Mohamed Djoudir",
  openGraph: {
    title: "Tanti - Elevate Your Digital Experience",
    description: "Transform how you work with our AI-powered platform. Automate workflows, gain insights, and boost productivity.",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Tanti - AI-powered platform",
      },
    ],
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
        {/* Add any other head tags if needed, metadata object handles common ones */}
      </head>
      <body className={`${roboto.className} text-black`} style={{ backgroundColor: '#FFFFFF' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ModernHeader />
          <main>{children}</main>
          <ModernFooter />
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Only run on client side to avoid hydration issues
              if (typeof window !== 'undefined') {
                function hideNextJSIndicators() {
                  // Hide Next.js development indicators
                  const indicators = document.querySelectorAll('[data-nextjs-toast], [data-nextjs-dialog], [data-nextjs-portal]');
                  indicators.forEach(el => el.style.display = 'none');
                  
                  // Hide elements with high z-index that are likely Next.js overlays
                  const overlays = document.querySelectorAll('div[style*="z-index: 9999"], div[style*="z-index: 10000"], div[style*="z-index: 2147483647"]');
                  overlays.forEach(el => el.style.display = 'none');
                  
                  // Hide circular floating elements
                  const circular = document.querySelectorAll('div[style*="border-radius: 50%"][style*="position: fixed"], div[class*="rounded-full"][style*="position: fixed"]');
                  circular.forEach(el => el.style.display = 'none');
                }
                
                // Run after DOM is ready
                document.addEventListener('DOMContentLoaded', hideNextJSIndicators);
                
                // Run after a short delay to catch dynamically added elements
                setTimeout(hideNextJSIndicators, 100);
                setTimeout(hideNextJSIndicators, 500);
              }
            `,
          }}
        />
      </body>
    </html>
  )
}