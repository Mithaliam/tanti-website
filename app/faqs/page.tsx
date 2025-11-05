"use client"

import { useState } from "react"

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is Home Automation?",
    answer: "Home Automation refers to the integration of technology and smart devices to control and automate various aspects of a household. Tanti Automatics plays a crucial role in this field by providing innovative solutions that enhance the convenience, efficiency, and security of homes.\n\nWith Tanti Automatics, homeowners can seamlessly connect and control a variety of devices and systems, such as lighting, heating, ventilation, air conditioning (HVAC), security cameras, door locks, and more. The automation process involves the use of sensors, actuators, and communication technologies to create a network that allows these devices to communicate and respond to predefined commands.\n\nTanti Automatics enables users to manage their home environment remotely through smartphones, tablets, or voice-controlled assistants. For example, users can adjust the thermostat, turn off lights, or even lock/unlock doors from anywhere with an an internet connection. This level of control not only enhances comfort but also contributes to energy efficiency and cost savings.\n\nIn addition to convenience, Tanti Automatics plays a crucial role in enhancing home security. Automated security systems can include features like motion sensors, door/window sensors, and surveillance cameras, all of which can be monitored and controlled remotely. This helps homeowners keep an eye on their property and respond quickly to potential security threats.\n\nOverall, Tanti Automatics is at the forefront of the Home Automation revolution, providing solutions that make homes smarter, more energy-efficient, and secure, ultimately improving the quality of life for homeowners."
  },
  {
    id: 2,
    question: "What aspects of my home can I automate?",
    answer: "Virtually every aspect! Can automate various aspects of your home, including lighting, heating and cooling systems, security cameras, door locks, window blinds, and even appliances. Automation allows you to control and manage these elements remotely through smart devices or voice commands, enhancing convenience, energy efficiency, and overall home security."
  },
  {
    id: 3,
    question: "What are the reasons to consider automating my home?",
    answer: "There are several compelling reasons to consider automating your home:\n\n**Convenience:** Home automation allows you to control various aspects of your home with ease. You can automate tasks such as adjusting lighting, thermostats, and security systems, providing a more convenient and streamlined lifestyle.\n\n**Energy Efficiency:** Smart home devices can help optimize energy consumption by allowing you to monitor and control energy usage. Automated thermostats, lighting systems, and smart appliances enable you to make informed decisions to reduce energy waste and lower utility bills.\n\n**Security:** Home automation enhances the security of your home. Smart security systems, including cameras, motion sensors, and smart locks, enable remote monitoring and control, offering peace of mind and real-time alerts in case of any suspicious activity.\n\n**Customization:** Automation allows you to tailor your home environment to your preferences. You can create personalized scenes and schedules for different activities, adjusting lighting, temperature, and other parameters to suit your mood or daily routines.\n\n**Integration and Compatibility:** Most smart home devices are designed to work seamlessly together, creating a connected ecosystem. This integration enables centralized control through a single app or voice commands, making it easy to manage multiple devices from different manufacturers.\n\n**Increased Home Value:** A home with integrated automation features can be more attractive to potential buyers. Smart home technology is becoming increasingly popular, and a well-equipped automated home can contribute to an enhanced resale value.\n\n**Accessibility:** Home automation provides greater accessibility for individuals with mobility challenges or disabilities. Smart devices can be controlled remotely, offering independence and ease of use for people with diverse needs.\n\n**Entertainment:** Automation extends to home entertainment systems, allowing you to control audio, video, and gaming experiences effortlessly. Integration with streaming services and voice-activated controls enhances the overall entertainment experience.\n\n**Peace of Mind:** Knowing that your home is secure and that you can monitor and control various aspects remotely provides a sense of peace and assurance, especially when away from home.\n\n**Future-Proofing:** Investing in home automation positions your home for future technological advancements. As technology evolves, your smart home system can be updated to incorporate the latest features and capabilities.\n\nIn summary, home automation offers a myriad of benefits ranging from convenience and energy efficiency to enhanced security and customization, making it a worthwhile consideration for modern homeowners."
  },
  {
    id: 4,
    question: "Are you the manufacturer of these smart devices?",
    answer: "No, we serve as facilitators for smart home solutions; we do not manufacture the devices."
  },
  {
    id: 5,
    question: "What is the primary role or function of your organization?",
    answer: "We source devices from leading home automation brands globally, conduct quality testing, and offer guidance on their installation in your home. Additionally, our services include lifelong support and professional installation for all products bought from our store."
  },
  {
    id: 6,
    question: "Is it simple to operate a home automation system?",
    answer: "Yes. We only have top‑notch brands, so you'll have super easy and smooth experiences with our products. We promise to help you get started quickly and easily."
  },
  {
    id: 7,
    question: "What should I do if I don't own a smartphone?",
    answer: "No worries at all. While many home automation systems can still function without a smartphone, the overall experience may be limited without the ability to receive instant notifications or control things remotely.\n\nWe strongly suggest getting a smartphone if you don't have one yet. You don't need anything fancy; a mid-range iOS or Android phone will work just fine."
  },
  {
    id: 8,
    question: "How does the home automation system work?",
    answer: "Various home automation systems use different protocols. Popular ones include KNX, Zigbee, WiFi, Z-Wave, EnOcean, Thread, and RF. Some wired systems rely on the Cat3 cable. At Tanti Automation, we believe in keeping your home beautiful. Our home automation is designed to work mainly on KNX protocol and wireless on a need basis, customizing the solutions user needs.\n\nFor more information on the home automation technologies supported by Tanti Automation, check out our home automation section."
  },
  {
    id: 9,
    question: "Will the system function without an Internet connection?",
    answer: "We recognize that this is a significant concern, especially when it comes to purchasing a security kit. That's why we support security kits that can activate a local alarm even if there is no active Internet connection (operated through local wired or wireless signals which are not dependent on the internet).\n\nAs an additional feature, we also offer an auto-failover router that switches to a wireless alternative automatically when your primary Internet connection becomes inactive"
  },
  {
    id: 10,
    question: "Is it necessary to keep my switch turned on at all times for wireless operation?",
    answer: "We work on different technologies, the products we use work seamlessly with apps, cloud and voice control devices, the devices we use replace conventional switches and electromechanical relays in built, so you operate via switch or via app, the switches actually break and make electrical contacts making this question irrelevant. To directly answer, No, no need to keep them on."
  },
  {
    id: 11,
    question: "What are the benefits of buying devices from Tanti Automation?",
    answer: "Tanti is been in the building automation industry for the past 15 years and has successfully completed 500+ projects, with our vast experience and in-depth knowledge in the field, we offer\n\n- Turnkey solutions from design to execution to maintenance\n\n- Have a dedicated team to oversee the entire process for each function like execution, design, logistics, etc\n\n- Customer gets a dedicated relationship manager who keeps the customer updated with all the activities\n\n- The understanding of intricacies and detailing makes our deliveries more accurate and reliable\n\n- We work with most reliable brands which have very quality\n\nWhen you buy from Tanti Automation, you receive\n\n- Personalized setup and scene configuration\n\n- Expert Consultation\n\n- Products from some of the most reputed brands\n\n- Free Lifetime Support\n\nTo learn more about why we offer the best automation experience in India, visit our Tanti Automation Advantage page."
  },
  {
    id: 12,
    question: "What occurs if the devices do not function as advertised?",
    answer: "We offer an immediate replacement or refund if the device has a manufacturing defect. If it's an integration issue, we ensure to reconfigure the setup and get your system running smoothly again. In either scenario, we ensure it's a win-win for you."
  },
  {
    id: 13,
    question: "Are there any guarantees or warranties provided for the products?",
    answer: "We provide one year on site warranty 1 year by default with minimal add on price we can extend upto 5 years."
  },
  {
    id: 14,
    question: "What do I do if I have trouble using the system?",
    answer: "All the troubleshooting mechanisms would be explained while handing over the project. Moreover, we have a dedicated customer care number for resolving issues."
  },
  {
    id: 15,
    question: "Can I obtain a system on a casual or as-needed basis?",
    answer: "Yes. If you're interested in using the device for a specific duration, just reach out to us, and we'll be glad to assist you."
  }
]

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <section className="bg-white" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px" }}>
      {/* Hero banner */}
      <div className="w-full bg-gradient-to-r from-[#2b6de0] to-[#3ea2ff] relative overflow-hidden">
        {/* subtle particles-like dots using radial gradients */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 relative">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center">FAQs</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <h1 className="sr-only">Frequently Asked Questions</h1>
        </header>

        <div className="space-y-0">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className={`w-full py-2 px-3 flex items-center justify-between text-left transition-colors ${
                  openItems.includes(item.id)
                    ? "bg-[#4066e6] text-white shadow-md"
                    : "hover:bg-gray-50"
                }`}
                style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px" }}
              >
                 <span className="pr-8">
                   <span style={{ 
                     fontFamily: "'Roboto', sans-serif", 
                     fontSize: "16px", 
                     color: openItems.includes(item.id) ? "#ffffff" : "#333333",
                     fontWeight: "normal"
                   }}>
                     {item.id}.
                   </span>
                   <span style={{ 
                     fontFamily: "'Roboto', sans-serif", 
                     fontSize: "16px", 
                     color: openItems.includes(item.id) ? "#ffffff" : "#555555",
                     fontWeight: "normal"
                   }}>
                     {" "}{item.question}
                   </span>
                 </span>
                <span className={`text-2xl font-light flex-shrink-0 ${
                  openItems.includes(item.id) ? "text-white" : "text-gray-600"
                }`}>
                  {openItems.includes(item.id) ? "−" : "+"}
                </span>
              </button>
              {openItems.includes(item.id) && (
                <div className="px-4 pb-6" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px" }}>
                  {item.answer.split('\n\n').map((paragraph, index) => {
                     // Check if paragraph starts with bold text (markdown style **text:**)
                     const boldMatch = paragraph.match(/^\*\*(.+?):\*\*/);
                     if (boldMatch) {
                       const boldText = boldMatch[1];
                       const restOfText = paragraph.substring(boldMatch[0].length).trim();
                       return (
                         <p key={index} className="text-sm text-gray-700 leading-relaxed mb-4 last:mb-0" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px" }}>
                           <strong>{boldText}:</strong> {restOfText}
                         </p>
                       );
                     }
                     return (
                       <p key={index} className="text-sm text-gray-700 leading-relaxed mb-4 last:mb-0" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px" }}>
                         {paragraph}
                       </p>
                     );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16" />
      </div>
    </section>
  )
}

