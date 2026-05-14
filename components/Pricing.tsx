"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Cabinet de consultation", span: "row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Espace de sérénité" },
  { src: "/images/gallery-3.jpg", alt: "Accompagnement en nature" },
  { src: "/images/gallery-4.jpg", alt: "Moment de détente", span: "col-span-2" },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tarifs" ref={sectionRef} className="py-28 lg:py-36 overflow-hidden" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Pricing */}
          <div>
            <p className="section-eyebrow reveal">Infos pratiques</p>
            <h2 className="section-title text-4xl md:text-5xl mt-4 mb-5 reveal reveal-delay-1">Tarifs & modalités</h2>
            <span className="deco-line reveal reveal-delay-2 mb-8 inline-block" />

            {/* Price cards */}
            <div className="reveal reveal-delay-2 space-y-4 mb-8">
              {[
                { type: "Individuelle (Adulte / Ado)", price: "60 €", duration: "45 min à 1h" },
                { type: "Thérapie de couple", price: "90 €", duration: "1h à 1h15" },
                { type: "Visioconférence", price: "50 €", duration: "45 min à 1h" },
              ].map((item) => (
                <div
                  key={item.type}
                  className="relative overflow-hidden"
                  style={{
                    background: "var(--color-linen)",
                    padding: "24px 32px",
                    borderRadius: "4px",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem", color: "var(--color-forest)", marginBottom: "4px" }}>
                        {item.type}
                      </p>
                      <span
                        style={{
                          fontFamily: "var(--font-jost)",
                          fontSize: "0.75rem",
                          letterSpacing: "0.08em",
                          color: "rgba(44,74,62,0.5)",
                        }}
                      >
                        {item.duration}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "2.2rem",
                        fontWeight: 400,
                        color: "var(--color-terra)",
                        lineHeight: 1,
                      }}
                    >
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Remboursement */}
            <div
              className="reveal reveal-delay-3 flex gap-4 p-5 mb-6"
              style={{ background: "rgba(44,74,62,0.04)", borderRadius: "4px", borderLeft: "2px solid var(--color-sage)" }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0" style={{ color: "var(--color-sage)" }}>
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.2" />
                <path d="M10 6v4.5M10 13.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.85rem", fontWeight: 300, lineHeight: "1.7", color: "rgba(44,74,62,0.7)" }}>
                Les soins ne sont pas remboursés par la Sécurité sociale, mais <strong style={{ fontWeight: 500 }}>certaines mutuelles</strong>{" "}
                peuvent proposer une participation partielle. Renseignez-vous auprès de la vôtre.
              </p>
            </div>

            {/* Practical info */}
            <div className="reveal reveal-delay-4 grid grid-cols-2 gap-4 mb-10">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M9 2C6.24 2 4 4.24 4 7c0 4.25 5 10 5 10s5-5.75 5-10c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 9 5a1.5 1.5 0 0 1 0 3z"
                        fill="currentColor"
                        opacity="0.7"
                      />
                    </svg>
                  ),
                  label: "Cabinet",
                  value: "146 bis Avenue Charles de Gaulle - 92200 Neuilly sur Seine",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="3" width="11" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                      <path d="M13 7l3.5-2v8L13 11" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                    </svg>
                  ),
                  label: "Visioconférence",
                  value: "Disponible partout",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 2a7 7 0 1 0 0 14A7 7 0 0 0 9 2z" stroke="currentColor" strokeWidth="1.2" fill="none" />
                      <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  label: "Confidentialité",
                  value: "Totale et garantie",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="3" width="14" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                      <path d="M2 7h14M6 2v2M12 2v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  ),
                  label: "Horaires",
                  value: "Flexibles, à convenir",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-start p-4" style={{ background: "var(--color-linen)", borderRadius: "4px" }}>
                  <div style={{ color: "var(--color-forest)", opacity: 0.6, marginTop: "2px", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(44,74,62,0.45)",
                        marginBottom: "2px",
                      }}
                    >
                      {item.label}
                    </p>
                    <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.8rem", color: "var(--color-forest)", fontWeight: 400 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-5">
              <a href="https://perfactive.fr/nhk-psycho/nadia-kout-1/book" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Réserver une séance
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Photo gallery */}
          <div className="reveal reveal-delay-2">
            <div className="grid grid-cols-2 gap-4" style={{ gridTemplateRows: "auto auto auto" }}>
              {/* Main tall image */}
              <div className="relative overflow-hidden row-span-2" style={{ borderRadius: "4px", minHeight: "280px" }}>
                <Image src="/images/gallery-1.jpg" alt="Espace de consultation" fill className="object-cover" sizes="200px" />
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, rgba(44,74,62,0.4), rgba(196,119,74,0.3))" }}
                ></div>
              </div>

              {/* Top right image */}
              <div className="relative overflow-hidden" style={{ borderRadius: "4px", minHeight: "130px" }}>
                <Image src="/images/gallery-2.jpg" alt="Sérénité" fill className="object-cover" sizes="200px" />
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(44,74,62,0.35)" }}></div>
              </div>

              {/* Bottom right image */}
              <div className="relative overflow-hidden" style={{ borderRadius: "4px", minHeight: "130px" }}>
                <Image src="/images/gallery-3.jpg" alt="Nature" fill className="object-cover" sizes="200px" />
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(196,119,74,0.35)" }}></div>
              </div>

              {/* Bottom wide image */}
              <div className="relative overflow-hidden col-span-2" style={{ borderRadius: "4px", minHeight: "160px" }}>
                <Image src="/images/gallery-4.jpg" alt="Accompagnement" fill className="object-cover" sizes="400px" />
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(44,74,62,0.3)" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
