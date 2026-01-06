"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence, cubicBezier } from "framer-motion"
import { Button } from "@/components/ui/button"

const accentBlue = "#0064B6"

const categories = [
  {
    title: "Residential Automation",
    description:
      "Curated comfort for villas, apartments, and high-rise residences with unified, KNX-centric control.",
      image: "/res%20sol.jpeg",
    accent: "#0068ff",
    points: [
      "Wired Lighting Automation",
      "Wireless Lighting Automation",
    ],
  },
  {
    title: "Commercial Automation",
    description:
      "Enterprise-grade control layers that align lighting, HVAC, and emergency workflows across campuses.",
      image: "/commercial%20sol.jpeg",
    accent: "#0b2d61",
    points: [
      "LMS (Lighting Management System)",
      "BMS Control",
      "Emergency Exit Signage Lighting",
    ],
  },
  {
      title: "Security",
    description:
      "Layered protection with intelligent analytics, remote visibility, and policy-driven access.",
      image: "/security%20sol.jpeg",
    accent: "#0068ff",
    points: [
      "Intrusion Alarm",
      "Video Door Phone",
      "IP CCTV",
      "Access Control",
      "Motorised Shutters",
    ],
  },
  {
      title: "Home Entertainment",
    description:
      "Acoustic engineering and immersive visuals orchestrated for living rooms, lounges, and private theatres.",
      image: "/home%20sol.jpeg",
    accent: "#0b2d61",
    points: ["Zonal Audio", "Home Theatre"],
    },
    {
      title: "Commercial AV",
    description:
      "Boardrooms, experience centres, and auditoriums with cinematic clarity and low-latency collaboration.",
      image: "/commercial%20av.jpeg",
    accent: "#0068ff",
    points: ["Conference Room", "PA System", "LED and Video Wall", "AV Over IP"],
    },
    {
      title: "Energy Management",
    description:
      "Operational intelligence for utilities, smart grids, and distributed energy resources.",
      image: "/energy%20management.jpeg",
    accent: "#0b2d61",
    points: ["ABB Ability"],
    },
    {
      title: "UI Interface",
    description:
      "Unified orchestration across subsystems with open APIs, logic engines, and real-time telemetry.",
      image: "/central%20management.jpeg",
    accent: "#0068ff",
    points: ["RTI Corp", "NETX Automation", "Logic Machine", "Cylon"],
  },
]

const heroVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
}

const imageVariant = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
}

const desktopTextVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

const mobileTextVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

const detailVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
}

