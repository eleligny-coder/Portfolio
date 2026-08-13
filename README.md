# Élie Leligny — Product Builder Full Stack

**SaaS · CRM sur mesure · IA · Automatisation · Stripe · Cloud**

Portfolio professionnel d’Élie Leligny, Product Builder Full Stack et fondateur de **Livré d’un Clic SASU**.

Je transforme des besoins métier en produits numériques structurés : SaaS, applications métiers, CRM, marketplaces, dashboards, automatisations et systèmes IA.

**Portfolio :** https://elieleligny.fr  
**Disponibilité :** 100 % télétravail — France

## Ce que ce portfolio permet de vérifier

- captures réelles des interfaces disponibles ;
- études de cas avec problème, solution, architecture, stack, rôle, statut et résultat actuel ;
- séparation explicite entre ce qui est construit et ce qui reste en roadmap ;
- limites de preuve affichées lorsqu’un dépôt, une métrique ou un résultat commercial n’est pas public ;
- CV en ligne imprimable et CV PDF téléchargeable ;
- page dédiée à Livré d’un Clic SASU, structure derrière les produits présentés ;
- parcours recruteur et client orientés vers les projets, les preuves et le contact direct.

## Projets principaux

### Parayon
Plateforme SaaS d’analyse sportive assistée par IA.

**Stack :** Python, FastAPI, JavaScript, MongoDB, Supabase, Stripe, Railway, Vercel.  
**Statut :** en développement — bêta privée en préparation.

Travail documenté autour du backend Python, des moteurs d’analyse, du billing, des crédits, des workflows data, de l’espace partenaire, du cockpit administrateur et de l’architecture IA.

### RatioPro
Copilote IA de rentabilité pour restaurateurs.

**Stack :** Next.js, TypeScript, Supabase, PostgreSQL, PL/pgSQL, Stripe, OCR, IA.  
**Statut :** produit SaaS en finalisation commerciale.

Ventes, achats, factures, recettes, stocks, pertes, marges, simulations et recommandations métier sont structurés dans un même cockpit.

### France Reliance™
Marketplace SaaS territoriale multi-rôles.

**Stack :** React, TypeScript, TanStack, Supabase, PostgreSQL, PL/pgSQL, Stripe Connect, Mapbox.  
**Statut :** MVP en développement — stabilisation technique.

Missions, candidatures, workflows de validation, paiements, KYC, dashboards, RLS et parcours multi-rôles. Le prototype WordPress historique est présenté séparément de l’architecture actuelle.

### Le Billot Pro
SaaS métier pour boucheries et ateliers de transformation.

**Stack :** JavaScript, Python, Supabase, MongoDB, Stripe Billing, PWA, Resend, Vercel.  
**Statut :** MVP métier / démonstration.

Achats, carcasses, rendements, recettes, productions, stocks, pertes, marges, PDF et rapports IA.

## Stack principale

**Full Stack** — TypeScript · JavaScript · Python · React · Next.js · FastAPI · HTML · CSS · Tailwind  
**Backend & data** — Supabase · PostgreSQL · PL/pgSQL · MongoDB · SQL · RLS · API REST · Webhooks  
**IA** — LLM · Agents IA · Multi-agents · RAG · OCR · OpenAI API · Assistants métier  
**SaaS & paiement** — Stripe Checkout · Stripe Billing · Stripe Connect · Abonnements · Commissions · KYC  
**Automatisation** — n8n · Make · AutomatorWP · API · Webhooks · Resend  
**Cloud & livraison** — Railway · Vercel · Cloudflare · GitHub · Sentry · Monitoring

## Architecture du portfolio

Ce repository contient uniquement le site portfolio public.

- **Next.js 16 / React 19 / TypeScript strict** ;
- export statique avec `output: "export"` ;
- images servies directement pour la compatibilité export statique ;
- design system CSS sur mesure ;
- un contrôleur global d’expérience pour scroll, reveal, tilt et interactions premium ;
- `wrangler.jsonc` pour **Cloudflare Workers Static Assets** ;
- headers de sécurité et CSP via `public/_headers` ;
- contact sans backend : préparation d’un email via `mailto:` ;
- aucune base de données de contact et aucun compte utilisateur.

## QA et sécurité

La CI GitHub Actions exécute sur les pull requests et `main` :

1. installation reproductible avec `npm ci` ;
2. `npm audit --audit-level=high` ;
3. lint ;
4. typecheck TypeScript ;
5. build statique Next.js ;
6. smoke tests **Playwright / Chromium desktop + mobile**.

La suite navigateur vérifie notamment les routes, liens internes, images, navigation desktop/mobile, clavier, téléchargement et impression du CV, cartes projet, galerie/lightbox, formulaire de contact, presse-papiers et noms accessibles des boutons.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Contrôles locaux principaux :

```bash
npm run check
npm audit --audit-level=high
```

Pour reproduire la QA navigateur utilisée en CI :

```bash
npm install --no-save --package-lock=false @playwright/test@1.60.0
npx playwright install chromium
npx playwright test
```

## Confidentialité des produits

Les applications présentées sont des produits propriétaires. Leur code source reste privé.

Le portfolio public expose volontairement les **problèmes métier, architectures simplifiées, fonctionnalités, stacks, rôles, captures, statuts et résultats actuels** sans publier le code propriétaire, les secrets d’infrastructure ou des données sensibles.

Une capture d’interface n’est pas présentée comme une métrique d’usage ou un témoignage client. Les preuves commerciales ne sont ajoutées que lorsqu’elles sont réellement vérifiables.

## Contact

- GitHub : `eleligny-coder`
- Malt : `malt.fr/profile/elieleligny1`
- Email : `e.leligny@gmail.com`

Je recherche des **missions freelance et opportunités professionnelles 100 % à distance** autour du Full Stack, SaaS, Product Building, CRM, IA et automatisation.
