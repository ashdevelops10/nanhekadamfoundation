"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, UtensilsCrossed, Droplets, Briefcase, Monitor, BookOpen, Stethoscope, Trophy } from "lucide-react";
import { type ReactNode } from "react";

const programs: { title: string; description: string; status: string; statusLabel: string; icon: ReactNode; slug: string; impact: string }[] = [
  {
    title: "Nanhe Kadam Scholarship Fund",
    description: "Providing promising and underprivileged students the opportunity for higher education through merit-based scholarships. We cover tuition, books, uniforms, and mentorship.",
    status: "active",
    statusLabel: "Donate Now",
    icon: <GraduationCap size={24} />,
    slug: "scholarship-fund",
    impact: "200+ scholarships awarded",
  },
  {
    title: "Mid-Day Meal Program",
    description: "Serving 500+ children a nutritious, balanced meal every school day. Good nutrition is the foundation of effective learning.",
    status: "active",
    statusLabel: "Donate Now",
    icon: <UtensilsCrossed size={24} />,
    slug: "mid-day-meal",
    impact: "500+ meals served daily",
  },
  {
    title: "Clean Water Initiative",
    description: "Installing water purification systems and bore wells to provide clean drinking water to schools and surrounding communities.",
    status: "active",
    statusLabel: "Donate Now",
    icon: <Droplets size={24} />,
    slug: "clean-water",
    impact: "8 systems installed",
  },
  {
    title: "Women Empowerment Workshop",
    description: "Skill development workshops for mothers — from tailoring and handicrafts to financial literacy — enabling them to support their families.",
    status: "active",
    statusLabel: "Join Now",
    icon: <Briefcase size={24} />,
    slug: "women-empowerment",
    impact: "150+ women trained",
  },
  {
    title: "Digital Literacy Program",
    description: "Teaching children essential computer skills, coding basics, and internet literacy to prepare them for the opportunities of the modern world.",
    status: "active",
    statusLabel: "Donate Now",
    icon: <Monitor size={24} />,
    slug: "digital-literacy",
    impact: "3 computer labs built",
  },
  {
    title: "Community Library",
    description: "Establishing well-stocked libraries in rural areas with books in Hindi, English, and regional languages to promote reading and self-learning.",
    status: "completed",
    statusLabel: "Completed",
    icon: <BookOpen size={24} />,
    slug: "community-library",
    impact: "5,000+ books distributed",
  },
  {
    title: "Health Check-up Camps",
    description: "Regular health screenings, dental check-ups, and eye exams for children at all our centers. Early detection saves lives.",
    status: "active",
    statusLabel: "Donate Now",
    icon: <Stethoscope size={24} />,
    slug: "health-checkups",
    impact: "1,200+ children screened",
  },
  {
    title: "Sports & Recreation",
    description: "Organizing sports events, art workshops, and cultural programs to promote holistic development and joyful childhoods.",
    status: "active",
    statusLabel: "Join Now",
    icon: <Trophy size={24} />,
    slug: "sports-recreation",
    impact: "Annual sports day for 800+ kids",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-[#1e3529] via-[#2D4A3E] to-[#3d5f50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Comprehensive programs designed to nurture every aspect of a child&apos;s development.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="block group h-full">
                  <div className="h-full bg-white border border-[#C4A265]/10 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#2D4A3E]/10 rounded-xl flex items-center justify-center text-[#2D4A3E]">
                        {program.icon}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          program.status === "active"
                            ? "bg-[#C4A265]/10 text-[#C4A265]"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {program.statusLabel}
                      </span>
                    </div>
                    <h3 className="font-bold text-primary-dark text-xl mb-3 group-hover:text-[#C4A265] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-text-light leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#2D4A3E] bg-[#2D4A3E]/5 px-3 py-1 rounded-full">
                        {program.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