// Content map for all points - add content here as you provide it
const pointContentMap: Record<string, {
  description: string
  highlights?: string
  knowMoreUrl?: string
}> = {
  "Residential Automation-Wired Lighting Automation": {
    description: "Tanti Automatics delivers high-performance KNX wired lighting automation designed for long-term reliability across luxury homes and commercial buildings. Our KNX architecture operates on a dedicated wired bus, ensuring zero lag, zero dropouts and unmatched stability compared to wireless systems. Tanti integrates lighting with HVAC, curtains, security, AV and energy management to create a unified smart-building experience. With features like presence detection, daylight-based dimming, zoning and centralised scheduling, we help clients achieve premium comfort, energy efficiency and a future-ready automation ecosystem.",
    highlights: "Reliable • Wired • Stable • Efficient • Integrated • Scalable • Sensor-Driven • Future-Ready • Centralised • Professional",
    knowMoreUrl: "https://www.knx.org/knx-en/for-professionals/"
  },
  "Residential Automation-Wireless Lighting Automation": {
    description: "Tanti Automatics offers advanced wireless lighting automation built for homes, villas and retrofit-friendly projects. Using ABB free@home® wireless technology and Legrand Arteor™ IoT modules, we deliver flexible and fast-to-install solutions with minimal wiring. Our wireless network forms a stable mesh across rooms and floors, giving smooth dimming, scene control, app and voice operation without heavy electrical changes. Tanti integrates these wireless systems with KNX, HVAC, curtains, security, AV and energy management to create a unified smart-building experience. With features like remote control, zoning and automated schedules, we bring comfort, energy savings and future-ready smart living to any space.",
    highlights: "Reliable • Wireless • Flexible • Efficient • Integrated • Scalable • Sensor-Driven • Future-Ready • Centralised • Professional",
    knowMoreUrl: "https://shop.in.abb.com/abb-free-home?gad_source=1&gad_campaignid=22580421326&gbraid=0AAAAApfl-mdYCuyp-nNpoCLx31Ge7Ro6D&gclid=Cj0KCQiArOvIBhDLARIsAPwJXObEkCeLS3gyJfRPhiB087aLjDkPFts3r416PWmLtPrKsFDzrBdLYk0aAqfqEALw_wcB"
  },
  "Commercial Automation-LMS (Lighting Management System)": {
    description: "Tanti Automatics delivers a powerful Lighting Management System designed for large buildings, commercial spaces and high-end residential projects that demand centralised intelligence and energy optimisation. Built on open protocols like KNX, DALI, BACnet and Modbus, our LMS unifies lighting into a single platform for monitoring, control and automation. With real-time dashboards, scheduling, scene management and emergency-lighting supervision, Tanti ensures superior comfort, reduced energy cost and streamlined building operations. The system scales effortlessly—from office floors to hotels, malls, airports and smart campuses—while seamlessly integrating with HVAC, shading, energy management, security and BMS systems.",
    highlights: "Centralised • Scalable • Efficient • Integrated • Automated • Reliable • Insightful • Secure • Flexible • Professional",
    knowMoreUrl: "https://www.netxautomation.com/"
  },
  "Commercial Automation-BMS Control": {
    description: "Tanti Automatics delivers a robust Building Management System designed for complex buildings, campuses and infrastructure projects that demand full-scale automation and oversight. Using ABB Cylon's open-protocol controllers and supervisory platform, we provide unified control of HVAC, lighting, metering, fire & safety and facility systems. The architecture supports BACnet/IP, Modbus and web-interfaces to adapt and scale as your building grows. With real-time analytics, fault detection, energy-monitoring and remote management, Tanti ensures buildings perform efficiently, remain comfortable, and deliver lower operating costs.",
    highlights: "Integrated • Open-Protocol • Scalable • Real-Time • Energy-Saving • Fault-Resilient • Flexible • Smart • Centralised • Professional",
    knowMoreUrl: "https://new.abb.com/low-voltage/products/building-automation/product-range/abb-cylon"
  },
  "Commercial Automation-Emergency Exit Signage Lighting": {
    description: "Tanti Automatics provides high-visibility, code-compliant emergency exit signage and lighting solutions engineered for safety, reliability and performance. From LED exit signs to integrated emergency lighting circuits, our systems ensure that every escape route remains clearly marked and illuminated — even during power failures. We design, install and integrate these emergency lighting networks with the broader building automation infrastructure so that signage works seamlessly with lighting controls, BMS, power backup and evacuation systems. With Tanti's expertise, your building's safety readiness is elevated, maintenance burdens are reduced and occupant evacuation confidence is enhanced.",
    highlights: "Reliable • Visible • Compliant • Efficient • Durable • Tested • Integrated • Low-Maintenance • Safe • Professional"
  },
  "Security-Intrusion Alarm": {
    description: "Tanti Automatics offers a professional-grade intrusion alarm platform built for homes, commercial buildings and high-value installations. Featuring the Ajax wireless system's robust sensors, motion detectors and monitoring hub, we deliver rapid detection of break-ins, glass-breaks, open doors/windows and perimeter movements. The network operates on long-range two-way radio technology with backup power and redundant communication channels, ensuring the alarm works even during power outages or network failures. Tanti integrates this intrusion system with your smart-building infrastructure including lighting, access control and BMS so that a breach can trigger lights, lock-downs or alerts in a fully orchestrated response.",
    highlights: "Reliable • Responsive • Secure • Wireless • Scalable • Integrated • Monitored • Professional • Fast • Resilient",
    knowMoreUrl: "https://ajax.systems/"
  },
  "Security-Video Door Phone": {
    description: "Tanti Automatics offers a premium video door phone and access entry system designed for modern homes, apartments and commercial buildings. Using advanced platforms like IP-based systems and smart intercoms, we deliver high-definition video, two-way audio, mobile-app control and remote unlock functionality. Our solutions integrate seamlessly with access control, video surveillance and smart-building systems, providing both convenience and security at the entry point. With Tanti's engineering and commissioning, you get robust visitor management, enhanced occupant experience and reliable control over who enters your space.",
    highlights: "Secure • Connected • HD-Video • Remote • Smart • Integrated • Responsive • Scalable • Elegant • Professional",
    knowMoreUrl: "https://onetouchcomsec.com/products/video-door-phones-and-smart-doorbells/"
  },
  "Security-IP CCTV": {
    description: "Tanti Automatics delivers state-of-the-art IP CCTV and video surveillance systems for homes, commercial buildings, campuses and industrial facilities. Using high-definition network cameras with night vision, wide-angle lenses, motion detection and digital video recording, our surveillance solutions provide crystal-clear video, 24/7 monitoring and remote access from mobile or desktop. We integrate CCTV with your building automation stack — including access control, alarms, lighting and BMS — for unified security and smart-building management. Whether it's perimeter security, lobby monitoring, or full-site surveillance, Tanti ensures reliable, scalable and intuitive video coverage for peace of mind.",
    highlights: "HD-Quality • Remote • Scalable • Integrated • Reliable • Secure • Night-Vision • Smart • Efficient • Professional",
    knowMoreUrl: "https://www.honeywell.com/in/en/impactbyhoneywell"
  },
  "Security-Access Control": {
    description: "Tanti Automatics delivers intelligent access control systems tailored for modern residences, apartments, offices and commercial buildings. Using advanced smart-lock and access-management platforms, our solutions provide secure, convenient and reliable entry control. Features such as biometric, keypad, mobile-app and cloud-based access management give you full control over who enters your space — anytime, from anywhere. We integrate access control with CCTV, alarms, building automation and smart-home systems, enabling unified security and seamless management. With Tanti's professional installation and setup, access control becomes a core part of your smart infrastructure, ensuring robust security and user-friendly operation.",
    highlights: "Secure • Smart • Convenient • Flexible • Integrated • Reliable • Scalable • Remote • Efficient • Professional",
    knowMoreUrl: "https://lockly.com/?srsltid=AfmBOopUI-wq7ie45_Yq9MKLZEcNPjM2GxgjsYuxFQ1fo1ER3J2wqlfT"
  },
  "Security-Motorised Shutters": {
    description: "Tanti Automatics delivers advanced motorised shutter and blind automation, ideal for homes, villas, offices and commercial properties. Leveraging premium motors and systems (from global leaders in curtain/blind automation), we enable smooth, silent operation of shutters, blinds and curtains with remote, app- or switch-based control. Our solutions integrate seamlessly with lighting, HVAC, security and building automation systems — so shading, privacy and natural light are managed intelligently as part of your smart building ecosystem. With Tanti's engineering and installation expertise, expect reliable performance, effortless operation and a touch of luxury in everyday comfort.",
    highlights: "Automated • Silent • Elegant • Smart • Integrated • Reliable • Convenient • Scalable • Energy-Saving • Professional",
    knowMoreUrl: "https://www.ad-blinds.com/"
  },
  "Home Entertainment-Zonal Audio": {
    description: "Tanti Automatics provides premium zonal-audio systems for homes, villas, offices and commercial buildings — engineered for immersive sound across multiple rooms or zones. Our audio systems let you define \"zones\" (e.g. living room, terrace, bedroom, lobby) where speakers work together to play music or media content simultaneously or independently. With smart design and integration, you get synchronized playback across zones or separate audio per zone, along with seamless control, flexibility and effortless expansion. Whether it's ambient background music for a lobby, party mode across living and patio, or private listening in bedrooms, Tanti delivers a scalable, high-fidelity audio experience integrated with your smart-building ecosystem.",
    highlights: "Zone-based • Flexible • Scalable • Integrated • Immersive • Reliable • Multi-room • Smart • Convenient • Professional",
    knowMoreUrl: "https://www.miantic.com/"
  },
  "Home Entertainment-Home Theatre": {
    description: "Tanti Automatics delivers premium home theatre solutions for villas, luxury apartments and dedicated media rooms — engineered for immersive cinematic experience, rich sound reproduction and seamless integration with your smart home ecosystem. Using high-quality wireless and wired speaker systems, multi-channel AV receivers, acoustic tuning and professional cabling, we create a home theatre that delivers theatre-class audio and video in the comfort of your home. Our installations integrate with lighting, blinds, HVAC and smart-home controls to create perfect ambience and synchronized automation. With Tanti's expertise in design, installation and commissioning, expect elegant aesthetics, reliable performance and a fully immersive entertainment environment.",
    highlights: "Immersive • High-Fidelity • Integrated • Elegant • Scalable • Reliable • Flexible • Smart • Cinematic • Premium",
    knowMoreUrl: "https://in.harmankardon.com/wireless-speakers"
  },
  "Commercial AV-Conference Room": {
    description: "Tanti Automatics provides fully integrated conference-room solutions combining high-resolution displays or projectors, motorised blinds/shades, smart audio systems, and mobile-app-based control — all commissioned and optimised for corporate offices, hotels, institutions and board rooms. With professional-grade displays/projectors, synchronized audio/video, automated lighting and blind control, and intuitive mobile-device access, we deliver a seamless meeting experience. From presentations and video conferences to training sessions or guest briefings, your conference room becomes a smart, easy-to-use, professional-grade environment. Tanti ensures quality installation, smooth integration with building automation (lighting, HVAC, blinds, security) and user-friendly control for every stakeholder.",
    highlights: "Integrated • Professional • Seamless • Flexible • Automated • Reliable • Smart • Scalable • Efficient • Premium",
    knowMoreUrl: "https://new.abb.com/low-voltage/products/building-automation/product-range/abb-i-bus-knx"
  },
  "Commercial AV-PA System": {
    description: "Tanti Automatics delivers professional-grade public address (PA) and mass-notification systems designed for commercial buildings, campuses, hotels, malls, institutions and large complexes. Our PA solutions combine high-quality amplifiers, loudspeakers, microphones and control modules to broadcast announcements, background music, emergency alerts and voice-guided evacuations — ensuring clear sound coverage across every zone. We integrate PA with building automation, lighting, fire safety and access control to provide a unified communication & safety ecosystem. With Tanti's design, installation and commissioning expertise, you get reliable zone-wise audio, seamless paging, crisis-ready voice alarms, and scalable sound systems built to grow with your building.",
    highlights: "Clear • Reliable • Scalable • Integrated • Secure • Flexible • Powerful • Zoned • Efficient • Professional",
    knowMoreUrl: "https://www.keenfinity-group.com/xc/en/solutions/public-address-solutions/#resources"
  },
  "Commercial AV-LED and Video Wall": {
    description: "Tanti Automatics provides high-impact LED and video-wall display solutions ideal for lobbies, corporate offices, retail spaces, event venues, control rooms, and public areas. Using premium Direct-View LED / dvLED and video wall technologies, we deliver vivid, high-brightness displays that stay crisp and clear even in well-lit environments. Our video-wall systems are modular and scalable, allowing flexible sizing and layout tailored to your space — from slim lobby signage to large-format walls in auditoriums or control centers. We integrate these displays with your AV, building automation, and content-management systems for seamless control and real-time content updates. With Tanti's design, installation and commissioning, you get a robust, future-ready visual canvas that elevates communication, branding and ambience.",
    highlights: "Vivid • High-Brightness • Scalable • Modular • Seamless • Impactful • Integrated • Flexible • Reliable • Professional",
    knowMoreUrl: "https://www.samsung.com/us/business/displays/direct-view-led/explore/"
  },
  "Commercial AV-AV Over IP": {
    description: "Tanti Automatics delivers advanced AV-over-IP solutions that distribute high-quality audio and video over standard network infrastructure. Using next-generation platforms like Dante, we enable low-latency, synchronized AV transmission across meeting rooms, auditoriums, campuses, hotels and large commercial environments. Our AV-over-IP architecture replaces traditional matrix switchers with scalable, flexible network-based routing — allowing any source to connect to any display or speaker zone over the LAN. Tanti ensures seamless integration with conferencing systems, LED walls, zonal audio, control processors, and building automation, providing a future-ready and easily expandable AV ecosystem.",
    highlights: "Scalable • Low-Latency • Flexible • Networked • Reliable • Integrated • High-Quality • Efficient • Synchronized • Professional",
    knowMoreUrl: "https://www.getdante.com/"
  },
  "Energy Management-ABB Ability": {
    description: "Tanti Automatics integrates ABB Ability's advanced energy-management platform to deliver intelligent, data-driven control of power consumption across residential, commercial and industrial buildings. Our solution continuously monitors electrical systems — from main feeders to sub-circuits — giving real-time visibility into energy use, power quality and asset health. With predictive analytics, load forecasting and automated alerts, Tanti helps optimise consumption, avoid peak-demand charges, reduce carbon footprint and ensure reliable power distribution. Whether it's a villa, an office campus, a hotel or an industrial facility, our ABB-powered system transforms building energy use into a controllable, efficient, and sustainable resource.",
    highlights: "Monitored • Efficient • Sustainable • Predictive • Transparent • Reliable • Scalable • Smart • Optimised • Professional",
    knowMoreUrl: "https://new.abb.com/process-automation/energy-industries/digital/solutions/abb-ability-advanced-process-control?hd_ppc_campaign&gad_source=1&gad_campaignid=23227087589&gbraid=0AAAAA9UIr8cHNlGAfsBP8bZmTLKnc3O2-&gclid=Cj0KCQiArt_JBhCTARIsADQZayk7noelsPRlBZHd1svbGHGPiIBXdWGqxnnF0W22e9dvYVnX4-605hAaAq3aEALw_wcB"
  },
  "UI Interface-RTI Corp": {
    description: "Tanti Automatics integrates RTI Control's powerful automation platform to deliver seamless, unified control of lighting, HVAC, blinds, AV, security and energy systems — ideal for luxury homes, commercial buildings, hotels and corporate campuses. With RTI, all systems can be managed through intuitive touchpanels, handheld remotes, or mobile apps — giving users total convenience and centralised command. The platform supports full customisation: automated scenes, scheduling, zone-wise control and real-time system monitoring. Whether it's dimming lighting, closing blinds at dusk, routing AV to different rooms, or adjusting climate — RTI makes every function accessible with a single command or via automation logic. Tanti's team engineers, programs and commissions the full RTI solution, ensuring robust performance and effortless user experience across every installation.",
    highlights: "Unified • Intuitive • Customisable • Responsive • Scalable • Reliable • Flexible • Integrated • Smart • Professional",
    knowMoreUrl: "https://www.rticontrol.com/"
  },
  "UI Interface-NETX Automation": {
    description: "Tanti Automatics integrates NETx BMS to deliver a powerful, unified energy and building management solution. NETx acts as a centralised platform that brings together lighting, HVAC, shading, security, metering and more under one roof — across residences, commercial buildings, hotels, campuses or industrial facilities. The system supports multiple protocols (KNX, BACnet, Modbus, MQTT, OPC etc.), ensuring full interoperability even in mixed-technology environments. With real-time monitoring, automated scheduling, alarm management, energy consumption tracking, historical reporting and logic-based automation, Tanti ensures optimal energy usage, smooth operation, faster fault response and future-proof scalability. Whether for a villa or a large institutional complex, our NETx-based solution delivers transparency, control, comfort and sustainability.",
    highlights: "Unified • Protocol-agnostic • Scalable • Monitored • Efficient • Integrated • Configurable • Transparent • Reliable • Smart",
    knowMoreUrl: "https://www.netxautomation.com/"
  },
  "UI Interface-Logic Machine": {
    description: "Tanti Automatics utilises LogicMachine as the intelligent core for building automation, enabling unified control over lighting, HVAC, energy, security, shading and more — across homes, villas, commercial buildings and campuses. LogicMachine supports major protocols (KNX, BACnet, Modbus, MQTT, ZigBee etc.), making it protocol-agnostic and ideal for mixed-technology installations. With its built-in logic engine, scheduling, data logging, web-based UI and cloud-ready architecture, the platform offers powerful automation capabilities, remote access, visualization and future-proof scalability. Tanti engineers, programs and commissions the LogicMachine-based solution to deliver seamless control, full system interoperability, and a robust automation backbone that grows with your building needs.",
    highlights: "Unified • Protocol-agnostic • Scalable • Flexible • Remote • Automated • Integrated • Reliable • Smart • Professional",
    knowMoreUrl: "https://logicmachine.net/"
  },
  "UI Interface-Cylon": {
    description: "Tanti Automatics deploys ABB Cylon as the intelligent control backbone for large-scale building and facility automation. ABB Cylon's controllers and supervisory systems manage HVAC, lighting, energy, sensors, metering and environmental controls — all from a unified open-protocol platform. With BACnet/IP and other protocol support, Cylon enables seamless integration of diverse building systems and offers real-time monitoring, automation logic, predictive energy management and centralized supervision. This makes it ideal for commercial buildings, campuses, hotels, hospitals or residential complexes where reliability, scalability and energy efficiency matter. Backed by Tanti's expert programming, commissioning and maintenance — you get a smart building that's efficient, future-ready and highly manageable.",
    highlights: "Unified • Protocol-Agnostic • Scalable • Automated • Monitored • Efficient • Integrated • Flexible • Reliable • Smart",
    knowMoreUrl: "https://new.abb.com/low-voltage/products/building-automation/product-range/abb-cylon"
  },
  // Add more content here as you provide it
}

