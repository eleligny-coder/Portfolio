# Déploiement Cloudflare Pages

Le portfolio est déployé comme un **export statique Next.js** sur Cloudflare Pages.

Le site ne possède aucun backend de contact : le formulaire prépare directement un email `mailto:` vers l’adresse publique du portfolio. Aucune donnée du formulaire n’est stockée ou transmise par le site.

## Configuration Pages

- Production branch : `main`
- Framework preset : `Next.js (Static HTML Export)`
- Build command : `npm run build`
- Build output directory : `out`
- Root directory : `/`
- Node.js : `22.16.0` via `.node-version`

## Variable publique de build

À configurer dans Cloudflare Pages > Settings > Variables and Secrets :

- `NEXT_PUBLIC_SITE_URL` = URL canonique finale du portfolio lorsqu’un domaine personnalisé est connecté

Pendant les déploiements Pages, `CF_PAGES_URL` peut servir de fallback pour l’URL publique lorsque `NEXT_PUBLIC_SITE_URL` n’est pas encore définie.

Aucun secret Resend, Turnstile ou backend contact n’est nécessaire.

## Déploiement

1. Cloudflare Dashboard > Workers & Pages > Create application.
2. Onglet Pages > Import an existing Git repository.
3. Sélectionner `eleligny-coder/Portfolio`.
4. Utiliser les paramètres de build ci-dessus.
5. Configurer `NEXT_PUBLIC_SITE_URL` lorsque le domaine final est connu.
6. Déployer.
7. Tester l’accueil, les projets, les études de cas, le CV PDF, le contact direct, `robots.txt`, `sitemap.xml` et le responsive.

## Domaine personnalisé

Après connexion du domaine final, définir :

```text
NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr
```

Puis redéployer afin que les métadonnées, OpenGraph, sitemap et URL canoniques utilisent le domaine public final.
