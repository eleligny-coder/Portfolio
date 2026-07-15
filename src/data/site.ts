export const site = {
  name: "Élie Leligny",
  role: "Full Stack Product Builder",
  subtitle: "Consultant SaaS, IA & automatisation",
  company: "Livré d’un Clic SASU",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "e.leligny@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  github: "https://github.com/eleligny-coder",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  malt: process.env.NEXT_PUBLIC_MALT_URL ?? "",
};

export const nav = [
  ["Accueil", "/"],
  ["Projets", "/projets"],
  ["Services", "/services"],
  ["Compétences", "/competences"],
  ["Formations", "/formations"],
  ["Méthode", "/methode"],
  ["À propos", "/a-propos"],
  ["Ressources", "/ressources"],
] as const;

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  audience: string[];
  deliverables: string[];
  process: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "conception-produit",
    title: "Conception de produit numérique",
    shortTitle: "Cadrage produit",
    summary: "Transformer une idée ou un besoin métier en MVP cadré, priorisé et techniquement cohérent.",
    audience: ["Entrepreneurs", "PME", "Associations", "Organismes de formation", "Startups"],
    deliverables: ["Audit du besoin", "Proposition de valeur", "MVP", "Roadmap", "Parcours utilisateurs", "Architecture fonctionnelle", "Modèle de données", "Spécifications"],
    process: ["Entretien de cadrage", "Cartographie du besoin", "Priorisation 80/20", "Architecture", "Plan de réalisation"],
    outcomes: ["Périmètre maîtrisé", "Décisions plus rapides", "Développement mieux piloté", "Réduction des retours et incohérences"],
  },
  {
    slug: "saas-applications-metiers",
    title: "Développement SaaS et applications métiers",
    shortTitle: "SaaS & applications",
    summary: "Construire une application web exploitable : interface, logique métier, données, paiements et déploiement.",
    audience: ["Entrepreneurs tech", "TPE et PME", "Éditeurs de logiciels", "Structures métier"],
    deliverables: ["Frontend", "Backend", "Authentification", "Dashboards", "Gestion des rôles", "API", "Base de données", "Paiement", "Déploiement"],
    process: ["Architecture", "Développement incrémental", "Tests", "Recette", "Mise en production"],
    outcomes: ["Produit maintenable", "Parcours métier cohérents", "Sécurité des accès", "Base prête à évoluer"],
  },
  {
    slug: "ia-automatisation",
    title: "IA et automatisation métier",
    shortTitle: "IA & automatisation",
    summary: "Réduire les tâches répétitives et rendre l’information plus utile grâce aux agents, OCR, RAG et workflows.",
    audience: ["PME", "Associations", "Organismes de formation", "Équipes administratives", "Indépendants"],
    deliverables: ["Agents IA", "Assistants internes", "OCR", "RAG", "Make", "n8n", "Webhooks", "Automatisations documentaires", "Notifications"],
    process: ["Inventaire des tâches", "Mesure du gain", "Prototype", "Sécurisation", "Déploiement"],
    outcomes: ["Temps gagné", "Moins de ressaisie", "Process documentés", "Meilleure qualité de suivi"],
  },
  {
    slug: "audit-digital",
    title: "Audit produit, UX et architecture",
    shortTitle: "Audit digital",
    summary: "Identifier ce qui bloque réellement un produit, un site, un workflow ou une architecture avant d’investir davantage.",
    audience: ["Porteurs de projet", "PME", "Équipes produit", "Sites WordPress", "SaaS en reprise"],
    deliverables: ["Audit produit", "Audit UX", "Audit architecture", "Audit workflow", "Audit SaaS", "Audit WordPress", "Plan de corrections"],
    process: ["Collecte", "Analyse", "Priorisation", "Restitution", "Plan d’action"],
    outcomes: ["Risques visibles", "Priorités claires", "Dette réduite", "Décisions d’investissement plus fiables"],
  },
  {
    slug: "pilotage-technique",
    title: "Pilotage produit et coordination technique",
    shortTitle: "Pilotage technique",
    summary: "Faire avancer une équipe ou des prestataires avec un backlog clair, des spécifications précises et une recette structurée.",
    audience: ["Fondateurs non techniques", "PME", "Agences", "Équipes externalisées"],
    deliverables: ["Backlog", "User stories", "Spécifications", "Suivi des livraisons", "QA", "Recette", "Gestion des bugs", "Documentation"],
    process: ["Reprise du contexte", "Découpage", "Suivi", "Contrôle qualité", "Validation"],
    outcomes: ["Moins d’ambiguïtés", "Livraisons plus propres", "Meilleure communication", "Traçabilité des décisions"],
  },
  {
    slug: "accompagnement-entrepreneurial",
    title: "Accompagnement entrepreneurial et digital",
    shortTitle: "Entrepreneuriat",
    summary: "Structurer l’offre, le modèle économique, les outils et le lancement d’une activité numérique.",
    audience: ["Créateurs d’entreprise", "Indépendants", "Porteurs de projet ESS", "Associations"],
    deliverables: ["Positionnement", "Offre", "Business model", "Choix des outils", "Organisation", "Stack", "MVP", "Landing page", "Plan de lancement"],
    process: ["Diagnostic", "Choix stratégiques", "Plan d’action", "Mise en œuvre", "Suivi"],
    outcomes: ["Offre lisible", "Priorités réalistes", "Outils adaptés", "Lancement plus rapide"],
  },
];

