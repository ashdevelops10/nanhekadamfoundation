"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-[#1e3529] via-[#2D4A3E] to-[#3d5f50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            We&apos;d love to hear from you. Reach out for inquiries, partnerships, or just to say hello.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#C4A265]/10 rounded-xl flex items-center justify-center text-[#C4A265] shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Email</h3>
                      <a href="mailto:info@nanhekadamfoundation.com" className="text-text-light text-sm mt-0.5 hover:text-primary transition-colors">
                        info@nanhekadamfoundation.com
                      </a>
                      <a href="mailto:healingmiles@nanhekadamfoundation.com" className="text-text-light text-sm mt-0.5 hover:text-primary transition-colors block">
                        healingmiles@nanhekadamfoundation.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#C4A265]/10 rounded-xl flex items-center justify-center text-[#C4A265] shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Phone</h3>
                      <a href="tel:+919521697717" className="text-text-light text-sm mt-0.5 hover:text-primary transition-colors">
                        +91 9521697717
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#C4A265]/10 rounded-xl flex items-center justify-center text-[#C4A265] shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Office Hours</h3>
                      <p className="text-text-light text-sm mt-0.5">
                        Mon – Fri: 9:00 AM – 6:00 PM<br />Sat: 10:00 AM – 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-[#2D4A3E]/5 rounded-2xl p-12 text-center">
                  <CheckCircle size={48} className="text-[#C4A265] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">Thank You!</h3>
                  <p className="text-text-light">
                    Your message has been received. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-[#2D4A3E] text-white font-semibold rounded-full hover:bg-[#3d5f50] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 md:p-8 space-y-5">
                  <h2 className="text-2xl font-bold text-primary-dark mb-2">Send a Message</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C4A265]/30 focus:border-[#C4A265] text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-1.5">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C4A265]/30 focus:border-[#C4A265] text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-primary-dark mb-1.5">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C4A265]/30 focus:border-[#C4A265] text-sm"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C4A265]/30 focus:border-[#C4A265] text-sm resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-[#2D4A3E] hover:bg-[#3d5f50] text-white font-semibold rounded-full transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
