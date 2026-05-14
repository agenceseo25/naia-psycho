"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
    <section id="a-propos" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden" style={{ background: "#2C4A3E" }}>
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5"
          style={{ background: "radial-gradient(circle, #F5EFE4 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-8"
          style={{ background: "radial-gradient(circle, #C4774A 0%, transparent 70%)" }}
        />
        {/* Botanical SVG */}
        <svg className="absolute right-8 top-16 opacity-10" width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path
            d="M100 10 C130 30 160 60 150 100 C140 140 110 160 80 150 C50 140 30 110 40 80 C50 50 70 20 100 10Z"
            stroke="#F5EFE4"
            strokeWidth="0.8"
            fill="none"
          />
          <path d="M100 40 C115 55 128 75 120 100 C112 125 92 135 72 126" stroke="#C4774A" strokeWidth="0.8" fill="none" />
          <circle cx="100" cy="100" r="8" fill="none" stroke="#F5EFE4" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Images collage */}
          <div className="reveal relative">
            <div className="relative">
              {/* Main photo */}
              <div
                className="relative w-full aspect-[4/5] overflow-hidden"
                style={{
                  borderRadius: "4px",
                  background: "linear-gradient(135deg, #3d6355 0%, #2C4A3E 100%)",
                }}
              >
                <Image
                  src="/images/psy_photo_2.png"
                  alt="Nadia KOUT en séance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Second smaller photo, overlapping */}
              <div
                className="absolute -bottom-8 -right-8 w-44 h-52 overflow-hidden shadow-2xl border-4"
                style={{
                  borderColor: "#2C4A3E",
                  borderRadius: "4px",
                  background: "linear-gradient(135deg, #C4774A40, #2C4A3E90)",
                }}
              >
                <Image src="/images/psy_photo_4.png" alt="Nadia KOUT portrait" fill className="object-cover" sizes="176px" />
              </div>

              {/* Years badge */}
              <div
                className="absolute -left-6 top-16 px-6 py-5 text-center shadow-xl"
                style={{
                  background: "var(--color-terra)",
                  borderRadius: "2px",
                  minWidth: "120px",
                }}
              ></div>
            </div>
          </div>

          {/* Right: Bio text */}
          <div className="lg:pl-8">
            <p className="section-eyebrow reveal" style={{ color: "#8B9E8C" }}>
              À propos
            </p>
            <h2 className="section-title text-4xl md:text-5xl mt-4 mb-6 reveal reveal-delay-1" style={{ color: "#F5EFE4" }}>
              Qui suis-je ?
            </h2>
            <span className="deco-line reveal reveal-delay-2 mb-8 inline-block" />

            <p
              className="reveal reveal-delay-2 mb-5"
              style={{
                fontFamily: "var(--font-jost)",
                fontWeight: 300,
                fontSize: "0.97rem",
                lineHeight: "1.85",
                color: "rgba(245,239,228,0.75)",
              }}
            >
              Je suis <strong style={{ color: "#E6D4C0", fontWeight: 500 }}>Nadia KOUT</strong>, accompagner l&apos;humain est le fil conducteur de
              mon parcours depuis plus de <strong style={{ color: "#E6D4C0", fontWeight: 500 }}>20 ans</strong>. Aujourd&apos;hui psychopraticienne,
              je mets mon expérience et ma formation au service de ceux qui traversent une période de fragilité, de transition ou de questionnement.
            </p>

            <p
              className="reveal reveal-delay-3 mb-5"
              style={{
                fontFamily: "var(--font-jost)",
                fontWeight: 300,
                fontSize: "0.97rem",
                lineHeight: "1.85",
                color: "rgba(245,239,228,0.75)",
              }}
            >
              Je propose aux adultes, aux couples et aux adolescents un{" "}
              <strong style={{ color: "#E6D4C0", fontWeight: 500 }}>espace d&apos;écoute protégé, confidentiel et sans jugement</strong>.
            </p>

            <p
              className="reveal reveal-delay-4 mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "1.25rem",
                lineHeight: "1.7",
                color: "#E6D4C0",
                borderLeft: "2px solid var(--color-terra)",
                paddingLeft: "20px",
              }}
            >
              &ldquo;Ma pratique ne se limite pas à une seule méthode. Je m&apos;appuie sur une approche pluridisciplinaire (Analyse Transactionnelle,
              Systémie, Thérapie Brève, Coaching...) pour m&apos;adapter précisément à votre problématique.&rdquo;
            </p>

            {/* Pourquoi me consulter */}
            <h3
              className="reveal reveal-delay-5 mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "#F5EFE4",
              }}
            >
              Pourquoi me consulter ?
            </h3>

            <div className="grid grid-cols-2 gap-4 reveal reveal-delay-5">
              {[
                { icon: "◎", label: "Épuisement", desc: "Burn-out, fatigue émotionnelle ou professionnelle" },
                { icon: "◈", label: "Vie relationnelle", desc: "Difficultés de couple ou tensions familiales" },
                { icon: "◉", label: "Adolescence", desc: "Soutien face aux problématiques spécifiques de cet âge" },
                { icon: "◐", label: "Mieux-être", desc: "États dépressifs, perte de repères ou besoin de changement" },
                { icon: "◇", label: "Enfants", desc: "Phobie scolaire, angoisse et confiance en soi chez l'enfant" },
              ].map((v) => (
                <div key={v.label} className="flex items-start gap-3">
                  <span style={{ color: "var(--color-terra)", fontSize: "1rem", marginTop: "2px" }}>{v.icon}</span>
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "#E6D4C0",
                        letterSpacing: "0.04em",
                        display: "block",
                      }}
                    >
                      {v.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "0.78rem",
                        fontWeight: 300,
                        color: "rgba(245,239,228,0.6)",
                        lineHeight: "1.5",
                      }}
                    >
                      {v.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 reveal reveal-delay-5">
              <a href="#contact" className="btn-outline" style={{ borderColor: "rgba(245,239,228,0.3)", color: "#F5EFE4" }}>
                Me contacter
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
