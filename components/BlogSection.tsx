import Link from "next/link";
import { getFeaturedPosts, formatDate } from "@/lib/blog";

export default function BlogSection() {
  const posts = getFeaturedPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-28 lg:py-36" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="section-eyebrow">Ressources</p>
            <h2 className="section-title text-4xl md:text-5xl mt-4">Le blog NHK</h2>
            <span className="deco-line mt-4 inline-block" />
          </div>
          <Link href="/blog" className="btn-outline whitespace-nowrap self-start md:self-end">
            Tous les articles
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Posts */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block card-lift"
              style={{
                background: i === 0 ? "#2C4A3E" : "var(--color-linen)",
                borderRadius: "4px",
                overflow: "hidden",
                textDecoration: "none",
              }}
            >
              {/* Visual header */}
              <div
                style={{
                  height: "160px",
                  background: i === 0 ? "linear-gradient(135deg, #3d6355, #2C4A3E)" : "linear-gradient(135deg, #E6D4C0, #EDE3D4)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 300 160" fill="none" preserveAspectRatio="xMidYMid slice">
                  <circle cx="260" cy="-10" r="90" stroke={i === 0 ? "#F5EFE4" : "#2C4A3E"} strokeWidth="0.5" />
                  <path
                    d="M150 130 C165 105 185 85 175 60 C165 35 145 30 130 48 C115 66 113 90 128 112Z"
                    stroke={i === 0 ? "#C4774A" : "#C4774A"}
                    strokeWidth="0.8"
                    fill="none"
                  />
                </svg>
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "14px",
                    fontFamily: "var(--font-jost)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    padding: "3px 9px",
                    background: i === 0 ? "rgba(245,239,228,0.12)" : "rgba(44,74,62,0.08)",
                    color: i === 0 ? "rgba(245,239,228,0.75)" : "rgba(44,74,62,0.55)",
                    borderRadius: "2px",
                  }}
                >
                  {post.category}
                </span>
              </div>

              <div style={{ padding: "24px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "0.66rem",
                    color: i === 0 ? "rgba(245,239,228,0.35)" : "rgba(44,74,62,0.35)",
                    marginBottom: "8px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {formatDate(post.date)} · {post.readTime}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    lineHeight: "1.3",
                    color: i === 0 ? "#F5EFE4" : "var(--color-forest)",
                    marginBottom: "10px",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontWeight: 300,
                    fontSize: "0.84rem",
                    lineHeight: "1.65",
                    color: i === 0 ? "rgba(245,239,228,0.55)" : "rgba(44,74,62,0.55)",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    marginBottom: "16px",
                  }}
                >
                  {post.excerpt}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-terra)",
                  }}
                >
                  Lire →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
