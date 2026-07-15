export const site = {
  name: "Élie Leligny",
  role: "Full Stack Product Builder",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "e.leligny@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  github: "https://github.com/eleligny-coder",
};

export const nav = [
  ["Accueil", "/"],
  ["Projets", "/projets"],
  ["Services", "/services"],
  ["Compétences", "/competences"],
  ["Formations", "/formations"],
  ["Méthode", "/methode"],
  ["À propos", "/a-propos"],
] as const;

export const services = [
  { title: "Cadrage produit", text: "MVP, parcours, workflow, roadmap, architecture fonctionnelle et cahier des charges." },
  { title: "SaaS & applications métiers", text: "Frontend, backend, rôles, données, paiements, dashboards et déploiement." },
  { title: "IA & automatisation", text: "Agents, OCR, RAG, copilotes internes, Make, n8n, webhooks et notifications." },
  { title: "Audit & pilotage", text: "Audit produit, QA, backlog, coordination développeurs, recette et documentation." },
];

export const skills = [
  ["Produit", "Analyse métier, MVP, roadmap, backlog, UX fonctionnelle, spécifications, recette"],
  ["Frontend", "TypeScript, JavaScript, React, Next.js, HTML, CSS, responsive, accessibilité"],
  ["Backend & data", "Supabase, PostgreSQL, PL/pgSQL, MongoDB, RLS, API, webhooks"],
  ["IA", "Agents IA, multi-agents, OCR, RAG, analyse documentaire, recommandations"],
  ["SaaS & paiement", "Stripe Billing, Stripe Connect, abonnements, commissions, KYC, quotas"],
  ["Pilotage", "Coordination, documentation, QA, priorisation, gestion des risques et lancement"],
] as const;

export const trainings = [
  "Créer et structurer son entreprise",
  "IA pour entrepreneurs et petites entreprises",
  "Concevoir un SaaS ou une application métier",
  "Organiser et automatiser son activité",
];

export const method = [
  ["01", "Comprendre", "Utilisateurs, contraintes, problème, valeur et modèle économique."],
  ["02", "Structurer", "MVP, priorités, rôles, parcours, statuts et roadmap."],
  ["03", "Architecturer", "Frontend, backend, données, sécurité, API et paiements."],
  ["04", "Concevoir", "UX métier, dashboards, formulaires, contenus et design system."],
  ["05", "Construire", "Développement, intégrations, automatisations et IA."],
  ["06", "Tester", "QA, permissions, responsive, paiements et parcours critiques."],
  ["07", "Lancer", "Déploiement, monitoring, analytics et amélioration continue."],
] as const;
