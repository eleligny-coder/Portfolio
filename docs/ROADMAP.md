# Roadmap

## P0 — Sécurité, cohérence et déploiement

- [x] Mettre Next.js à jour vers une version corrigée des advisories de juillet 2026.
- [x] Supprimer l’ancien backend contact Resend / Turnstile.
- [x] Aligner la documentation sur le contact direct `mailto:`.
- [x] Commiter `package-lock.json` et passer la CI à `npm ci`.
- [x] Vérifier `npm audit --audit-level=high` sans vulnérabilité haute.
- [x] Clarifier les captures France Reliance et supprimer toute preuve visuelle ambiguë.
- [x] Ajouter `wrangler.jsonc` pour un déploiement Cloudflare Workers assets-only reproductible.
- [x] Ajouter une QA Chromium desktop + mobile couvrant routes, liens, images, navigation, CV, galerie, contact et accessibilité des boutons.

## Socle commercial

- [x] Accueil premium responsive.
- [x] Projets et cinq études de cas.
- [x] Services, compétences, à propos, CV et contact.
- [x] SEO technique de base.
- [x] Captures projet intégrées.
- [x] CV en ligne et CV PDF.
- [x] Contact direct sans compte ni stockage de données par le site.
- [x] Publier une page de confidentialité cohérente avec le fonctionnement réel du portfolio.
- [ ] Publier les mentions légales complètes après validation d’un numéro de téléphone professionnel.

## P1 — Finition premium & performance

- [x] Fusionner les deux contrôleurs d’effets globaux en un seul moteur.
- [x] Supprimer la traînée DOM et les effets de clic non essentiels.
- [x] Cadencer pointer et scroll avec `requestAnimationFrame`.
- [x] Conserver la progression, le HUD et la gamification d’exploration.
- [x] Rationaliser les styles de 10 feuilles historiques à 6 couches cohérentes.
- [x] Créer une couche `theme.css` finale pour neutraliser l’esthétique cyan héritée hors identités projet.
- [x] Consolider les styles études de cas, galerie, contact et médias dans `components.css`.
- [x] Consolider les couches d’animation dans `motion.css`.
- [x] Renforcer le focus clavier global et la lightbox.
- [x] Simplifier le contact à quatre informations principales avec contexte avancé optionnel.
- [x] Qualifier les preuves visuelles avec le statut réel du projet.
- [x] Respecter `prefers-reduced-motion` dans le moteur d’expérience final.

## P2 — SEO & hardening

- [x] Garder `/formations` et `/methode` accessibles mais hors index afin de ne pas diluer le tunnel principal.
- [x] Ajouter une Content-Security-Policy au déploiement statique Cloudflare.
- [x] Renforcer les headers navigateur et la Permissions-Policy.
- [x] Empêcher l’indexation des URLs de preview `workers.dev`.
- [x] Conserver un cache long pour les assets Next fingerprintés.
- [x] Aligner le README GitHub avec Workers Static Assets, la QA Playwright, l’URL Malt et les limites de preuve.
- [x] Relier la personne et Livré d’un Clic SASU dans les données structurées du site.
- [ ] Renseigner la description et les topics du repository depuis les paramètres GitHub.
- [ ] Ajouter des métriques aux études de cas uniquement lorsqu’elles sont vérifiables.

## P3 — Autorité & preuves

- [x] Ajouter une page dédiée à Livré d’un Clic SASU et clarifier son rôle derrière les produits.
- [x] Distinguer explicitement preuves disponibles et limites de preuve dans chaque étude de cas.
- [x] Relier la page entreprise depuis le portfolio et l’ajouter au sitemap / QA navigateur.
- [x] Ajouter l’identité juridique vérifiable de Livré d’un Clic SASU et un lien de vérification externe.
- [ ] Ajouter davantage de captures qualifiées lorsqu’elles sont réellement disponibles pour Parayon, RatioPro, France Reliance et Le Billot Pro.
- [ ] Ajouter des liens publics vers les produits uniquement après vérification de leur disponibilité et de leur niveau de finition.
- [ ] Ajouter des ressources ou articles seulement s’ils apportent une vraie preuve d’expertise.
- [ ] Ajouter témoignages et preuves clients uniquement lorsqu’ils sont vérifiables et autorisés.
- [ ] Ajouter des métriques aux études de cas uniquement lorsqu’elles sont sourçables.

## P4 — Acquisition

- [ ] Analytics respectueux de la confidentialité.
- [ ] Monitoring si nécessaire.
- [ ] Prise de rendez-vous.
- [ ] Version anglaise.

## Finition avant audit final

- [ ] Vérifier le déploiement réel sur le domaine final après merge.
- [ ] Audit responsive dédié 320 / 375 / 390 / 430 px et tablette.
- [ ] Audit Lighthouse production : Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] Vérifier Chrome, Edge, Firefox et Safari sur le site réellement déployé.
- [ ] Refaire l’audit final preuves, réassurance, conversion, clarté de l’offre et niveau premium.
