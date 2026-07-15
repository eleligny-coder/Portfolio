# Portfolio — Élie Leligny

Portfolio professionnel hybride : études de cas, vitrine de consultant, catalogue de formations, CV en ligne et présentation de Livré d’un Clic SASU.

## Positionnement

**Full Stack Product Builder — Consultant SaaS, IA & automatisation**

Le site démontre la capacité à comprendre un métier, structurer un MVP, construire le produit, sécuriser les workflows et préparer son lancement.

## Stack

- Next.js 16
- React 19
- TypeScript strict
- CSS natif maintenable
- API Route contact
- Resend pour l’envoi d’emails
- Vercel pour le déploiement

## Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Vérification

```bash
npm run check
```

## Routes principales

- `/` — Accueil commercial
- `/projets` et `/projets/[slug]` — 5 études de cas
- `/services` et `/services/[slug]` — 6 offres détaillées
- `/competences` — 16 axes de compétences
- `/formations` et `/formations/[slug]` — 10 programmes premium
- `/methode` — méthode en 7 étapes
- `/a-propos` — parcours
- `/societe` — Livré d’un Clic SASU
- `/ressources` — bibliothèque éditoriale
- `/cv` — CV imprimable / export PDF navigateur
- `/contact` — formulaire qualifié
- `/mentions-legales` et `/confidentialite`

## Screenshots

Les captures ne sont pas bloquantes. Chaque étude de cas contient des composants `MediaPlaceholder` documentés. Remplacer progressivement les slots par les vrais visuels dans `public/projects/<slug>/`.

## Avant production

1. Compléter les informations juridiques.
2. Configurer le domaine et les variables d’environnement.
3. Ajouter les visuels réels.
4. Vérifier tous les statuts et chiffres affichés.
5. Exécuter la checklist QA.
