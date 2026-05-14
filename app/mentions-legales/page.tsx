import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales – NHK Nadia KOUT Psychopraticienne",
  description: "Mentions légales du cabinet NHK – Nadia KOUT, psychopraticienne à Massy (91300).",
};

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--color-linen)", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="pt-36 pb-16" style={{ background: "#2C4A3E" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-terra)", marginBottom: "16px" }}>
              Informations légales
            </p>
            <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, color: "#F5EFE4", lineHeight: "1.15" }}>
              Mentions légales
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12" style={{ fontFamily: "var(--font-jost)" }}>

            <article style={{ background: "white", padding: "48px", borderRadius: "4px", boxShadow: "0 4px 40px rgba(44,74,62,0.06)" }}>

              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", color: "var(--color-forest)", marginBottom: "8px", marginTop: "0" }}>
                1. Éditeur du site
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "8px" }}>
                <strong>Nadia KOUT</strong><br />
                Psychopraticienne – Entreprise individuelle<br />
                5 rue Paul Émile Victor – 91300 Massy<br />
                Téléphone : 06.29.14.12.80<br />
                Email : nhk.psycho@gmail.com
              </p>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "32px" }}>
                SIREN : 530 051 044<br />
                SIRET : 530 051 044 00028<br />
                Activité : psychopraticienne, accompagnement psychologique et coaching de vie.
              </p>

              <hr style={{ border: "none", borderTop: "1px solid rgba(44,74,62,0.1)", marginBottom: "32px" }} />

              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", color: "var(--color-forest)", marginBottom: "8px" }}>
                2. Hébergement
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "32px" }}>
                Ce site est hébergé par :<br />
                <strong>Vercel Inc.</strong><br />
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-terra)" }}>vercel.com</a>
              </p>

              <hr style={{ border: "none", borderTop: "1px solid rgba(44,74,62,0.1)", marginBottom: "32px" }} />

              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", color: "var(--color-forest)", marginBottom: "8px" }}>
                3. Propriété intellectuelle
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "32px" }}>
                L&apos;ensemble du contenu de ce site (textes, images, logos, mise en page) est la propriété exclusive de Nadia KOUT ou de ses ayants
                droit. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
              </p>

              <hr style={{ border: "none", borderTop: "1px solid rgba(44,74,62,0.1)", marginBottom: "32px" }} />

              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", color: "var(--color-forest)", marginBottom: "8px" }}>
                4. Données personnelles
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "32px" }}>
                Les données collectées via le formulaire de contact sont traitées dans le seul but de répondre à votre demande. Elles ne sont ni
                cédées ni vendues à des tiers. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression.
                Pour exercer ces droits, contactez : nhk.psycho@gmail.com.
                <br /><br />
                Pour plus d&apos;informations, consultez notre{" "}
                <Link href="/politique-de-confidentialite" style={{ color: "var(--color-terra)" }}>
                  politique de confidentialité
                </Link>.
              </p>

              <hr style={{ border: "none", borderTop: "1px solid rgba(44,74,62,0.1)", marginBottom: "32px" }} />

              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", color: "var(--color-forest)", marginBottom: "8px" }}>
                5. Limitation de responsabilité
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "32px" }}>
                Les informations contenues sur ce site sont fournies à titre indicatif. Nadia KOUT s&apos;efforce d&apos;assurer l&apos;exactitude et
                la mise à jour des informations diffusées. Elle ne saurait être tenue responsable d&apos;erreurs, d&apos;omissions ou d&apos;un
                résultat qui aurait pu être obtenu en utilisant les informations ou données.
              </p>

              <hr style={{ border: "none", borderTop: "1px solid rgba(44,74,62,0.1)", marginBottom: "32px" }} />

              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", color: "var(--color-forest)", marginBottom: "8px" }}>
                6. Droit applicable
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)" }}>
                Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </article>

            <div className="mt-8">
              <Link href="/" style={{ fontFamily: "var(--font-jost)", fontSize: "0.8rem", color: "rgba(44,74,62,0.55)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                ← Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
