import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité – NHK Nadia KOUT Psychopraticienne",
  description: "Politique de confidentialité et traitement des données personnelles du cabinet NHK – Nadia KOUT, psychopraticienne.",
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--color-linen)", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="pt-36 pb-16" style={{ background: "#2C4A3E" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-terra)", marginBottom: "16px" }}>
              RGPD & Confidentialité
            </p>
            <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, color: "#F5EFE4", lineHeight: "1.15" }}>
              Politique de confidentialité
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12" style={{ fontFamily: "var(--font-jost)" }}>

            <article style={{ background: "white", padding: "48px", borderRadius: "4px", boxShadow: "0 4px 40px rgba(44,74,62,0.06)" }}>

              <p style={{ fontSize: "0.88rem", lineHeight: "1.8", color: "rgba(44,74,62,0.55)", marginBottom: "32px", fontStyle: "italic" }}>
                Dernière mise à jour : mai 2025
              </p>

              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", color: "var(--color-forest)", marginBottom: "8px", marginTop: "0" }}>
                1. Responsable du traitement
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "32px" }}>
                <strong>Nadia KOUT</strong> – Psychopraticienne (entreprise individuelle)<br />
                5 rue Paul Émile Victor – 91300 Massy<br />
                SIRET : 530 051 044 00028<br />
                Contact : nhk.psycho@gmail.com
              </p>

              <hr style={{ border: "none", borderTop: "1px solid rgba(44,74,62,0.1)", marginBottom: "32px" }} />

              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", color: "var(--color-forest)", marginBottom: "8px" }}>
                2. Données collectées
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "16px" }}>
                Dans le cadre du formulaire de contact, les données suivantes sont collectées :
              </p>
              <ul style={{ fontSize: "0.92rem", lineHeight: "2", color: "rgba(44,74,62,0.75)", marginBottom: "32px", paddingLeft: "20px" }}>
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone (facultatif)</li>
                <li>Type d&apos;accompagnement souhaité</li>
                <li>Format de séance préféré</li>
                <li>Contenu du message</li>
              </ul>

              <hr style={{ border: "none", borderTop: "1px solid rgba(44,74,62,0.1)", marginBottom: "32px" }} />

              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", color: "var(--color-forest)", marginBottom: "8px" }}>
                3. Finalités du traitement
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "32px" }}>
                Les données collectées sont utilisées exclusivement pour :
              </p>
              <ul style={{ fontSize: "0.92rem", lineHeight: "2", color: "rgba(44,74,62,0.75)", marginBottom: "32px", paddingLeft: "20px" }}>
                <li>Répondre à votre demande de contact ou de renseignements</li>
                <li>Organiser un premier échange ou une séance</li>
                <li>Assurer le suivi de la relation thérapeutique</li>
              </ul>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "32px" }}>
                Aucune donnée n&apos;est vendue, louée ou transmise à des tiers à des fins commerciales.
              </p>

              <hr style={{ border: "none", borderTop: "1px solid rgba(44,74,62,0.1)", marginBottom: "32px" }} />

              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", color: "var(--color-forest)", marginBottom: "8px" }}>
                4. Base légale
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "32px" }}>
                Le traitement de vos données repose sur votre <strong>consentement explicite</strong> donné lors de la soumission du formulaire
                (article 6.1.a du RGPD).
              </p>

              <hr style={{ border: "none", borderTop: "1px solid rgba(44,74,62,0.1)", marginBottom: "32px" }} />

              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", color: "var(--color-forest)", marginBottom: "8px" }}>
                5. Durée de conservation
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "32px" }}>
                Les données sont conservées pour la durée nécessaire à la gestion de votre demande et, en cas de suivi, pendant la durée de la
                relation thérapeutique puis archivées pour une durée maximale de <strong>3 ans</strong> après le dernier contact.
              </p>

              <hr style={{ border: "none", borderTop: "1px solid rgba(44,74,62,0.1)", marginBottom: "32px" }} />

              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", color: "var(--color-forest)", marginBottom: "8px" }}>
                6. Vos droits
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "16px" }}>
                Conformément au RGPD (Règlement UE 2016/679), vous disposez des droits suivants :
              </p>
              <ul style={{ fontSize: "0.92rem", lineHeight: "2", color: "rgba(44,74,62,0.75)", marginBottom: "16px", paddingLeft: "20px" }}>
                <li><strong>Droit d&apos;accès</strong> : obtenir une copie de vos données</li>
                <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
                <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
                <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement</li>
                <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              </ul>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "32px" }}>
                Pour exercer ces droits, contactez-nous à : <strong>nhk.psycho@gmail.com</strong><br />
                En cas de litige, vous pouvez saisir la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-terra)" }}>CNIL</a>.
              </p>

              <hr style={{ border: "none", borderTop: "1px solid rgba(44,74,62,0.1)", marginBottom: "32px" }} />

              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", color: "var(--color-forest)", marginBottom: "8px" }}>
                7. Sécurité
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)", marginBottom: "32px" }}>
                Les données transitent via HTTPS (connexion chiffrée). Les emails sont transmis via Resend, service sécurisé et conforme au RGPD.
                Aucune donnée sensible (numéro de sécurité sociale, données de santé détaillées) n&apos;est collectée via ce formulaire.
              </p>

              <hr style={{ border: "none", borderTop: "1px solid rgba(44,74,62,0.1)", marginBottom: "32px" }} />

              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem", color: "var(--color-forest)", marginBottom: "8px" }}>
                8. Cookies
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.85", color: "rgba(44,74,62,0.75)" }}>
                Ce site n&apos;utilise pas de cookies publicitaires ou de traceurs tiers. Seuls des cookies techniques strictement nécessaires
                au fonctionnement du site peuvent être utilisés.
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
