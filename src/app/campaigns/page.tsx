"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  HeartPulse,
  IndianRupee,
  MapPin,
  Stethoscope,
  Users,
} from "lucide-react";

const routePlan = [
  { period: "April", region: "Uttarakhand" },
  { period: "May – June", region: "Himachal Pradesh" },
  { period: "July – October", region: "Haryana, Uttar Pradesh, Bihar & Rajasthan" },
  { period: "November – January", region: "Maharashtra, Goa & Southern States" },
  { period: "February – April", region: "Rajasthan" },
];

const team = [
  {
    name: "Dr. Neeraj Tanwar",
    role: "Founder & Lead Physician",
    credentials: "MBBS, Emergency Medicine Specialist, ATLS Certified",
  },
  {
    name: "Dr. Vasundhra",
    role: "Dermatologist",
    credentials: "MBBS, Fellowship in Dermatology",
  },
  {
    name: "Dr. Himanshu Sharma",
    role: "General Physician",
    credentials: "MBBS",
  },
  {
    name: "Ms. Yashi Sehgal",
    role: "Ground Operations Manager",
    credentials: "MBA",
  },
];

const timeline = [
  {
    years: "2019 – 2021",
    description: "Medical camps for school children in rural Rajasthan; COVID-19 food distribution across communities.",
  },
  {
    years: "2021 – 2026",
    description: "Medical camps across Delhi, Chandigarh, Jaipur, Neemrana, Himachal Pradesh, Goa, and Pushkar.",
  },
  {
    years: "2026 onwards",
    description: "Healing Miles — structured mobile healthcare model scaling pan-India with CSR partnerships.",
  },
];

