import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, ALL_CATEGORIES, formatDate } from "@/lib/blog";
import type { BlogCategory } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog – Articles sur le bien-être et l'accompagnement",
  description:
    "Articles de Nadia KOUT, psychopraticienne : stress, anxiété, burn-out, confiance en soi, relations. Des ressources concrètes pour mieux vous comprendre.",
  openGraph: {
    title: "Blog NHK – Ressources & Articles de Nadia KOUT Psychopraticienne",
    description: "Articles sur le stress, le burn-out, la confiance en soi et les relations. Ressources pratiques par Nadia KOUT, psychopraticienne.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  "Stress & Anxiété": "#2C4A3E",
  "Confiance en soi": "#C4774A",
  Relations: "#8B9E8C",
  "Burn-out": "#6B4C3B",
  "Développement personnel": "#4A6741",
  Parentalité: "#7A6B4A",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main style={{ background: "var(--color-linen)", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="pt-36 pb-20" style={{ background: "#2C4A3E" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--color-terra)",
                  marginBottom: "16px",
                }}
              >
                Ressources & réflexions
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 300,
                  color: "#F5EFE4",
                  lineHeight: "1.15",
                  marginBottom: "20px",
                }}
              >
                Le blog NHK
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontWeight: 300,
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  color: "rgba(245,239,228,0.65)",
                }}
              >
                Des articles pour mieux comprendre vos émotions, vos relations et les outils qui peuvent vous aider à avancer — écrits avec sincérité
                et sans jargon.
              </p>
            </div>
          </div>
        </section>

        {/* Category filter pills */}
        <section className="py-8 border-b" style={{ background: "white", borderColor: "rgba(44,74,62,0.08)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap gap-3 items-center">
            <span
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "0.68rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(44,74,62,0.4)",
                marginRight: "8px",
              }}
            >
              Thèmes :
            </span>
            {ALL_CATEGORIES.map((cat) => (
              <span
                key={cat}
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "0.75rem",
                  padding: "5px 14px",
                  borderRadius: "2px",
                  background: "rgba(44,74,62,0.05)",
                  color: "rgba(44,74,62,0.65)",
                  letterSpacing: "0.04em",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {posts.length === 0 ? (
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                  color: "rgba(44,74,62,0.4)",
                  textAlign: "center",
                  padding: "60px 0",
                }}
              >
                Les premiers articles arrivent bientôt…
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block card-lift"
                    style={{
                      background: i === 0 ? "#2C4A3E" : "white",
                      borderRadius: "4px",
                      overflow: "hidden",
                      textDecoration: "none",
                    }}
                  >
                    {/* Cover image placeholder */}
                    <div
                      className="relative"
                      style={{
                        height: i === 0 ? "220px" : "180px",
                        background: i === 0 ? "linear-gradient(135deg, #3d6355, #2C4A3E)" : "linear-gradient(135deg, #E6D4C0, #F5EFE4)",
                        overflow: "hidden",
                      }}
                    >
                      {/* Decorative botanical SVG in cover */}
                      <svg
                        className="absolute inset-0 w-full h-full opacity-10"
                        viewBox="0 0 400 220"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                      >
                        <circle cx="350" cy="-20" r="120" stroke={i === 0 ? "#F5EFE4" : "#2C4A3E"} strokeWidth="0.5" />
                        <circle cx="350" cy="-20" r="80" stroke={i === 0 ? "#C4774A" : "#C4774A"} strokeWidth="0.5" />
                        <path
                          d="M200 180 C220 150 250 120 240 90 C230 60 200 50 180 70 C160 90 155 120 175 145Z"
                          stroke={i === 0 ? "#F5EFE4" : "#2C4A3E"}
                          strokeWidth="0.8"
                          fill="none"
                        />
                      </svg>

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          style={{
                            fontFamily: "var(--font-jost)",
                            fontSize: "0.62rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            padding: "3px 10px",
                            background: i === 0 ? "rgba(245,239,228,0.15)" : "rgba(44,74,62,0.1)",
                            color: i === 0 ? "rgba(245,239,228,0.8)" : "rgba(44,74,62,0.6)",
                            borderRadius: "2px",
                          }}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: "28px" }}>
                      <div
                        className="flex items-center gap-3 mb-3"
                        style={{
                          fontFamily: "var(--font-jost)",
                          fontSize: "0.68rem",
                          color: i === 0 ? "rgba(245,239,228,0.4)" : "rgba(44,74,62,0.4)",
                          letterSpacing: "0.08em",
                        }}
                      >
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span>·</span>
                        <span>{post.readTime} de lecture</span>
                      </div>

                      <h2
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "1.35rem",
                          fontWeight: 500,
                          lineHeight: "1.3",
                          color: i === 0 ? "#F5EFE4" : "var(--color-forest)",
                          marginBottom: "10px",
                          transition: "color 0.2s",
                        }}
                      >
                        {post.title}
                      </h2>

                      <p
                        style={{
                          fontFamily: "var(--font-jost)",
                          fontWeight: 300,
                          fontSize: "0.87rem",
                          lineHeight: "1.7",
                          color: i === 0 ? "rgba(245,239,228,0.65)" : "rgba(44,74,62,0.6)",
                          marginBottom: "20px",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2" style={{ color: "var(--color-terra)" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-jost)",
                            fontSize: "0.72rem",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          Lire l'article
                        </span>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16" style={{ background: "var(--color-sand)" }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.8rem",
                fontWeight: 300,
                color: "var(--color-forest)",
                marginBottom: "16px",
              }}
            >
              Un article vous a parlé ? Allons plus loin ensemble.
            </p>
            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontWeight: 300,
                fontSize: "0.92rem",
                color: "rgba(44,74,62,0.6)",
                marginBottom: "32px",
              }}
            >
              Prendre rendez-vous pour une première séance d'écoute — sans engagement.
            </p>
            <Link href="/#contact" className="btn-primary">
              Prendre rendez-vous
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