export const skillGroups = [
  ["Product Management & conception", ["Analyse des besoins métier", "Conception de SaaS", "MVP", "Roadmaps", "User stories", "Cahiers des charges", "Priorisation", "Backlog", "UX fonctionnelle", "Recette"]],
  ["Développement Full Stack", ["JavaScript", "TypeScript", "Python", "React", "Next.js", "HTML", "CSS", "Tailwind CSS", "API REST", "Webhooks", "Authentification"]],
  ["Bases de données & architecture", ["PostgreSQL", "Supabase", "MongoDB", "SQL", "PL/pgSQL", "RLS", "Migrations", "Modélisation métier", "Permissions"]],
  ["Intelligence artificielle", ["Agents IA", "Multi-agents", "Prompt Engineering", "RAG", "OCR", "Analyse documentaire", "Assistants IA", "Systèmes de recommandation", "IA métier"]],
  ["Automatisation", ["Make", "n8n", "AutomatorWP", "Workflows métier", "Automatisation CRM", "Automatisation documentaire", "Notifications", "Emails"]],
  ["SaaS & applications métiers", ["SaaS B2B", "CRM", "ERP léger", "Cockpits", "Marketplaces", "PWA", "Dashboards", "Reporting", "Rôles utilisateurs"]],
  ["Stripe & paiements", ["Stripe Checkout", "Stripe Billing", "Stripe Connect", "Abonnements", "KYC", "Commissions", "Webhooks", "Facturation"]],
  ["Infrastructure & déploiement", ["Git", "GitHub", "Vercel", "Railway", "Cloudflare", "DNS", "Sentry", "PostHog", "Resend"]],
  ["WordPress & no-code", ["WordPress", "Elementor", "Forminator", "AutomatorWP", "Search & Filter Pro", "WP User Frontend", "Landing pages"]],
  ["Marketing & acquisition", ["SEO technique", "SEO local", "SEO programmatique", "Copywriting", "Conversion", "Parcours utilisateur", "Branding"]],
  ["CRM & organisation", ["Pipelines commerciaux", "Process internes", "Documentation", "Standardisation", "KPI", "Reporting"]],
  ["Gestion de projet", ["Coordination développeurs", "Planification", "Contrôle qualité", "Tests", "Validation", "Suivi des livrables"]],
  ["ESS & insertion", ["Économie Sociale et Solidaire", "Associations", "Insertion", "EITI", "RSA", "AAH", "Impact social", "Partenariats territoriaux"]],
  ["Formation & qualité", ["Qualiopi", "Documentation qualité", "Processus qualité", "Gestion documentaire", "Amélioration continue"]],
  ["Entrepreneuriat & business", ["Création de SASU", "Modèles économiques", "Gestion administrative", "Facturation", "Partenariats", "Négociation", "Développement commercial"]],
  ["Communication professionnelle", ["Présentation de projets", "Rédaction stratégique", "Spécifications développeurs", "Communication client", "Communication partenaires"]],
] as const;

export const method = [
  ["01", "Comprendre", "Utilisateurs, contraintes, problème, valeur, marché et modèle économique."],
  ["02", "Structurer", "MVP, priorités, rôles, parcours, statuts, risques et roadmap."],
  ["03", "Architecturer", "Frontend, backend, données, sécurité, API, paiements et intégrations."],
  ["04", "Concevoir", "UX métier, dashboards, formulaires, contenus, design system et documentation."],
  ["05", "Construire", "Développement, intégrations, automatisations, IA et déploiement progressif."],
  ["06", "Tester", "QA, permissions, responsive, paiements, erreurs et parcours critiques."],
  ["07", "Lancer", "Production, monitoring, analytics, acquisition et amélioration continue."],
] as const;

export const proofPoints = [
  ["5+ ans", "de conception et développement"],
  ["4", "produits SaaS majeurs"],
  ["3", "langages principaux"],
  ["1", "SASU créée et pilotée"],
  ["100+", "agents IA conçus ou testés"],
] as const;
