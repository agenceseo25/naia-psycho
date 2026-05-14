import Link from "next/link";

function IconPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: "rgba(245,239,228,0.35)", flexShrink: 0 }}>
      <path
        d="M8 1.5C5.79 1.5 4 3.29 4 5.5c0 3.5 4 9 4 9s4-5.5 4-9c0-2.21-1.79-3.75-4-3.75zM8 7.25a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z"
        fill="currentColor"
      />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: "rgba(245,239,228,0.35)", flexShrink: 0 }}>
      <path
        d="M13.3 10.5c-.9-.8-1.8-1.2-2.6-.8l-.8.5c-.4.2-.9.1-1.2-.2L6.1 7.3c-.3-.3-.4-.8-.2-1.2l.5-.8c.4-.8 0-1.7-.8-2.6l-.3-.3C4.7 1.9 3.7 1.7 3 2.3L2 3.3c-.7.7-.8 2 .1 3.8 1.1 2.2 2.7 4 4.8 5.2 1.8.9 3.1.8 3.8.1l1-1c.6-.7.4-1.7-.1-2.3l-.3-.6z"
        fill="currentColor"
      />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: "rgba(245,239,228,0.35)", flexShrink: 0 }}>
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M1.5 5l6.5 4.5L14.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function IconVideo() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: "rgba(245,239,228,0.35)", flexShrink: 0 }}>
      <rect x="1" y="4" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M11 6.5l3.5-2v7L11 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#1a2e26" }}>
      {/* CTA Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, var(--color-terra), #a8633a)",
          padding: "64px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(245,239,228,0.7)",
              marginBottom: "16px",
            }}
          >
            Prêt·e à commencer ?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "#F5EFE4",
              lineHeight: "1.2",
              marginBottom: "32px",
            }}
          >
            Un premier échange pour voir si l'accompagnement <br className="hidden md:block" />
            vous correspond — <em>sans engagement.</em>
          </h2>
          <a
            href="https://perfactive.fr/nhk-psycho/nadia-kout-1/book"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 40px",
              background: "#F5EFE4",
              color: "var(--color-forest)",
              fontFamily: "var(--font-jost)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderRadius: "2px",
              transition: "all 0.3s",
            }}
          >
            Prendre rendez-vous
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="16" stroke="#8B9E8C" strokeWidth="0.5" strokeDasharray="2 3" />
                <path d="M18 6 C22 10, 26 13, 24 18 C22 23, 18 26, 14 24 C10 22, 8 18, 10 14 C12 10, 15 8, 18 6Z" fill="#2C4A3E" opacity="0.3" />
                <path d="M18 6 C22 10, 26 13, 24 18 C22 23, 18 26, 14 24" stroke="#8B9E8C" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                <circle cx="18" cy="18" r="2" fill="#C4774A" />
              </svg>
              <div>
                <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", letterSpacing: "0.2em", color: "#F5EFE4", display: "block" }}>
                  NHK
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.18em",
                    color: "rgba(245,239,228,0.35)",
                    textTransform: "uppercase",
                  }}
                >
                  Nadia KOUT · Psychopraticienne
                </span>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-jost)", fontWeight: 300, fontSize: "0.85rem", lineHeight: "1.8", color: "rgba(245,239,228,0.5)" }}>
              Accompagnement personnel, relationnel et professionnel, approche intégrative.
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "rgba(245,239,228,0.4)",
                marginTop: "12px",
              }}
            >
              "Se comprendre. Se libérer. Se retrouver."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(245,239,228,0.35)",
                marginBottom: "16px",
              }}
            >
              Navigation
            </p>
            <nav className="space-y-3">
              {[
                ["#a-propos", "À propos"],
                ["#accompagnement", "Accompagnement"],
                ["#processus", "Comment ça marche"],
                ["#tarifs", "Tarifs"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "0.87rem",
                    fontWeight: 300,
                    color: "rgba(245,239,228,0.55)",
                    display: "block",
                    transition: "color 0.2s",
                  }}
                  className="hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(245,239,228,0.35)",
                marginBottom: "16px",
              }}
            >
              Contact
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <IconPin />
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.87rem", fontWeight: 300, color: "rgba(245,239,228,0.55)" }}>
                  5 rue Paul Émile Victor - 91300 Massy
                </p>
              </div>
              <div className="flex items-center gap-3">
                <IconPhone />
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.87rem", fontWeight: 300, color: "rgba(245,239,228,0.55)" }}>
                  06.29.14.12.80
                </p>
              </div>
              <div className="flex items-center gap-3">
                <IconMail />
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.87rem", fontWeight: 300, color: "rgba(245,239,228,0.55)" }}>
                  nhk.psycho@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3">
                <IconVideo />
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.87rem", fontWeight: 300, color: "rgba(245,239,228,0.55)" }}>
                  Présentiel & visioconférence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid rgba(245,239,228,0.08)" }}>
          <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "rgba(245,239,228,0.25)" }}>
            © {new Date().getFullYear()} NHK – Nadia KOUT Psychopraticienne. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {[
              ["/mentions-legales", "Mentions légales"],
              ["/politique-de-confidentialite", "Politique de confidentialité"],
            ].map(([href, label]) => (
              <a
                key={label}
                href={href}
                style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "rgba(245,239,228,0.25)", transition: "color 0.2s" }}
                className="hover:text-white/50"
              >
                {label}
              </a>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.65rem", color: "rgba(245,239,228,0.15)", fontStyle: "italic" }}>
            Approche intégrative
          </p>
        </div>
      </div>
    </footer>
  );
}