export default function CampaignsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-36 pb-0 md:pt-44">
        <div className="relative h-[420px] md:h-[560px] w-full">
          <Image
            src="/images/healing-miles/IMG_4404.jpg"
            alt="Healing Miles — Nanhe Kadam Foundation Free Health Camp"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3529]/95 via-[#2D4A3E]/60 to-[#1e3529]/40" />

          {/* Badges */}
          <div className="absolute top-6 left-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#C4A265] px-4 py-1.5 text-sm font-bold text-[#2D4A3E] uppercase tracking-wider">
              80G Tax Benefit
            </span>
            <span className="rounded-full bg-red-500 px-4 py-1.5 text-sm font-bold text-white uppercase tracking-wider">
              CSR Opportunity
            </span>
          </div>

          {/* Hero Text */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#C4A265] font-semibold uppercase tracking-widest text-sm mb-3"
            >
              Our Flagship Campaign
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white leading-none"
            >
              HEALING MILES
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl mt-3 max-w-2xl"
            >
              A Mobile Healthcare Mission for Bharat&apos;s Forgotten Villages
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── BELIEF + MISSION ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-[#C4A265] pl-8 mb-14"
          >
            <p className="text-2xl md:text-3xl font-bold text-[#2D4A3E] italic leading-relaxed">
              &ldquo;No Indian should suffer or lose dignity simply because healthcare could not reach them.&rdquo;
            </p>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D4A3E] mb-6">
              Healing India — The Mission
            </h2>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                Millions of families in rural India lack timely access to basic healthcare, leading to preventable suffering and loss of dignity.
                In remote villages, healthcare is not delayed by choice — it is delayed by distance, cost, and lack of access.
              </p>
              <p>
                <strong className="text-[#2D4A3E]">Healing Miles</strong> is a mobile healthcare initiative designed to bring free, quality medical care
                directly to the doorsteps of underserved communities across India. Instead of waiting for patients to reach hospitals,
                we travel to them — with doctors, medicines, compassion, and hope.
              </p>
              <p>
                The initiative operates as a mobile health camp traveling across India, providing free medical consultations, essential medicines,
                basic diagnostics, and preventive health awareness. Each camp is staffed by experienced medical professionals and supported by a
                strong on-ground operations team to ensure continuity, trust, and lasting impact within communities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── KEY STATS ─── */}
      <section className="py-16 bg-[#2D4A3E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <IndianRupee size={28} />, value: "₹11.55 Lakh", label: "Monthly Budget" },
              { icon: <MapPin size={28} />, value: "Pan-India", label: "Coverage Route" },
              { icon: <Stethoscope size={28} />, value: "Mobile Camps", label: "Healthcare Model" },
              { icon: <Users size={28} />, value: "8–10 Villages", label: "Per Month" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white/10 p-6"
              >
                <div className="flex justify-center text-[#C4A265] mb-3">{stat.icon}</div>
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/60 text-sm mt-1 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COVERAGE TIMELINE ─── */}
      <section className="py-20 bg-[#faf6ee]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <Calendar size={28} className="text-[#C4A265]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D4A3E]">Planned Coverage Route</h2>
          </motion.div>

          <div className="space-y-4">
            {routePlan.map((stop, i) => (
              <motion.div
                key={stop.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl bg-white border border-[#C4A265]/20 px-6 py-4 shadow-sm"
              >
                <span className="shrink-0 rounded-full bg-[#2D4A3E] px-4 py-1.5 text-sm font-bold text-[#C4A265] uppercase tracking-wider min-w-[150px] text-center">
                  {stop.period}
                </span>
                <div className="flex items-center gap-2 text-[#2D4A3E] font-semibold text-lg">
                  <MapPin size={18} className="text-[#C4A265] shrink-0" />
                  {stop.region}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-gray-500 text-sm text-center">
            Covering 8–10 villages per month with potential to scale based on support and outcomes.
          </p>
        </div>
      </section>

      {/* ─── CAMP PHOTO + STORY ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/healing-miles/IMG_4292.jpg"
                alt="Nanhe Kadam Foundation Free Health Checkup Camp"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3529]/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white font-semibold text-sm">Free Health Checkup Camp — Nanhe Kadam Foundation</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#C4A265] font-semibold uppercase tracking-widest text-sm mb-3">Our Track Record</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D4A3E] mb-6">
                Proven Impact Since 2019
              </h2>

              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[#C4A265] mt-1.5" />
                      {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-[#C4A265]/30 mt-1" />}
                    </div>
                    <div className="pb-6">
                      <p className="font-bold text-[#2D4A3E] text-sm uppercase tracking-wider mb-1">{item.years}</p>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#C4A265] font-semibold uppercase tracking-widest text-sm mb-3">The People Behind the Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D4A3E]">Our Core Team</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl bg-white border border-[#C4A265]/20 p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#2D4A3E] flex items-center justify-center mb-4">
                  <HeartPulse size={20} className="text-[#C4A265]" />
                </div>
                <h3 className="text-lg font-bold text-[#2D4A3E]">{member.name}</h3>
                <p className="text-[#C4A265] font-semibold text-sm mt-0.5">{member.role}</p>
                <p className="text-gray-500 text-sm mt-2">{member.credentials}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CSR PARTNERSHIP ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#faf6ee] border border-[#C4A265]/25 p-10 md:p-14"
          >
            <p className="text-[#C4A265] font-semibold uppercase tracking-widest text-sm mb-3">CSR Partnership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D4A3E] mb-6">Partner With Us</h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                The estimated cost of running Healing Miles is <strong className="text-[#2D4A3E]">INR 11.55 lakh per month</strong> — 
                covering medical and nursing staff salaries, logistics and travel, medicines, accommodations, and community outreach.
              </p>
              <p>
                Nanhe Kadam Foundation seeks partial or complete CSR funding support from corporate partners to sustain and scale this initiative.
                Healing Miles is fully aligned with <strong className="text-[#2D4A3E]">SDG 3 — Good Health and Well-being</strong>.
              </p>
              <p>
                CSR partners gain strong brand visibility across rural India, authentic social media storytelling, transparent impact reporting,
                and the pride of being part of a mission that restores access, dignity, and hope to communities that need it most.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Monthly Cost", value: "₹11.55 Lakh" },
                { label: "SDG Alignment", value: "SDG 3" },
                { label: "Tax Exemption", value: "80G Certified" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white border border-[#C4A265]/20 p-5 text-center">
                  <p className="text-2xl font-bold text-[#2D4A3E]">{item.value}</p>
                  <p className="text-gray-500 text-sm mt-1 uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2D4A3E] hover:bg-[#3d5f50] px-8 py-3.5 text-white font-semibold transition-colors"
              >
                Donate Now <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#2D4A3E] hover:bg-[#2D4A3E] hover:text-white px-8 py-3.5 text-[#2D4A3E] font-semibold transition-colors"
              >
                Enquire About CSR Partnership
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PHOTO GALLERY ─── */}
      <section className="py-20 bg-[#faf6ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#C4A265] font-semibold uppercase tracking-widest text-sm mb-3">Stories From The Ground</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D4A3E]">Moments From Healing Miles</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Every camp is a story of dignity restored, trust earned, and lives touched. Here&apos;s a glimpse
              from our recent medical outreach across rural India.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "IMG_4267.jpg",
              "IMG_4269.jpg",
              "IMG_4285.jpg",
              "IMG_4286.jpg",
              "IMG_4406.jpg",
              "IMG_4408.jpg",
              "IMG_4411.jpg",
              "IMG_4413.jpg",
              "IMG_4416.jpg",
              "IMG_4423.jpg",
              "IMG_4428.jpg",
              "IMG_4431.jpg",
            ].map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-md group"
              >
                <Image
                  src={`/images/healing-miles/${img}`}
                  alt="Healing Miles health camp moment"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3529]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLOSING QUOTE ─── */}
      <section className="py-24 bg-gradient-to-br from-[#1e3529] via-[#2D4A3E] to-[#3d5f50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C4A265] font-semibold uppercase tracking-widest text-sm mb-6">Our Invitation to You</p>
            <blockquote className="text-3xl md:text-5xl font-bold text-white leading-relaxed">
              &ldquo;We invite you to walk alongside us —<br />
              <span className="text-[#C4A265]">To fund hope.</span>{" "}
              <span className="text-[#C4A265]">To restore dignity.</span>
            </blockquote>
            <p className="text-2xl md:text-3xl font-bold text-white/80 mt-4">
              To help India heal — one village at a time.&rdquo;
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-[#C4A265] hover:bg-[#b89555] px-10 py-4 font-bold text-[#2D4A3E] transition-colors text-lg"
              >
                Support Healing Miles <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 hover:border-white px-10 py-4 font-semibold text-white transition-colors text-lg"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
