"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function ModernFooter() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [currentYear, setCurrentYear] = useState<number | null>(null)

  // Only hide footer after mount to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
    // Set current year only on client to prevent hydration mismatch
    setCurrentYear(new Date().getFullYear())
  }, [])

  // Hide footer on contact page - but only after mount to prevent hydration error
  if (mounted && pathname === "/contact") {
    return null
  }

  // Use static year during SSR, currentYear after mount
  const displayYear = currentYear ?? 2025

  // During SSR and initial render, always render footer to ensure hydration match
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Top section */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" prefetch={true} className="mb-4 inline-flex">
              <span className="relative block h-10 w-40">
                <Image
                  src="/tanti-automatics-logo.png"
                  alt="Tanti Automatics Pvt. Ltd."
                  fill
                  className="object-contain"
                  priority
                  sizes="160px"
                />
              </span>
            </Link>
            <p className="text-sm text-gray-700">Complete Building Automation</p>
          </div>

          {/* Center: Connect with us */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900">Connect With Us</h3>
            <div className="mt-3 space-y-1 text-gray-700">
              <p>Tel: +91 962 022 0491 | +91 960 645 7175</p>
              <p>
                Email:{" "}
                <a className="text-blue-600 hover:underline" href="mailto:mail@tanti.co">
                  mail@tanti.co
                </a>{" "}
                |{" "}
                <a className="text-blue-600 hover:underline" href="mailto:projects@tanti.co">
                  projects@tanti.co
                </a>
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/Tantiautomation/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 grid place-items-center rounded-md border border-gray-300 text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.1 5.66 21.2 10.44 22v-7.01H7.9v-2.92h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.92h-2.34V22C18.34 21.2 22 17.1 22 12.07z" />
                </svg>
              </a>
              <a
                aria-label="YouTube"
                href="https://www.youtube.com/@tantiautomaticspvtltd6286"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 grid place-items-center rounded-md border border-gray-300 text-gray-600 hover:text-red-600 hover:border-red-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M21.8 8.001a3.003 3.003 0 0 0-2.116-2.116C18.095 5.5 12 5.5 12 5.5s-6.095 0-7.684.385A3.003 3.003 0 0 0 2.2 8.001C1.815 9.59 1.815 12 1.815 12s0 2.41.385 3.999a3.003 3.003 0 0 0 2.116 2.116C6.905 18.5 12 18.5 12 18.5s6.095 0 7.684-.385A3.003 3.003 0 0 0 21.8 15.999C22.185 14.41 22.185 12 22.185 12s0-2.41-.385-3.999zM10 14.5v-5l5 2.5-5 2.5z" />
                </svg>
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/tanti_automation/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 grid place-items-center rounded-md border border-gray-300 text-gray-600 hover:text-pink-600 hover:border-pink-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                </svg>
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/3780956/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 grid place-items-center rounded-md border border-gray-300 text-gray-600 hover:text-blue-700 hover:border-blue-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M6.94 6.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88zM4.5 8.25h4.88V21H4.5V8.25zM14.04 8c-2.62 0-4.39 1.72-4.39 4.57V21h4.88v-7.07c0-1.68.84-2.73 2.25-2.73 1.28 0 1.88.9 1.88 2.73V21H23V13.2C23 9.9 21.2 8 18.58 8c-1.79 0-3.03.79-3.54 1.77h-.08V8H14.04z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Page links */}
          <div className="md:justify-end md:text-right text-center">
            <nav className="text-gray-800 text-sm space-x-3 md:space-x-2">
              <Link href="/company" prefetch={true} className="hover:underline">
                About
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/abb-free-at-home" prefetch={true} className="hover:underline">
                Products
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/solutions" prefetch={true} className="hover:underline">
                Solutions
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/contact" prefetch={true} className="hover:underline">
                Support
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/career" prefetch={true} className="hover:underline">
                Career
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom blue bar */}
      <div className="bg-[#4066e6] text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            Copyright 2009 - {displayYear}. All rights reserved. Develop and
            maintained by Tanti Automatic pvt ltd.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/copyright" className="hover:underline">
              Copyright
            </Link>
            <Link href="/terms-and-conditions" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link href="/faqs" className="hover:underline">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
