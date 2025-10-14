"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function ModernPricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Residential",
      description: "Transform your home into a smart haven",
      price: "Custom",
      features: [
        "Wired Lighting Automation (KNX)",
        "Wireless Lighting Automation (IoT)",
        "Smart Switches & Controls",
        "Home Entertainment Systems",
        "Video Door Phone",
      ],
      cta: "Get Quote",
      popular: false,
    },
    {
      name: "Commercial",
      description: "Smart and energy efficient buildings",
      price: "Custom",
      features: [
        "Lighting Management System (LMS)",
        "Building Management System (BMS)",
        "Emergency Exit Signage Lighting",
        "Energy Optimization Solutions",
        "Commercial AV Solutions",
        "Conference Room Setups",
        "24/7 Support",
      ],
      cta: "Get Quote",
      popular: true,
    },
    {
      name: "Security",
      description: "Comprehensive security solutions",
      price: "Custom",
      features: [
        "IP CCTV with Face Recognition",
        "Intrusion Alarm Systems",
        "Access Control & Digital Locks",
        "Video Door Phone Systems",
        "Motorized Shutters",
        "Remote Monitoring",
      ],
      cta: "Get Quote",
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2
            id="pricing-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            Our Service Packages
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Customized automation solutions tailored to your specific needs and requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
              role="listitem"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <div className="bg-gradient-to-r from-red-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-50">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full bg-white/5 backdrop-blur-sm border rounded-2xl overflow-hidden transition-transform ${
                  plan.popular ? "border-amber-500" : "border-white/10"
                }`}
              >
                <div className="p-5 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-5 sm:mb-6">
                    {plan.description}
                  </p>

                  <div
                    className="flex items-baseline mb-5 sm:mb-6"
                    aria-label={`${plan.price} dollars per ${
                      annual ? "year" : "month"
                    }`}
                  >
                    <span className="text-2xl sm:text-4xl font-bold">
                      ${plan.price}
                    </span>
                    <span className="text-white/70 ml-2 text-sm">
                      /{annual ? "year" : "month"}
                    </span>
                  </div>

                  <Button
                    className={`w-full mb-6 sm:mb-8 py-2 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none ${
                      plan.popular
                        ? "bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                    aria-label={`${plan.cta} with the ${plan.name} plan`}
                  >
                    {plan.cta}
                  </Button>

                  <ul
                    className="space-y-3 sm:space-y-4"
                    aria-label={`${plan.name} plan features`}
                  >
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 sm:gap-3"
                      >
                        <div
                          className="flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-to-r from-red-500 to-amber-500 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                        </div>
                        <span className="text-white/80 text-sm sm:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-white/70 text-sm sm:text-base">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
