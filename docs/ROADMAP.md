# Roadmap

## P0 — Sécurité, cohérence et déploiement

- [x] Mettre Next.js à jour vers une version corrigée des advisories de juillet 2026.
- [x] Supprimer l’ancien backend contact Resend / Turnstile.
- [x] Aligner la documentation sur le contact direct `mailto:`.
- [x] Commiter `package-lock.json` et passer la CI à `npm ci`.
- [x] Vérifier `npm audit --audit-level=high` sans vulnérabilité haute.
- [x] Clarifier les captures France Reliance et supprimer toute preuve visuelle ambiguë.
- [x] Ajouter `wrangler.jsonc` pour un déploiement Cloudflare Workers assets-only reproductible.

## Socle commercial

- [x] Accueil premium responsive.
- [x] Projets et cinq études de cas.
- [x] Services, compétences, à propos, CV et contact.
- [x] SEO technique de base.
- [x] Captures projet intégrées.
- [x] CV en ligne et CV PDF.
- [x] Contact direct sans compte ni stockage de données.
- [ ] Finaliser les mentions légales et la confidentialité avant mise en production finale.

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
- [ ] Renseigner la description, le site et les topics du repository GitHub depuis les paramètres du repository.
- [ ] Ajouter des métriques aux études de cas uniquement lorsqu’elles sont vérifiables.

## P3 — Autorité & preuves

- Ajouter davantage de captures qualifiées lorsqu’elles sont disponibles pour Parayon, RatioPro, France Reliance et Le Billot Pro.
- Ressources et articles.
- Témoignages et preuves clients vérifiables.
- Études de cas enrichies avec métriques lorsque disponibles.
- Page Livré d’un Clic SASU.

## P4 — Acquisition

- Analytics respectueux de la confidentialité.
- Monitoring si nécessaire.
- Prise de rendez-vous.
- Version anglaise.