function PointDetailCard({ pointKey }: { pointKey: string }) {
  const content = pointContentMap[pointKey]
  
  if (!content) {
    console.log('PointDetailCard: No content found for key:', pointKey)
    console.log('Available keys:', Object.keys(pointContentMap))
    return null
  }

  return (
    <motion.div
      variants={detailVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="ml-0 md:ml-14 mt-3"
    >
      <div className="rounded-xl shadow-md p-4 bg-white max-w-[550px] h-[180px] md:h-[220px] overflow-hidden">
        <div className="overflow-y-auto max-h-full pr-2 text-sm leading-relaxed text-[#0b2d61]/90 custom-scrollbar">
          <p className="mb-3">
            {content.description}
          </p>
          
          {content.highlights && (
            <div className="pt-3 border-t border-gray-200/50">
              <p className="font-semibold text-[#0b2d61] mb-2">Key Highlights:</p>
              <p className="text-[#0b2d61]/80 mb-4">
                {content.highlights}
              </p>
              {content.knowMoreUrl && (
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 text-sm py-2 h-auto"
                >
                  <a 
                    href={content.knowMoreUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Know More
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function SolutionsPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [expandedPoint, setExpandedPoint] = useState<string | null>(null)

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 640)
    updateIsMobile()
    window.addEventListener("resize", updateIsMobile)
    return () => window.removeEventListener("resize", updateIsMobile)
  }, [])

  const handlePointClick = (categoryTitle: string, point: string) => {
    const pointKey = `${categoryTitle}-${point}`
    console.log('handlePointClick - categoryTitle:', categoryTitle, 'point:', point, 'pointKey:', pointKey)
    console.log('Content exists:', !!pointContentMap[pointKey])
    if (expandedPoint === pointKey) {
      setExpandedPoint(null)
    } else {
      setExpandedPoint(pointKey)
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f8ff]">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[38rem] h-[38rem] bg-[#bcd9ff]/35 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[30rem] h-[30rem] bg-[#e3f0ff]/60 blur-[110px] rounded-full" />
      </div>

      <div className="relative z-[1] max-w-6xl mx-auto px-4 pb-24 pt-16 md:pt-20 lg:pt-24 space-y-20">
        {/* Hero */}
        <motion.section
          variants={heroVariant}
          initial="hidden"
          animate="visible"
          className="rounded-[32px] border border-white/40 bg-white/80 px-6 py-12 shadow-[0_25px_80px_rgba(0,60,136,0.08)] backdrop-blur-xl text-center md:px-10"
        >
          <h1
            className="text-4xl md:text-6xl font-semibold mb-4"
            style={{ color: accentBlue }}
          >
            Solutions
          </h1>
          <p className="text-lg md:text-xl text-[#0b2d61]/80 max-w-3xl mx-auto">
            Smart, integrated automation for homes, buildings, and enterprise
            environments.
          </p>
        </motion.section>

        {/* Categories */}
        <div className="space-y-16 md:space-y-20">
          {categories.map((category, index) => {
            const reverse = index % 2 === 1
            const imageBlock = (
              <motion.div
                key="image"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative"
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
              >
                <div className="rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(11,45,97,0.15)] h-[400px] md:h-[500px] lg:h-[550px] w-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={800}
                    height={550}
                    className="h-full w-full object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="absolute -bottom-6 left-12 hidden sm:flex gap-3 rounded-3xl border border-white/50 bg-white/80 px-5 py-3 shadow-lg backdrop-blur-md">
                  <span className="text-xs font-semibold tracking-[0.3em] text-[#0b2d61]/70">
                    {category.title}
                  </span>
                </div>
              </motion.div>
            )

            const textBlock = (
              <motion.div
                key="text"
                variants={isMobile ? mobileTextVariant : desktopTextVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                className="rounded-[32px] border border-white/60 bg-white/90 px-6 py-8 shadow-[0_20px_60px_rgba(0,104,255,0.08)] backdrop-blur-xl md:px-10"
              >
                <h2
                  className="text-3xl md:text-4xl font-semibold mb-4"
                  style={{ color: accentBlue }}
                >
                  {category.title}
                </h2>
                <p className="text-lg text-[#0b2d61]/80 mb-8 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-4">
                  {category.points.map((point) => {
                    const pointKey = `${category.title}-${point}`
                    const isExpanded = expandedPoint === pointKey
                    return (
                      <li key={point} className="space-y-4">
                        <button
                          onClick={() => handlePointClick(category.title, point)}
                          className="flex items-start gap-4 text-[#0b2d61] text-lg font-medium w-full text-left hover:opacity-80 transition-opacity cursor-pointer"
                        >
                          <span
                            className="mt-1 flex h-10 w-10 items-center justify-center rounded-3xl border border-white/60 bg-gradient-to-br from-white to-[#f4f8ff] shadow-md flex-shrink-0"
                            style={{ color: accentBlue }}
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="3" />
                              <path d="M12 2v2" />
                              <path d="M12 20v2" />
                              <path d="m4.93 4.93 1.41 1.41" />
                              <path d="m17.66 17.66 1.41 1.41" />
                              <path d="M2 12h2" />
                              <path d="M20 12h2" />
                              <path d="m6.34 17.66-1.41 1.41" />
                              <path d="m19.07 4.93-1.41 1.41" />
                            </svg>
                          </span>
                          <span
                            className="transition-colors duration-200"
                            style={{ color: isExpanded ? accentBlue : "#0b2d61" }}
                            onMouseEnter={(e) => !isExpanded && (e.currentTarget.style.color = accentBlue)}
                            onMouseLeave={(e) => !isExpanded && (e.currentTarget.style.color = "#0b2d61")}
                          >
                            {point}
                          </span>
                        </button>
                        <AnimatePresence mode="wait">
                          {isExpanded && (
                            <PointDetailCard key={pointKey} pointKey={pointKey} />
                          )}
                        </AnimatePresence>
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            )

            return (
              <section
                key={category.title}
                className="grid gap-10 lg:grid-cols-2 items-center"
              >
                {reverse ? (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                ) : (
                  <>
                    {imageBlock}
                    {textBlock}
          </>
        )}
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
