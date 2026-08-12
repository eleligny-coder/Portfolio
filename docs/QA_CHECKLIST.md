# Checklist QA

## Automatique

- `npm ci`
- `npm audit --audit-level=high`
- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Manuel

- Navigation mobile et desktop.
- Tous les CTA et liens projet.
- Contact direct : validation des quatre champs principaux, ouverture du `mailto:`, détails optionnels et copie de l’adresse email.
- Vérifier qu’aucune donnée de formulaire n’est envoyée ou stockée par le site.
- Navigation clavier complète avec focus visible.
- Lightbox : focus initial, Tab / Shift+Tab confinés au dialogue, Escape, flèches gauche/droite et restitution du focus à la fermeture.
- Contraste et textes alternatifs des médias.
- Affichage 320 px, tablette et grand écran.
- Respect de `prefers-reduced-motion`.
- Vérifier que pointer, scroll et tilt restent fluides sans trail DOM ni création continue d’éléments.
- Vérification des statuts projet et des affirmations.
- Vérification de la provenance des captures projet et affichage du statut de maturité.
- CV en ligne et téléchargement du PDF.
- `robots.txt`, `sitemap.xml`, canonical et OpenGraph.
- Build Cloudflare : `out` généré et `wrangler.jsonc` reconnu avec le Worker `portfolio`.
- Validation juridique avant mise en ligne.
