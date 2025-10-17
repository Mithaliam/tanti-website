"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Integrations() {
  const stories = [
    {
      title: "ABB AIC",
      location: "Bengaluru",
      image: "/tanti/ABB_AIC/ABB_AIC_Cover.jpg",
      description: "Complete KNX automation system for luxury residential project"
    },
    {
      title: "Javaji",
      location: "Mysore", 
      image: "/tanti/Javaji/Javaji_cover.jpg",
      description: "Smart home automation with advanced switching solutions"
    },
    {
      title: "Shivakumar",
      location: "Tumkur",
      image: "/tanti/Shivakumar/Shivakumar_Cover.jpg", 
      description: "Video door phone and security system installation"
    }
  ]

  return (
    <section className="py-12 sm:py-16 relative" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#06b6d4]">Success Stories</h2>
          <p className="text-sm sm:text-base md:text-lg text-black/70 max-w-2xl mx-auto">
            Discover how we've transformed homes and businesses with our automation solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative overflow-hidden rounded-xl bg-white/90 border border-gray-200 backdrop-blur-sm shadow-lg group-hover:shadow-xl h-full flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">{story.title}</h3>
                  <p className="text-amber-400 mb-2">{story.location}</p>
                  <p className="text-black text-sm sm:text-base flex-grow">{story.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 sm:mt-12"
        >
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0">
            View All Success Stories
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
