# NAIA – Site Nadia KOUT Psychopraticienne

Site vitrine Next.js 14 pour Nadia KOUT, psychopraticienne.

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS + CSS custom properties
- **Formulaire** : React Hook Form + Zod (validation)
- **Email** : Nodemailer (compatible Gmail, Brevo, Resend, SMTP)
- **SEO** : Metadata API Next.js, structured data JSON-LD, OG tags
- **Fonts** : Cormorant Garamond + Jost (Google Fonts)

## Installation

```bash
# Cloner le projet
git clone ...

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.local.example .env.local
# → Remplir vos identifiants SMTP dans .env.local

# Lancer en développement
npm run dev

# Build production
npm run build
npm run start
```

## Structure des fichiers

```
app/
  layout.tsx          → Métadonnées SEO globales, fonts, JSON-LD
  page.tsx            → Page d'accueil (assemblage des sections)
  globals.css         → Variables CSS, classes utilitaires, animations
  api/
    contact/
      route.ts        → API route formulaire de contact (envoi email)

components/
  Header.tsx          → Navigation fixe + menu mobile
  Hero.tsx            → Section hero avec photo principale
  About.tsx           → Présentation Nadia + valeurs
  Services.tsx        → Cards accompagnement (6 thématiques)
  Process.tsx         → Étapes de la démarche (4 steps)
  Pricing.tsx         → Tarifs + galerie photos
  ContactForm.tsx     → Formulaire de contact + validation
  Footer.tsx          → Footer + CTA banner

public/
  images/             → Vos photos à placer ici
```

## Ajouter vos photos

Placez vos photos dans `public/images/` en respectant ces noms :

| Fichier | Description |
|---------|-------------|
| `nadia-portrait.jpg` | Photo principale (Hero) – format portrait |
| `nadia-cabinet.jpg` | Photo en séance / cabinet (About) |
| `nadia-portrait-2.jpg` | 2e portrait (About, petite vignette) |
| `gallery-1.jpg` | Photo galerie (format portrait) |
| `gallery-2.jpg` | Photo galerie |
| `gallery-3.jpg` | Photo galerie |
| `gallery-4.jpg` | Photo galerie (format paysage) |
| `og-image.jpg` | Image Open Graph (1200×630) |

**Conseil** : photos lumineuses, naturelles, warm tones – en cohérence avec la palette vert/terracotta/lin.

## SEO

À personnaliser dans `app/layout.tsx` :
- `metadataBase` : votre domaine
- `description` : mots-clés de votre ville/zone
- `verification.google` : code Google Search Console
- `telephone` et `email` dans le JSON-LD

## Déploiement

Le projet est prêt pour **Vercel** (recommandé) :

```bash
npm install -g vercel
vercel
```

Ajoutez vos variables d'environnement dans le tableau de bord Vercel.

## Personnalisation

Toutes les couleurs sont définies dans `tailwind.config.ts` et `app/globals.css` via CSS variables :
- `--color-forest` : vert profond (#2C4A3E)
- `--color-terra` : terracotta (#C4774A)
- `--color-linen` : lin (#F5EFE4)
- `--color-sand` : sable (#E6D4C0)
