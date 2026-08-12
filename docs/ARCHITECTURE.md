# Architecture

## Principe

Le site est un portfolio commercial Next.js App Router exporté statiquement. Les contenus restent séparés des composants afin de pouvoir évoluer sans réécrire les pages.

## Arborescence

- `src/app` : routes, metadata, sitemap, robots et styles globaux.
- `src/components` : layout, cartes projets, galerie, moteur d’expérience et formulaire de contact.
- `src/data` : projets, services, compétences, formations et méthode.
- `public/projects` : captures utilisées dans les études de cas.
- `public/documents` : CV PDF et documents publics.
- `wrangler.jsonc` : configuration du déploiement Cloudflare Workers assets-only.

## Choix techniques

- Next.js 16 et React 19.
- TypeScript strict.
- Export statique via `output: "export"`.
- Pages projet générées statiquement.
- Contact direct via `mailto:` : aucun backend, aucun stockage de formulaire, aucun secret de messagerie.
- Cloudflare Workers Static Assets pour l’hébergement du dossier `out`.

## Design system

La cascade CSS est organisée en six couches explicites :

1. `globals.css` : fondations historiques et responsive de base.
2. `premium.css` : composants produit et CV.
3. `luxury.css` : composition premium existante.
4. `components.css` : études de cas, galerie, contact et médias.
5. `theme.css` : palette éditoriale finale, typographie, focus et neutralisation des anciens accents cyan.
6. `motion.css` : progression, curseur, reveal, tilt, parallax et animations.

Le moteur global `PremiumExperience` centralise pointer, scroll, reveals, HUD et gamification. Les mises à jour pointer / scroll sont regroupées avec `requestAnimationFrame` et respectent `prefers-reduced-motion`.

## Accessibilité

- `:focus-visible` global.
- Lightbox clavier avec focus initial, piège de focus, fermeture Escape et restitution du focus.
- Navigation fléchée dans la galerie.
- Désactivation des animations non essentielles avec `prefers-reduced-motion`.

## Dépendances et CI

- Version Node centralisée dans `.node-version`.
- `package-lock.json` commité pour des installations reproductibles.
- `npm ci` en intégration continue.
- `npm audit --audit-level=high` avant lint, typecheck et build.

## Règle de crédibilité

Les fonctionnalités opérationnelles, les statuts de maturité et les éléments de roadmap sont séparés dans chaque étude de cas. Une capture historique ne doit jamais être présentée comme une preuve d’une nouvelle architecture. La galerie rappelle le statut réel du projet afin de ne pas confondre preuve d’interface et niveau de maturité produit.
