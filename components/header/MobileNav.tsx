"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavDropdown from "./NavDropdown"
import { cn } from "@/lib/utils"

type MobileNavProps = {
  isOpen: boolean
}

export default function MobileNav({ isOpen }: MobileNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const productItems = ["Residential", "Commercial", "Security", "Home Entertainment"]
  const solutionItems = [
    "Residential",
    "Commercial", 
    "Security",
    "Home Entertainment",
    "Commercial AV",
    "Energy Management",
    "Central Management Server",
  ]
  // Sub-items to show on hover inside Solutions dropdown
  const solutionSubItems: Record<string, string[]> = {
    Residential: [
      "Wired Lighting Automation",
      "Wireless Lighting Automation",
    ],
    Commercial: [
      "Wired Lighting Automation", 
      "Wireless Lighting Automation",
    ],
    Security: [
      "CCTV & Surveillance",
      "Access Control",
    ],
    "Home Entertainment": [
      "Multi-room Audio",
      "Home Theater",
    ],
    "Commercial AV": [
      "Conference Solutions",
      "Digital Signage",
    ],
    "Energy Management": [
      "Smart Meters",
      "Energy Analytics",
    ],
    "Central Management Server": [
      "On-Prem Server",
      "Cloud Server",
    ],
  }
  
  return (
    <div 
      className={cn(
        "md:hidden fixed inset-x-0 top-[60px] bg-black/95 backdrop-blur-lg border-t border-white/10 transition-all duration-300 overflow-hidden",
        isOpen ? "max-h-[calc(100vh-60px)] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className={cn(
        "container mx-auto px-3 py-4 flex flex-col gap-2 transition-all duration-300 overflow-y-auto",
        isOpen ? "translate-y-0" : "-translate-y-4"
      )}>
        <NavDropdown 
          id="mobileProducts"
          label="Products" 
          items={productItems}
          isMobile={true}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
        />

        <NavDropdown 
          id="mobileSolutions"
          label="Solutions" 
          items={solutionItems}
          subItems={solutionSubItems}
          isMobile={true}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
        />

        <Link href="#pricing" className="py-2 px-2 border-b border-white/10 hover:bg-white/5 rounded-md transition-colors active:bg-white/10">
          Pricing
        </Link>

        <Link href="#testimonials" className="py-2 px-2 border-b border-white/10 hover:bg-white/5 rounded-md transition-colors active:bg-white/10">
          Testimonials
        </Link>

        <div className="flex flex-col gap-2 pt-3">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-10 active:bg-white/20">
            Log in
          </Button>
          <Button
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 h-10 shadow-lg shadow-cyan-500/20 active:opacity-90"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}
