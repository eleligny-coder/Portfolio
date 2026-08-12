const deploymentHost = process.env.NEXT_PUBLIC_SITE_URL
  ?? process.env.CF_PAGES_URL
  ?? "http://localhost:3000";

export const site = {
  name: "Élie Leligny",
  role: "Product Builder Full Stack",
  tagline: "SaaS, CRM sur mesure, automatisation & produits métiers",
  remote: "100 % télétravail — France",
  email: "e.leligny@gmail.com",
  url: deploymentHost.replace(/\/$/, ""),
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
  { title: "SaaS & applications métiers", text: "MVP, frontend, backend, authentification, rôles, données, dashboards, paiements et mise en production." },
  { title: "CRM sur mesure", text: "Leads, contacts, organisations, opportunités, pipelines, activités, relances, documents, KPI et automatisations." },
  { title: "Automatisation & intégrations", text: "Workflows métier, OCR, API, webhooks, n8n, Make, notifications et systèmes d’aide à la décision lorsque le produit le nécessite." },
  { title: "Stripe & monétisation", text: "Checkout, Billing, Connect, abonnements, commissions, droits d’accès et webhooks métier." },
  { title: "Cadrage & pilotage produit", text: "Analyse métier, MVP, roadmap, architecture fonctionnelle, backlog, spécifications, QA et coordination technique." },
];

export const skills = [
  ["Produit & architecture", "Analyse métier, MVP, roadmap, backlog, UX fonctionnelle, architecture SaaS, multi-tenant, spécifications et recette"],
  ["Full Stack", "TypeScript, JavaScript, Python, React, Next.js, FastAPI, HTML, CSS, Tailwind, API REST et webhooks"],
  ["Backend & data", "Supabase, PostgreSQL, PL/pgSQL, MongoDB, SQL, RLS, authentification, modélisation de données et permissions"],
  ["CRM sur mesure", "Leads, contacts, organisations, opportunités, pipelines, activités, propositions, contrats, Customer Success et KPI"],
  ["Systèmes intelligents", "LLM, agents spécialisés, OCR, RAG, analyse documentaire, assistants métier et recommandations"],
  ["Automatisation", "n8n, Make, AutomatorWP, intégrations API, webhooks, automatisation CRM, email, notifications et workflows métier"],
  ["SaaS & paiement", "Stripe Checkout, Billing, Connect, abonnements, commissions, KYC, quotas et contrôle des droits d’accès"],
  ["Cloud & livraison", "Railway, Cloudflare Pages, Cloudflare Workers, GitHub, Sentry, environnements, monitoring, QA et déploiement"],
] as const;

export const trainings = [
  "Créer et structurer son entreprise",
  "Systèmes intelligents pour entrepreneurs et petites entreprises",
  "Concevoir un SaaS ou une application métier",
  "Organiser et automatiser son activité",
];

export const method = [
  ["Comprendre", "Utilisateurs, contraintes, problème, valeur et modèle économique."],
  ["Structurer", "MVP, priorités, rôles, parcours, statuts et roadmap."],
  ["Architecturer", "Frontend, backend, données, sécurité, API, CRM et paiements."],
  ["Concevoir", "UX métier, dashboards, formulaires, contenus et design system."],
  ["Construire", "Développement, intégrations et automatisations."],
  ["Tester", "QA, permissions, responsive, paiements, données et parcours critiques."],
  ["Déployer", "Cloudflare Pages, Railway, monitoring, analytics et amélioration continue."],
] as const;
