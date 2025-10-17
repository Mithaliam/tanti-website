"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type NavDropdownProps = {
  label: string
  items: string[]
  id: string
  isMobile?: boolean
  className?: string
  activeDropdown: string | null
  setActiveDropdown: (id: string | null) => void
  subItems?: Record<string, string[]>
}

export default function NavDropdown({ 
  label, 
  items, 
  id, 
  isMobile = false, 
  className,
  activeDropdown,
  setActiveDropdown,
  subItems
}: NavDropdownProps) {
  const isOpen = activeDropdown === id
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [hoverParent, setHoverParent] = useState<string | null>(null)
  const [hoverSub, setHoverSub] = useState<string | null>(null)
  
  // Clear any pending timeout when component unmounts or dropdown state changes
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [activeDropdown])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, setActiveDropdown])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      toggleDropdown()
    } else if (e.key === "Escape" && isOpen) {
      setActiveDropdown(null)
    }
  }

  // For desktop only - hover functionality with improved handling
  const handleMouseEnter = () => {
    if (isMobile) return;
    
    // Clear any pending close timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    
    // Set this dropdown as active immediately
    setActiveDropdown(id)
  }

  const handleMouseLeave = () => {
    if (isMobile) return;
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    // Set a small delay before closing to allow movement to another dropdown
    timeoutRef.current = setTimeout(() => {
      // Only close if we're the currently active dropdown
      // This prevents closing a newly opened dropdown
      if (activeDropdown === id) {
        setActiveDropdown(null)
      }
    }, 150)
  }

  const toggleDropdown = () => {
    setActiveDropdown(isOpen ? null : id)
  }
  
  let mobileStyles: { wrapper: string; button: string; content: string; item: string }
  if (isMobile) {
    mobileStyles = {
      wrapper: "border-b border-white/10 pb-2",
      button: "flex items-center justify-between w-full py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 rounded-md px-2",
      content: "pl-2 mt-1 space-y-0.5 animate-fadeIn",
      item: "block py-1.5 px-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors active:bg-white/15",
    }
  } else {
    const isMega = id === "solutions"
    mobileStyles = {
      wrapper: "relative",
      button: "flex items-center gap-1 text-[#2563EB] hover:text-[#2563EB] transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base",
      content: isMega
        ? "absolute top-full left-0 mt-2 w-[720px] max-w-[95vw] bg-white/85 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden shadow-2xl p-2 animate-fadeIn shadow-[0_0_22px_8px_rgba(255,255,255,0.45)]"
        : "absolute top-full left-0 mt-1 w-64 bg-white/90 border border-gray-200 rounded-xl overflow-hidden backdrop-blur-xl shadow-xl p-3 animate-fadeIn",
      item: isMega
        ? "flex items-center justify-between w-full h-11 px-4 text-gray-900 hover:bg-gray-100 rounded-lg whitespace-nowrap"
        : "flex items-center px-4 py-2.5 hover:bg-gray-100 rounded-lg transition-colors",
    }
  }
  
  return (
    <div className={cn(mobileStyles.wrapper, className)} onMouseEnter={isMobile ? undefined : handleMouseEnter} onMouseLeave={isMobile ? undefined : handleMouseLeave}>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        className={mobileStyles.button}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className={isMobile ? "font-medium" : ""}>{label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen ? "rotate-180" : "",
            isMobile ? "" : "ml-1",
          )}
        />
      </button>
      
      {isOpen && (
        id === "solutions" && !isMobile ? (
          <div className="relative">
            <div className="absolute -inset-3 bg-white rounded-[24px] blur-2xl opacity-90 pointer-events-none" />
            <div
              ref={dropdownRef}
              className={mobileStyles.content}
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 divide-x divide-gray-200">
                {/* Left column: parent items */}
                <div className="pr-2">
                  {items.map((item) => {
                    const isActive = hoverParent === item
                    const isResidential = item === "Residential"
                    return (
                      <button
                        key={item}
                        onMouseEnter={() => { setHoverParent(item); setHoverSub(null); }}
                        className={cn(
                          mobileStyles.item,
                          isActive && isResidential
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                            : isActive
                              ? "bg-[#7a532a] text-white"
                              : ""
                        )}
                      >
                        <span className={cn("font-medium", "text-sm lg:text-base")}>{item}</span>
                        <span className="ml-3 text-gray-400">›</span>
                      </button>
                    )
                  })}
                </div>
                {/* Middle column: sub-items only for Residential */}
                <div className="pl-4 pr-2">
                  {(hoverParent === "Residential" ? (subItems?.["Residential"] || []) : []).map((sub) => (
                    <button
                      key={sub}
                      onMouseEnter={() => setHoverSub(sub)}
                      className={cn(
                        "flex items-center justify-between w-full h-11 px-4 text-gray-900 hover:bg-gray-100 rounded-lg whitespace-nowrap",
                        hoverSub === sub && sub === "Wired Lighting Automation" ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white" : ""
                      )}
                    >
                      <span className="text-sm lg:text-base">{sub}</span>
                      <span className="ml-3 text-gray-400">›</span>
                    </button>
                  ))}
                </div>
                {/* Right column: third-level for specific sub-item (Wired Lighting Automation) */}
                <div className="pl-4 hidden lg:block">
                  {hoverSub === "Wired Lighting Automation" && (
                    <div className="space-y-4">
                      {/* KNX Solution Details */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-lg">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">KNX Solution</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          KNX (Konnex) is a standardized communication protocol used for building automation and control. 
                          In KNX systems, central wiring is a fundamental concept that forms the backbone of the entire automation infrastructure.
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span className="text-sm text-gray-600">Switching</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span className="text-sm text-gray-600">RGB</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span className="text-sm text-gray-600">Dimming</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span className="text-sm text-gray-600">Time</span>
                          </div>
                        </div>
                      </div>

                      {/* KNX Retrofit Solution Details */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-lg">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">KNX Retrofit Solution</h4>
                        <p className="text-sm text-gray-700">
                          A KNX retrofit solution refers to the process of upgrading an existing building's electrical system to automation system. 
                          By which you can control and manage your home seamlessly from anywhere without pulling wires to central DB. 
                          Just loop KNX cable to existing electrical points.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            ref={dropdownRef}
            className={mobileStyles.content}
          >
            {items.map((item) => (
              <div key={item}>
                <Link
                  href="#"
                  className={mobileStyles.item}
                >
                  <span className={cn("font-medium", "text-sm lg:text-base")}>{item}</span>
                  {!isMobile && id === "solutions" && (
                    <span className="ml-3 text-gray-400">›</span>
                  )}
                </Link>
                {/* Show KNX details for mobile when hovering over Residential */}
                {isMobile && id === "mobileSolutions" && item === "Residential" && (
                  <div className="ml-4 mt-2 space-y-3">
                    <div className="bg-white/10 rounded-lg p-3">
                      <h4 className="text-sm font-bold text-white mb-2">Wired Lighting Automation</h4>
                      <div className="space-y-2">
                        <div className="bg-white/5 rounded p-2">
                          <h5 className="text-xs font-semibold text-white mb-1">KNX Solution</h5>
                          <p className="text-xs text-white/80 mb-2">
                            KNX (Konnex) is a standardized communication protocol used for building automation and control.
                          </p>
                          <div className="flex flex-wrap gap-1">
                            <span className="text-xs bg-white/20 px-2 py-1 rounded">Switching</span>
                            <span className="text-xs bg-white/20 px-2 py-1 rounded">RGB</span>
                            <span className="text-xs bg-white/20 px-2 py-1 rounded">Dimming</span>
                            <span className="text-xs bg-white/20 px-2 py-1 rounded">Time</span>
                          </div>
                        </div>
                        <div className="bg-white/5 rounded p-2">
                          <h5 className="text-xs font-semibold text-white mb-1">KNX Retrofit Solution</h5>
                          <p className="text-xs text-white/80">
                            Upgrade existing electrical systems to automation without pulling wires to central DB.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  )
}
