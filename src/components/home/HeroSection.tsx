"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32">
      {/* Background Image */}
      <Image
        src="/images/event-4.jpg"
        alt="Nanhe Kadam Foundation - Joining hands for effective humanitarian response"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3529]/80 via-[#2D4A3E]/70 to-[#3d5f50]/65" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pb-20 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-5 py-2 bg-[#C4A265]/15 backdrop-blur-sm rounded-full text-[#C4A265] text-sm font-medium mb-6 border border-[#C4A265]/30">
            Educate &bull; Heal &bull; Empower
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Kids Can Skip Meals,{" "}
          <span className="text-[#C4A265]">Not Dreams</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Bringing hope to every child in need. Every small step — every nanhe kadam — 
          is a stepping stone to realize their dreams and ignite the hope of a better 
          tomorrow. Be the reason they smile!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/get-involved"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all hover:shadow-xl text-base border border-white/20"
          >
            What You Can Do
          </Link>
          <Link
            href="/donate"
            className="px-8 py-4 bg-[#C4A265] hover:bg-[#d4b87a] text-[#2D4A3E] font-bold rounded-full transition-all hover:shadow-xl hover:scale-105 text-base"
          >
            Donate Now
          </Link>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#C4A265] py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="text-[#2D4A3E] font-medium text-sm flex items-center gap-8">
              <span>Educate • Heal • Empower</span>
              <span className="text-[#2D4A3E]/40">•</span>
              <span>Be the reason they smile!</span>
              <span className="text-[#2D4A3E]/40">•</span>
              <span>Kids can skip meals, not dreams</span>
              <span className="text-[#2D4A3E]/40">•</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
