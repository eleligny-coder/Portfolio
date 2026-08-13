# Checklist QA

## Automatique — GitHub Actions

### Qualité, sécurité et build

- [x] `npm ci` depuis le lockfile.
- [x] `npm audit --audit-level=high`.
- [x] lint.
- [x] typecheck TypeScript strict.
- [x] build / export statique Next.js.

### Chromium — suite complète

- [x] Parcours desktop Chromium.
- [x] Parcours mobile Chromium.
- [x] Routes publiques principales et études de cas.
- [x] Liens internes et externes critiques.
- [x] Images projet : scroll, lazy-loading et `naturalWidth > 0`.
- [x] Navigation clavier et noms accessibles des boutons.
- [x] Galerie / lightbox et interactions critiques.
- [x] CV en ligne, impression et téléchargement PDF.
- [x] Formulaire de contact, validation native, préparation du `mailto:` et copie de l’adresse email.

### Responsive automatisé

- [x] 320 px.
- [x] 375 px.
- [x] 390 px.
- [x] 430 px.
- [x] 768 px / tablette.
- [x] Absence de débordement horizontal sur les pages critiques.

### Lighthouse CI — médiane de trois runs

Pages auditées : Accueil, Projets et Contact.

- [x] Performance ≥ 90.
- [x] Accessibilité ≥ 95.
- [x] Best Practices ≥ 95.
- [x] SEO ≥ 95.

Dernier gate validé avant cette mise à jour :

- Accueil : Performance 95 / Accessibilité 100 / Best Practices 100 / SEO 100.
- Projets : Performance 91 / Accessibilité 100 / Best Practices 100 / SEO 100.
- Contact : Performance 96 / Accessibilité 100 / Best Practices 100 / SEO 100.

### Firefox + WebKit

- [x] Accueil, Projets et Contact rendent sans erreur navigateur.
- [x] Absence de débordement horizontal sur les parcours critiques.
- [x] Capture signature chargée réellement.
- [x] Ouverture de l’étude de cas Parayon.
- [x] Navigation vers Contact.
- [x] Validation du formulaire et présence du lien `mailto:`.

## Manuel / externe avant validation production

- [ ] Vérifier que `https://elieleligny.fr` sert bien le dernier commit déployé.
- [ ] Vérifier les headers de sécurité et de cache sur le domaine public réel.
- [ ] Vérifier `robots.txt` et `sitemap.xml` sur le domaine public réel.
- [ ] Vérifier les métadonnées et OpenGraph sur le domaine public réel.
- [ ] Tester sur au moins un iPhone / Safari physique.
- [ ] Tester sur au moins un appareil Android physique.
- [ ] Faire un passage visuel Edge réel si une validation navigateur constructeur est requise.
- [ ] Valider les mentions légales complètes dès qu’un numéro de téléphone professionnel publiable est disponible.

## Contrôles éditoriaux à conserver

- Vérifier les statuts projet et toutes les affirmations avant publication.
- Ne jamais transformer une capture en preuve de traction ou de résultat commercial.
- N’ajouter métriques, témoignages, logos clients ou liens produits que s’ils sont vérifiables et autorisés.
- Conserver la distinction entre prototype historique et architecture actuelle de France Reliance.
- Respecter `prefers-reduced-motion` et maintenir un focus clavier visible.
- Vérifier qu’aucune donnée de formulaire n’est envoyée ou stockée par le portfolio.

## Déploiement

Le build Cloudflare cible **Workers Static Assets** via `wrangler.jsonc` et le dossier `out/`.

Voir [`CLOUDFLARE_WORKERS_DEPLOY.md`](./CLOUDFLARE_WORKERS_DEPLOY.md).
