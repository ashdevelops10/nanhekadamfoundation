"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, School, Apple, Wrench, HeartPulse, BookOpen, Monitor } from "lucide-react";
import { type ReactNode } from "react";

const projects: { title: string; location: string; status: string; statusLabel: string; icon: ReactNode; slug: string; description: string }[] = [
  {
    title: "Udaan Learning Center",
    location: "Jaipur, Rajasthan",
    status: "active",
    statusLabel: "Donate Now",
    icon: <School size={24} />,
    slug: "udaan-learning-center",
    description: "Our flagship learning center providing quality education to 400+ children from underprivileged backgrounds in rural Rajasthan.",
  },
  {
    title: "Asha Nutrition Program",
    location: "Varanasi, Uttar Pradesh",
    status: "active",
    statusLabel: "Donate Now",
    icon: <Apple size={24} />,
    slug: "asha-nutrition-program",
    description: "A comprehensive nutrition center combating malnutrition among children under 5 and providing dietary education to mothers.",
  },
  {
    title: "Pragati Skill Center",
    location: "Patna, Bihar",
    status: "upcoming",
    statusLabel: "Coming Soon",
    icon: <Wrench size={24} />,
    slug: "pragati-skill-center",
    description: "A vocational training center offering skill development courses for youth and women in areas like tailoring, computing, and handicrafts.",
  },
  {
    title: "Naya Savera Health Clinic",
    location: "Bhopal, Madhya Pradesh",
    status: "completed",
    statusLabel: "Completed",
    icon: <HeartPulse size={24} />,
    slug: "naya-savera-health-clinic",
    description: "A community health clinic providing free health check-ups, vaccinations, and maternal care to underprivileged families.",
  },
  {
    title: "Kiran Community School",
    location: "Lucknow, Uttar Pradesh",
    status: "active",
    statusLabel: "Donate Now",
    icon: <BookOpen size={24} />,
    slug: "kiran-community-school",
    description: "A community-run school offering primary and secondary education with a focus on girls' education and empowerment.",
  },
  {
    title: "Umeed Digital Lab",
    location: "Jodhpur, Rajasthan",
    status: "active",
    statusLabel: "Donate Now",
    icon: <Monitor size={24} />,
    slug: "umeed-digital-lab",
    description: "A state-of-the-art computer lab providing digital literacy and coding education to rural children and youth.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-[#1e3529] via-[#2D4A3E] to-[#3d5f50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Explore the projects we&apos;re building across India to create lasting impact.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.slug}`} className="block group h-full">
                  <div className="h-full bg-gradient-to-br from-[#2D4A3E]/5 to-[#2D4A3E]/10 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-[#C4A265]/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#2D4A3E]/10 rounded-xl flex items-center justify-center text-[#2D4A3E]">
                        {project.icon}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === "active"
                            ? "bg-[#C4A265]/10 text-[#C4A265]"
                            : project.status === "upcoming"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {project.statusLabel}
                      </span>
                    </div>
                    <h3 className="font-bold text-primary-dark text-xl mb-2 group-hover:text-[#C4A265] transition-colors">
                      {project.title}
                    </h3>
                    <p className="flex items-center gap-1.5 text-sm text-text-light mb-3">
                      <MapPin size={14} />
                      {project.location}
                    </p>
                    <p className="text-text-light text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#C4A265] font-semibold text-sm group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
