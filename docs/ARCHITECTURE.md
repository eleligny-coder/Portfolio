# Architecture

## Principe

Le site est un portfolio commercial Next.js App Router. Les contenus restent séparés des composants afin de pouvoir évoluer vers un CMS sans réécrire les pages.

## Arborescence

- `src/app` : routes, metadata, sitemap, robots et API contact.
- `src/components` : layout, cartes projets et formulaire.
- `src/data` : projets, services, compétences, formations et méthode.
- `public/projects` : captures et vidéos produits à ajouter.
- `public/documents` : CV et fiche de compétences.

## Choix techniques

- Next.js 16 et React 19.
- TypeScript strict.
- CSS design system sans dépendance UI.
- Pages projet générées statiquement.
- API contact serveur avec Resend et honeypot anti-spam.
- Respect de `prefers-reduced-motion`.

## Règle de crédibilité

Les fonctionnalités opérationnelles, les statuts de maturité et les éléments de roadmap sont séparés dans chaque étude de cas.
