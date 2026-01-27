"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "首頁", labelEn: "Home" },
  { href: "/solutions", label: "產品方案", labelEn: "Solutions" },
  { href: "/cases", label: "成功案例", labelEn: "Cases" },
  { href: "/about", label: "關於我們", labelEn: "About" },
  { href: "/contact", label: "聯絡我們", labelEn: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [locale, setLocale] = useState<"zh" | "en">("zh");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0f1a]/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/logo-white.png"
              alt="台訊鍇 tSC Logo"
              width={2500}
              height={1425}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#94a3b8] hover:text-white transition-colors text-sm font-medium"
              >
                {locale === "zh" ? link.label : link.labelEn}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
              className="text-[#94a3b8] hover:text-white text-sm font-medium px-3 py-1 border border-white/20 rounded-lg hover:border-white/40 transition-all"
            >
              {locale === "zh" ? "EN" : "中"}
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-5 py-2.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              免費諮詢
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#94a3b8] hover:text-white transition-colors text-base font-medium py-2"
                >
                  {locale === "zh" ? link.label : link.labelEn}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex justify-center px-5 py-3 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white text-sm font-semibold rounded-lg mt-2"
              >
                免費諮詢
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
