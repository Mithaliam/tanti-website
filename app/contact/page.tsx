"use client"

import { Phone, MessageCircle, MapPin, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const phonePrimary = "+919606457175"
  const phoneSecondary = "+919620220491"
  const emailSales = "mail@tanti.co"
  const emailProjects = "projects@tanti.co"
  const googleMapsUrl = "https://www.google.com/maps/place/Tanti+automatics+Pvt+ltd/@13.0084026,77.6577671,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae17583026a1c1:0x8c68493e202672d1!8m2!3d13.0084026!4d77.6577671!16s%2Fg%2F11c5v8m3d0";

  return (
    <div className="bg-white">
      <section className="pt-24 pb-10 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Connect With Us</h1>
          <p className="opacity-90 mt-2">Seamless Smart Home Installation Services</p>
          <p className="opacity-90">for Comfortable Living Spaces</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          <Card className="h-full bg-white border border-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_32px_rgba(59,130,246,0.35)] transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center ring-2 ring-blue-300/70 shadow-[0_0_16px_rgba(59,130,246,0.45)]">
                <Phone />
              </div>
              <CardTitle className="mt-2">Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">We are team that your trusted smart home installation experts</p>
              <div className="space-y-1 font-semibold text-blue-600">
                <Link href={`tel:${phonePrimary}`}>+91 960 645 7175</Link>
                <div />
                <Link href={`tel:${phoneSecondary}`}>+91 962 022 0491</Link>
              </div>
              <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
                <Link href={`tel:${phonePrimary}`}>Call Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="h-full bg-white border border-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_32px_rgba(59,130,246,0.35)] transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center ring-2 ring-blue-300/70 shadow-[0_0_16px_rgba(59,130,246,0.45)]">
                <MessageCircle />
              </div>
              <CardTitle className="mt-2">Chat With Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Start chatting with our representative by clicking the chat icon</p>
              <div className="flex gap-2">
                <Button asChild variant="secondary" className="bg-white text-blue-600 border border-blue-200 hover:bg-blue-50">
                  <Link href={`https://wa.me/${phonePrimary.replace(/^\+/, "")}`}>WhatsApp</Link>
                </Button>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href={`mailto:${emailSales}`}>Email</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full bg-white border border-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_32px_rgba(59,130,246,0.35)] transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center ring-2 ring-blue-300/70 shadow-[0_0_16px_rgba(59,130,246,0.45)]">
                <MapPin />
              </div>
              <CardTitle className="mt-2">Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-700 space-y-4">
                <div>
                  <div className="font-semibold">Bangalore Office:</div>
                  <div className="text-sm">107, 4th D Cross Rd, Lal Bahadur Nagar,<br/>East of NGEF Layout, Kasturi Nagar, Bengaluru,<br/>Karnataka 560043</div>
                </div>
                <div>
                  <div className="font-semibold">Mysore Office:</div>
                  <div className="text-sm">61, Banashankari nilaya, Basaveshwaranagar,<br/>Mysuru, Karnataka 570022</div>
                </div>
                <div>
                  <div className="font-semibold">Hubballi Office:</div>
                  <div className="text-sm">Tanti automatics pvt ltd<br/>Shop No 19, 2nd Floor, Pride Icon,<br/>Beside Cubix Hotel, Gokul(Airport) Road,<br/>Hubballi - 580030</div>
                </div>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">Visit Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700">You can reach us anytime via</p>
          <p className="text-gray-900 font-medium">
            Email: <Link href={`mailto:${emailSales}`} className="text-blue-600">{emailSales}</Link> | <Link href={`mailto:${emailProjects}`} className="text-blue-600">{emailProjects}</Link>
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <SocialIcon href="https://www.facebook.com/Tantiautomation/" label="Facebook"><Facebook /></SocialIcon>
            <SocialIcon href="https://www.youtube.com/@tantiautomaticspvtltd6286" label="YouTube"><Youtube /></SocialIcon>
            <SocialIcon href="https://www.instagram.com/tanti_automation/?hl=en" label="Instagram"><Instagram /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F3780956%2Fadmin%2Ffeed%2Fposts%2F" label="LinkedIn"><Linkedin /></SocialIcon>
          </div>
        </div>
      </section>

      {/* Map section intentionally removed */}
    </div>
  )
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-full border border-blue-200 text-blue-600 flex items-center justify-center hover:bg-blue-50 shadow-[0_0_18px_rgba(59,130,246,0.35)] hover:shadow-[0_0_28px_rgba(59,130,246,0.55)]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  )
}


