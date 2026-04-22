"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Stethoscope, School, GraduationCap, Monitor, BarChart3, Droplets } from "lucide-react";
import { type ReactNode } from "react";

const news: { title: string; date: string; excerpt: string; slug: string; icon: ReactNode }[] = [
  {
    title: "20 Volunteers Head to Rural Rajasthan!",
    date: "April 9, 2026",
    excerpt: "After months of preparation, our team of 20 volunteers is on its way to set up new learning centers in rural Rajasthan. This marks our largest volunteer expedition yet.",
    slug: "volunteers-head-to-rajasthan",
    icon: <School size={28} />,
  },
  {
    title: "Free Health Checkup Camp: 200+ Children Served",
    date: "April 1, 2026",
    excerpt: "Our team of doctors conducted a free health checkup camp providing immunizations, check-ups, and medicines to over 200 children in rural villages.",
    slug: "free-health-checkup-camp",
    icon: <Stethoscope size={28} />,
  },
  {
    title: "A Joyful Ceremony for 50 Graduates",
    date: "March 15, 2026",
    excerpt: "50 students successfully completed their primary education at our centers. Families, teachers, and community leaders gathered to celebrate this milestone.",
    slug: "ceremony-for-50-graduates",
    icon: <GraduationCap size={28} />,
  },
  {
    title: "New Computer Lab Opens in Jodhpur",
    date: "February 20, 2026",
    excerpt: "Our Umeed Digital Lab is now fully operational, providing 200 children access to computers and internet for the first time in their lives.",
    slug: "computer-lab-jodhpur",
    icon: <Monitor size={28} />,
  },
  {
    title: "Annual Report 2025: A Year of Growth",
    date: "January 15, 2026",
    excerpt: "Our 2025 annual report is out. Read about how we expanded to 12 centers, served 2,500+ children, and achieved 97% fund utilization.",
    slug: "annual-report-2025",
    icon: <BarChart3 size={28} />,
  },
  {
    title: "Clean Water Reaches 3 More Villages",
    date: "December 10, 2025",
    excerpt: "Our Clean Water Initiative has successfully installed purification systems in 3 additional villages, bringing clean drinking water to 1,500 more people.",
    slug: "clean-water-3-villages",
    icon: <Droplets size={28} />,
  },
];

export default function NewsPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-[#1e3529] via-[#2D4A3E] to-[#3d5f50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            News & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Stay informed about our latest initiatives, stories, and impact.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {news.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group"
              >
                <div className="block h-full">
                  <div className="h-full bg-white border border-[#C4A265]/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="aspect-[16/10] bg-gradient-to-br from-[#2D4A3E]/10 to-[#2D4A3E]/5 flex items-center justify-center">
                      <div className="w-14 h-14 bg-[#2D4A3E]/10 rounded-xl flex items-center justify-center text-[#2D4A3E]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-text-light">{item.date}</span>
                      <h3 className="font-bold text-primary-dark text-lg mt-1 mb-2 group-hover:text-[#C4A265] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-light leading-relaxed mb-3">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
