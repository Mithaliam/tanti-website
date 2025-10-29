"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

/**
 * Solutions Page with Modern Hover Effects
 * 
 * HOVER EFFECTS CONFIGURATION:
 * 
 * 1. Card Scale Animation (whileHover={{ scale: 1.05, y: -8 }}):
 *    - Adjust scale value: Change 1.05 to 1.03 (subtle) or 1.08 (dramatic)
 *    - Adjust y value: Change -8 to -4 (less lift) or -12 (more lift)
 *    - Located in: <motion.div whileHover={{ scale: X, y: Y }} />
 * 
 * 2. Image/Icon Glow Effect (hover:scale-110):
 *    - Change scale-110 to scale-105 (subtle) or scale-125 (dramatic)
 *    - Speed: transition-transform duration-500 → change to duration-300 (faster) or duration-700 (slower)
 *    - Located in: <div className="hover:scale-110 transition-transform duration-X" />
 * 
 * 3. Glow Shadow Intensity (boxShadow changes on hover):
 *    - Current: 0.5 to 0.8 opacity on hover
 *    - Adjust rgba opacity: Change 0.8 to 0.6 (subtle) or 1.0 (intense)
 *    - Adjust radius: Change 40px to 30px (closer) or 60px (spread out)
 *    - Located in: onMouseEnter/onMouseLeave style.boxShadow
 * 
 * 4. Border Glow (border-blue-600/50):
 *    - Change /50 to /30 for subtle or /80 for strong
 *    - Change color: border-purple-600/50, border-green-600/50, etc.
 *    - Located in: <motion.div className="border-blue-600/X" />
 * 
 * 5. Animation Speed:
 *    - Card transition: duration-300 → change to duration-200 (fast) or duration-500 (slow)
 *    - Glow transition: duration-300 → adjust in onMouseEnter/onMouseLeave
 * 
 * ALL EFFECTS:
 * - Card lift: translate-y-2 on hover (8px lift)
 * - Card scale: scale: 1.05 (5% larger on hover) via Framer Motion
 * - Icon glow: scale-110 (10% larger on hover)
 * - Shadow intensity: opacity 0.5 → 0.8 on hover
 * - Border glow: stronger blue border on hover
 * - Smooth transitions: 300ms for all effects
 */
