"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/get-involved", label: "What you can do" },
  {
    href: "/programs",
    label: "We do this",
    dropdown: [
      { href: "/programs", label: "Our Programs" },
      { href: "/projects", label: "Our Projects" },
    ],
  },
  { href: "/news", label: "News" },
  {
    href: "/about",
    label: "About us",
    dropdown: [
      { href: "/about", label: "About Us" },
      { href: "/about#team", label: "Founders & Board" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <div
        className={`bg-[#C4A265] transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 py-0" : "max-h-16 py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#2D4A3E] text-sm font-medium">
            Follow our journey from April 10-20{" "}
            <Link href="/news" className="underline font-semibold hover:opacity-80 transition-opacity">
              More info
            </Link>
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#2D4A3E] border-t border-[#3d5f50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Logo Icon */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M24 4C24 4 16 12 16 20C16 24.4 19.6 28 24 28C28.4 28 32 24.4 32 20C32 12 24 4 24 4Z"
                  fill="#C4A265"
                />
                <path
                  d="M24 28V44"
                  stroke="#C4A265"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M18 36C18 36 14 32 10 32"
                  stroke="#C4A265"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M30 36C30 36 34 32 38 32"
                  stroke="#C4A265"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M16 20C12 18 8 20 6 24"
                  stroke="#C4A265"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M32 20C36 18 40 20 42 24"
                  stroke="#C4A265"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-[#C4A265] font-bold text-lg md:text-xl tracking-wide">
                  NANHE KADAM
                </span>
                <span className="text-[#C4A265]/60 text-[10px] md:text-xs tracking-[0.2em] uppercase mt-0.5">
                  Foundation
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href + link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-[#C4A265]/80 hover:text-[#C4A265] text-sm font-medium transition-colors"
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown size={14} className="mt-0.5" />}
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 pt-2 z-50"
                        >
                          <div className="bg-[#2D4A3E] border border-[#3d5f50] rounded-lg shadow-2xl py-2 min-w-[200px]">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2.5 text-sm text-[#C4A265]/70 hover:text-[#C4A265] hover:bg-[#3d5f50] transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              {/* Contact link (no dropdown, bold) */}
              <Link
                href="/contact"
                className="px-4 py-2 text-[#C4A265] text-sm font-bold hover:text-[#C4A265]/80 transition-colors"
              >
                Contact
              </Link>

              {/* Donate Button */}
              <Link
                href="/donate"
                className="ml-4 px-7 py-2.5 bg-[#C4A265] hover:bg-[#b89555] text-[#2D4A3E] font-bold rounded-full transition-all hover:shadow-lg text-sm uppercase tracking-wider"
              >
                Donate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-[#C4A265] hover:text-[#C4A265]/80 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#2D4A3E] border-t border-[#3d5f50] overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.href + link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-[#C4A265]/80 font-medium hover:text-[#C4A265] hover:bg-[#3d5f50] rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-6">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-[#C4A265]/60 hover:text-[#C4A265] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-[#C4A265] font-bold hover:bg-[#3d5f50] rounded-lg transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="/donate"
                  onClick={() => setIsOpen(false)}
                  className="block mx-4 mt-3 px-5 py-3 bg-[#C4A265] text-[#2D4A3E] font-bold rounded-full text-center uppercase tracking-wider text-sm hover:bg-[#b89555] transition-colors"
                >
                  Donate
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Bottom border line */}
      <div className="h-px bg-[#C4A265]/20" />
    </header>
  );
}
