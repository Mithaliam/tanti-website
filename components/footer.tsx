import Link from "next/link"
import Image from "next/image"
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react"

export default function ModernFooter() {
  return (
    <footer className="bg-black border-t border-white/10 py-6 sm:py-10 px-3 sm:px-6 lg:px-8">
      <div className="mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-32 h-8 sm:w-40 sm:h-10">
                <img
                  src="/tanti-automatics-logo.png"
                  alt="Tanti Automatics Pvt. Ltd. Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-white/70 mb-6">
              Empowering businesses with AI-powered solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.facebook.com/Tantiautomation/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors shadow-[0_0_16px_rgba(59,130,246,0.35)] hover:shadow-[0_0_24px_rgba(59,130,246,0.55)] rounded-full p-2">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/tanti_automation/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors shadow-[0_0_16px_rgba(59,130,246,0.35)] hover:shadow-[0_0_24px_rgba(59,130,246,0.55)] rounded-full p-2">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F3780956%2Fadmin%2Ffeed%2Fposts%2F" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors shadow-[0_0_16px_rgba(59,130,246,0.35)] hover:shadow-[0_0_24px_rgba(59,130,246,0.55)] rounded-full p-2">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Tanti. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
