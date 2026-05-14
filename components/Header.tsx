"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#a-propos", label: "À propos" },
    { href: "#accompagnement", label: "Accompagnement" },
    { href: "#processus", label: "Comment ça marche" },
    { href: "#tarifs", label: "Tarifs" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-linen-100/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
        style={{ padding: scrolled ? "4px 0" : "10px 0" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <div
              className="relative transition-all duration-500"
              style={{
                width: scrolled ? "72px" : "96px",
                height: scrolled ? "72px" : "96px",
              }}
            >
              <Image
                src="/images/logo.jpeg"
                alt="NHK – Nadia KOUT Psychopraticienne & Conseil Éducatif"
                fill
                className="object-contain"
                sizes="96px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="https://perfactive.fr/nhk-psycho/nadia-kout-1/book" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex btn-primary text-xs ml-8">
            Prendre rendez-vous
            <ArrowRight size={12} />
          </a>

          {/* Mobile burger */}
          <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`block w-6 h-px bg-forest-500 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-forest-500 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-forest-500 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-linen-100 flex flex-col justify-center items-center transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Logo in mobile menu */}
        <div className="absolute top-6 left-6">
          <div className="relative" style={{ width: "80px", height: "80px" }}>
            <Image src="/images/logo.jpeg" alt="NHK Psycho" fill className="object-contain" sizes="80px" />
          </div>
        </div>

        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "var(--font-cormorant)", transitionDelay: `${i * 60}ms` }}
              className={`text-4xl font-300 text-forest-500 tracking-wide transition-all duration-500 hover:text-terra-500 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="https://perfactive.fr/nhk-psycho/nadia-kout-1/book" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="btn-primary mt-6">
            Prendre rendez-vous
          </a>
        </nav>
        <div style={{ fontFamily: "var(--font-jost)" }} className="absolute bottom-10 text-xs tracking-widest text-forest-500/40 uppercase">
          NHK · Nadia KOUT
        </div>
      </div>
    </>
  );
}

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
