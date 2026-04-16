"use client";

import { motion } from "framer-motion";
import { Heart, Users, Target, Award, BookOpen, Globe } from "lucide-react";

const team = [
  { name: "Aarav Sharma", role: "Founder & President", emoji: "👨‍💼" },
  { name: "Priya Patel", role: "Co-Founder & Secretary", emoji: "👩‍💼" },
  { name: "Rajesh Kumar", role: "Treasurer", emoji: "👨‍💻" },
  { name: "Anjali Verma", role: "Program Director", emoji: "👩‍🏫" },
];

const values = [
  { icon: <Heart size={24} />, title: "Compassion", description: "Every child deserves love, care, and the opportunity to thrive." },
  { icon: <Users size={24} />, title: "Community", description: "We believe in the power of community-driven, locally embedded solutions." },
  { icon: <Target size={24} />, title: "Sustainability", description: "Our projects are designed to become self-sufficient over time." },
  { icon: <Award size={24} />, title: "Transparency", description: "97% of every donation goes directly to our programs. We publish annual reports." },
  { icon: <BookOpen size={24} />, title: "Education First", description: "Education is the most powerful tool to break the cycle of poverty." },
  { icon: <Globe size={24} />, title: "Inclusivity", description: "We serve children regardless of caste, religion, or background." },
];

const milestones = [
  { year: "2018", event: "Nanhe Kadam Foundation established in New Delhi" },
  { year: "2019", event: "First learning center opened in Jaipur, Rajasthan" },
  { year: "2020", event: "Launched Mid-Day Meal Program during COVID-19 pandemic" },
  { year: "2021", event: "Expanded to Uttar Pradesh with Asha Nutrition Program" },
  { year: "2022", event: "500+ children enrolled across 5 learning centers" },
  { year: "2023", event: "Launched Digital Literacy and Clean Water initiatives" },
  { year: "2024", event: "Opened Pragati Skill Center in Bihar" },
  { year: "2025", event: "Reached 2,000+ children; launched Women Empowerment workshops" },
  { year: "2026", event: "Serving 2,500+ children across 12 centers in 4 states" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Since 2018, we have been taking small steps to create big change in the lives
            of India&apos;s most vulnerable children.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-6">
              How It All Began
            </h2>
            <div className="prose prose-lg max-w-none text-text-light space-y-4">
              <p>
                Nanhe Kadam — meaning &quot;small steps&quot; in Hindi — was born from a simple belief:
                that every child, no matter their circumstances, deserves the chance to learn, grow,
                and dream. Founded in 2018 by Aarav Sharma and Priya Patel, the foundation started
                with a single classroom in a rented space in Jaipur.
              </p>
              <p>
                What began as weekend tutoring sessions for 15 children quickly grew into a movement.
                Today, Nanhe Kadam Foundation operates 12 learning centers across 4 Indian states,
                serving over 2,500 children with education, nutrition, healthcare, and skill development
                programs.
              </p>
              <p>
                Our approach is rooted in community ownership. We partner with local leaders, parents,
                and educators to build programs that are sustainable and culturally relevant. We don&apos;t
                just build schools — we build ecosystems of support that help children thrive.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-text text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3">Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start gap-4 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-white" />
                <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-accent font-bold text-sm">{item.year}</span>
                  <p className="text-text mt-1">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our People</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3">Founders & Board</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{member.emoji}</span>
                </div>
                <h3 className="font-bold text-text">{member.name}</h3>
                <p className="text-sm text-text-light mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
