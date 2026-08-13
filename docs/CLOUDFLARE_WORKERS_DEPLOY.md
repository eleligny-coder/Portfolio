# Déploiement Cloudflare Workers Static Assets

Le portfolio est un **export statique Next.js** déployable comme Worker avec assets statiques.

Le site ne possède aucun backend de contact : le formulaire prépare directement un email `mailto:` vers l’adresse publique du portfolio. Aucune donnée du formulaire n’est stockée ou transmise par le site.

## Configuration versionnée

Le repository contient `wrangler.jsonc` :

```json
{
  "$schema": "./node_modules/wrangler/config-schema.json",
  "name": "portfolio",
  "compatibility_date": "2026-08-12",
  "assets": {
    "directory": "./out"
  }
}
```

Le build Next.js utilise `output: "export"` et génère le site dans `out/`.

Le dossier `public/` est copié dans l’export. Le fichier `public/_headers` reste donc disponible au déploiement pour les headers de sécurité, la CSP, les règles de cache et le `noindex` des URLs `workers.dev`.

## Pré-requis

- Node.js `22.16.0` via `.node-version` ;
- dépendances installées depuis `package-lock.json` ;
- accès au compte Cloudflare qui héberge le domaine ;
- Wrangler authentifié pour le déploiement CLI, ou un build Cloudflare relié au repository.

Aucun secret Resend, Turnstile ou backend de formulaire n’est nécessaire.

## Build local reproductible

```bash
npm ci
npm audit --audit-level=high
npm run check
```

Après `npm run build`, le dossier `out/` doit exister et contenir l’export statique complet.

## Déploiement avec Wrangler

```bash
npx wrangler deploy
```

Wrangler lit `wrangler.jsonc` et publie `out/` comme assets statiques du Worker `portfolio`.

## Domaine public

Le domaine de référence du portfolio est :

```text
https://elieleligny.fr
```

`src/data/site.ts` utilise cette URL comme fallback public. `NEXT_PUBLIC_SITE_URL` peut être défini explicitement au build si nécessaire, mais le déploiement ne dépend plus d’une variable `CF_PAGES_URL`.

Le domaine personnalisé doit être associé au Worker depuis Cloudflare. Cette étape reste distincte du build GitHub et doit être vérifiée sur le domaine réellement servi.

## Vérifications après déploiement

Contrôler sur le domaine public réel :

- `/` ;
- `/projets/` et une étude de cas ;
- `/contact/` et le parcours `mailto:` ;
- `/cv/` et le PDF ;
- `/robots.txt` ;
- `/sitemap.xml` ;
- les headers de sécurité et de cache ;
- l’absence de `localhost` dans les métadonnées publiques ;
- l’affichage desktop et mobile ;
- la console navigateur sans erreur bloquante.

La CI du repository valide l’export avant merge, mais elle ne constitue pas à elle seule une preuve que `elieleligny.fr` sert bien le dernier commit. La vérification du domaine final reste une étape externe de mise en production.
