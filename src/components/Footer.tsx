"use client";

import Link from "next/link";
import { Heart, Mail, Globe } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-[#1e3529] text-white">
      {/* CTA Section */}
      <div className="bg-[#2D4A3E] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Be the Reason They Smile!
          </h2>
          <p className="text-white/70 mb-8 text-lg max-w-2xl mx-auto">
            Kids can skip meals, not dreams. Join us in bringing hope to every child
            in need through education, healing, and empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="px-8 py-3.5 bg-[#C4A265] hover:bg-[#d4b87a] text-[#2D4A3E] font-bold rounded-full transition-all hover:shadow-lg hover:scale-105"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all border border-white/20"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.jpg"
                alt="Nanhe Kadam Foundation Logo"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold text-base">NANHE KADAM</p>
                <p className="text-xs text-white/60 tracking-wider">FOUNDATION</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Kids can skip meals, not dreams. Educate • Heal • Empower — bringing hope
              to every child in need.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/ngonanhekadam/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">Navigate</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/campaigns", label: "Campaigns" },
                { href: "/programs", label: "Our Programs" },
                { href: "/projects", label: "Projects" },
                { href: "/get-involved", label: "Get Involved" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail size={16} className="shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@nanhekadamfoundation.com" className="hover:text-white transition-colors">
                    info@nanhekadamfoundation.com
                  </a>
                  <a href="mailto:healingmiles@nanhekadamfoundation.com" className="hover:text-white transition-colors">
                    healingmiles@nanhekadamfoundation.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Globe size={16} className="shrink-0" />
                <a href="https://www.instagram.com/ngonanhekadam/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @ngonanhekadam
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-base mb-4">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">
              Stay updated with our latest stories and impact reports.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2026 Nanhe Kadam Foundation. All rights reserved.
          </p>
          <p className="text-white/50 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-[#C4A265]" /> for every child
          </p>
        </div>
      </div>
    </footer>
  );
}
