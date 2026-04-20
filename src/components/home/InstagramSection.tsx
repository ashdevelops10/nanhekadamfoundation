"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";
import Image from "next/image";

function InstagramIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

const instagramPosts = [
  {
    id: 1,
    title: "Health Camp Drive",
    description: "Free health check-ups and immunization for 200+ children in rural villages",
    image: "/images/event-1.jpg",
    likes: 234,
    comments: 18,
    category: "Health Camps",
  },
  {
    id: 2,
    title: "Community Outreach",
    description: "Joining hands for effective humanitarian response — empowering children across India",
    image: "/images/event-2.jpg",
    likes: 412,
    comments: 35,
    category: "Outreach",
  },
  {
    id: 3,
    title: "Small Steps, Big Dreams",
    description: "Every nanhe kadam leads to a brighter tomorrow. Together we ignite hope.",
    image: "/images/event-3.jpg",
    likes: 567,
    comments: 42,
    category: "Inspiration",
  },
  {
    id: 4,
    title: "Foundation Event",
    description: "Our team and volunteers making a difference in the lives of children",
    image: "/images/event-5.jpg",
    likes: 389,
    comments: 27,
    category: "Events",
  },
  {
    id: 5,
    title: "On-Ground Impact",
    description: "Real impact on the ground — serving communities and building futures",
    image: "/images/event-6.jpg",
    likes: 298,
    comments: 22,
    category: "Impact",
  },
  {
    id: 6,
    title: "Nanhe Kadam Family",
    description: "Our dedicated volunteers sharing knowledge through mentorship and care",
    image: "/images/activity-2.jpg",
    likes: 345,
    comments: 31,
    category: "Community",
  },
];

export default function InstagramSection() {
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
          <div className="flex items-center justify-center gap-2 mb-3">
            <InstagramIcon size={20} className="text-[#C4A265]" />
            <span className="text-[#C4A265] font-semibold text-sm uppercase tracking-wider">
              @ngonanhekadam
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Our Story in Moments
          </h2>
          <p className="text-text-light mt-3 max-w-xl mx-auto">
            Follow our journey of empowering children through health, education,
            and skill development across India.
          </p>
        </motion.div>

        {/* Instagram-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Real Photo */}
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                {/* Category Tag */}
                <div className="flex justify-end">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-white font-bold text-sm md:text-lg leading-tight mb-1">
                    {post.title}
                  </h3>
                  <p className="text-white/80 text-[11px] md:text-sm leading-snug line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-1.5 text-white">
                  <Heart size={18} fill="white" />
                  <span className="text-sm font-semibold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 text-white">
                  <MessageCircle size={18} fill="white" />
                  <span className="text-sm font-semibold">{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/ngonanhekadam/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            <InstagramIcon size={18} />
            Follow Us on Instagram
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
