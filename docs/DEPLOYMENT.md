# Déploiement Vercel

1. Importer le dépôt GitHub dans Vercel.
2. Définir `NEXT_PUBLIC_SITE_URL` avec le domaine final.
3. Ajouter `NEXT_PUBLIC_CONTACT_EMAIL`.
4. Vérifier un domaine expéditeur dans Resend.
5. Ajouter `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` et `CONTACT_TO_EMAIL`.
6. Lancer le déploiement.
7. Tester `/api/contact`, `robots.txt` et `sitemap.xml`.

## Domaine

Configurer le domaine dans Vercel puis les DNS chez le registrar. Mettre à jour `NEXT_PUBLIC_SITE_URL` pour les URL canoniques.
