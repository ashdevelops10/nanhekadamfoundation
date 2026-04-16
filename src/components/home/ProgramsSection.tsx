"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Nanhe Kadam Scholarship Fund",
    description:
      "Providing promising and underprivileged students the opportunity for higher education through scholarships.",
    status: "active",
    statusLabel: "Donate Now",
    emoji: "🎓",
    slug: "scholarship-fund",
  },
  {
    id: 2,
    title: "Mid-Day Meal Program",
    description:
      "Serving 500+ children a nutritious meal every day to fuel their learning and growth.",
    status: "active",
    statusLabel: "Donate Now",
    emoji: "🍽️",
    slug: "mid-day-meal",
  },
  {
    id: 3,
    title: "Clean Water Initiative",
    description:
      "Installing water purification systems to provide clean drinking water to schools and communities.",
    status: "active",
    statusLabel: "Donate Now",
    emoji: "💧",
    slug: "clean-water",
  },
  {
    id: 4,
    title: "Women Empowerment Workshop",
    description:
      "Skill development workshops for mothers to become self-reliant and support their families.",
    status: "active",
    statusLabel: "Join Now",
    emoji: "👩‍💼",
    slug: "women-empowerment",
  },
  {
    id: 5,
    title: "Digital Literacy Program",
    description:
      "Teaching children basic computer skills and internet literacy to prepare them for the modern world.",
    status: "active",
    statusLabel: "Donate Now",
    emoji: "💻",
    slug: "digital-literacy",
  },
  {
    id: 6,
    title: "Community Library",
    description:
      "Establishing well-stocked libraries in rural areas to promote reading and self-learning.",
    status: "completed",
    statusLabel: "Completed",
    emoji: "📚",
    slug: "community-library",
  },
];

export default function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-warm" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text mt-3">
            Our Programs
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/programs/${program.slug}`}
                className="block group h-full"
              >
                <div className="h-full bg-white rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{program.emoji}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        program.status === "active"
                          ? "bg-accent/10 text-accent"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {program.statusLabel}
                    </span>
                  </div>
                  <h3 className="font-bold text-text text-lg mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
