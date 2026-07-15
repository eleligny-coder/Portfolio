# Architecture

## Principe

Le contenu métier est séparé des composants :

- `src/data/projects.ts` : études de cas et slots visuels.
- `src/data/site.ts` : services, compétences, méthode et informations globales.
- `src/data/trainings.ts` : programmes de formation.
- `src/components` : composants réutilisables.
- `src/app` : routes Next.js App Router.

## Décisions

- Pas de CMS au MVP : le contenu versionné est plus simple et plus fiable.
- Pas de dépendance d’animation : les mouvements sont en CSS et respectent la réduction de mouvement.
- Pages dynamiques statiquement générées pour projets, services et formations.
- Formulaire serveur sans SDK externe : appel direct à Resend.

## Évolution

Un back-office Supabase pourra être ajouté pour les articles, leads, témoignages et médias lorsque le volume le justifiera.
