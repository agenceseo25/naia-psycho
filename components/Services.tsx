"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M7 22 C7 18 10.5 15 14 15 C17.5 15 21 18 21 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M10 11 C11 13 13 14 14 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Accompagnement personnalisé",
    subtitle: "Un chemin qui vous ressemble",
    description:
      "Chaque personne est unique. Nous prenons le temps de comprendre votre situation, vos besoins et vos objectifs afin de construire ensemble un chemin qui vous ressemble.",
    tags: ["Sur-mesure", "Écoute", "Objectifs"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M13 10 L15 10 M10 13 L10 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M13 18 L15 18 M18 13 L18 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Analyse transactionnelle",
    subtitle: "Comprendre vos schémas",
    description:
      "Cette approche permet de mieux comprendre vos modes de fonctionnement, vos schémas relationnels et les scénarios de vie qui peuvent se répéter. Elle vous aide à retrouver davantage de liberté dans vos choix et vos relations.",
    tags: ["Schémas", "Relations", "Liberté"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 20 C6 14 10 8 14 6 C18 8 22 14 22 20" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M10 20 C10 16 12 13 14 12 C16 13 18 16 18 20" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
        <line x1="14" y1="20" x2="14" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Thérapie brève",
    subtitle: "Des changements concrets",
    description:
      "Orientée vers des objectifs concrets, elle vise des changements efficaces en un nombre limité de séances. Nous travaillons sur des solutions adaptées à votre situation actuelle.",
    tags: ["Court terme", "Efficacité", "Solutions"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="5" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M10 11 L18 11 M10 14 L18 14 M10 17 L14 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.15" />
        <path d="M18.5 20 L20 21.5 L22 19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Solutions rapides & concrètes",
    subtitle: "Des outils pour le quotidien",
    description:
      "Vous repartez avec des outils pratiques et applicables dans votre quotidien, pour avancer entre les séances et renforcer votre autonomie.",
    tags: ["Outils", "Autonomie", "Pratique"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 5 C14 5 7 9 7 15 C7 19 10 22 14 22 C18 22 21 19 21 15 C21 9 14 5 14 5Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M11 15 C12 17 13 18 14 18 C15 18 16 17 17 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M14 5 L14 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 2" />
      </svg>
    ),
    title: "Soutien émotionnel",
    subtitle: "Un espace pour vous déposer",
    description:
      "Un espace sécurisant et bienveillant où vous pouvez déposer vos émotions sans jugement. Être entendu(e) et compris(e) est une étape essentielle vers l'apaisement.",
    tags: ["Écoute", "Bienveillance", "Apaisement"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 5 L16.5 10.5 L22.5 11.5 L18.2 15.6 L19.2 21.5 L14 18.7 L8.8 21.5 L9.8 15.6 L5.5 11.5 L11.5 10.5Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="14" cy="14" r="3" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    title: "Bien-être & Transformation",
    subtitle: "Un équilibre durable",
    description:
      "Au-delà de la résolution d'une difficulté, l'objectif est de vous permettre de retrouver confiance, clarté et équilibre, et d'initier une transformation durable dans votre vie.",
    tags: ["Confiance", "Clarté", "Équilibre"],
  },
];

export default function Services() {
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
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="accompagnement" ref={sectionRef} className="py-28 lg:py-36 overflow-hidden" style={{ background: "var(--color-linen)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <p className="section-eyebrow reveal">Accompagnement</p>
          <h2 className="section-title text-4xl md:text-5xl mt-4 mb-5 reveal reveal-delay-1">Mon approche en six axes</h2>
          <span className="deco-line reveal reveal-delay-2 mb-6 inline-block" />
          <p
            className="reveal reveal-delay-3"
            style={{
              fontFamily: "var(--font-jost)",
              fontWeight: 300,
              fontSize: "0.97rem",
              lineHeight: "1.85",
              color: "rgba(44,74,62,0.7)",
            }}
          >
            Je vous accompagne dans votre démarche de changement personnel, relationnel ou professionnel — avec une approche humaine, concrète et
            respectueuse de votre rythme.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${(i % 4) + 1} card-lift group`}
              style={{
                background: i % 3 === 1 ? "var(--color-forest)" : "white",
                padding: "36px",
                borderRadius: "4px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle background shape */}
              <div
                className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-5 transition-all duration-500 group-hover:opacity-10 group-hover:scale-150"
                style={{ background: i % 3 === 1 ? "#F5EFE4" : "var(--color-forest)" }}
              />

              <div style={{ color: "var(--color-terra)" }} className="mb-5">
                {service.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: i % 3 === 1 ? "#F5EFE4" : "var(--color-forest)",
                  marginBottom: "4px",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-terra)",
                  marginBottom: "14px",
                }}
              >
                {service.subtitle}
              </p>

              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontWeight: 300,
                  fontSize: "0.88rem",
                  lineHeight: "1.75",
                  color: i % 3 === 1 ? "rgba(245,239,228,0.7)" : "rgba(44,74,62,0.65)",
                  marginBottom: "16px",
                }}
              >
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-jost)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      padding: "3px 10px",
                      borderRadius: "2px",
                      background: i % 3 === 1 ? "rgba(245,239,228,0.1)" : "rgba(44,74,62,0.06)",
                      color: i % 3 === 1 ? "rgba(245,239,228,0.6)" : "rgba(44,74,62,0.5)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="reveal mt-16 flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-8"
          style={{
            background: "linear-gradient(135deg, #E6D4C0 0%, #EDE3D4 100%)",
            borderRadius: "4px",
          }}
        >
          <div>
            <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", fontWeight: 400, color: "var(--color-forest)" }}>
              Prêt(e) à initier votre transformation ?
            </p>
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.85rem", fontWeight: 300, color: "rgba(44,74,62,0.65)", marginTop: "6px" }}>
              Je peux également intervenir en complément d'un suivi psychologique ou psychiatrique.
            </p>
          </div>
          <a href="#contact" className="btn-primary whitespace-nowrap">
            Prendre rendez-vous
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
