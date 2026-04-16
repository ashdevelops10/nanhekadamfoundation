"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3529] via-[#2D4A3E] to-[#3d5f50]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTMwVjBoLTEydjRoMTJ6TTI0IDI0aDEydi0ySDI0djJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#C4A265]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#C4A265]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-5 py-2 bg-[#C4A265]/15 backdrop-blur-sm rounded-full text-[#C4A265] text-sm font-medium mb-6 border border-[#C4A265]/30">
            🌱 Small Steps, Big Change
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Empowering Children,{" "}
          <span className="text-[#C4A265]">Transforming Lives</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We support underprivileged children across India through education, nutrition,
          and community development. Every small step — every nanhe kadam — leads to a
          brighter tomorrow.
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
              <span>Subscribe to our newsletter</span>
              <span className="text-[#2D4A3E]/40">•</span>
              <span>Join our volunteer program</span>
              <span className="text-[#2D4A3E]/40">•</span>
              <span>Support a child&apos;s education</span>
              <span className="text-[#2D4A3E]/40">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-[#C4A265]/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-[#C4A265]/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
