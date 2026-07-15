export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  status: string;
  accent: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  role: string[];
  roadmap: string[];
};

export const projects: Project[] = [
  {
    slug: "france-reliance",
    name: "France Reliance™",
    eyebrow: "Marketplace territoriale multi-rôles",
    summary: "Écosystème local reliant particuliers, prestataires, entreprises et associations autour de missions et paiements sécurisés.",
    status: "MVP en développement — stabilisation technique",
    accent: "cyan",
    problem: "Les services locaux, paiements, profils et acteurs solidaires utilisent des outils dispersés et des parcours peu sécurisés.",
    solution: "Une plateforme mission-centric avec profils, candidatures, validation, Solde Sécurisé Stripe™, dashboards et traçabilité.",
    features: ["Comptes multi-rôles", "Missions et candidatures", "Stripe Connect et KYC", "RLS Supabase", "Dashboards", "Documents et notifications"],
    stack: ["React", "TypeScript", "TanStack", "Supabase", "PostgreSQL", "Stripe Connect", "Mapbox", "Vercel"],
    role: ["Vision produit", "Architecture fonctionnelle", "Développement Full Stack", "Modélisation des données", "Documentation", "QA et roadmap"],
    roadmap: ["Stabiliser les webhooks Stripe", "Finaliser la carte", "Sécuriser toutes les RLS", "Étendre le pôle ESS"],
  },
  {
    slug: "ratiopro",
    name: "RatioPro",
    eyebrow: "Copilote IA de rentabilité",
    summary: "Application SaaS pour transformer ventes, factures, recettes, stocks et pertes en décisions de marge actionnables.",
    status: "Produit SaaS en finalisation commerciale",
    accent: "lime",
    problem: "Les restaurateurs disposent de données dispersées, difficiles à transformer en actions concrètes sur leurs marges.",
    solution: "Un cockpit qui connecte la caisse, scanne les factures, calcule les marges et détecte les fuites de profit.",
    features: ["Import POS", "OCR factures", "Recettes et menus", "Stocks et DLC", "Alertes IA", "Simulations de marge"],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "PL/pgSQL", "Stripe Billing", "OCR", "IA"],
    role: ["Conception produit", "Architecture Full Stack", "Logique métier", "UX cockpit", "Billing", "Tests et commercialisation"],
    roadmap: ["Connecteurs POS", "Prévisions avancées", "Benchmark multi-établissements", "Onboarding commercial"],
  },
  {
    slug: "le-billot-pro",
    name: "Le Billot Pro",
    eyebrow: "SaaS métier alimentaire",
    summary: "Logiciel métier pour piloter achats, carcasses, recettes, productions, stocks, rendements et marges.",
    status: "MVP métier fonctionnel",
    accent: "amber",
    problem: "Les ateliers suivent leurs achats, rendements, productions et marges dans plusieurs fichiers ou manuellement.",
    solution: "Un SaaS vertical qui structure les flux métier et centralise les calculs de coût, rendement et production.",
    features: ["Achats fournisseurs", "Carcasses et découpe", "Recettes", "Productions", "Stocks", "Rapports IA"],
    stack: ["Next.js", "JavaScript", "MongoDB", "Stripe Billing", "PWA", "Resend", "Vercel"],
    role: ["Analyse métier", "Architecture produit", "Développement", "Modélisation des calculs", "UX", "Roadmap"],
    roadmap: ["Tests terrain", "Exports enrichis", "Mobile PWA", "Commercialisation pilote"],
  },
  {
    slug: "parayon",
    name: "Parayon",
    eyebrow: "Analyse sportive assistée par IA",
    summary: "Plateforme multisport combinant données, moteurs probabilistes, Scanner Expert, Ticket Expert et explications IA.",
    status: "En développement — football prioritaire",
    accent: "blue",
    problem: "Les utilisateurs reçoivent des pronostics opaques sans visibilité sur le risque, les contradictions ou les données manquantes.",
    solution: "Une aide à la décision transparente : probabilité, confiance, risque, données utilisées et limites du modèle.",
    features: ["Dashboard multisport", "Scanner Expert", "Ticket Expert", "Moteurs probabilistes", "Gestion du risque", "IA explicative"],
    stack: ["Python", "JavaScript", "MongoDB", "Supabase", "Stripe", "Railway", "API sport", "OpenAI"],
    role: ["Vision produit", "Architecture IA", "Data workflows", "UX décisionnelle", "Monétisation", "Documentation"],
    roadmap: ["Normalisation des cotes", "Calibration", "Backtests", "Verticale hippique"],
  },
  {
    slug: "livre-d-un-clic-wordpress",
    name: "Livré d’un Clic — WordPress",
    eyebrow: "Projet fondateur",
    summary: "Première marketplace de services construite avec WordPress, AutomatorWP, Forminator, Stripe et plusieurs prestataires techniques.",
    status: "Projet historique arrêté — prototype fonctionnel",
    accent: "violet",
    problem: "Créer rapidement une marketplace complexe avec profils, missions, candidatures, paiements et workflows multi-étapes.",
    solution: "Un prototype WordPress avancé qui a validé le métier avant une refonte React/Supabase plus adaptée.",
    features: ["Profils utilisateurs", "Missions", "Candidatures", "Automatisations", "Stripe", "PDF et dashboards"],
    stack: ["WordPress", "Elementor", "Forminator", "AutomatorWP", "Search & Filter Pro", "Stripe"],
    role: ["Cadrage", "Configuration", "Spécifications", "Coordination développeurs", "Recette", "Arbitrage de refonte"],
    roadmap: ["Projet clôturé", "Enseignements transférés vers France Reliance"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
