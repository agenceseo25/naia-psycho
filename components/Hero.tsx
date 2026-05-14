"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll(".reveal");
    items?.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 150 + i * 120);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "linear-gradient(135deg, #F5EFE4 0%, #EDE3D4 60%, #E6D4C0 100%)" }}
    >
      {/* ── Decorative background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #8B9E8C 0%, transparent 70%)" }}
        />
        <div
          className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #C4774A 0%, transparent 70%)" }}
        />
        <svg className="absolute top-20 right-12 opacity-10 botanical-ring" width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" stroke="#2C4A3E" strokeWidth="0.5" strokeDasharray="4 6" />
          <circle cx="60" cy="60" r="40" stroke="#2C4A3E" strokeWidth="0.5" strokeDasharray="2 8" />
          <path d="M60 5L60 115M5 60L115 60" stroke="#2C4A3E" strokeWidth="0.3" opacity="0.5" />
          <path d="M60 20 C70 30 80 50 70 60 C60 70 40 70 35 60 C30 50 40 30 60 20Z" stroke="#C4774A" strokeWidth="0.8" fill="none" />
        </svg>

        <div
          className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex"
          style={{
            writingMode: "vertical-rl",
            fontFamily: "var(--font-jost)",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            color: "rgba(44,74,62,0.25)",
            textTransform: "uppercase",
          }}
        >
          Psychopraticienne · Accompagnement personnel
        </div>
        <div
          className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3"
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            color: "rgba(44,74,62,0.25)",
            textTransform: "uppercase",
          }}
        >
          <span>Présentiel &amp; Visioconférence</span>
          <span className="w-8 h-px" style={{ background: "rgba(44,74,62,0.25)" }} />
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left — Text */}
          <div className="order-2 lg:order-1 lg:pr-16">
            <p className="section-eyebrow reveal mb-6">Psychopraticienne - Coach de Vie</p>

            <h1
              className="section-title text-5xl md:text-6xl xl:text-7xl mb-6 reveal reveal-delay-1"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            >
              Un accompagnement
              <br />
              <em className="italic" style={{ color: "var(--color-terra)" }}>
                humain, concret,
              </em>
              <br />à votre rythme.
            </h1>

            <p
              className="reveal reveal-delay-2"
              style={{
                fontFamily: "var(--font-jost)",
                fontWeight: 300,
                fontSize: "1rem",
                lineHeight: "1.8",
                color: "rgba(44,74,62,0.75)",
                maxWidth: "460px",
              }}
            >
              Je vous accompagne dans votre démarche de changement personnel, relationnel ou professionnel — avec une approche structurée autour de
              cinq axes essentiels, pensés pour vous aider à avancer avec clarté et sérénité.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 reveal reveal-delay-3">
              <a href="https://perfactive.fr/nhk-psycho/nadia-kout-1/book" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Prendre rendez-vous
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#accompagnement" className="btn-outline">
                Découvrir mon approche
              </a>
            </div>

            {/* Champ d'accompagnement */}
            <div className="reveal reveal-delay-4 mt-10">
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(44,74,62,0.5)",
                  marginBottom: "12px",
                  fontWeight: 500,
                }}
              >
                Mon champ d&apos;accompagnement
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    emoji: "👦🧸",
                    label: "Enfants\n(dès 5 ans)",
                    items: ["Phobies", "Confiance en soi", "Angoisse scolaire", "Gestion des émotions"],
                    dark: false,
                  },
                  {
                    emoji: "🧗📚",
                    label: "Adolescents",
                    items: ["Décrochage scolaire", "Addiction aux écrans", "Stress des examens", "Angoisse", "Accompagnement sur mesure"],
                    dark: true,
                  },
                  {
                    emoji: "👨‍👩‍👧📊",
                    label: "Adultes",
                    items: ["Dépression, Stress", "Confiance en soi", "Angoisse", "Coaching de vie", "Épuisement professionnel"],
                    dark: true,
                  },
                ].map((bloc) => (
                  <div
                    key={bloc.label}
                    style={{
                      background: bloc.dark ? "var(--color-forest)" : "white",
                      borderRadius: "8px",
                      padding: "16px 12px",
                      textAlign: "center",
                      boxShadow: bloc.dark ? "none" : "0 2px 12px rgba(44,74,62,0.08)",
                      border: bloc.dark ? "none" : "1px solid rgba(44,74,62,0.08)",
                    }}
                  >
                    <div style={{ fontSize: "1.2rem", marginBottom: "6px" }}>{bloc.emoji}</div>
                    <p
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: bloc.dark ? "#F5EFE4" : "var(--color-forest)",
                        marginBottom: "8px",
                        whiteSpace: "pre-line",
                        lineHeight: 1.4,
                      }}
                    >
                      {bloc.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "0.68rem",
                        fontWeight: 300,
                        lineHeight: "1.6",
                        color: bloc.dark ? "rgba(245,239,228,0.7)" : "rgba(44,74,62,0.65)",
                      }}
                    >
                      {bloc.items.join(",\n")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cinq axes pills */}
            <div className="flex flex-wrap gap-2 mt-10 reveal reveal-delay-4">
              {[
                "Accompagnement personnalisé",
                "Analyse transactionnelle",
                "Thérapie brève",
                "Soutien émotionnel",
                "Bien-être & Transformation",
              ].map((axe) => (
                <span
                  key={axe}
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    padding: "4px 12px",
                    borderRadius: "2px",
                    background: "rgba(44,74,62,0.06)",
                    color: "rgba(44,74,62,0.55)",
                  }}
                >
                  {axe}
                </span>
              ))}
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 reveal reveal-delay-4" style={{ borderTop: "1px solid rgba(44,74,62,0.1)" }}>
              {[
                { num: "100%", label: "confidentiel" },
                { num: "1ère", label: "séance d'écoute" },
                { num: "5", label: "axes d'accompagnement" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.8rem",
                      fontWeight: 500,
                      color: "var(--color-terra)",
                    }}
                  >
                    {item.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-jost)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      color: "rgba(44,74,62,0.55)",
                      fontWeight: 400,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end reveal">
            <div className="relative">
              <div
                className="relative w-72 h-96 md:w-80 md:h-[460px] lg:w-[400px] lg:h-[540px] overflow-hidden"
                style={{
                  borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                  boxShadow: "0 40px 80px rgba(44,74,62,0.15)",
                  background: "linear-gradient(135deg, #8B9E8C 0%, #2C4A3E 100%)",
                }}
              >
                <Image
                  src="/images/me.jpeg"
                  alt="Nadia KOUT, psychopraticienne"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 400px"
                  onError={() => {}}
                />
                <div
                  className="absolute inset-0 flex items-end justify-center pb-8"
                  style={{
                    background: "linear-gradient(to top, rgba(44,74,62,0.55) 0%, transparent 50%)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      color: "rgba(245,239,228,0.85)",
                      fontSize: "1.1rem",
                      fontStyle: "italic",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Nadia KOUT
                  </p>
                </div>
              </div>


              <svg className="absolute -right-8 -top-8 opacity-40" width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="#8B9E8C" strokeWidth="0.5" fill="none" strokeDasharray="3 5" />
                <circle cx="50" cy="50" r="30" stroke="#C4774A" strokeWidth="0.5" fill="none" strokeDasharray="2 8" />
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10" style={{ background: "rgba(44,74,62,0.2)", animation: "float 2s ease-in-out infinite" }} />
          <span
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "rgba(44,74,62,0.3)",
              textTransform: "uppercase",
            }}
          >
            Défiler
          </span>
        </div>
      </div>
    </section>
  );
}
