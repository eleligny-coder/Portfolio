export type MediaSlot = {
  title: string;
  description: string;
  format: "desktop" | "mobile" | "diagram" | "document";
};

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  status: string;
  accent: "cyan" | "lime" | "amber" | "blue" | "violet";
  target: string;
  positioning: string;
  problem: string;
  solution: string;
  workflow: string[];
  features: string[];
  stack: string[];
  languages?: string[];
  role: string[];
  proof: string[];
  roadmap: string[];
  learnings: string[];
  mediaSlots: MediaSlot[];
};

export const projects: Project[] = [
  {
    slug: "france-reliance",
    name: "France Reliance™",
    eyebrow: "Écosystème territorial & marketplace multi-rôles",
    summary: "Plateforme locale intelligente reliant particuliers, prestataires, entreprises, associations et acteurs de l’ESS autour de missions, services et paiements sécurisés.",
    status: "MVP en développement — stabilisation technique",
    accent: "cyan",
    target: "Particuliers, prestataires, entreprises, associations et acteurs territoriaux.",
    positioning: "France Reliance™ est le nom de travail de l’écosystème et de la vision. Livré d’un Clic SASU est l’éditeur légal ; le nom public du produit reste à définir.",
    problem: "Les services locaux, profils, demandes, paiements et parcours solidaires sont dispersés entre plusieurs outils, avec peu de traçabilité et des étapes difficiles à sécuriser.",
    solution: "Une plateforme mission-centric avec profils multi-rôles, services, candidatures, validation des heures, Solde Sécurisé Stripe™, dashboards, documents et règles d’accès Supabase.",
    workflow: ["Estimation de la mission", "Validation du client", "Paiement sécurisé", "Réalisation de la prestation", "Ajout d’heures avec validation si nécessaire", "Validation de fin", "Paiement du prestataire"],
    features: [
      "Authentification et profils multi-rôles",
      "Publication de services et de missions",
      "Recherche, catégories et zones géographiques",
      "Candidatures et sélection du prestataire",
      "Estimation, heures prévues et heures supplémentaires validées",
      "Stripe Checkout, Connect Express, KYC et webhooks",
      "Solde Sécurisé Stripe™ et paiement après validation",
      "Dashboards client, prestataire, entreprise, association et administration",
      "Avis, notifications, documents et historique",
      "Page Solidarité : RSA, AAH, associations, cagnottes et dons",
      "Engagement de redistribution de 5 % du chiffre d’affaires aux associations",
    ],
    stack: ["React 19", "TypeScript", "TanStack", "Vite", "Supabase", "PostgreSQL", "PL/pgSQL", "RLS", "Stripe Connect", "Mapbox", "Vercel", "Cloudflare"],
    languages: ["TypeScript — 92,4 %", "PL/pgSQL — 7,3 %"],
    role: ["Vision produit", "Architecture fonctionnelle", "Développement Full Stack", "Modélisation des données", "Stripe Connect", "RLS", "UX multi-rôles", "Documentation", "Tests", "Roadmap"],
    proof: ["Workflow métier documenté", "Schémas et statuts de mission", "Architecture Supabase/RLS", "Intégration Stripe en cours de validation", "Simulateurs et centre entrepreneurial documentés"],
    roadmap: ["Stabiliser les webhooks et payouts Stripe", "Finaliser la carte et la recherche", "Harmoniser les RLS et schémas SQL", "Étendre le centre entrepreneur", "Déployer progressivement les briques ESS et IA"],
    learnings: ["Concevoir un produit multi-rôles", "Séparer vision cible et périmètre MVP", "Modéliser un workflow de paiement complexe", "Piloter une roadmap par risques"],
    mediaSlots: [
      { title: "Dashboard multi-rôles", description: "Vue synthétique client ou prestataire avec missions, statuts et actions prioritaires.", format: "desktop" },
      { title: "Workflow de mission", description: "Diagramme estimation → validation → prestation → validation finale → paiement.", format: "diagram" },
      { title: "Solde Sécurisé Stripe™", description: "Écran de paiement et suivi de libération des fonds.", format: "desktop" },
      { title: "Carte et recherche", description: "Recherche locale de missions et prestataires.", format: "desktop" },
      { title: "Page Solidarité", description: "Présentation RSA, AAH, associations, cagnottes et dons.", format: "mobile" },
    ],
  },
  {
    slug: "ratiopro",
    name: "RatioPro",
    eyebrow: "Copilote IA de rentabilité pour restaurateurs",
    summary: "SaaS analytique qui transforme données de caisse, factures, recettes, stocks et pertes en indicateurs de rentabilité et recommandations actionnables.",
    status: "Produit Full Stack avancé — finalisation commerciale",
    accent: "lime",
    target: "Restaurants, groupes de restauration et exploitants multi-établissements.",
    positioning: "Un cockpit de pilotage, pas un logiciel comptable : il connecte les données opérationnelles pour montrer où agir sur la marge.",
    problem: "Les restaurateurs disposent de données fragmentées entre caisse, factures, recettes, achats, stocks et feuilles de calcul, sans vision consolidée de leurs fuites de profit.",
    solution: "Un cockpit CONNECT → ANALYZE → ACT qui importe les ventes, scanne les factures, rapproche les produits, calcule les marges et propose des actions prioritaires.",
    workflow: ["Connexion ou import des données", "OCR et normalisation", "Calcul des coûts et marges", "Détection des anomalies", "Simulation", "Recommandation et suivi"],
    features: [
      "Cockpit de rentabilité et score de santé",
      "Import CSV ou connexion POS",
      "Scanner OCR des factures fournisseurs",
      "Gestion des plats, recettes, menus, variantes et options",
      "Ingrédients, stocks, achats, pertes et DLC",
      "Normalisation et rapprochement intelligent des produits",
      "Détection des anomalies et fuites de profit",
      "Simulations de prix, coût matière et marge",
      "Prévisions de ventes, stocks et commandes",
      "Équipes, établissements, abonnements, crédits et quotas",
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "PL/pgSQL", "RLS", "Edge Functions", "Stripe Billing", "OCR", "IA", "Tailwind CSS"],
    languages: ["TypeScript — 87,4 %", "PL/pgSQL — 12,3 %"],
    role: ["Conception produit", "Architecture fonctionnelle et technique", "Développement Full Stack", "Modélisation de la base", "UX métier", "Billing", "IA", "Documentation", "Tests", "Préparation commerciale"],
    proof: ["Cockpit métier structuré", "Données restaurant modélisées", "Imports et OCR intégrés au périmètre", "Règles de plans et quotas", "Calculs en base PostgreSQL"],
    roadmap: ["Étendre les connecteurs POS", "Renforcer les prévisions", "Ajouter le benchmark multi-établissements", "Finaliser l’onboarding commercial", "Industrialiser les tests de données"],
    learnings: ["Construire un SaaS B2B analytique", "Transformer des données brutes en décisions", "Combiner TypeScript et logique PL/pgSQL", "Concevoir une UX spécialisée restauration"],
    mediaSlots: [
      { title: "Cockpit de rentabilité", description: "KPI, score santé, marges, pertes et recommandations prioritaires.", format: "desktop" },
      { title: "Scanner de facture", description: "Parcours OCR, validation et rapprochement fournisseur.", format: "mobile" },
      { title: "Import POS", description: "Connexion ou import des ventes de caisse.", format: "desktop" },
      { title: "Simulateur de marge", description: "Impact d’un changement de prix ou de coût matière.", format: "desktop" },
      { title: "Architecture CONNECT → ANALYZE → ACT", description: "Schéma synthétique du flux de valeur.", format: "diagram" },
    ],
  },
  {
    slug: "le-billot-pro",
    name: "Le Billot Pro",
    eyebrow: "Logiciel métier pour boucheries et ateliers de transformation",
    summary: "SaaS B2B centralisant achats, carcasses, recettes, productions, stocks, rendements, pertes et analyses pour améliorer le pilotage de la rentabilité.",
    status: "MVP métier fonctionnel — démonstration disponible",
    accent: "amber",
    target: "Boucheries, charcuteries, traiteurs et ateliers de transformation alimentaire.",
    positioning: "Un outil d’aide au pilotage métier ; ni caisse, ni ERP industriel, ni logiciel comptable.",
    problem: "Les achats, rendements, recettes, productions, stocks et marges sont souvent suivis dans plusieurs fichiers ou calculés manuellement.",
    solution: "Un SaaS vertical qui structure chaque flux métier, conserve l’historique et automatise les calculs de coût, rendement, prix de revient et marge.",
    workflow: ["Enregistrer les achats", "Valoriser les carcasses", "Construire les recettes", "Planifier la production", "Suivre les mouvements de stock", "Analyser les écarts et marges"],
    features: [
      "Dashboard avec KPI, alertes et activité récente",
      "Achats fournisseurs HT/TTC et TVA",
      "Carcasses, découpe, rendement, pertes et valorisation",
      "Recettes, ingrédients, coût matière et marge cible",
      "Productions, lots, quantités et écarts prévu/réel",
      "Stock, entrées, sorties, mouvements et traçabilité",
      "Exports PDF et rapports imprimables",
      "IA Insights : résumé, alertes et aide à la décision",
      "Paramètres énergie, main-d’œuvre, devise et objectifs de marge",
    ],
    stack: ["Next.js", "JavaScript", "Python", "MongoDB", "Stripe Billing", "Resend", "PWA", "Vercel"],
    languages: ["JavaScript — 93,4 %", "Python — 6,3 %", "Autres — 0,3 %"],
    role: ["Analyse métier", "Conception d’un SaaS vertical", "Architecture produit", "Développement Full Stack", "Calculs métier", "UX", "Documentation", "Roadmap", "Tests"],
    proof: ["Modules métier structurés", "Calculs de rendement et coût", "Gestion multi-business", "Catalogue produits et dashboard groupe", "Billing et quotas"],
    roadmap: ["Tests terrain avec professionnels", "Exports enrichis", "Optimisation PWA mobile", "Pilote commercial", "Rapports IA plus contextualisés"],
    learnings: ["Modéliser un métier complexe", "Concevoir autour des gestes opérationnels", "Rendre les calculs transparents", "Créer une architecture multi-business"],
    mediaSlots: [
      { title: "Dashboard métier", description: "KPI, alertes, activité récente et accès aux modules.", format: "desktop" },
      { title: "Fiche carcasse", description: "Découpe, rendement, pertes et valorisation des morceaux.", format: "desktop" },
      { title: "Fiche recette", description: "Ingrédients, coût matière, prix de revient et marge cible.", format: "desktop" },
      { title: "Production et écarts", description: "Comparaison des quantités prévues et réalisées.", format: "mobile" },
      { title: "Rapport PDF", description: "Exemple de synthèse ou rapport imprimable.", format: "document" },
    ],
  },
  {
    slug: "parayon",
    name: "Parayon",
    eyebrow: "Plateforme d’analyse sportive assistée par IA",
    summary: "Plateforme multisport et hippique combinant données, moteurs probabilistes, Scanner Expert, Ticket Expert, gestion du risque et explications IA.",
    status: "En développement — verticale Football prioritaire",
    accent: "blue",
    target: "Utilisateurs souhaitant une aide à la décision transparente sur les événements sportifs.",
    positioning: "Parayon ne vend pas un pronostic magique : l’interface expose probabilité, confiance, risque, contradictions et données manquantes.",
    problem: "Les pronostics traditionnels sont souvent opaques, sans explication sur la qualité des données, le risque, les contradictions ou les limites du modèle.",
    solution: "Une architecture Python et JavaScript qui normalise les données, applique plusieurs moteurs, fusionne les signaux et présente une analyse explicable.",
    workflow: ["Collecte des données", "Contrôle de disponibilité", "Normalisation", "Calcul probabiliste", "Fusion des signaux", "Évaluation du risque", "Explication utilisateur"],
    features: [
      "Dashboard multisport et matchs du jour",
      "Page Football dédiée",
      "Scanner Expert avec filtres multisports",
      "Ticket Expert jusqu’à 10 sélections",
      "Gestion du budget et du risque",
      "Analyses simples et détaillées",
      "Historique, abonnements, crédits et notifications",
      "Backend Python, APIs sportives et IA explicative",
      "Architecture cible : 41 agents répartis sur 8 cerveaux spécialisés",
      "Moteurs Poisson, Monte Carlo, Bayésien, calibration et backtests dans la roadmap",
    ],
    stack: ["Python", "JavaScript", "MongoDB", "Supabase", "Stripe", "Railway", "Vercel", "Resend", "API-Football", "GoalServe", "OpenAI"],
    languages: ["Python — 82,8 %", "JavaScript — 16,7 %", "Autres — 0,5 %"],
    role: ["Vision produit", "Architecture IA", "Orchestration d’agents", "Data workflows", "UX décisionnelle", "Monétisation", "Documentation", "Roadmap"],
    proof: ["Architecture produit documentée", "Backend Python majoritaire", "Modules Scanner et Ticket définis", "Registre des marchés en construction", "Roadmap probabiliste M1 à M16"],
    roadmap: ["Finaliser Availability Engine", "Normaliser les cotes et no-vig", "Déployer xG et Poisson", "Persister snapshots et settlements", "Backtester et calibrer", "Étendre l’hippique"],
    learnings: ["Présenter l’incertitude", "Séparer calcul et explication", "Orchestrer une architecture data", "Éviter les probabilités fictives", "Documenter une cible sans la présenter comme déjà active"],
    mediaSlots: [
      { title: "Dashboard multisport", description: "Matchs du jour, analyses prioritaires et filtres.", format: "desktop" },
      { title: "Scanner Expert", description: "Scan global avec filtres football, hippique et autres sports.", format: "desktop" },
      { title: "Ticket Expert", description: "Construction d’un ticket multisport avec gestion du risque.", format: "mobile" },
      { title: "Analyse détaillée", description: "Probabilité, confiance, contradictions et données manquantes.", format: "desktop" },
      { title: "Architecture des moteurs", description: "Diagramme données → moteurs → risque → explication.", format: "diagram" },
    ],
  },
  {
    slug: "livre-d-un-clic-wordpress",
    name: "Livré d’un Clic — WordPress",
    eyebrow: "Première marketplace de services — projet fondateur",
    summary: "Prototype WordPress avancé ayant permis de valider les workflows de marketplace, de coordonner plusieurs développeurs et d’identifier les limites ayant conduit à la refonte Full Stack.",
    status: "Projet historique arrêté — prototype fonctionnel",
    accent: "violet",
    target: "Clients, prestataires et administrateurs d’une marketplace locale de services.",
    positioning: "Une expérience fondatrice à présenter avec transparence : le projet n’a pas été finalisé en production, mais il a construit les compétences produit, WordPress et pilotage qui ont servi à la refonte.",
    problem: "Créer rapidement une marketplace complexe avec profils, missions, candidatures, paiements, heures, documents et automatisations dans un écosystème de plugins.",
    solution: "Un prototype WordPress orchestrant Forminator, AutomatorWP, Elementor, Search & Filter Pro, WP User Frontend et Stripe autour d’un workflow multi-étapes.",
    workflow: ["Création de mission", "Candidature", "Sélection", "Estimation et validation", "Paiement", "Réalisation", "Validation de fin", "Paiement prestataire"],
    features: [
      "Inscription, profils clients et prestataires",
      "Publication et modification de missions",
      "Recherche par catégorie, localisation et statut",
      "Candidatures, sélection et notifications",
      "Estimation d’heures et heures supplémentaires",
      "Stripe, début de Connect, KYC et commission",
      "PDF de mission",
      "Automatisations AutomatorWP",
      "Formulaires conditionnels Forminator",
      "Dashboards client, prestataire et administrateur",
      "Emails, catégories, carte et réflexion solidaire",
      "Coordination de plusieurs prestataires techniques",
    ],
    stack: ["WordPress", "Elementor", "Forminator", "AutomatorWP", "Search & Filter Pro", "WP User Frontend", "Stripe"],
    role: ["Définition fonctionnelle", "Configuration de l’écosystème", "Spécifications", "Coordination développeurs", "Tests", "Recette", "Validation", "Documentation", "Arbitrage de refonte"],
    proof: ["Prototype fonctionnel", "Workflows complexes documentés", "Nombreux formulaires et automatisations", "Expérience de recette et coordination", "Décision argumentée de refonte"],
    roadmap: ["Projet clôturé", "Enseignements transférés vers France Reliance", "Aucune nouvelle fonctionnalité prévue sur cette architecture"],
    learnings: ["WordPress avancé", "Coordination technique", "Gestion des dépendances plugins", "Recette fonctionnelle", "Savoir arrêter une architecture devenue inefficace"],
    mediaSlots: [
      { title: "Dashboard client", description: "Missions, candidatures, paiements et documents.", format: "desktop" },
      { title: "Formulaire de mission", description: "Champs conditionnels, estimation et publication.", format: "mobile" },
      { title: "Workflow AutomatorWP", description: "Exemple d’automatisation entre formulaires, rôles et statuts.", format: "diagram" },
      { title: "Recherche et filtres", description: "Résultats par catégorie et localisation.", format: "desktop" },
      { title: "PDF de mission", description: "Document généré pour le client et le prestataire.", format: "document" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
