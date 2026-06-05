# Groupe CTA — Site v2

Refonte du site du **Groupe CTA** (Toulouse) : portail vitrine et plateforme de
redirection vers les 4 sociétés du groupe (CTA Business Travel, CTA Meeting &
Events, CTA Voyages, SOP Events). Design inspiré du thème *Ikonik*.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (config CSS-first dans `src/app/globals.css`)
- **Framer Motion** (animations au scroll)
- **Resend** (envoi des e-mails du formulaire de contact)
- Polices : **Roboto** (titres) + **Open Sans** (textes) via `next/font`

## Démarrage

```bash
npm install
cp .env.example .env.local   # puis renseigner les variables
npm run dev                  # http://localhost:3000
```

## Variables d'environnement

Voir [`.env.example`](.env.example). Le formulaire fonctionne sans clé en
développement (les messages sont alors logués dans la console au lieu d'être envoyés).

## Structure

- `src/lib/site.ts` — **données centralisées** : coordonnées, sociétés, liens de
  redirection, navigation, chiffres clés. **C'est ici qu'on met à jour le contenu.**
- `src/components/` — composants UI, layout (Header/Footer) et sections.
- `src/app/` — pages (App Router), API route `contact`, `sitemap`, `robots`.

## À compléter avant mise en production

- [ ] Remplacer le logo textuel par le **logo officiel** (`src/components/Logo.tsx`).
- [ ] Renseigner les **vraies URLs** des sites des sociétés (`src/lib/site.ts`).
- [ ] Vérifier l'**adresse e-mail** de réception et les **horaires**.
- [ ] Affiner les **coordonnées GPS** pour la carte Google.
- [ ] Compléter les **mentions légales** (SIREN, RCS, directeur de publication).
- [ ] Faire valider la **politique de confidentialité** (RGPD).
- [ ] Remplacer les **avis clients** par de vrais témoignages.
- [ ] Créer la **fiche Google Business Profile** (nom, adresse, photos, lien site).

## Déploiement (Vercel)

1. Pousser le dépôt sur GitHub.
2. Importer le projet sur [vercel.com](https://vercel.com) (détection Next.js auto).
3. Ajouter les variables d'environnement (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`).
4. Déployer puis brancher le domaine `groupe-cta.com`.
