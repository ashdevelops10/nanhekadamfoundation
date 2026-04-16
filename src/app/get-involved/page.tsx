"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Users, HandHeart, Gift, Megaphone } from "lucide-react";

const ways = [
  {
    icon: <Heart size={28} />,
    title: "Donate",
    description: "Your financial contribution directly funds education, meals, and healthcare for children. Every rupee counts.",
    cta: "Donate Now",
    href: "/donate",
    color: "bg-[#C4A265]/10 text-[#C4A265]",
  },
  {
    icon: <Users size={28} />,
    title: "Volunteer",
    description: "Join our volunteer programs — teach at our centers, help with events, or join our field expeditions to project sites.",
    cta: "Sign Up",
    href: "/contact",
    color: "bg-[#2D4A3E]/10 text-[#2D4A3E]",
  },
  {
    icon: <HandHeart size={28} />,
    title: "Sponsor a Child",
    description: "For ₹2,000/month, you can sponsor a child's complete education including books, uniforms, meals, and mentoring.",
    cta: "Sponsor Now",
    href: "/donate",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: <Gift size={28} />,
    title: "Corporate Partnership",
    description: "Partner with us through CSR initiatives. We offer transparent reporting and project visits for all corporate partners.",
    cta: "Get in Touch",
    href: "/contact",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <Megaphone size={28} />,
    title: "Spread the Word",
    description: "Follow us on social media, share our stories, and help us reach more supporters. Awareness is the first step.",
    cta: "Follow Us",
    href: "/contact",
    color: "bg-green-100 text-green-600",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-[#1e3529] via-[#2D4A3E] to-[#3d5f50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get Involved
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Discover how you can make a difference. Every contribution — big or small — helps a child take their next step.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {ways.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-start gap-6 bg-white border border-[#C4A265]/10 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${way.color}`}>
                  {way.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary-dark text-xl mb-2">{way.title}</h3>
                  <p className="text-text-light leading-relaxed mb-4">{way.description}</p>
                  <Link
                    href={way.href}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#2D4A3E] hover:bg-[#3d5f50] text-white font-semibold rounded-full transition-all text-sm hover:shadow-md"
                  >
                    {way.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
