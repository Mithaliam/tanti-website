"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavDropdown from "./NavDropdown"

export default function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const productItems = ["Residential", "Commercial", "Security", "Home Entertainment"]
  const solutionItems = ["Lighting Automation", "BMS Control", "Energy Management", "Central Management"]
  const companyItems = ["About Us", "Career", "Success Story", "Reviews"]
  const supportItems = ["Support Request", "Contact"]
  const projectItems = ["Success Stories"]

  // Handle escape key to close dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null)
      }
    }
    
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // Enhanced dropdown management function
  const handleActiveDropdown = (id: string | null) => {
    setActiveDropdown(id)
  }

  return (
    <>
      <nav className="hidden md:flex items-center gap-4 lg:gap-8">
        <NavDropdown 
          id="products"
          label="Products" 
          items={productItems}
          activeDropdown={activeDropdown}
          setActiveDropdown={handleActiveDropdown}
        />
        
        <NavDropdown 
          id="solutions"
          label="Solutions" 
          items={solutionItems}
          activeDropdown={activeDropdown}
          setActiveDropdown={handleActiveDropdown}
        />

        <NavDropdown 
          id="company"
          label="Company" 
          items={companyItems}
          activeDropdown={activeDropdown}
          setActiveDropdown={handleActiveDropdown}
        />

        <NavDropdown 
          id="support"
          label="Support" 
          items={supportItems}
          activeDropdown={activeDropdown}
          setActiveDropdown={handleActiveDropdown}
        />

        <NavDropdown 
          id="projects"
          label="Projects" 
          items={projectItems}
          activeDropdown={activeDropdown}
          setActiveDropdown={handleActiveDropdown}
        />
      </nav>

      <div 
        className="hidden md:flex items-center gap-2 lg:gap-4"
        onMouseEnter={() => setActiveDropdown(null)}
      >
        <Button 
          variant="ghost" 
          className="text-black hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base"
        >
          Need Help? +919606457175
        </Button>
        <Button 
          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-shadow text-sm lg:text-base px-3 lg:px-4"
        >
          Let's Talk
        </Button>
      </div>
    </>
  )
}
