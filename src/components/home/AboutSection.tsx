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
      title: "Student-Founded",
      description: "Established by a group of students driven to make a difference in children's lives",
    },
    {
      icon: <Heart size={24} />,
      title: "Holistic Development",
      description: "Empowering children through health, education, and skill development",
    },
    {
      icon: <Eye size={24} />,
      title: "Full Transparency",
      description: "Committed to providing donors feedback on the impact of every contribution",
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
              &quot;Nanhe Kadam&quot; — small steps — represents our driving force: small significant
              steps of deserving children towards a brighter future. We organize health camps,
              education programmes, and talent-building activities in villages across India,
              igniting the hope of a better tomorrow for socially deprived children.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D4A3E] hover:bg-[#3d5f50] text-white font-semibold rounded-full transition-all hover:shadow-lg hover:gap-3"
            >
              More About Us <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Right - Photo & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/insta-health-camp.png"
                alt="Nanhe Kadam Foundation Free Health Checkup Camp"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center gap-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#C4A265]/10"
              >
                <div className="w-10 h-10 bg-[#C4A265]/10 rounded-lg flex items-center justify-center text-[#C4A265] shrink-0">
                  {item.icon}
                </div>
                <h3 className="font-bold text-primary-dark text-sm">{item.title}</h3>
                <p className="text-xs text-text-light leading-snug">{item.description}</p>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
