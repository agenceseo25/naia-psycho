"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Premier contact",
    description:
      "Un échange téléphonique ou par message pour vous présenter, parler de votre situation et voir si l'accompagnement vous correspond. Sans engagement.",
    duration: "15 min",
    durationLabel: "gratuit",
  },
  {
    number: "02",
    title: "Première séance d'écoute",
    description:
      "Nous prenons le temps de comprendre votre situation, vos difficultés et vos attentes. Ensemble, nous définissons l'objectif précis que vous souhaitez atteindre.",
    duration: "45 min à 1H",
    durationLabel: "séance initiale",
  },
  {
    number: "03",
    title: "Travail en profondeur",
    description:
      "Séance après séance, nous explorons les schémas qui vous freinent. J'utilise des techniques alliant la parole à l'action pour un changement concret.",
    duration: "45 min à 1H",
    durationLabel: "par séance",
  },
  {
    number: "04",
    title: "Mise en action",
    description:
      "Entre chaque séance, vous expérimentez de nouveaux comportements dans votre quotidien. Nous faisons le point, ajustons, consolidons les avancées.",
    duration: "À votre rythme",
    durationLabel: "sans engagement",
  },
];

export default function Process() {
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
    <section id="processus" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden" style={{ background: "var(--color-sand)" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute left-0 top-0 opacity-5" width="400" height="400" viewBox="0 0 400 400" fill="none">
          <path
            d="M200 20 C280 60 340 140 320 200 C300 260 220 300 160 280 C100 260 60 180 80 120 C100 60 160 20 200 20Z"
            stroke="#2C4A3E"
            strokeWidth="1"
            fill="#2C4A3E"
          />
        </svg>
        <svg className="absolute right-8 bottom-8 opacity-8" width="240" height="240" viewBox="0 0 240 240" fill="none">
          <circle cx="120" cy="120" r="110" stroke="#2C4A3E" strokeWidth="0.5" fill="none" strokeDasharray="3 7" />
          <circle cx="120" cy="120" r="75" stroke="#C4774A" strokeWidth="0.5" fill="none" strokeDasharray="2 10" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="section-eyebrow reveal">Comment ça se passe</p>
          <h2 className="section-title text-4xl md:text-5xl mt-4 mb-5 reveal reveal-delay-1">Le déroulement de l'accompagnement</h2>
          <span className="deco-line reveal reveal-delay-2 mb-6 inline-block" />
          <p
            className="reveal reveal-delay-3"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 300, fontSize: "0.97rem", lineHeight: "1.85", color: "rgba(44,74,62,0.7)" }}
          >
            Chaque séance se déroule dans un espace d'écoute confidentiel, bienveillant et sans jugement. Les séances s'adaptent à votre rythme et à
            vos besoins, sans engagement de durée.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div
            className="absolute top-12 left-16 right-16 h-px hidden lg:block"
            style={{ background: "linear-gradient(90deg, transparent, rgba(44,74,62,0.15), transparent)" }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className={`reveal reveal-delay-${i + 1} relative`}>
                {/* Step number */}
                <div className="mb-6 relative">
                  <div
                    className="w-24 h-24 flex items-center justify-center rounded-full border relative"
                    style={{ borderColor: "rgba(44,74,62,0.15)", background: "rgba(255,255,255,0.6)" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "2rem",
                        fontWeight: 300,
                        color: "var(--color-terra)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.35rem",
                    fontWeight: 500,
                    color: "var(--color-forest)",
                    marginBottom: "10px",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontWeight: 300,
                    fontSize: "0.87rem",
                    lineHeight: "1.75",
                    color: "rgba(44,74,62,0.65)",
                    marginBottom: "14px",
                  }}
                >
                  {step.description}
                </p>

                <div className="flex items-center gap-2">
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      color: "var(--color-forest)",
                    }}
                  >
                    {step.duration}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-jost)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(44,74,62,0.4)",
                    }}
                  >
                    / {step.durationLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy quote */}
        <div className="reveal mt-20 text-center max-w-3xl mx-auto">
          <svg className="mx-auto mb-6 opacity-20" width="40" height="30" viewBox="0 0 40 30" fill="none">
            <path d="M0 30 C0 18 6 8 18 0 L20 4 C12 10 8 17 8 24 L16 24 L16 30 Z" fill="#2C4A3E" />
            <path d="M22 30 C22 18 28 8 40 0 L42 4 C34 10 30 17 30 24 L38 24 L38 30 Z" fill="#2C4A3E" />
          </svg>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "1.7rem",
              fontWeight: 300,
              lineHeight: "1.5",
              color: "var(--color-forest)",
            }}
          >
            Ce travail ne vise pas seulement à aller mieux, mais à{" "}
            <em style={{ color: "var(--color-terra)" }}>retrouver de la liberté, de la fluidité et de la vitalité</em>, dans votre vie et dans vos
            relations, qu’il s’agisse de vous-même ou de votre couple.
          </p>
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(44,74,62,0.4)",
              marginTop: "16px",
            }}
          >
            — Nadia KOUT
          </p>
        </div>
      </div>
    </section>
  );
}
