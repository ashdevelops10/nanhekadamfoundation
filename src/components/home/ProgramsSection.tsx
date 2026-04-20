"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Stethoscope, BookOpen, Users, Palette, UtensilsCrossed, Backpack } from "lucide-react";
import { type ReactNode } from "react";

const programs: { id: number; title: string; description: string; status: string; statusLabel: string; icon: ReactNode; slug: string }[] = [
  {
    id: 1,
    title: "Health Camps",
    description:
      "Organizing health camps in villages for check-ups, immunizations, free medicines, and health education for children.",
    status: "active",
    statusLabel: "Donate Now",
    icon: <Stethoscope size={22} />,
    slug: "health-camps",
  },
  {
    id: 2,
    title: "Education Programmes",
    description:
      "Volunteer-led teaching, computer education (Baatein Computer Ki), mentorship, and science clubs at village schools.",
    status: "active",
    statusLabel: "Donate Now",
    icon: <BookOpen size={22} />,
    slug: "education-programmes",
  },
  {
    id: 3,
    title: "Child Sponsorship",
    description:
      "Channelizing funds from donors worldwide to provide transparent support for deserving children's futures.",
    status: "active",
    statusLabel: "Sponsor Now",
    icon: <Users size={22} />,
    slug: "child-sponsorship",
  },
  {
    id: 4,
    title: "Talent Building Activities",
    description:
      "Painting, singing, dance, and theatre events to boost confidence and promote overall development.",
    status: "active",
    statusLabel: "Join Now",
    icon: <Palette size={22} />,
    slug: "talent-building",
  },
  {
    id: 5,
    title: "Mid-Day Meal Program",
    description:
      "Serving 500+ children a nutritious meal every day to fuel their learning, health, and growth.",
    status: "active",
    statusLabel: "Donate Now",
    icon: <UtensilsCrossed size={22} />,
    slug: "mid-day-meal",
  },
  {
    id: 6,
    title: "Material Support",
    description:
      "Providing uniforms, clothes, notebooks, school bags, and essential supplies to underprivileged students.",
    status: "active",
    statusLabel: "Contribute",
    icon: <Backpack size={22} />,
    slug: "material-support",
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
          <span className="text-[#C4A265] font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mt-3">
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
                <div className="h-full bg-white rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-[#C4A265]/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 bg-[#2D4A3E]/10 rounded-xl flex items-center justify-center text-[#2D4A3E]">
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
                  <h3 className="font-bold text-primary-dark text-lg mb-2 group-hover:text-[#C4A265] transition-colors">
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
