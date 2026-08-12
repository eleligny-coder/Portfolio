# Roadmap

## Phase 0 — Sécurité, cohérence et déploiement

- [x] Mettre Next.js à jour vers une version corrigée des advisories de juillet 2026.
- [x] Supprimer l’ancien backend contact Resend / Turnstile.
- [x] Aligner la documentation sur le contact direct `mailto:`.
- [x] Commiter `package-lock.json` et passer la CI à `npm ci`.
- [x] Vérifier `npm audit --audit-level=high` sans vulnérabilité haute.
- [x] Clarifier les captures France Reliance et supprimer toute preuve visuelle ambiguë.
- [x] Ajouter `wrangler.jsonc` pour un déploiement Cloudflare Workers assets-only reproductible.

## Phase 1 — MVP commercial

- [x] Accueil premium responsive.
- [x] Projets et cinq études de cas.
- [x] Services, compétences, formations, méthode, à propos et contact.
- [x] SEO technique de base.
- [x] Captures projet intégrées.
- [x] CV en ligne et CV PDF.
- [x] Contact direct sans compte ni stockage de données.
- [ ] Finaliser les mentions légales et la confidentialité avant mise en production finale.

## Phase 2 — P1 finition premium & performance

- [x] Fusionner les deux contrôleurs d’effets globaux en un seul moteur.
- [x] Supprimer la traînée DOM et les effets de clic non essentiels.
- [x] Cadencer pointer et scroll avec `requestAnimationFrame`.
- [x] Conserver la progression, le HUD et la gamification d’exploration.
- [x] Rationaliser les styles de 10 feuilles historiques à 6 couches cohérentes.
- [x] Créer une couche `theme.css` finale pour neutraliser l’esthétique cyan héritée hors identités projet.
- [x] Consolider les styles études de cas, galerie, contact et médias dans `components.css`.
- [x] Consolider les couches d’animation dans `motion.css`.
- [x] Renforcer le focus clavier global et la lightbox : focus initial, focus trap, Escape et restitution du focus.
- [x] Simplifier le contact à quatre informations principales avec contexte avancé optionnel.
- [x] Qualifier les preuves visuelles avec le statut réel du projet.
- [x] Respecter `prefers-reduced-motion` dans le moteur d’expérience final.

## Phase 3 — Autorité & preuves

- Ajouter davantage de captures qualifiées lorsqu’elles sont disponibles pour Parayon, RatioPro, France Reliance et Le Billot Pro.
- Ressources et articles.
- Témoignages et preuves clients vérifiables.
- Études de cas enrichies avec métriques lorsque disponibles.
- Page Livré d’un Clic SASU.

## Phase 4 — Acquisition

- Analytics respectueux de la confidentialité.
- Monitoring si nécessaire.
- Prise de rendez-vous.
- Version anglaise.
