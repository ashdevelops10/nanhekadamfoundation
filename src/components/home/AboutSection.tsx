"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Heart, Eye } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <TrendingUp size={24} />,
      title: "97% to Projects",
      description: "Of every donation goes directly to our supported programs",
    },
    {
      icon: <Heart size={24} />,
      title: "Self-Sustaining",
      description: "We build projects designed to become self-sufficient over time",
    },
    {
      icon: <Eye size={24} />,
      title: "Full Transparency",
      description: "Visit any of our projects and see the impact firsthand",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-warm" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mt-3 mb-6">
              Nanhe Kadam Foundation
            </h2>
            <p className="text-text-light leading-relaxed mb-6 text-base md:text-lg">
              We help local communities set up and sustain educational projects that are
              embedded in their local environment and can eventually stand on their own.
              From schools to nutrition programs, every initiative is built to last.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D4A3E] hover:bg-[#3d5f50] text-white font-semibold rounded-full transition-all hover:shadow-lg hover:gap-3"
            >
              More About Us <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Right - Cards */}
          <div className="grid gap-4 sm:gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#C4A265]/10"
              >
                <div className="w-12 h-12 bg-[#C4A265]/10 rounded-xl flex items-center justify-center text-[#C4A265] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary-dark text-base">{item.title}</h3>
                  <p className="text-sm text-text-light mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
