"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Udaan Learning Center",
    location: "Jaipur, Rajasthan",
    status: "active",
    statusLabel: "Donate Now",
    emoji: "🏫",
    slug: "udaan-learning-center",
  },
  {
    id: 2,
    title: "Asha Nutrition Program",
    location: "Varanasi, Uttar Pradesh",
    status: "active",
    statusLabel: "Donate Now",
    emoji: "🍱",
    slug: "asha-nutrition-program",
  },
  {
    id: 3,
    title: "Pragati Skill Center",
    location: "Patna, Bihar",
    status: "upcoming",
    statusLabel: "Coming Soon",
    emoji: "🛠️",
    slug: "pragati-skill-center",
  },
  {
    id: 4,
    title: "Naya Savera Health Clinic",
    location: "Bhopal, Madhya Pradesh",
    status: "completed",
    statusLabel: "Completed",
    emoji: "🏥",
    slug: "naya-savera-health-clinic",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Reach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text mt-3">
            Where We Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block group h-full"
              >
                <div className="h-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-4xl mb-4">{project.emoji}</div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                      project.status === "active"
                        ? "bg-accent/10 text-accent"
                        : project.status === "upcoming"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {project.statusLabel}
                  </span>
                  <h3 className="font-bold text-text text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-sm text-text-light">
                    <MapPin size={14} />
                    {project.location}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Projects <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
