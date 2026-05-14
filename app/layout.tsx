import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nhk-psycho.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NHK – Nadia KOUT · Psychopraticienne | Accompagnement Personnel",
    template: "%s | NHK – Nadia KOUT Psychopraticienne",
  },
  description:
    "Nadia KOUT, Psychopraticienne - Coach de Vie. Accompagnement pour mieux gérer le stress, l'anxiété, le burn-out et retrouver confiance en soi. Séances en cabinet et en visioconférence.",
  keywords: [
    "psychopraticienne",
    "Nadia KOUT",
    "NHK",
    "accompagnement personnel",
    "thérapie brève",
    "burn-out",
    "stress anxiété",
    "confiance en soi",
    "coaching émotionnel",
    "thérapie intégrative",
    "visioconférence",
  ],
  authors: [{ name: "Nadia KOUT", url: siteUrl }],
  creator: "NHK – Nadia KOUT",
  publisher: "NHK – Nadia KOUT Psychopraticienne",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "NHK – Nadia KOUT Psychopraticienne",
    title: "NHK – Nadia KOUT · Psychopraticienne | Se comprendre. Se libérer. Se retrouver.",
    description:
      "Psychopraticienne - Coach de Vie. Accompagnement personnel, relationnel et professionnel — approche intégrative, concrète, orientée solutions. Présentiel & visioconférence.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NHK – Nadia KOUT Psychopraticienne",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NHK – Nadia KOUT · Psychopraticienne",
    description: "Accompagnement personnel avec Nadia KOUT, Psychopraticienne - Coach de Vie. Stress, anxiété, burn-out, confiance en soi.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.svg",
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#nadia`,
      name: "Nadia KOUT",
      jobTitle: "Psychopraticienne",
      description: "Psychopraticienne - Coach de Vie. Approche intégrative issue du coaching et de la thérapie brève.",
      url: siteUrl,
      image: `${siteUrl}/images/nadia-portrait.jpg`,
      knowsAbout: ["Psychopratique", "Thérapie brève", "Coaching", "Gestion du stress", "Burn-out"],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "NHK – Nadia KOUT Psychopraticienne",
      description: "Psychopraticienne - Coach de Vie. Accompagnement personnel, relationnel et professionnel.",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/og-image.jpg`,
      telephone: "[Votre numéro]",
      email: "nhk.psycho@gmail.com",
      priceRange: "€€",
      areaServed: { "@type": "Country", name: "France" },
      serviceType: ["Psychopratique", "Coaching", "Thérapie brève"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Séances d'accompagnement",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Consultation psychopraticienne",
            price: "60",
            priceCurrency: "EUR",
            description: "Séance individuelle de 30 à 40 minutes",
          },
        ],
      },
      founder: { "@id": `${siteUrl}/#nadia` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "NHK – Nadia KOUT Psychopraticienne",
      publisher: { "@id": `${siteUrl}/#nadia` },
      inLanguage: "fr-FR",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
