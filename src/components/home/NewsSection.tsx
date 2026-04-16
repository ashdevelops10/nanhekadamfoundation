"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const news = [
  {
    id: 1,
    title: "20 Volunteers Head to Rural Rajasthan!",
    date: "April 9, 2026",
    excerpt:
      "After months of preparation, our team of 20 volunteers is on its way to set up new learning centers in rural Rajasthan.",
    slug: "volunteers-head-to-rajasthan",
  },
  {
    id: 2,
    title: "Teacher Meera Devi: A Life of Dedication and Compassion",
    date: "April 1, 2026",
    excerpt:
      "Meet Meera Devi, the inspiring teacher who has been transforming lives at our Udaan Learning Center for over a decade.",
    slug: "teacher-meera-devi-story",
  },
  {
    id: 3,
    title: "A Joyful Ceremony for 50 Graduates",
    date: "March 15, 2026",
    excerpt:
      "50 students successfully completed their primary education at our centers. A celebration of perseverance and hope.",
    slug: "ceremony-for-50-graduates",
  },
];

export default function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Latest Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-2">
              News & Updates
            </h2>
          </div>
          <Link
            href="/news"
            className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            All News <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Link href={`/news/${item.slug}`} className="block">
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl mb-4 overflow-hidden flex items-center justify-center">
                  <span className="text-5xl">
                    {index === 0 ? "🏫" : index === 1 ? "👩‍🏫" : "🎓"}
                  </span>
                </div>
                <span className="text-sm text-text-light">{item.date}</span>
                <h3 className="text-lg font-bold text-text mt-1 mb-2 group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-3 group-hover:gap-2 transition-all">
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
