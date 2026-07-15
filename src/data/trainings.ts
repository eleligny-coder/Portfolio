export type Training = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  audience: string[];
  prerequisites: string;
  formats: string[];
  objectives: string[];
  program: string[];
  exercises: string[];
  deliverables: string[];
};

export const trainings: Training[] = [
  {
    slug: "creer-structurer-entreprise",
    title: "Créer et structurer son entreprise de A à Z",
    category: "Entrepreneuriat",
    summary: "Passer d’une idée à une activité structurée avec une offre, un modèle économique, des outils et un plan d’action.",
    audience: ["Porteurs de projet", "Demandeurs d’emploi", "Indépendants", "Créateurs d’activité"],
    prerequisites: "Aucun prérequis technique. Venir avec une idée ou une activité existante est recommandé.",
    formats: ["Atelier 2 h", "1 journée", "2 jours", "Accompagnement personnalisé"],
    objectives: ["Clarifier son projet", "Choisir un modèle économique", "Structurer son offre", "Organiser les premières actions", "Identifier les risques"],
    program: ["Vision et besoin client", "Business model", "Statuts et obligations", "Offre et tarification", "Budget", "Outils", "Organisation", "Premiers clients"],
    exercises: ["Canvas de projet", "Construction d’une offre", "Calcul simple de rentabilité", "Plan d’action 30 jours"],
    deliverables: ["Support de formation", "Trame d’offre", "Checklist de lancement", "Plan d’action personnalisé"],
  },
  {
    slug: "business-model-rentable",
    title: "Construire un business model rentable",
    category: "Entrepreneuriat",
    summary: "Transformer une idée en modèle économique cohérent, testable et pilotable.",
    audience: ["Entrepreneurs", "Associations", "Porteurs de SaaS", "TPE"],
    prerequisites: "Disposer d’une idée, d’une offre ou d’une activité à analyser.",
    formats: ["Atelier 2 h", "1 journée", "2 jours"],
    objectives: ["Identifier les revenus", "Cartographier les coûts", "Définir les hypothèses", "Mesurer le seuil de rentabilité", "Choisir les bons KPI"],
    program: ["Proposition de valeur", "Segments clients", "Sources de revenus", "Structure de coûts", "Marge", "Scénarios", "KPI", "Plan de test"],
    exercises: ["Business Model Canvas", "Simulation de trois scénarios", "Calcul du point mort"],
    deliverables: ["Canvas complété", "Tableau d’hypothèses", "Plan de validation terrain"],
  },
  {
    slug: "ia-entrepreneurs",
    title: "IA pour entrepreneurs et petites entreprises",
    category: "Intelligence artificielle",
    summary: "Utiliser l’IA de façon concrète pour gagner du temps, structurer l’information et améliorer les tâches quotidiennes.",
    audience: ["Entrepreneurs", "TPE", "Associations", "Équipes administratives"],
    prerequisites: "Savoir utiliser un navigateur et des outils bureautiques courants.",
    formats: ["Atelier 2 h", "1 journée", "2 jours"],
    objectives: ["Comprendre les usages utiles", "Rédiger de meilleurs prompts", "Automatiser sans perdre le contrôle", "Protéger les données", "Créer ses premiers assistants"],
    program: ["Panorama ChatGPT, Claude, Gemini et Perplexity", "Prompting", "Recherche", "Rédaction", "Analyse", "Organisation", "Confidentialité", "Automatisation"],
    exercises: ["Créer une bibliothèque de prompts", "Analyser un document", "Construire un assistant métier simple"],
    deliverables: ["Guide de prompts", "Checklist sécurité", "Cas d’usage personnalisés"],
  },
  {
    slug: "agents-ia-professionnels",
    title: "Concevoir et utiliser des agents IA",
    category: "Intelligence artificielle",
    summary: "Structurer des assistants spécialisés, leurs instructions, leurs sources et leurs limites.",
    audience: ["Chefs de projet", "Consultants", "Entrepreneurs", "Équipes digitales"],
    prerequisites: "Avoir déjà utilisé un outil d’IA générative.",
    formats: ["1 journée", "2 jours", "5 jours"],
    objectives: ["Définir un agent", "Séparer rôles et responsabilités", "Structurer les entrées et sorties", "Tester la fiabilité", "Documenter les limites"],
    program: ["Architecture d’agent", "Instructions", "Contexte", "Outils", "Mémoire", "RAG", "Tests", "Orchestration multi-agents"],
    exercises: ["Créer un agent spécialisé", "Écrire un protocole de test", "Concevoir un workflow multi-agents"],
    deliverables: ["Fiche agent", "Matrice de tests", "Template d’orchestration"],
  },
  {
    slug: "concevoir-saas",
    title: "Concevoir un SaaS de A à Z",
    category: "Produit numérique",
    summary: "Cadrer une application SaaS depuis le besoin jusqu’au lancement, sans se perdre dans les fonctionnalités secondaires.",
    audience: ["Entrepreneurs", "Product Owners", "Chefs de projet", "Développeurs"],
    prerequisites: "Avoir une idée de produit ou un cas métier à traiter.",
    formats: ["1 journée", "2 jours", "5 jours", "Accompagnement personnalisé"],
    objectives: ["Définir le MVP", "Modéliser les rôles et workflows", "Choisir l’architecture", "Prévoir la monétisation", "Construire une roadmap"],
    program: ["Besoin", "Utilisateurs", "MVP", "Rôles", "Statuts", "Workflows", "Données", "UX", "Paiement", "Sécurité", "Déploiement", "Mesure"],
    exercises: ["Cadrage d’un SaaS", "Schéma de données", "Workflow métier", "Roadmap priorisée"],
    deliverables: ["Canvas produit", "Roadmap", "Modèle de données initial", "Checklist de lancement"],
  },
  {
    slug: "application-metier",
    title: "Créer une application métier",
    category: "Produit numérique",
    summary: "Traduire des opérations réelles en modules, données, règles et interfaces cohérentes.",
    audience: ["PME", "Consultants métier", "Chefs de projet", "Développeurs"],
    prerequisites: "Connaître le métier ou disposer d’un utilisateur référent.",
    formats: ["1 journée", "2 jours", "5 jours"],
    objectives: ["Cartographier les processus", "Modéliser les données", "Éviter les interfaces génériques", "Définir les contrôles", "Préparer la recette"],
    program: ["Observation métier", "Objets métier", "Rôles", "Règles", "Écrans", "Calculs", "Documents", "Notifications", "Tests"],
    exercises: ["Cartographie d’un processus", "Fiche module", "Scénarios de recette"],
    deliverables: ["Cartographie", "Fiches modules", "Backlog initial", "Plan de recette"],
  },
  {
    slug: "product-management",
    title: "Product Management opérationnel",
    category: "Produit numérique",
    summary: "Piloter un produit avec une vision, des priorités, des décisions traçables et des livraisons validables.",
    audience: ["Product Owners", "Chefs de projet", "Fondateurs", "Responsables digitaux"],
    prerequisites: "Aucun prérequis technique obligatoire.",
    formats: ["1 journée", "2 jours", "5 jours"],
    objectives: ["Prioriser", "Écrire des spécifications utiles", "Gérer un backlog", "Suivre la qualité", "Communiquer avec les développeurs"],
    program: ["Vision", "Objectifs", "Discovery", "MVP", "Backlog", "User stories", "Critères d’acceptation", "QA", "Roadmap"],
    exercises: ["Découpage d’une fonctionnalité", "Rédaction de user stories", "Arbitrage d’un backlog"],
    deliverables: ["Templates de backlog", "Fiche de spécification", "Checklist de recette"],
  },
  {
    slug: "automatiser-activite",
    title: "Organiser et automatiser son activité",
    category: "Automatisation",
    summary: "Structurer les tâches, les données et les outils avant de déployer Make, n8n et l’IA.",
    audience: ["TPE", "Associations", "Indépendants", "Équipes administratives"],
    prerequisites: "Connaître les tâches récurrentes de son activité.",
    formats: ["Atelier 2 h", "1 journée", "2 jours"],
    objectives: ["Identifier les tâches automatisables", "Choisir les bons outils", "Structurer un CRM", "Créer un premier workflow", "Mesurer le gain"],
    program: ["Cartographie", "Données", "CRM", "Make", "n8n", "Webhooks", "IA", "Notifications", "Contrôles et erreurs"],
    exercises: ["Inventaire des tâches", "Schéma d’automatisation", "Prototype de workflow"],
    deliverables: ["Matrice d’automatisation", "Schéma cible", "Plan d’implémentation"],
  },
  {
    slug: "wordpress-professionnel",
    title: "WordPress professionnel et workflows avancés",
    category: "Développement web",
    summary: "Construire un site ou portail WordPress maintenable avec formulaires, rôles, automatisations et limites clairement identifiées.",
    audience: ["Freelances", "Agences", "Chefs de projet", "Entrepreneurs"],
    prerequisites: "Connaître les bases de WordPress.",
    formats: ["1 journée", "2 jours", "5 jours"],
    objectives: ["Structurer les contenus", "Gérer les rôles", "Créer des formulaires", "Automatiser", "Évaluer quand quitter WordPress"],
    program: ["Architecture WordPress", "Elementor", "Forminator", "AutomatorWP", "Filtres", "Stripe", "Sécurité", "Performance", "Recette"],
    exercises: ["Concevoir un portail", "Créer un formulaire conditionnel", "Documenter un workflow"],
    deliverables: ["Architecture type", "Checklist plugins", "Plan de recette"],
  },
  {
    slug: "numerique-ess",
    title: "Numérique, plateformes et ESS",
    category: "Économie Sociale et Solidaire",
    summary: "Concevoir des services numériques utiles, inclusifs et pilotables pour les associations et projets territoriaux.",
    audience: ["Associations", "Structures d’insertion", "Collectivités", "Porteurs de projet ESS"],
    prerequisites: "Aucun prérequis technique.",
    formats: ["Atelier 2 h", "1 journée", "2 jours"],
    objectives: ["Comprendre les enjeux numériques de l’ESS", "Concevoir des parcours inclusifs", "Mesurer l’impact", "Structurer les partenariats", "Éviter la complexité inutile"],
    program: ["Besoins des publics", "Inclusion", "Données", "Plateformes", "Missions solidaires", "Associations", "Impact", "Gouvernance"],
    exercises: ["Cartographie des acteurs", "Parcours bénéficiaire", "Indicateurs d’impact"],
    deliverables: ["Carte d’écosystème", "Parcours cible", "Premiers KPI d’impact"],
  },
];

export function getTraining(slug: string) {
  return trainings.find((training) => training.slug === slug);
}
