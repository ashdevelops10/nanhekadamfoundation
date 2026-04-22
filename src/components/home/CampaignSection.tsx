"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Stethoscope, Users, IndianRupee } from "lucide-react";

export default function CampaignSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 bg-[#F4F4F4]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C4A265] font-semibold uppercase tracking-widest text-sm mb-3">Our Flagship Campaign</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D4A3E]">
            Healing <span className="text-[#C4A265]">Miles</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            A mobile healthcare mission bringing free medical care to India&apos;s forgotten villages — one camp at a time.
          </p>
        </motion.div>

        {/* Hero Campaign Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-3xl overflow-hidden bg-white shadow-[0_16px_60px_rgba(45,74,62,0.15)]"
        >
          {/* Image + Overlay */}
          <div className="relative h-80 md:h-[460px] w-full">
            <Image
              src="/images/healing-miles/IMG_4404.jpg"
              alt="Healing Miles — Nanhe Kadam Foundation Free Health Camp"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3529]/95 via-[#2D4A3E]/50 to-transparent" />

            {/* Campaign Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-[#C4A265] font-semibold uppercase tracking-widest text-sm mb-2">Healing India Initiative</p>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                HEALING MILES
              </h3>
              <p className="text-white/80 mt-2 text-lg">
                A Mobile Healthcare Mission for Bharat&apos;s Forgotten Villages
              </p>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8 md:p-12">

            {/* Belief Statement */}
            <blockquote className="border-l-4 border-[#C4A265] pl-6 mb-8">
              <p className="text-xl md:text-2xl font-semibold text-[#2D4A3E] italic leading-relaxed">
                &ldquo;No Indian should suffer or lose dignity simply because healthcare could not reach them.&rdquo;
              </p>
            </blockquote>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Healing Miles is a mobile healthcare initiative designed to bring free, quality medical care directly to the doorsteps
              of underserved communities across India. Instead of waiting for patients to reach hospitals, we travel to them —
              with doctors, medicines, compassion, and hope. Each camp provides free medical consultations, essential medicines,
              basic diagnostics, and preventive health awareness, staffed by experienced medical professionals.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { icon: <IndianRupee size={20} />, label: "Monthly Budget", value: "₹11.55 Lakh" },
                { icon: <MapPin size={20} />, label: "Coverage", value: "Pan-India Route" },
                { icon: <Stethoscope size={20} />, label: "Model", value: "Mobile Health Camps" },
                { icon: <Users size={20} />, label: "Scale", value: "8–10 Villages/Month" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-[#faf6ee] border border-[#C4A265]/20 p-5 text-center"
                >
                  <div className="flex justify-center text-[#C4A265] mb-2">{stat.icon}</div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="font-bold text-[#2D4A3E] text-sm">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/campaigns"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2D4A3E] hover:bg-[#3d5f50] px-8 py-3.5 text-white font-semibold transition-colors"
              >
                Read Full Story <ArrowRight size={18} />
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C4A265] hover:bg-[#b89555] px-8 py-3.5 text-[#2D4A3E] font-bold transition-colors"
              >
                Donate to Healing Miles
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
