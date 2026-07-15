# Déploiement Cloudflare Pages

Le portfolio est configuré comme un export statique Next.js, complété par une Cloudflare Pages Function pour le formulaire de contact.

## Architecture de déploiement

- Build Next.js statique dans `out/`.
- Hébergement des pages et assets sur Cloudflare Pages.
- Fonction `functions/api/contact.ts` exposée sur `/api/contact`.
- Envoi des demandes via Resend.
- Déploiements Preview automatiques pour les branches et pull requests.

## Connexion du dépôt GitHub

1. Ouvrir le tableau de bord Cloudflare.
2. Aller dans **Workers & Pages**.
3. Choisir **Create application**, puis l’onglet **Pages**.
4. Choisir **Import an existing Git repository**.
5. Autoriser le dépôt `eleligny-coder/Portfolio`.
6. Utiliser les paramètres suivants :

| Paramètre | Valeur |
|---|---|
| Production branch | `main` |
| Framework preset | `Next.js (Static HTML Export)` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` |

Le fichier `wrangler.jsonc` conserve également le nom du projet, la date de compatibilité et le répertoire de sortie.

## Variables de build publiques

À configurer dans **Settings > Environment variables** pour Production et Preview :

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_LINKEDIN_URL`
- `NEXT_PUBLIC_MALT_URL`

## Secrets de la Pages Function

À configurer pour Production et Preview :

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

Ne jamais enregistrer `RESEND_API_KEY` dans GitHub.

## Vérification locale Cloudflare

```bash
npm install
npm run pages:preview
```

Cette commande construit le dossier `out/`, démarre Cloudflare Pages localement et charge la Function `/api/contact`.

## Déploiement manuel facultatif

```bash
npm run pages:deploy
```

La connexion GitHub reste la méthode principale afin d’obtenir les Preview Deployments sur les pull requests.

## Contrôles après le premier déploiement

- Vérifier toutes les routes statiques.
- Tester les routes dynamiques de projets, services et formations.
- Tester `/api/contact` avec les secrets Resend.
- Contrôler le sitemap et `robots.txt`.
- Vérifier les headers de sécurité provenant de `public/_headers`.
- Tester mobile, tablette et desktop.
- Connecter ensuite le domaine final.

## Informations légales d’hébergement

Après création du projet Cloudflare, compléter la page Mentions légales avec l’identité et les coordonnées d’hébergement définitives applicables au service utilisé.
