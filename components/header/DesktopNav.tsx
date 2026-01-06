"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DesktopNav() {

  return (
    <>
      <nav className="hidden md:flex items-center gap-4 lg:gap-8">
        <Link href="/residential" prefetch={true} className="text-blue-600 hover:text-blue-700 transition-colors text-sm lg:text-base">
          Products
        </Link>
        
        <Link href="/solutions" prefetch={true} className="text-blue-600 hover:text-blue-700 transition-colors text-sm lg:text-base">
          Solutions
        </Link>

        <Link href="/company" prefetch={true} className="text-blue-600 hover:text-blue-700 transition-colors text-sm lg:text-base">
          Company
        </Link>

        <Link href="/contact" prefetch={true} className="text-blue-600 hover:text-blue-700 transition-colors text-sm lg:text-base">
          Support
        </Link>

        <Link href="/projects" prefetch={true} className="text-blue-600 hover:text-blue-700 transition-colors text-sm lg:text-base">
          Projects
        </Link>
      </nav>

      <div className="hidden md:flex items-center gap-2 lg:gap-4">
        <Link href="/contact" prefetch={true} className="text-blue-600 hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base px-2 py-1 rounded-md">
          Need Help? +919606457175
        </Link>
        <Link href="/contact" prefetch={true}>
          <Button 
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-shadow text-sm lg:text-base px-3 lg:px-4"
          >
            Let's Talk
          </Button>
        </Link>
      </div>
    </>
  )
}
