# Architecture

## Principe

Le site est un portfolio commercial Next.js App Router exporté statiquement. Les contenus restent séparés des composants afin de pouvoir évoluer sans réécrire les pages.

## Arborescence

- `src/app` : routes, metadata, sitemap, robots et styles globaux.
- `src/components` : layout, cartes projets, galerie, expériences visuelles et formulaire de contact.
- `src/data` : projets, services, compétences, formations et méthode.
- `public/projects` : captures réelles utilisées dans les études de cas.
- `public/documents` : CV PDF et documents publics.

## Choix techniques

- Next.js 16 et React 19.
- TypeScript strict.
- Export statique via `output: "export"`.
- CSS design system sans dépendance UI externe.
- Pages projet générées statiquement.
- Contact direct via `mailto:` : aucun backend, aucun stockage de formulaire, aucun secret de messagerie.
- Respect de `prefers-reduced-motion`.
- Cloudflare Pages pour l’hébergement statique.

## Dépendances et CI

- Version Node centralisée dans `.node-version`.
- `package-lock.json` commité pour des installations reproductibles.
- `npm ci` en intégration continue.
- `npm audit --audit-level=high` avant lint, typecheck et build.

## Règle de crédibilité

Les fonctionnalités opérationnelles, les statuts de maturité et les éléments de roadmap sont séparés dans chaque étude de cas. Une capture historique ne doit jamais être présentée comme une preuve d’une nouvelle architecture.
