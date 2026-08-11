# Déploiement Cloudflare Pages

Le portfolio est préparé pour Cloudflare Pages avec export statique Next.js et une Pages Function pour le formulaire de contact.

## Configuration Pages

- Production branch: `main`
- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `/`
- Node.js: `22.16.0` via `.node-version`

## Variables publiques de build

À configurer dans Cloudflare Pages > Settings > Variables and Secrets.

- `NEXT_PUBLIC_CONTACT_EMAIL` = adresse email publique du portfolio
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` = clé publique Cloudflare Turnstile
- `NEXT_PUBLIC_SITE_URL` = URL canonique finale du portfolio lorsqu'un domaine personnalisé est connecté

Pendant le premier déploiement, `CF_PAGES_URL` est utilisé automatiquement comme fallback pour l'URL du site.

## Secrets / variables de la Pages Function

La route `/api/contact` est gérée par `functions/api/contact.ts`.

- `TURNSTILE_SECRET_KEY` = secret Cloudflare Turnstile
- `RESEND_API_KEY` = clé API Resend
- `CONTACT_FROM_EMAIL` = expéditeur autorisé / domaine vérifié dans Resend
- `CONTACT_TO_EMAIL` = adresse qui reçoit les demandes

Les clés sensibles doivent être enregistrées comme secrets chiffrés dans Cloudflare, jamais dans Git.

## Turnstile

Créer un widget Turnstile et autoriser le domaine `*.pages.dev` utilisé pour les tests puis le domaine personnalisé de production. Ajouter la site key aux variables publiques et la secret key aux secrets de Pages.

## Déploiement

1. Cloudflare Dashboard > Workers & Pages > Create application.
2. Onglet Pages > Import an existing Git repository.
3. Sélectionner `eleligny-coder/Portfolio`.
4. Utiliser les paramètres de build ci-dessus.
5. Déployer.
6. Configurer les variables/secrets.
7. Redéployer pour activer le formulaire de contact.
8. Tester accueil, projets, CV PDF, formulaire, Turnstile, sitemap et responsive.

## Domaine personnalisé

Après connexion du domaine final, définir `NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr` puis redéployer afin que les métadonnées, OpenGraph, sitemap et URLs canoniques utilisent le domaine public final.
