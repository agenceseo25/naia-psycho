"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  nom: z.string().min(2, "Veuillez indiquer votre nom"),
  email: z.string().email("Adresse e-mail invalide"),
  telephone: z.string().optional(),
  sujet: z.enum(["individuel", "couple", "adolescent", "professionnel", "autre"]),
  message: z.string().min(20, "Votre message doit comporter au moins 20 caractères"),
  format: z.enum(["presentiel", "visio", "indifferent"]),
  rgpd: z.literal(true, { errorMap: () => ({ message: "Veuillez accepter pour continuer" }) }),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const selectedFormat = watch("format");

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

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden" style={{ background: "var(--color-linen)" }}>
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute right-0 bottom-0 w-[600px] h-[600px]"
          style={{ background: "radial-gradient(circle at 80% 80%, rgba(44,74,62,0.06), transparent 60%)" }}
        />
        <svg className="absolute left-10 top-20 opacity-8" width="160" height="160" viewBox="0 0 160 160" fill="none">
          <path
            d="M80 10 C110 25 140 55 130 80 C120 105 90 120 65 110 C40 100 25 70 35 45 C45 20 60 10 80 10Z"
            stroke="#2C4A3E"
            strokeWidth="0.5"
            fill="none"
          />
          <path d="M80 30 C100 42 115 62 106 80 C97 98 76 104 60 96" stroke="#C4774A" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left info panel */}
          <div className="lg:col-span-2">
            <p className="section-eyebrow reveal">Contact</p>
            <h2 className="section-title text-4xl md:text-5xl mt-4 mb-5 reveal reveal-delay-1">Une question ?</h2>
            <span className="deco-line reveal reveal-delay-2 mb-6 inline-block" />

            <p
              className="reveal reveal-delay-2 mb-10"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300, fontSize: "0.95rem", lineHeight: "1.85", color: "rgba(44,74,62,0.7)" }}
            >
              Envoyez-moi un message pour toute demande de renseignements. Je vous répondrai dans les 48 heures.
            </p>

            <div className="space-y-6 reveal reveal-delay-3">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M9 2C6.24 2 4 4.24 4 7c0 4.25 5 9.5 5 9.5S14 11.25 14 7c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 9 5a1.5 1.5 0 0 1 0 3z"
                        fill="currentColor"
                        opacity="0.7"
                      />
                    </svg>
                  ),
                  label: "Cabinet",
                  value: "5 rue Paul Émile Victor - 91300 Massy",
                  sublabel: "Présentiel",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M14 12.5c-.75 0-1.5-.125-2.2-.35-.225-.075-.475-.025-.65.15l-1.225 1.225C8.3 12.7 6.3 10.7 5.475 9.075L6.7 7.85c.175-.175.225-.425.15-.65C6.625 6.5 6.5 5.75 6.5 5c0-.275-.225-.5-.5-.5H4c-.275 0-.5.225-.5.5C3.5 10.8 8.2 15.5 14 15.5c.275 0 .5-.225.5-.5V13c0-.275-.225-.5-.5-.5z"
                        fill="currentColor"
                        opacity="0.7"
                      />
                    </svg>
                  ),
                  label: "Téléphone",
                  value: "06.29.14.12.80",
                  sublabel: "Du lundi au vendredi",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="1.5" y="4" width="15" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                      <path d="M1.5 6.5l7.5 4.5 7.5-4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  ),
                  label: "Email",
                  value: "nhk.psycho@gmail.com",
                  sublabel: "Réponse sous 48h",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ background: "rgba(44,74,62,0.07)", borderRadius: "2px", color: "var(--color-forest)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(44,74,62,0.45)",
                      }}
                    >
                      {item.label}
                    </p>
                    <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.9rem", color: "var(--color-forest)", fontWeight: 400 }}>{item.value}</p>
                    <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "rgba(44,74,62,0.45)" }}>{item.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 reveal reveal-delay-2">
            <div
              style={{
                background: "white",
                padding: "48px",
                borderRadius: "4px",
                boxShadow: "0 4px 40px rgba(44,74,62,0.06)",
              }}
            >
              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ background: "rgba(44,74,62,0.08)", borderRadius: "50%" }}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M5 14L11 20L23 8" stroke="var(--color-forest)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2rem", color: "var(--color-forest)", marginBottom: "12px" }}>
                    Message envoyé !
                  </h3>
                  <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.9rem", color: "rgba(44,74,62,0.65)", lineHeight: "1.7" }}>
                    Merci pour votre message. Je vous répondrai dans les 48 heures.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="form-label"
                        style={{
                          fontFamily: "var(--font-jost)",
                          fontSize: "0.7rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "rgba(44,74,62,0.5)",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        Nom complet *
                      </label>
                      <input {...register("nom")} placeholder="Votre nom" className="form-input" />
                      {errors.nom && (
                        <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "#d44", marginTop: "4px" }}>{errors.nom.message}</p>
                      )}
                    </div>
                    <div>
                      <label
                        style={{
                          fontFamily: "var(--font-jost)",
                          fontSize: "0.7rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "rgba(44,74,62,0.5)",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        Email *
                      </label>
                      <input {...register("email")} type="email" placeholder="votre@email.fr" className="form-input" />
                      {errors.email && (
                        <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "#d44", marginTop: "4px" }}>{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        style={{
                          fontFamily: "var(--font-jost)",
                          fontSize: "0.7rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "rgba(44,74,62,0.5)",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        Téléphone
                      </label>
                      <input {...register("telephone")} type="tel" placeholder="06 XX XX XX XX" className="form-input" />
                    </div>
                    <div>
                      <label
                        style={{
                          fontFamily: "var(--font-jost)",
                          fontSize: "0.7rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "rgba(44,74,62,0.5)",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        Type d&apos;accompagnement *
                      </label>
                      <select {...register("sujet")} className="form-input" style={{ cursor: "pointer" }}>
                        <option value="">Choisir...</option>
                        <option value="individuel">Individuel – adulte</option>
                        <option value="couple">Couple</option>
                        <option value="adolescent">Adolescent</option>
                        <option value="professionnel">Professionnel</option>
                        <option value="autre">Autre / Je ne sais pas</option>
                      </select>
                      {errors.sujet && (
                        <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "#d44", marginTop: "4px" }}>{errors.sujet.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(44,74,62,0.5)",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      Format souhaité *
                    </label>
                    <div className="flex gap-3 flex-wrap">
                      {[
                        { value: "presentiel", label: "En cabinet" },
                        { value: "visio", label: "Visioconférence" },
                        { value: "indifferent", label: "Peu importe" },
                      ].map((opt) => {
                        const isSelected = selectedFormat === opt.value;
                        return (
                          <label
                            key={opt.value}
                            className="cursor-pointer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "8px",
                              padding: "10px 18px",
                              borderRadius: "4px",
                              border: isSelected ? "1.5px solid var(--color-terra)" : "1.5px solid rgba(44,74,62,0.15)",
                              background: isSelected ? "rgba(196,119,74,0.06)" : "transparent",
                              transition: "all 0.25s ease",
                            }}
                          >
                            <input {...register("format")} type="radio" value={opt.value} className="sr-only" />
                            {/* Custom radio dot */}
                            <span
                              style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "50%",
                                border: isSelected ? "1.5px solid var(--color-terra)" : "1.5px solid rgba(44,74,62,0.25)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                transition: "all 0.25s ease",
                              }}
                            >
                              {isSelected && (
                                <span
                                  style={{
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    background: "var(--color-terra)",
                                  }}
                                />
                              )}
                            </span>
                            <span
                              style={{
                                fontFamily: "var(--font-jost)",
                                fontSize: "0.83rem",
                                fontWeight: isSelected ? 450 : 400,
                                color: isSelected ? "var(--color-forest)" : "rgba(44,74,62,0.6)",
                                transition: "all 0.25s ease",
                              }}
                            >
                              {opt.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                    {errors.format && (
                      <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "#d44", marginTop: "4px" }}>{errors.format.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(44,74,62,0.5)",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      Votre message *
                    </label>
                    <textarea
                      {...register("message")}
                      placeholder="Décrivez brièvement ce qui vous amène, ou posez vos questions..."
                      className="form-input form-textarea"
                      rows={5}
                    />
                    {errors.message && (
                      <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "#d44", marginTop: "4px" }}>{errors.message.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input {...register("rgpd")} type="checkbox" className="mt-1 shrink-0" />
                      <span
                        style={{
                          fontFamily: "var(--font-jost)",
                          fontSize: "0.78rem",
                          fontWeight: 300,
                          color: "rgba(44,74,62,0.6)",
                          lineHeight: "1.6",
                        }}
                      >
                        J&apos;accepte que mes données personnelles soient utilisées uniquement dans le cadre de ma demande de rendez-vous,
                        conformément à la politique de confidentialité du cabinet.
                      </span>
                    </label>
                    {errors.rgpd && (
                      <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "#d44", marginTop: "4px" }}>{errors.rgpd.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full justify-center"
                    style={{ opacity: status === "sending" ? 0.7 : 1 }}
                  >
                    {status === "sending" ? (
                      <>
                        Envoi en cours...
                        <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle
                            cx="7"
                            cy="7"
                            r="5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeDasharray="15"
                            strokeDashoffset="5"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        Envoyer ma demande
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.82rem", color: "#d44", textAlign: "center" }}>
                      Une erreur est survenue. Veuillez réessayer ou m&apos;écrire directement par email.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
