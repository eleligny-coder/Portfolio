export const site = {
  name: "Élie Leligny",
  role: "Product Builder Full Stack",
  tagline: "SaaS, CRM sur mesure, IA & automatisation",
  remote: "100 % télétravail — France",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "e.leligny@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  github: "https://github.com/eleligny-coder",
  malt: "https://www.malt.fr/profile/elieleligny",
};

export const nav = [
  ["Accueil", "/"],
  ["Projets", "/projets"],
  ["Services", "/services"],
  ["Compétences", "/competences"],
  ["À propos", "/a-propos"],
  ["CV", "/cv"],
] as const;

export const services = [
  { title: "SaaS & applications métiers", text: "MVP, frontend, backend, authentification, rôles, données, dashboards, paiements et déploiement." },
  { title: "CRM sur mesure", text: "Leads, contacts, organisations, opportunités, pipelines, activités, relances, documents, KPI et automatisations." },
  { title: "IA & automatisation", text: "Agents IA, LLM, RAG, OCR, copilotes internes, Make, n8n, API, webhooks et notifications." },
  { title: "Stripe & monétisation", text: "Checkout, Billing, Connect, abonnements, commissions, droits d’accès et webhooks métier." },
  { title: "Cadrage & pilotage produit", text: "Analyse métier, MVP, roadmap, architecture fonctionnelle, backlog, spécifications, QA et coordination technique." },
];

export const skills = [
  ["Produit & architecture", "Analyse métier, MVP, roadmap, backlog, UX fonctionnelle, architecture SaaS, multi-tenant, spécifications et recette"],
  ["Full Stack", "TypeScript, JavaScript, Python, React, Next.js, FastAPI, HTML, CSS, Tailwind, API REST et webhooks"],
  ["Backend & data", "Supabase, PostgreSQL, PL/pgSQL, MongoDB, SQL, RLS, authentification, modélisation de données et permissions"],
  ["CRM sur mesure", "Leads, contacts, organisations, opportunités, pipelines, activités, propositions, contrats, Customer Success et KPI"],
  ["IA", "LLM, agents IA, systèmes multi-agents, OCR, RAG, analyse documentaire, assistants métier et recommandations"],
  ["Automatisation", "n8n, Make, AutomatorWP, intégrations API, webhooks, automatisation CRM, email, notifications et workflows métier"],
  ["SaaS & paiement", "Stripe Checkout, Billing, Connect, abonnements, commissions, KYC, quotas et contrôle des droits d’accès"],
  ["Cloud & livraison", "Railway, Vercel, Cloudflare, GitHub, Sentry, Resend, environnements, monitoring, QA et déploiement"],
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
  ["03", "Architecturer", "Frontend, backend, données, sécurité, API, CRM et paiements."],
  ["04", "Concevoir", "UX métier, dashboards, formulaires, contenus et design system."],
  ["05", "Construire", "Développement, intégrations, automatisations et IA."],
  ["06", "Tester", "QA, permissions, responsive, paiements, données et parcours critiques."],
  ["07", "Déployer", "Railway, Vercel, monitoring, analytics et amélioration continue."],
] as const;
