"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"

export default function SolutionsPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showKNXInfo, setShowKNXInfo] = useState(false)
  const [showWirelessInfo, setShowWirelessInfo] = useState(false)
  const [showLMSInfo, setShowLMSInfo] = useState(false)
  const [showBMSInfo, setShowBMSInfo] = useState(false)
  const [showEmergencyExitInfo, setShowEmergencyExitInfo] = useState(false)
  const [showIntrusionAlarmInfo, setShowIntrusionAlarmInfo] = useState(false)
  const [showVideoDoorPhoneInfo, setShowVideoDoorPhoneInfo] = useState(false)
  const [showIPCCTVInfo, setShowIPCCTVInfo] = useState(false)
  const [showAccessControlInfo, setShowAccessControlInfo] = useState(false)
  const [showMotorisedShuttersInfo, setShowMotorisedShuttersInfo] = useState(false)
  const [showZonalAudioInfo, setShowZonalAudioInfo] = useState(false)
  const [showHomeTheatreInfo, setShowHomeTheatreInfo] = useState(false)
  const [showConferenceRoomInfo, setShowConferenceRoomInfo] = useState(false)
  const [showPASystemInfo, setShowPASystemInfo] = useState(false)
  const [showLEDVideoWallInfo, setShowLEDVideoWallInfo] = useState(false)
  const [showTVOverIPInfo, setShowTVOverIPInfo] = useState(false)
  const [showABBAbilityInfo, setShowABBAbilityInfo] = useState(false)
  const [showRTICorpInfo, setShowRTICorpInfo] = useState(false)
  const [showNETXAutomationInfo, setShowNETXAutomationInfo] = useState(false)
  const [showLogicMachineInfo, setShowLogicMachineInfo] = useState(false)
  
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 320 + 24 // card width + gap
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 320 + 24 // card width + gap
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
    }
  }

  const handleServiceClick = (item: string) => {
    if (item === "Wired Lighting Automation") {
      setShowKNXInfo(!showKNXInfo)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
    } else if (item === "Wireless Lighting Automation") {
      setShowWirelessInfo(!showWirelessInfo)
      setShowKNXInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
    } else if (item === "LMS") {
      setShowLMSInfo(!showLMSInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
    } else if (item === "BMS Control") {
      setShowBMSInfo(!showBMSInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
    } else if (item === "Emergency Exit Signage Lighting") {
      setShowEmergencyExitInfo(!showEmergencyExitInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
    } else if (item === "Intrusion Alarm") {
      setShowIntrusionAlarmInfo(!showIntrusionAlarmInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowVideoDoorPhoneInfo(false)
    } else if (item === "Video Door Phone") {
      setShowVideoDoorPhoneInfo(!showVideoDoorPhoneInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
    } else if (item === "IP CCTV") {
      setShowIPCCTVInfo(!showIPCCTVInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
    } else if (item === "Access Control") {
      setShowAccessControlInfo(!showAccessControlInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
    } else if (item === "Motorised Shutters") {
      setShowMotorisedShuttersInfo(!showMotorisedShuttersInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
    } else if (item === "Zonal Audio") {
      setShowZonalAudioInfo(!showZonalAudioInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
      setShowHomeTheatreInfo(false)
    } else if (item === "Home Theatre") {
      setShowHomeTheatreInfo(!showHomeTheatreInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
      setShowZonalAudioInfo(false)
    } else if (item === "Conference Room") {
      setShowConferenceRoomInfo(!showConferenceRoomInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
      setShowZonalAudioInfo(false)
      setShowHomeTheatreInfo(false)
      setShowPASystemInfo(false)
      setShowLEDVideoWallInfo(false)
      setShowTVOverIPInfo(false)
    } else if (item === "PA System") {
      setShowPASystemInfo(!showPASystemInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
      setShowZonalAudioInfo(false)
      setShowHomeTheatreInfo(false)
      setShowConferenceRoomInfo(false)
      setShowLEDVideoWallInfo(false)
      setShowTVOverIPInfo(false)
    } else if (item === "LED and Video Wall") {
      setShowLEDVideoWallInfo(!showLEDVideoWallInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
      setShowZonalAudioInfo(false)
      setShowHomeTheatreInfo(false)
      setShowConferenceRoomInfo(false)
      setShowPASystemInfo(false)
      setShowTVOverIPInfo(false)
    } else if (item === "TV Over IP") {
      setShowTVOverIPInfo(!showTVOverIPInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
      setShowZonalAudioInfo(false)
      setShowHomeTheatreInfo(false)
      setShowConferenceRoomInfo(false)
      setShowPASystemInfo(false)
      setShowLEDVideoWallInfo(false)
    } else if (item === "ABB Ability") {
      setShowABBAbilityInfo(!showABBAbilityInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
      setShowZonalAudioInfo(false)
      setShowHomeTheatreInfo(false)
      setShowConferenceRoomInfo(false)
      setShowPASystemInfo(false)
      setShowLEDVideoWallInfo(false)
      setShowTVOverIPInfo(false)
    } else if (item === "RTI Corp") {
      setShowRTICorpInfo(!showRTICorpInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
      setShowZonalAudioInfo(false)
      setShowHomeTheatreInfo(false)
      setShowConferenceRoomInfo(false)
      setShowPASystemInfo(false)
      setShowLEDVideoWallInfo(false)
      setShowTVOverIPInfo(false)
      setShowABBAbilityInfo(false)
      setShowNETXAutomationInfo(false)
      setShowLogicMachineInfo(false)
    } else if (item === "NETX Automation") {
      setShowNETXAutomationInfo(!showNETXAutomationInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
      setShowZonalAudioInfo(false)
      setShowHomeTheatreInfo(false)
      setShowConferenceRoomInfo(false)
      setShowPASystemInfo(false)
      setShowLEDVideoWallInfo(false)
      setShowTVOverIPInfo(false)
      setShowABBAbilityInfo(false)
      setShowRTICorpInfo(false)
      setShowLogicMachineInfo(false)
    } else if (item === "Logic Machine") {
      setShowLogicMachineInfo(!showLogicMachineInfo)
      setShowKNXInfo(false)
      setShowWirelessInfo(false)
      setShowLMSInfo(false)
      setShowBMSInfo(false)
      setShowEmergencyExitInfo(false)
      setShowIntrusionAlarmInfo(false)
      setShowVideoDoorPhoneInfo(false)
      setShowZonalAudioInfo(false)
      setShowHomeTheatreInfo(false)
      setShowConferenceRoomInfo(false)
      setShowPASystemInfo(false)
      setShowLEDVideoWallInfo(false)
      setShowTVOverIPInfo(false)
      setShowABBAbilityInfo(false)
      setShowRTICorpInfo(false)
      setShowNETXAutomationInfo(false)
    }
  }

  const services = [
    {
      id: "residential",
      title: "Residential",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      ),
      services: [
        "Wired Lighting Automation",
        "Wireless Lighting Automation"
      ],
      cta: "More Residential →"
    },
    {
      id: "commercial",
      title: "Commercial",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <rect x="6" y="7" width="2" height="2" />
          <rect x="10" y="7" width="2" height="2" />
          <rect x="14" y="7" width="2" height="2" />
          <rect x="6" y="11" width="2" height="2" />
          <rect x="10" y="11" width="2" height="2" />
          <rect x="14" y="11" width="2" height="2" />
        </svg>
      ),
      services: [
        "LMS",
        "BMS Control",
        "Emergency Exit Signage Lighting"
      ],
      cta: "More Commercial →"
    },
           {
             id: "security",
             title: "Security",
             icon: (
               <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                 <circle cx="12" cy="16" r="1" />
                 <path d="M7 11V7a5 5 0 0 1 10 0v4" />
               </svg>
             ),
             services: [
               "Intrusion Alarm",
               "Video Door Phone",
               "IP CCTV",
               "Access Control",
               "Motorised Shutters"
             ],
             cta: "More Security →"
           },
           {
             id: "home-entertainment",
             title: "Home Entertainment",
             icon: (
               <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                 <line x1="8" y1="21" x2="16" y2="21" />
                 <line x1="12" y1="17" x2="12" y2="21" />
                 <circle cx="12" cy="10" r="3" />
                 <path d="M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
               </svg>
             ),
             services: [
               "Zonal Audio",
               "Home Theatre"
             ],
             cta: "More Home Entertainment →"
           },
    {
      id: "commercial-av",
      title: "Commercial AV",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <rect x="6" y="7" width="12" height="6" rx="1" />
          <circle cx="9" cy="10" r="1" />
          <circle cx="15" cy="10" r="1" />
        </svg>
      ),
      services: [
        "Conference Room",
        "PA System",
        "LED and Video Wall",
        "TV Over IP"
      ],
      cta: "More Commercial AV →"
    },
    {
      id: "energy-management",
      title: "Energy Management",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
        </svg>
      ),
      services: [
        "ABB Ability"
      ],
      cta: "More Energy Management →"
    },
    {
      id: "central-management",
      title: "Central Management Server",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <rect x="6" y="6" width="2" height="2" />
          <rect x="10" y="6" width="2" height="2" />
          <rect x="14" y="6" width="2" height="2" />
          <rect x="6" y="10" width="2" height="2" />
          <rect x="10" y="10" width="2" height="2" />
          <rect x="14" y="10" width="2" height="2" />
          <circle cx="12" cy="15" r="1" />
        </svg>
      ),
      services: [
        "RTI Corp",
        "NETX Automation",
        "Logic Machine"
      ],
      cta: "More Central Management →"
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with dark blue/teal overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        {/* Blurred office background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 blur-sm"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"%3E%3Crect fill=\"%234a5568\" width=\"1200\" height=\"800\"/%3E%3Crect fill=\"%236b7280\" x=\"200\" y=\"100\" width=\"300\" height=\"200\" rx=\"10\"/%3E%3Crect fill=\"%23737475\" x=\"600\" y=\"200\" width=\"250\" height=\"150\" rx=\"8\"/%3E%3Crect fill=\"%23555656\" x=\"100\" y=\"400\" width=\"200\" height=\"120\" rx=\"6\"/%3E%3Crect fill=\"%236b7280\" x=\"700\" y=\"450\" width=\"180\" height=\"100\" rx=\"5\"/%3E%3C/svg%3E')"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Services Section */}
        <div className="px-8 py-16">
          {/* Main Title */}
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Solutions
            </h1>
          </motion.div>

        {/* Services Grid with Horizontal Scroll Snap */}
        <div className="relative w-full max-w-none">
          {/* Scroll Indicators */}
          <div 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-black/80 to-transparent w-16 h-full flex items-center justify-center cursor-pointer"
            onClick={scrollLeft}
          >
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
          <div 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-l from-black/80 to-transparent w-16 h-full flex items-center justify-center cursor-pointer"
            onClick={scrollRight}
          >
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth" 
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              width: '100%',
              maxWidth: '100vw'
            }}
          >
            <div className="flex gap-6 px-16" style={{ width: 'max-content' }}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 h-[600px] w-80 flex-shrink-0 snap-center flex flex-col"
              >
                 {/* Service Icon and Title */}
                 <div className="flex items-center justify-center mb-6">
                   <div className="w-12 h-12 flex items-center justify-center text-gray-300 mr-3">
                     {service.icon}
                   </div>
                   <h3 className="text-2xl font-bold text-white">
                     {service.title}
                   </h3>
                 </div>

                 {/* Services List */}
                 <div className="mb-4">
                   <ul className="space-y-2">
                     {service.services.map((item, idx) => (
                       <li 
                         key={idx}
                         className="flex items-center text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors"
                         onClick={() => handleServiceClick(item)}
                       >
                         <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>

                 {/* KNX Information for Residential Card */}
                 {service.id === "residential" && showKNXInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">KNX Solution</h4>
                     <div className="space-y-2 mb-4">
                       <div className="flex items-center text-yellow-400">
                         <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                         Switching
                       </div>
                       <div className="flex items-center text-yellow-400">
                         <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                         RGB
                       </div>
                       <div className="flex items-center text-yellow-400">
                         <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                         Dimming
                       </div>
                       <div className="flex items-center text-yellow-400">
                         <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                         Time
                       </div>
                     </div>
                     <div className="border-t border-gray-300 my-4"></div>
                     <h4 className="text-lg font-semibold text-white mb-3">KNX Retrofit Solution</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       Upgrade your existing lighting system with KNX retrofit solutions for seamless automation.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* Wireless Information for Residential Card */}
                 {service.id === "residential" && showWirelessInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">Retrofit IOT</h4>
                     <div className="space-y-2 mb-4">
                       <div className="flex items-center text-yellow-400">
                         <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                         ABB F@H
                       </div>
                       <div className="flex items-center text-yellow-400">
                         <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                         IoT
                       </div>
                     </div>
                     <div className="border-t border-gray-300 my-4"></div>
                     <h4 className="text-lg font-semibold text-white mb-3">Flush Mount</h4>
                     <div className="space-y-2 mb-4">
                       <div className="flex items-center text-yellow-400">
                         <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                         Rako
                       </div>
                       <div className="flex items-center text-yellow-400">
                         <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                         Casambi
                       </div>
                     </div>
                     <div className="border-t border-gray-300 my-4"></div>
                     <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                     <p className="text-gray-300 text-sm">
                       Advanced wireless technologies for modern lighting control systems.
                     </p>
                   </div>
                 )}

                 {/* LMS Information for Commercial Card */}
                 {service.id === "commercial" && showLMSInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">LMS Solution</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       KNX-based Lighting Management System (LMS) with DALI Based Solutions and Day Light Harvesting.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* BMS Information for Commercial Card */}
                 {service.id === "commercial" && showBMSInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">BMS Control Solution</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       Building Management System (BMS) definition and companies: ABB Cylon, NETX Automation.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* Emergency Exit Information for Commercial Card */}
                 {service.id === "commercial" && showEmergencyExitInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">Emergency Exit Signage Lighting</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       Critical safety lighting systems for emergency exits and evacuation routes.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* Decorative Image for Commercial Card */}
                 {service.id === "commercial" && !showLMSInfo && !showBMSInfo && !showEmergencyExitInfo && (
                   <div className="flex-1 flex items-center justify-center mt-4">
                     <div className="w-full h-40 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-lg border border-blue-400/30 flex items-center justify-center">
                       <svg className="w-20 h-20 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                         <line x1="8" y1="21" x2="16" y2="21" />
                         <line x1="12" y1="17" x2="12" y2="21" />
                         <rect x="6" y="7" width="2" height="2" />
                         <rect x="10" y="7" width="2" height="2" />
                         <rect x="14" y="7" width="2" height="2" />
                         <rect x="6" y="11" width="2" height="2" />
                         <rect x="10" y="11" width="2" height="2" />
                         <rect x="14" y="11" width="2" height="2" />
                       </svg>
                     </div>
                   </div>
                 )}

                 {/* Intrusion Alarm Information for Security Card */}
                 {service.id === "security" && showIntrusionAlarmInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">Intrusion Alarm</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       Advanced intrusion detection systems with motion sensors, door/window contacts, and alarm notifications.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* Video Door Phone Information for Security Card */}
                 {service.id === "security" && showVideoDoorPhoneInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">Video Door Phone</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       High-definition video door phone systems with two-way communication and remote access capabilities.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* IP CCTV Information for Security Card */}
                 {service.id === "security" && showIPCCTVInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">IP CCTV</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       Advanced IP-based CCTV systems with features:
                     </p>
                     <div className="space-y-2 mb-4">
                       <div className="flex items-center text-yellow-400">
                         <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                         Face Recognition
                       </div>
                       <div className="flex items-center text-yellow-400">
                         <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                         Intrusion Detection
                       </div>
                       <div className="flex items-center text-yellow-400">
                         <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                         Number Plate Reading
                       </div>
                     </div>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* Access Control Information for Security Card */}
                 {service.id === "security" && showAccessControlInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">Access Control</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       Comprehensive access control systems with Digital Door Locks for secure entry management.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* Motorised Shutters Information for Security Card */}
                 {service.id === "security" && showMotorisedShuttersInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">Motorised Shutters</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       Automated shutter systems for enhanced security and convenience with remote control capabilities.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* Decorative Image for Security Card */}
                 {service.id === "security" && !showIntrusionAlarmInfo && !showVideoDoorPhoneInfo && !showIPCCTVInfo && !showAccessControlInfo && !showMotorisedShuttersInfo && (
                   <div className="flex-1 flex items-center justify-center mt-4">
                     <div className="w-full h-40 bg-gradient-to-br from-red-400/20 to-pink-500/20 rounded-lg border border-red-400/30 flex items-center justify-center">
                       <svg className="w-20 h-20 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                         <circle cx="12" cy="16" r="1" />
                         <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                       </svg>
                     </div>
                   </div>
                 )}

                 {/* Zonal Audio Information for Home Entertainment Card */}
                 {service.id === "home-entertainment" && showZonalAudioInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">Zonal Audio</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       Multi-zone audio distribution systems for whole-home entertainment with independent control.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* Home Theatre Information for Home Entertainment Card */}
                 {service.id === "home-entertainment" && showHomeTheatreInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">Home Theatre</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       Complete home theatre solutions with surround sound, projection systems, and immersive audio-visual experiences.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* Decorative Image for Home Entertainment Card */}
                 {service.id === "home-entertainment" && !showZonalAudioInfo && !showHomeTheatreInfo && (
                   <div className="flex-1 flex items-center justify-center mt-4">
                     <div className="w-full h-40 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg border border-purple-400/30 flex items-center justify-center">
                       <svg className="w-20 h-20 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                         <line x1="8" y1="21" x2="16" y2="21" />
                         <line x1="12" y1="17" x2="12" y2="21" />
                         <circle cx="12" cy="10" r="3" />
                         <path d="M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
                       </svg>
                     </div>
                   </div>
                 )}

                 {/* Conference Room Information for Commercial AV Card */}
                 {service.id === "commercial-av" && showConferenceRoomInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">Conference Room</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       Professional conference room AV solutions with video conferencing, presentation displays, and audio systems.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* PA System Information for Commercial AV Card */}
                 {service.id === "commercial-av" && showPASystemInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">PA System</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       Public address systems for clear communication in commercial spaces with background music capabilities.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* LED and Video Wall Information for Commercial AV Card */}
                 {service.id === "commercial-av" && showLEDVideoWallInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">LED and Video Wall</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       Large format LED displays and video walls for digital signage, presentations, and visual impact.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* TV Over IP Information for Commercial AV Card */}
                 {service.id === "commercial-av" && showTVOverIPInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">TV Over IP</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       IP-based television distribution systems for centralized content management and multi-room viewing.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* Decorative Image for Commercial AV Card */}
                 {service.id === "commercial-av" && !showConferenceRoomInfo && !showPASystemInfo && !showLEDVideoWallInfo && !showTVOverIPInfo && (
                   <div className="flex-1 flex items-center justify-center mt-4">
                     <div className="w-full h-40 bg-gradient-to-br from-indigo-400/20 to-cyan-500/20 rounded-lg border border-indigo-400/30 flex items-center justify-center">
                       <svg className="w-20 h-20 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                         <line x1="8" y1="21" x2="16" y2="21" />
                         <line x1="12" y1="17" x2="12" y2="21" />
                         <rect x="6" y="7" width="12" height="6" rx="1" />
                         <circle cx="9" cy="10" r="1" />
                         <circle cx="15" cy="10" r="1" />
                       </svg>
                     </div>
                   </div>
                 )}

                 {/* ABB Ability Information for Energy Management Card */}
                 {service.id === "energy-management" && showABBAbilityInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">ABB Ability</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       Advanced energy management platform for monitoring, analyzing, and optimizing energy consumption.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* Decorative Image for Energy Management Card */}
                 {service.id === "energy-management" && !showABBAbilityInfo && (
                   <div className="flex-1 flex items-center justify-center mt-4">
                     <div className="w-full h-40 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-lg border border-yellow-400/30 flex items-center justify-center">
                       <svg className="w-20 h-20 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
                       </svg>
                     </div>
                   </div>
                 )}

                 {/* RTI Corp Information for Central Management Server Card */}
                 {service.id === "central-management" && showRTICorpInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">RTI Corp</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       RTI control systems for centralized management of AV, lighting, climate, and security systems.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* NETX Automation Information for Central Management Server Card */}
                 {service.id === "central-management" && showNETXAutomationInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">NETX Automation</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       NETX automation solutions for building management and control system integration.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* Logic Machine Information for Central Management Server Card */}
                 {service.id === "central-management" && showLogicMachineInfo && (
                   <div className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-lg border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                     <h4 className="text-lg font-semibold text-white mb-3">Logic Machine</h4>
                     <p className="text-gray-300 text-sm mb-4">
                       Logic Machine platforms for advanced automation control and system integration.
                     </p>
                     <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                       Know more
                     </button>
                   </div>
                 )}

                 {/* Decorative Image for Central Management Server Card */}
                 {service.id === "central-management" && !showRTICorpInfo && !showNETXAutomationInfo && !showLogicMachineInfo && (
                   <div className="flex-1 flex items-center justify-center mt-4">
                     <div className="w-full h-40 bg-gradient-to-br from-gray-400/20 to-slate-500/20 rounded-lg border border-gray-400/30 flex items-center justify-center">
                       <svg className="w-20 h-20 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                         <line x1="8" y1="21" x2="16" y2="21" />
                         <line x1="12" y1="17" x2="12" y2="21" />
                         <rect x="6" y="6" width="2" height="2" />
                         <rect x="10" y="6" width="2" height="2" />
                         <rect x="14" y="6" width="2" height="2" />
                         <rect x="6" y="10" width="2" height="2" />
                         <rect x="10" y="10" width="2" height="2" />
                         <rect x="14" y="10" width="2" height="2" />
                         <circle cx="12" cy="15" r="1" />
                       </svg>
                     </div>
                   </div>
                 )}

                 {/* Call to Action - Hide for Residential, Commercial, Security, Home Entertainment, Commercial AV, Energy Management, and Central Management cards */}
                 {service.id !== "residential" && service.id !== "commercial" && service.id !== "security" && service.id !== "home-entertainment" && service.id !== "commercial-av" && service.id !== "energy-management" && service.id !== "central-management" && (
                   <div className="text-center mt-auto">
                     <button className="text-yellow-400 font-semibold text-lg hover:text-yellow-300 transition-colors">
                       {service.cta}
                     </button>
                   </div>
                 )}
               </motion.div>
             ))}
             </div>
           </div>
         </div>
       </div>
     </div>
    {/* Close outer container */}
    </div>
   )
 }




