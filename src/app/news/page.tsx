"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const news = [
  {
    title: "20 Volunteers Head to Rural Rajasthan!",
    date: "April 9, 2026",
    excerpt: "After months of preparation, our team of 20 volunteers is on its way to set up new learning centers in rural Rajasthan. This marks our largest volunteer expedition yet.",
    slug: "volunteers-head-to-rajasthan",
    emoji: "🏫",
  },
  {
    title: "Teacher Meera Devi: A Life of Dedication and Compassion",
    date: "April 1, 2026",
    excerpt: "Meet Meera Devi, the inspiring teacher who has been transforming lives at our Udaan Learning Center for over a decade. Her story is one of unwavering dedication.",
    slug: "teacher-meera-devi-story",
    emoji: "👩‍🏫",
  },
  {
    title: "A Joyful Ceremony for 50 Graduates",
    date: "March 15, 2026",
    excerpt: "50 students successfully completed their primary education at our centers. Families, teachers, and community leaders gathered to celebrate this milestone.",
    slug: "ceremony-for-50-graduates",
    emoji: "🎓",
  },
  {
    title: "New Computer Lab Opens in Jodhpur",
    date: "February 20, 2026",
    excerpt: "Our Umeed Digital Lab is now fully operational, providing 200 children access to computers and internet for the first time in their lives.",
    slug: "computer-lab-jodhpur",
    emoji: "💻",
  },
  {
    title: "Annual Report 2025: A Year of Growth",
    date: "January 15, 2026",
    excerpt: "Our 2025 annual report is out. Read about how we expanded to 12 centers, served 2,500+ children, and achieved 97% fund utilization.",
    slug: "annual-report-2025",
    emoji: "📊",
  },
  {
    title: "Clean Water Reaches 3 More Villages",
    date: "December 10, 2025",
    excerpt: "Our Clean Water Initiative has successfully installed purification systems in 3 additional villages, bringing clean drinking water to 1,500 more people.",
    slug: "clean-water-3-villages",
    emoji: "💧",
  },
];

export default function NewsPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
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
                <Link href={`/news/${item.slug}`} className="block h-full">
                  <div className="h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <span className="text-5xl">{item.emoji}</span>
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-text-light">{item.date}</span>
                      <h3 className="font-bold text-text text-lg mt-1 mb-2 group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-light leading-relaxed mb-3">
                        {item.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                        Read more <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
