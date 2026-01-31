"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Static navigation configuration - ensures deterministic rendering
// DO NOT MODIFY - This array must remain constant to prevent hydration errors
// Version: 2.0 - Fixed hydration error by ensuring /abb-free-at-home href (2025-01-09)
const NAV_LINKS = [
  { href: "/abb-free-at-home", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Support" },
  { href: "/projects", label: "Projects" },
] as const

const ANCHOR_LINKS = [
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
] as const

type MobileNavProps = {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <div
      className={cn(
        "md:hidden fixed inset-x-0 top-[60px] bg-black/95 backdrop-blur-lg border-t border-white/10 transition-all duration-300 overflow-hidden",
        isOpen ? "max-h-[calc(100vh-60px)] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div
        className={cn(
          "container mx-auto px-3 py-4 flex flex-col gap-2 transition-all duration-300 overflow-y-auto",
          isOpen ? "translate-y-0" : "-translate-y-4"
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            prefetch={true}
            onClick={onClose}
            className="py-2 px-2 border-b border-white/10 hover:bg-white/5 rounded-md transition-colors active:bg-white/10 text-blue-400"
          >
            {link.label}
          </Link>
        ))}

        {ANCHOR_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="py-2 px-2 border-b border-white/10 hover:bg-white/5 rounded-md transition-colors active:bg-white/10 text-blue-400"
          >
            {link.label}
          </Link>
        ))}

        <div className="flex flex-col gap-2 pt-3">
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 h-10 active:bg-white/20"
          >
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
