import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts, getRelatedPosts, formatDate } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  params: { slug: string };
}

// ─── Static paths for SSG ────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// ─── Dynamic SEO per article ─────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://NHK-psycho.fr";

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Nadia KOUT", url: siteUrl }],
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "NHK – Nadia KOUT Psychopraticienne",
      title: post.title,
      description: post.excerpt,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
      publishedTime: post.date,
      authors: ["Nadia KOUT"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

// ─── Page component ──────────────────────────────────────────────────────────
export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://NHK-psycho.fr";

  // Article JSON-LD structured data
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Nadia KOUT",
      url: siteUrl,
      jobTitle: "Psychopraticienne",
    },
    publisher: {
      "@type": "Organization",
      name: "NHK – Nadia KOUT Psychopraticienne",
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/${post.slug}` },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    inLanguage: "fr-FR",
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <main style={{ background: "var(--color-linen)", minHeight: "100vh" }}>
        {/* Article header */}
        <header className="pt-36 pb-16" style={{ background: "#2C4A3E" }}>
          <div className="max-w-3xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-8" aria-label="Fil d'ariane">
              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  color: "rgba(245,239,228,0.4)",
                  textDecoration: "none",
                }}
              >
                Accueil
              </Link>
              <span style={{ color: "rgba(245,239,228,0.25)", fontSize: "0.7rem" }}>›</span>
              <Link
                href="/blog"
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  color: "rgba(245,239,228,0.4)",
                  textDecoration: "none",
                }}
              >
                Blog
              </Link>
              <span style={{ color: "rgba(245,239,228,0.25)", fontSize: "0.7rem" }}>›</span>
              <span
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  color: "rgba(245,239,228,0.6)",
                }}
              >
                {post.category}
              </span>
            </nav>

            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  background: "rgba(196,119,74,0.2)",
                  color: "#C4774A",
                  borderRadius: "2px",
                }}
              >
                {post.category}
              </span>
              <div
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "0.72rem",
                  color: "rgba(245,239,228,0.4)",
                  letterSpacing: "0.06em",
                }}
              >
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="mx-2">·</span>
                <span>{post.readTime} de lecture</span>
              </div>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)",
                fontWeight: 400,
                lineHeight: "1.2",
                color: "#F5EFE4",
                marginBottom: "20px",
              }}
            >
              {post.title}
            </h1>

            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontWeight: 300,
                fontSize: "1.05rem",
                lineHeight: "1.75",
                color: "rgba(245,239,228,0.65)",
              }}
            >
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-10 pt-8" style={{ borderTop: "1px solid rgba(245,239,228,0.1)" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(245,239,228,0.1)" }}>
                <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", color: "#F5EFE4" }}>N</span>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.85rem", fontWeight: 500, color: "#F5EFE4" }}>Nadia KOUT</p>
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.7rem", color: "rgba(245,239,228,0.45)", letterSpacing: "0.08em" }}>
                  Psychopraticienne
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article className="py-16">
          <div className="max-w-3xl mx-auto px-6">
            <div
              className="prose-NHK"
              style={{
                fontFamily: "var(--font-jost)",
                fontWeight: 300,
                fontSize: "1.02rem",
                lineHeight: "1.9",
                color: "rgba(44,74,62,0.85)",
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid rgba(44,74,62,0.1)" }}>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "0.72rem",
                    padding: "4px 12px",
                    background: "rgba(44,74,62,0.06)",
                    color: "rgba(44,74,62,0.55)",
                    borderRadius: "2px",
                    letterSpacing: "0.06em",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Author CTA */}
        <section className="py-16" style={{ background: "var(--color-sand)" }}>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "1.6rem",
                fontWeight: 300,
                color: "var(--color-forest)",
                lineHeight: "1.4",
                marginBottom: "20px",
              }}
            >
              Cet article vous a touché·e ?<br />
              Parlons-en ensemble.
            </p>
            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontWeight: 300,
                fontSize: "0.9rem",
                color: "rgba(44,74,62,0.6)",
                marginBottom: "28px",
              }}
            >
              Je propose une première séance d'écoute pour voir si l'accompagnement vous correspond.
            </p>
            <Link href="/#contact" className="btn-primary">
              Prendre rendez-vous
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="py-16" style={{ background: "white" }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <p className="section-eyebrow mb-8" style={{ color: "var(--color-terra)" }}>
                À lire aussi
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex gap-5 p-5 card-lift"
                    style={{ background: "var(--color-linen)", borderRadius: "4px", textDecoration: "none" }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        flexShrink: 0,
                        borderRadius: "4px",
                        background: "linear-gradient(135deg, #E6D4C0, #d9c3a8)",
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-jost)",
                          fontSize: "0.65rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--color-terra)",
                          marginBottom: "6px",
                        }}
                      >
                        {r.category}
                      </p>
                      <h3
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "1.15rem",
                          fontWeight: 500,
                          color: "var(--color-forest)",
                          lineHeight: "1.3",
                        }}
                      >
                        {r.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to blog */}
        <div className="py-10 text-center" style={{ background: "var(--color-linen)" }}>
          <Link href="/blog" className="btn-outline">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Tous les articles
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
