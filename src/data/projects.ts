export type ProjectMedia = {
  src: string;
  alt: string;
  label: string;
};

export type ArchitectureLayer = {
  label: string;
  items: string[];
};

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
  image?: string;
  imageAlt?: string;
  gallery?: ProjectMedia[];
  languages?: string[];
  architecture?: ArchitectureLayer[];
};

export const projects: Project[] = [
  {
    slug: "parayon",
    name: "Parayon",
    eyebrow: "SaaS Python, data & IA",
    summary: "Plateforme d’analyse sportive assistée par IA combinant données, moteurs d’analyse, risque, billing, partenaires et administration.",
    status: "En développement — bêta privée en préparation",
    accent: "blue",
    problem: "Les utilisateurs disposent de données et d’analyses dispersées, souvent opaques sur leur niveau de risque, leur qualité et leurs limites.",
    solution: "Une plateforme qui structure données, analyses, confiance, risque et historique dans un produit SaaS pilotable, documenté et monétisable.",
    features: ["Backend Python / FastAPI", "Moteurs d’analyse football", "Billing et crédits", "Espace partenaire", "Cockpit administrateur", "Agents IA et data workflows"],
    stack: ["Python", "FastAPI", "JavaScript", "MongoDB", "Supabase", "Stripe", "Railway", "Vercel"],
    role: ["Vision produit", "Architecture fonctionnelle", "Backend Python", "Data workflows", "IA", "Billing", "UX", "Documentation et QA"],
    roadmap: ["Finaliser la QA billing/crédits", "Connecter le runtime data commercial", "Renforcer le moteur agents", "Lancer la bêta privée"],
    image: "/projects/parayon-home.webp",
    imageAlt: "Interface d’accueil de Parayon, plateforme SaaS d’analyse sportive assistée par IA",
    gallery: [
      { src: "/projects/parayon-home.webp", alt: "Accueil Parayon", label: "Accueil produit" },
    ],
    languages: ["Python 82,8 %", "JavaScript 16,7 %", "Autres 0,5 %"],
    architecture: [
      { label: "Interface", items: ["Application web JavaScript", "Dashboard", "Scanner / analyses"] },
      { label: "API & métier", items: ["Python", "FastAPI", "Services métier", "Billing / crédits"] },
      { label: "Data & IA", items: ["APIs sportives", "Normalisation", "Moteurs d’analyse", "Agents IA"] },
      { label: "Persistance", items: ["MongoDB", "Supabase", "Historique", "Configuration"] },
      { label: "Cloud", items: ["Railway", "Vercel", "Stripe", "Resend"] },
    ],
  },
  {
    slug: "ratiopro",
    name: "RatioPro",
    eyebrow: "Copilote IA de rentabilité",
    summary: "SaaS B2B pour transformer ventes, factures, achats, recettes, stocks et pertes en décisions de marge actionnables.",
    status: "Produit SaaS en finalisation commerciale",
    accent: "lime",
    problem: "Les restaurateurs disposent de données dispersées, difficiles à rapprocher et à transformer en actions concrètes sur leurs marges.",
    solution: "Un cockpit métier qui centralise les flux, scanne les factures, calcule les coûts et met en évidence les fuites de profit.",
    features: ["Import POS", "OCR factures", "Recettes et menus", "Stocks, pertes et DLC", "Simulations de marge", "Recommandations IA"],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "PL/pgSQL", "Stripe", "OCR", "IA"],
    role: ["Conception produit", "Architecture Full Stack", "Modélisation métier", "UX cockpit", "Billing", "QA et commercialisation"],
    roadmap: ["Connecteurs POS", "Prévisions avancées", "Pilote terrain", "Onboarding commercial"],
    image: "/projects/ratiopro-home.webp",
    imageAlt: "Interface d’accueil de RatioPro, copilote de rentabilité pour restaurateurs",
    gallery: [
      { src: "/projects/ratiopro-home.webp", alt: "Accueil RatioPro", label: "Accueil produit" },
    ],
    languages: ["TypeScript 87,4 %", "PL/pgSQL 12,3 %"],
    architecture: [
      { label: "Produit", items: ["Next.js", "React", "Cockpit métier", "Parcours restaurant"] },
      { label: "Backend", items: ["Supabase", "Auth", "RLS", "Edge Functions"] },
      { label: "Données", items: ["PostgreSQL", "PL/pgSQL", "KPI", "Calculs métier"] },
      { label: "Entrées", items: ["Import POS", "CSV", "OCR factures", "Fournisseurs"] },
      { label: "Monétisation", items: ["Stripe", "Plans", "Crédits", "Quotas"] },
    ],
  },
  {
    slug: "france-reliance",
    name: "France Reliance™",
    eyebrow: "Marketplace SaaS multi-rôles",
    summary: "Écosystème territorial reliant particuliers, prestataires, entreprises et associations autour de missions et paiements sécurisés.",
    status: "MVP en développement — stabilisation technique",
    accent: "cyan",
    problem: "Les services locaux, paiements, profils et acteurs solidaires utilisent des outils dispersés et des parcours peu structurés.",
    solution: "Une plateforme centrée sur la mission avec candidatures, validation, Solde Sécurisé Stripe™, dashboards, rôles et traçabilité.",
    features: ["Comptes multi-rôles", "Missions et candidatures", "Stripe Connect et KYC", "RLS Supabase", "Dashboards", "Carte et notifications"],
    stack: ["React", "TypeScript", "TanStack", "Supabase", "PostgreSQL", "PL/pgSQL", "Stripe Connect", "Mapbox"],
    role: ["Vision produit", "Architecture fonctionnelle", "Développement Full Stack", "Modélisation des données", "Stripe", "Documentation", "QA et roadmap"],
    roadmap: ["Stabiliser auth et paiements", "Finaliser la carte", "Harmoniser les RLS", "Étendre progressivement le pôle ESS"],
    image: "/projects/france-reliance-centre-entrepreneur.webp",
    imageAlt: "Centre entrepreneur de France Reliance",
    gallery: [
      { src: "/projects/france-reliance-centre-entrepreneur.webp", alt: "Centre entrepreneur France Reliance", label: "Centre entrepreneur" },
      { src: "/projects/france-reliance-solidarite.webp", alt: "Espace solidarité France Reliance", label: "Pôle solidarité" },
    ],
    languages: ["TypeScript 92,4 %", "PL/pgSQL 7,3 %"],
    architecture: [
      { label: "Frontend", items: ["React", "TypeScript", "TanStack", "Dashboards multi-rôles"] },
      { label: "Backend", items: ["Supabase", "PostgreSQL", "PL/pgSQL", "RLS"] },
      { label: "Workflow mission", items: ["Candidatures", "Validation", "Historique", "Documents"] },
      { label: "Paiement", items: ["Stripe Connect", "KYC", "Webhooks", "Solde Sécurisé Stripe™"] },
      { label: "Services", items: ["Mapbox", "Notifications", "Vercel", "Cloudflare"] },
    ],
  },
  {
    slug: "le-billot-pro",
    name: "Le Billot Pro",
    eyebrow: "SaaS métier alimentaire",
    summary: "Logiciel métier pour piloter achats, carcasses, recettes, productions, stocks, rendements, pertes et marges.",
    status: "MVP métier / démonstration",
    accent: "amber",
    problem: "Les ateliers suivent souvent leurs achats, rendements, productions et marges dans plusieurs fichiers ou avec des calculs manuels.",
    solution: "Un SaaS vertical qui modélise les flux métier et centralise les calculs de coût, rendement, production et rentabilité.",
    features: ["Achats fournisseurs", "Carcasses et rendements", "Recettes", "Productions", "Stocks", "Exports PDF et rapports IA"],
    stack: ["JavaScript", "Python", "Supabase", "MongoDB", "Stripe Billing", "PWA", "Resend", "Vercel"],
    role: ["Analyse métier", "Architecture produit", "Développement", "Calculs métier", "UX", "Abonnements", "Documentation et roadmap"],
    roadmap: ["Tests terrain", "Exports enrichis", "Améliorations PWA", "Commercialisation pilote"],
    image: "/projects/le-billot-pro-dashboard-ia.webp",
    imageAlt: "Cockpit métier de Le Billot Pro avec synthèse et assistance IA",
    gallery: [
      { src: "/projects/le-billot-pro-dashboard-ia.webp", alt: "Cockpit métier et Billot IA", label: "Cockpit métier & Billot IA" },
      { src: "/projects/le-billot-pro-home.webp", alt: "Accueil Le Billot Pro", label: "Accueil produit" },
    ],
    languages: ["JavaScript 93,4 %", "Python 6,3 %", "Autres 0,3 %"],
    architecture: [
      { label: "Interface métier", items: ["JavaScript", "Dashboard", "Achats", "Stocks", "Productions"] },
      { label: "Données", items: ["Supabase", "MongoDB", "Historique", "Multi-business"] },
      { label: "Calcul métier", items: ["Rendements", "Coût matière", "Marges", "Pertes"] },
      { label: "Services", items: ["Python", "Rapports", "IA Insights", "Exports PDF"] },
      { label: "SaaS", items: ["Stripe Billing", "PWA", "Resend", "Vercel"] },
    ],
  },
  {
    slug: "livre-d-un-clic-wordpress",
    name: "Livré d’un Clic — WordPress",
    eyebrow: "Projet fondateur",
    summary: "Première marketplace de services construite avec WordPress, AutomatorWP, Forminator, Stripe et plusieurs prestataires techniques.",
    status: "Projet historique arrêté — prototype fonctionnel",
    accent: "violet",
    problem: "Créer rapidement une marketplace complexe avec profils, missions, candidatures, paiements et workflows multi-étapes.",
    solution: "Un prototype WordPress avancé qui a validé les besoins métier avant une refonte React/Supabase plus adaptée.",
    features: ["Profils utilisateurs", "Missions", "Candidatures", "Automatisations", "Stripe", "PDF et dashboards"],
    stack: ["WordPress", "Elementor", "Forminator", "AutomatorWP", "WP User Frontend", "Search & Filter Pro", "Stripe"],
    role: ["Cadrage", "Configuration", "Spécifications", "Coordination développeurs", "Recette", "Suivi des bugs", "Arbitrage de refonte"],
    roadmap: ["Projet clôturé", "Enseignements transférés vers France Reliance"],
    image: "/projects/livre-d-un-clic-wordpress-map-missions.webp",
    imageAlt: "Recherche de missions et carte de la marketplace Livré d’un Clic sous WordPress",
    gallery: [
      { src: "/projects/livre-d-un-clic-wordpress-map-missions.webp", alt: "Recherche de missions avec carte et filtres", label: "Recherche de missions & carte" },
      { src: "/projects/livre-d-un-clic-wordpress-about.webp", alt: "Interface publique historique de Livré d’un Clic", label: "Interface historique" },
    ],
    architecture: [
      { label: "CMS & UX", items: ["WordPress", "Elementor", "Pages publiques", "Dashboards"] },
      { label: "Formulaires", items: ["Forminator", "WP User Frontend", "Profils", "Missions"] },
      { label: "Workflows", items: ["AutomatorWP", "Statuts", "Emails", "Actions automatiques"] },
      { label: "Recherche", items: ["Search & Filter Pro", "Catégories", "Localisation", "Missions"] },
      { label: "Paiement", items: ["Stripe", "Connect en expérimentation", "PDF", "Validation"] },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
