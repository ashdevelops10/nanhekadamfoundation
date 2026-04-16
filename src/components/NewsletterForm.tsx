"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
        className="flex-1 px-4 py-2.5 bg-white/10 border border-[#C4A265]/30 rounded-full text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#C4A265]/50"
      />
      <button
        type="submit"
        className="px-4 py-2.5 bg-[#C4A265] hover:bg-[#d4b87a] rounded-full text-[#2D4A3E] font-semibold transition-colors"
        aria-label="Subscribe"
      >
        {submitted ? "✓" : <Send size={16} />}
      </button>
    </form>
  );
}