export default function SolutionsPage() {
  // State for showing different information panels
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

  // Scroll container reference
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      console.log('Scrolling left')
      scrollContainerRef.current.scrollBy({
        left: -344, // 320px card width + 24px gap
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      console.log('Scrolling right')
      scrollContainerRef.current.scrollBy({
        left: 344, // 320px card width + 24px gap
        behavior: 'smooth'
      })
    }
  }

  // Debug scroll container dimensions
  useEffect(() => {
    if (scrollContainerRef.current) {
      console.log('Scroll container dimensions:', {
        scrollWidth: scrollContainerRef.current.scrollWidth,
        clientWidth: scrollContainerRef.current.clientWidth,
        scrollLeft: scrollContainerRef.current.scrollLeft
      })
    }
  }, [])

  const handleServiceClick = (serviceId: string, item: string) => {
    console.log('handleServiceClick called:', { serviceId, item })
    
    // Handle toggle behavior for each service
    if (serviceId === "residential") {
      if (item === "Wired Lighting Automation") {
        setShowKNXInfo(!showKNXInfo)
        setShowWirelessInfo(false) // Hide other info when showing KNX
      } else if (item === "Wireless Lighting Automation") {
        setShowWirelessInfo(!showWirelessInfo)
        setShowKNXInfo(false) // Hide other info when showing Wireless
      }
    } else if (serviceId === "commercial") {
      if (item === "LMS") {
        setShowLMSInfo(!showLMSInfo)
        setShowBMSInfo(false)
        setShowEmergencyExitInfo(false)
      } else if (item === "BMS Control") {
        setShowBMSInfo(!showBMSInfo)
        setShowLMSInfo(false)
        setShowEmergencyExitInfo(false)
      } else if (item === "Emergency Exit Signage Lighting") {
        setShowEmergencyExitInfo(!showEmergencyExitInfo)
        setShowLMSInfo(false)
        setShowBMSInfo(false)
      }
    } else if (serviceId === "security") {
      if (item === "Intrusion Alarm") {
        setShowIntrusionAlarmInfo(!showIntrusionAlarmInfo)
        setShowVideoDoorPhoneInfo(false)
        setShowIPCCTVInfo(false)
        setShowAccessControlInfo(false)
        setShowMotorisedShuttersInfo(false)
      } else if (item === "Video Door Phone") {
        setShowVideoDoorPhoneInfo(!showVideoDoorPhoneInfo)
        setShowIntrusionAlarmInfo(false)
        setShowIPCCTVInfo(false)
        setShowAccessControlInfo(false)
        setShowMotorisedShuttersInfo(false)
      } else if (item === "IP CCTV") {
        setShowIPCCTVInfo(!showIPCCTVInfo)
        setShowIntrusionAlarmInfo(false)
        setShowVideoDoorPhoneInfo(false)
        setShowAccessControlInfo(false)
        setShowMotorisedShuttersInfo(false)
      } else if (item === "Access Control") {
        setShowAccessControlInfo(!showAccessControlInfo)
        setShowIntrusionAlarmInfo(false)
        setShowVideoDoorPhoneInfo(false)
        setShowIPCCTVInfo(false)
        setShowMotorisedShuttersInfo(false)
      } else if (item === "Motorised Shutters") {
        setShowMotorisedShuttersInfo(!showMotorisedShuttersInfo)
        setShowIntrusionAlarmInfo(false)
        setShowVideoDoorPhoneInfo(false)
        setShowIPCCTVInfo(false)
        setShowAccessControlInfo(false)
      }
    } else if (serviceId === "home-entertainment") {
      if (item === "Zonal Audio") {
        setShowZonalAudioInfo(!showZonalAudioInfo)
        setShowHomeTheatreInfo(false)
      } else if (item === "Home Theatre") {
        setShowHomeTheatreInfo(!showHomeTheatreInfo)
        setShowZonalAudioInfo(false)
      }
    } else if (serviceId === "commercial-av") {
      if (item === "Conference Room") {
        setShowConferenceRoomInfo(!showConferenceRoomInfo)
        setShowPASystemInfo(false)
        setShowLEDVideoWallInfo(false)
        setShowTVOverIPInfo(false)
      } else if (item === "PA System") {
        setShowPASystemInfo(!showPASystemInfo)
        setShowConferenceRoomInfo(false)
        setShowLEDVideoWallInfo(false)
        setShowTVOverIPInfo(false)
      } else if (item === "LED and Video Wall") {
        setShowLEDVideoWallInfo(!showLEDVideoWallInfo)
        setShowConferenceRoomInfo(false)
        setShowPASystemInfo(false)
        setShowTVOverIPInfo(false)
      } else if (item === "TV Over IP") {
        setShowTVOverIPInfo(!showTVOverIPInfo)
        setShowConferenceRoomInfo(false)
        setShowPASystemInfo(false)
        setShowLEDVideoWallInfo(false)
      }
    } else if (serviceId === "energy-management") {
      if (item === "ABB Ability") {
        setShowABBAbilityInfo(!showABBAbilityInfo)
      }
    } else if (serviceId === "central-management") {
      if (item === "RTI Corp") {
        setShowRTICorpInfo(!showRTICorpInfo)
        setShowNETXAutomationInfo(false)
        setShowLogicMachineInfo(false)
      } else if (item === "NETX Automation") {
        setShowNETXAutomationInfo(!showNETXAutomationInfo)
        setShowRTICorpInfo(false)
        setShowLogicMachineInfo(false)
      } else if (item === "Logic Machine") {
        setShowLogicMachineInfo(!showLogicMachineInfo)
        setShowRTICorpInfo(false)
        setShowNETXAutomationInfo(false)
      }
    }
  }

  const services = [
    {
      id: "residential",
      title: "Residential",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      ),
      services: ["Wired Lighting Automation", "Wireless Lighting Automation"],
      cta: "More Residential →"
    },
    {
      id: "commercial",
      title: "Commercial",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      services: ["LMS", "BMS Control", "Emergency Exit Signage Lighting"],
      cta: "More Commercial →"
    },
    {
      id: "security",
      title: "Security",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <circle cx="12" cy="16" r="1" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      services: ["Intrusion Alarm", "Video Door Phone", "IP CCTV", "Access Control", "Motorised Shutters"],
      cta: "More Security →"
    },
    {
      id: "home-entertainment",
      title: "Home Entertainment",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
      services: ["Zonal Audio", "Home Theatre"],
      cta: "More Home Entertainment →"
    },
    {
      id: "commercial-av",
      title: "Commercial AV",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      services: ["Conference Room", "PA System", "LED and Video Wall", "TV Over IP"],
      cta: "More Commercial AV →"
    },
    {
      id: "energy-management",
      title: "Energy Management",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4m0-7v7m0-7h10a2 2 0 0 1 2 2v3c0 1.1-.9 2-2 2h-4m0-7v7" />
        </svg>
      ),
      services: ["ABB Ability"],
      cta: "More Energy Management →"
    },
    {
      id: "central-management",
      title: "Central Management Server",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      services: ["RTI Corp", "NETX Automation", "Logic Machine"],
      cta: "More Central Management →"
    }
  ]

  return (
    <div className="min-h-screen solutions-page-container pt-5" style={{ backgroundColor: '#E0F2F7', overflowX: 'auto' }}>
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6">
          Solutions
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto px-4">
          Comprehensive automation solutions for residential, commercial, and security needs
        </p>
      </div>

      {/* Services Grid with Horizontal Scroll Snap */}
      <div className="w-full max-w-none">
        <div className="relative">
          {/* Left Scroll Indicator */}
          <div 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-16 h-full flex items-center justify-start cursor-pointer transition-colors"
            onClick={scrollLeft}
          >
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>

          {/* Right Scroll Indicator */}
          <div 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-16 h-full flex items-center justify-end cursor-pointer transition-colors"
            onClick={scrollRight}
          >
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-16"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none', 
              width: '100%', 
              maxWidth: '100vw',
              overflowX: 'auto',
              overflowY: 'hidden'
            }}
          >
            <div className="flex gap-6" style={{ width: 'max-content', minWidth: 'fit-content' }}>
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className="w-80 flex-shrink-0 snap-center bg-white p-6 h-[650px] flex flex-col border border-blue-600/50 relative transition-all duration-300 ease-out rounded-lg cursor-pointer group overflow-hidden"
                  style={{
                    boxShadow: '0 -8px 20px -4px rgba(29, 78, 216, 0.5), 0 8px 20px -4px rgba(29, 78, 216, 0.5), inset 0 -1px 0 rgba(29, 78, 216, 0.4), inset 0 1px 0 rgba(29, 78, 216, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 -16px 40px -4px rgba(29, 78, 216, 0.8), 0 16px 40px -4px rgba(29, 78, 216, 0.8), 0 8px 16px rgba(0, 0, 0, 0.15), inset 0 -1px 0 rgba(29, 78, 216, 0.6), inset 0 1px 0 rgba(29, 78, 216, 0.6)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 -8px 20px -4px rgba(29, 78, 216, 0.5), 0 8px 20px -4px rgba(29, 78, 216, 0.5), inset 0 -1px 0 rgba(29, 78, 216, 0.4), inset 0 1px 0 rgba(29, 78, 216, 0.4)'
                  }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Decorative Images at the Top - Always Visible */}
                  <div className="mb-6 relative h-48 overflow-hidden rounded-lg z-10 flex-shrink-0 bg-gray-100" style={{ position: 'relative', isolation: 'isolate' }}>
                    {/* Decorative Image for Residential Card */}
                    {service.id === "residential" && (
                      <div className="absolute inset-0 w-full h-full bg-green-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 opacity-100 z-20">
                        <svg className="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9,22 9,12 15,12 15,22" />
                        </svg>
                      </div>
                    )}

                    {/* Decorative Image for Commercial Card */}
                    {service.id === "commercial" && (
                      <div className="absolute inset-0 w-full h-full bg-blue-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 opacity-100 z-20">
                        <svg className="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                    )}

                    {/* Decorative Image for Security Card */}
                    {service.id === "security" && (
                      <div className="absolute inset-0 w-full h-full bg-red-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 opacity-100 z-20">
                        <svg className="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <circle cx="12" cy="16" r="1" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      </div>
                    )}

                    {/* Decorative Image for Home Entertainment Card */}
                    {service.id === "home-entertainment" && (
                      <div className="absolute inset-0 w-full h-full bg-purple-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 opacity-100 z-20">
                        <svg className="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <polygon points="23 7 16 12 23 17 23 7" />
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                      </div>
                    )}

                    {/* Decorative Image for Commercial AV Card */}
                    {service.id === "commercial-av" && (
                      <div className="absolute inset-0 w-full h-full bg-teal-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 opacity-100 z-20">
                        <svg className="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                    )}

                    {/* Decorative Image for Energy Management Card */}
                    {service.id === "energy-management" && (
                      <div className="absolute inset-0 w-full h-full bg-yellow-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 opacity-100 z-20">
                        <svg className="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4m0-7v7m0-7h10a2 2 0 0 1 2 2v3c0 1.1-.9 2-2 2h-4m0-7v7" />
                        </svg>
                      </div>
                    )}

                    {/* Decorative Image for Central Management Server Card */}
                    {service.id === "central-management" && (
                      <div className="absolute inset-0 w-full h-full bg-indigo-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 opacity-100 z-20">
                        <svg className="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Service Icon and Title */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center text-blue-600 mr-3 transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-700 transition-colors duration-300 group-hover:text-blue-600">
                      {service.title}
                    </h3>
                  </div>

                  {/* Services List */}
                  <div className="mb-4">
                    <ul className="space-y-3">
                      {service.services.map((item, index) => (
                        <li 
                          key={index}
                          className="text-blue-700 hover:text-blue-600 cursor-pointer transition-colors duration-200 flex items-center"
                          onClick={() => handleServiceClick(service.id, item)}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dynamic Content Area */}
                  <div className="flex-1 overflow-y-auto min-h-0">
                    {/* KNX Information */}
                    {showKNXInfo && service.id === "residential" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">KNX Solution</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          KNX (Konnex) is a standardized communication protocol used for building automation and control. In KNX systems, central wiring is a fundamental concept that forms the backbone of the entire automation infrastructure.
                        </p>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                            <span className="text-sm text-gray-300">Switching</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                            <span className="text-sm text-gray-300">RGB</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                            <span className="text-sm text-gray-300">Dimming</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                            <span className="text-sm text-gray-300">Time</span>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-300 my-4"></div>
                        
                        <h4 className="text-lg font-semibold text-white mb-3">KNX Retrofit Solution</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          A KNX retrofit solution refers to the process of upgrading an existing building's electrical system to automation system. by which you can control and manage your home seamlessly from anywhere without pulling wires to central DB. Just loop KNX cable to control boxes.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* Wireless Information */}
                    {showWirelessInfo && service.id === "residential" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">Retrofit IoT</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Wireless IoT solutions for smart home automation with easy installation and flexible control.
                        </p>
                        
                        <h4 className="text-lg font-semibold text-white mb-3">Flush Mount</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Sleek flush mount solutions for modern homes with wireless connectivity and intuitive control.
                        </p>
                        
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                            <span>Zigbee</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                            <span>WiFi</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                            <span>Bluetooth</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* LMS Information */}
                    {showLMSInfo && service.id === "commercial" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">Lighting Management System</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          KNX-based Lighting Management System (LMS) with DALI Based Solutions and Day Light Harvesting for optimal energy efficiency and intelligent lighting control.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* BMS Information */}
                    {showBMSInfo && service.id === "commercial" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">Building Management System</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Comprehensive Building Management System (BMS) for integrated control of HVAC, lighting, security, and energy management. Companies: ABB Cylon, NETX Automation.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* Emergency Exit Information */}
                    {showEmergencyExitInfo && service.id === "commercial" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">Emergency Exit Signage Lighting</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Critical safety lighting systems for emergency exits with battery backup and compliance with safety regulations.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* Intrusion Alarm Information */}
                    {showIntrusionAlarmInfo && service.id === "security" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">Intrusion Alarm</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Advanced intrusion detection systems with motion sensors, door/window contacts, and 24/7 monitoring capabilities.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* Video Door Phone Information */}
                    {showVideoDoorPhoneInfo && service.id === "security" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">Video Door Phone</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Smart video door phone systems with HD cameras, two-way audio, and mobile app integration for remote access control.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* IP CCTV Information */}
                    {showIPCCTVInfo && service.id === "security" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">IP CCTV</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          High-definition IP surveillance systems with advanced features including:
                        </p>
                        <div className="space-y-2 text-sm text-gray-300 mb-4">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                            <span>Face Recognition</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                            <span>Intrusion Detection</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                            <span>Number Plate Reading</span>
                          </div>
                        </div>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* Access Control Information */}
                    {showAccessControlInfo && service.id === "security" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">Access Control</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Comprehensive access control systems with biometric authentication, card readers, and digital door locks for enhanced security.
                        </p>
                        <div className="space-y-2 text-sm text-gray-300 mb-4">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                            <span>Digital Door Locks</span>
                          </div>
                        </div>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* Motorised Shutters Information */}
                    {showMotorisedShuttersInfo && service.id === "security" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">Motorised Shutters</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Automated shutter systems for enhanced security and convenience with remote control and scheduling capabilities.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* Zonal Audio Information */}
                    {showZonalAudioInfo && service.id === "home-entertainment" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">Zonal Audio</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Multi-zone audio systems allowing independent music control in different areas of your home with wireless connectivity and high-quality sound.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* Home Theatre Information */}
                    {showHomeTheatreInfo && service.id === "home-entertainment" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">Home Theatre</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Complete home theatre solutions with surround sound, 4K projection, and immersive audio-visual experiences for the ultimate entertainment setup.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* Conference Room Information */}
                    {showConferenceRoomInfo && service.id === "commercial-av" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">Conference Room</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Professional conference room solutions with video conferencing, presentation systems, and integrated audio-visual equipment for seamless meetings.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* PA System Information */}
                    {showPASystemInfo && service.id === "commercial-av" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">PA System</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Public address systems for clear communication across large spaces with background music capabilities and emergency announcement features.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* LED and Video Wall Information */}
                    {showLEDVideoWallInfo && service.id === "commercial-av" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">LED and Video Wall</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Large format LED displays and video walls for digital signage, presentations, and immersive visual experiences in commercial environments.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* TV Over IP Information */}
                    {showTVOverIPInfo && service.id === "commercial-av" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">TV Over IP</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          IP-based television distribution systems for delivering content to multiple displays across your network with centralized control and management.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* ABB Ability Information */}
                    {showABBAbilityInfo && service.id === "energy-management" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">ABB Ability</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Advanced energy management platform providing real-time monitoring, analytics, and optimization of energy consumption across your facility.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* RTI Corp Information */}
                    {showRTICorpInfo && service.id === "central-management" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">RTI Corp</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Professional control systems and automation solutions for residential and commercial environments with intuitive user interfaces.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* NETX Automation Information */}
                    {showNETXAutomationInfo && service.id === "central-management" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">NETX Automation</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Comprehensive automation solutions integrating building management, security, and energy systems for seamless control and monitoring.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}

                    {/* Logic Machine Information */}
                    {showLogicMachineInfo && service.id === "central-management" && (
                      <div className="p-4 bg-black/60  border border-white/20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <h4 className="text-lg font-semibold text-white mb-3">Logic Machine</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Advanced automation controllers with KNX integration, web-based configuration, and extensive protocol support for complex automation scenarios.
                        </p>
                        <button className="w-full bg-white text-gray-800 px-4 py-2  font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">
                          Know more
                        </button>
                      </div>
                    )}
                  </div>

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
  )
}