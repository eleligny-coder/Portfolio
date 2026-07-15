# Portfolio — Élie Leligny

Portfolio professionnel de **Élie Leligny**, Full Stack Product Builder, consultant SaaS / IA / automatisation et fondateur de Livré d’un Clic SASU.

## Objectifs

- présenter les projets sous forme d’études de cas crédibles ;
- générer des demandes de missions ;
- présenter les services de conseil et développement ;
- structurer une offre de formation ;
- démontrer la capacité à relier métier, produit et technique.

## Stack

- Next.js 16
- React 19
- TypeScript strict
- CSS design system sur mesure
- API Resend via HTTP

## Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Contrôles

```bash
npm run check
```

## Variables

| Variable | Utilité |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canonique |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email public |
| `RESEND_API_KEY` | Clé Resend |
| `CONTACT_FROM_EMAIL` | Expéditeur vérifié |
| `CONTACT_TO_EMAIL` | Destinataire |

Sans Resend, le formulaire affiche l’adresse email directe.

## Contenus

- `src/data/projects.ts` : études de cas et statuts.
- `src/data/site.ts` : navigation, services, compétences, formations et méthode.
- `public/projects/` : captures réelles à intégrer.
- `public/documents/` : CV et documents.

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Guide éditorial](docs/CONTENT_GUIDE.md)
- [Déploiement](docs/DEPLOYMENT.md)
- [Roadmap](docs/ROADMAP.md)
- [QA](docs/QA_CHECKLIST.md)

## Statut

MVP commercial généré et prêt à être enrichi avec les médias réels puis déployé sur Vercel.
