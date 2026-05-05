"use client";

import Link from "next/link";
import { useState } from "react";
import CTAButton from "./CTAButton";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#1a0f3d] border-b border-[#2d1f5e] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <img src="/bolt.png" alt="" className="w-9 h-9 mr-[-5px]" />
            <span className="font-bold text-white">
              Breakthrough
              <span className="text-gold-400">Vibe</span>
              <span className="text-white/50 font-medium ml-1 text-xs tracking-widest uppercase">
                Coding
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/quick-start"
              className="text-white/80 hover:text-gold-400 font-medium transition-colors text-sm"
            >
              Quick Start
            </Link>
            <Link
              href="/intensive"
              className="text-white/80 hover:text-gold-400 font-medium transition-colors text-sm"
            >
              Intensive
            </Link>
            <CTAButton href="/intensive#enroll" size="sm" variant="outline">
              Intensive — $67
            </CTAButton>
            <CTAButton href="/quick-start#enroll" size="sm">
              Quick Start — $39.99
            </CTAButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-gold-400 hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/quick-start"
              className="py-2 text-white/80 hover:text-gold-400 font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              Quick Start
            </Link>
            <Link
              href="/intensive"
              className="py-2 text-white/80 hover:text-gold-400 font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              Intensive
            </Link>
            <CTAButton
              href="/intensive#enroll"
              size="sm"
              variant="outline"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Intensive — $67
            </CTAButton>
            <CTAButton
              href="/quick-start#enroll"
              size="sm"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Quick Start — $39.99
            </CTAButton>
          </div>
        )}
      </div>
    </nav>
  );
}
