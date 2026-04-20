"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Shield, TrendingUp, Users, UtensilsCrossed, BookOpen, GraduationCap, Monitor, Droplets, School } from "lucide-react";
import { type ReactNode } from "react";

const amounts = [500, 1000, 2000, 5000, 10000, 25000];

const impactCards: { amount: string; impact: string; icon: ReactNode }[] = [
  { amount: "₹500", impact: "Provides meals for a child for 1 month", icon: <UtensilsCrossed size={20} /> },
  { amount: "₹1,000", impact: "Supplies school books and stationery for a year", icon: <BookOpen size={20} /> },
  { amount: "₹2,000", impact: "Sponsors a child's complete monthly education", icon: <GraduationCap size={20} /> },
  { amount: "₹5,000", impact: "Funds a computer for our Digital Literacy lab", icon: <Monitor size={20} /> },
  { amount: "₹10,000", impact: "Installs a water purification unit for a school", icon: <Droplets size={20} /> },
  { amount: "₹25,000", impact: "Builds a classroom that serves 30 children", icon: <School size={20} /> },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(2000);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");

  return (
    <>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-[#1e3529] via-[#2D4A3E] to-[#3d5f50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Make a Donation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            97% of your donation goes directly to our programs. Your generosity transforms lives.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-primary-dark mb-6">Choose Your Donation</h2>

                {/* Type Toggle */}
                <div className="flex bg-gray-200 rounded-full p-1 mb-6">
                  <button
                    onClick={() => setDonationType("one-time")}
                    className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all ${
                      donationType === "one-time"
                        ? "bg-[#2D4A3E] text-white shadow-md"
                        : "text-text-light"
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setDonationType("monthly")}
                    className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all ${
                      donationType === "monthly"
                        ? "bg-[#2D4A3E] text-white shadow-md"
                        : "text-text-light"
                    }`}
                  >
                    Monthly
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`py-3 rounded-xl font-semibold text-sm transition-all ${
                        selectedAmount === amount
                          ? "bg-[#2D4A3E] text-white shadow-md"
                          : "bg-white border border-gray-200 text-text hover:border-[#C4A265]"
                      }`}
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <label htmlFor="custom-amount" className="block text-sm font-medium text-primary-dark mb-1.5">
                    Or enter custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light font-semibold">₹</span>
                    <input
                      id="custom-amount"
                      type="number"
                      min="100"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full pl-8 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C4A265]/30 focus:border-[#C4A265] text-sm"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="donor-name" className="block text-sm font-medium text-primary-dark mb-1.5">Full Name</label>
                    <input
                      id="donor-name"
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C4A265]/30 focus:border-[#C4A265] text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="donor-email" className="block text-sm font-medium text-primary-dark mb-1.5">Email</label>
                    <input
                      id="donor-email"
                      type="email"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C4A265]/30 focus:border-[#C4A265] text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <button className="w-full py-3.5 bg-[#C4A265] hover:bg-[#d4b87a] text-[#2D4A3E] font-bold rounded-full transition-all hover:shadow-lg text-base flex items-center justify-center gap-2">
                  <Heart size={18} />
                  Donate ₹{(selectedAmount || Number(customAmount) || 0).toLocaleString()}
                  {donationType === "monthly" ? "/month" : ""}
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-text-light">
                  <Shield size={14} />
                  Secure payment • Tax deductible under 80G
                </div>
              </div>
            </motion.div>

            {/* Impact Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-primary-dark mb-6">Your Impact</h2>
              <div className="space-y-4">
                {impactCards.map((card, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-[#2D4A3E]/5 rounded-xl border border-[#C4A265]/10"
                  >
                    <div className="w-9 h-9 bg-[#C4A265]/10 rounded-lg flex items-center justify-center text-[#C4A265] shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <span className="font-bold text-[#C4A265] text-sm">{card.amount}</span>
                      <p className="text-text-light text-sm mt-0.5">{card.impact}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-warm rounded-2xl">
                <h3 className="font-bold text-primary-dark mb-3">Why Donate to Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-text-light">
                    <TrendingUp size={16} className="text-[#C4A265] mt-0.5 shrink-0" />
                    97% fund utilization — among the highest in the sector
                  </li>
                  <li className="flex items-start gap-2 text-sm text-text-light">
                    <Shield size={16} className="text-[#C4A265] mt-0.5 shrink-0" />
                    Registered NGO with full FCRA and 80G compliance
                  </li>
                  <li className="flex items-start gap-2 text-sm text-text-light">
                    <Users size={16} className="text-[#C4A265] mt-0.5 shrink-0" />
                    Open invitation to visit any project anytime
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
