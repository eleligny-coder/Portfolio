import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { projects } from "@/data/projects";
import { skills, site } from "@/data/site";

export const metadata: Metadata = {
  title: "CV — Product Builder Full Stack",
  description: "CV d’Élie Leligny — Product Builder Full Stack spécialisé SaaS, CRM sur mesure, IA et automatisation, disponible en télétravail.",
};

const experiences = [
  {
    period: "Février 2025 — aujourd’hui",
    title: "Fondateur & Product Builder Full Stack",
    company: "Livré d’un Clic SASU",
    text: "Conception et pilotage de produits SaaS, applications métiers et plateformes multi-rôles : cadrage MVP, architecture, Full Stack, données, Stripe, automatisation, IA, documentation, QA et coordination technique.",
  },
  {
    period: "Depuis 2025",
    title: "Consultant Product Builder",
    company: "Leligny Agency",
    text: "Conception de CRM sur mesure, automatisations, outils internes, sites professionnels et workflows numériques pour entrepreneurs et organisations.",
  },
  {
    period: "Projet fondateur",
    title: "Product Owner & Chef de projet digital",
    company: "Livré d’un Clic — version WordPress",
    text: "Première version de la marketplace : profils, missions, candidatures, Stripe, PDF et dashboards. Spécifications, coordination de développeurs, recette et suivi des corrections avant abandon de WordPress et reconstruction sur une stack applicative moderne.",
  },
  {
    period: "11 mois",
    title: "Relation client, devis & CRM",
    company: "EBLMC",
    text: "Suivi de demandes clients, préparation de devis, mise à jour CRM, organisation des informations commerciales et coordination des dossiers dans le secteur télécoms et électricité.",
  },
];

export default function CvPage() {
  return <div className="cv-page">
    <section className="cv-hero shell">
      <div>
        <span className="eyebrow">CV — 100 % télétravail</span>
        <h1>Élie Leligny</h1>
        <p className="cv-role">Product Builder Full Stack</p>
        <p className="summary">SaaS • CRM sur mesure • IA • Automatisation</p>
        <div className="cv-contact"><a href={`mailto:${site.email}`}>{site.email}</a><span>France</span><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={site.malt} target="_blank" rel="noreferrer">Malt ↗</a></div>
      </div>
      <div className="cv-actions no-print"><a className="btn cv-download" href="/documents/elie-leligny-cv-product-builder-full-stack.pdf" download>Télécharger le PDF</a><PrintButton/><Link className="btn secondary" href="/contact">Me contacter</Link></div>
    </section>

    <section className="section compact"><div className="shell cv-section">
      <span className="eyebrow">Profil</span><h2>Du besoin métier au produit exploitable.</h2>
      <p className="lead">Product Builder Full Stack spécialisé dans la conception de SaaS, applications métiers, CRM sur mesure, marketplaces et solutions intégrant l’intelligence artificielle.</p>
      <p>J’interviens sur l’ensemble du cycle produit : analyse métier, cadrage MVP, architecture fonctionnelle et technique, développement, bases de données, paiements Stripe, automatisation, IA, déploiement cloud, documentation, tests et amélioration continue.</p>
    </div></section>

    <section className="section alt compact"><div className="shell cv-section">
      <span className="eyebrow">Expériences</span><h2>Produit, technique et terrain.</h2>
      <div className="cv-timeline">{experiences.map(exp=><article className="cv-job" key={`${exp.company}-${exp.title}`}><div className="cv-period">{exp.period}</div><div><h3>{exp.title}</h3><strong>{exp.company}</strong><p>{exp.text}</p></div></article>)}</div>
    </div></section>

    <section className="section compact"><div className="shell cv-section">
      <span className="eyebrow">Projets sélectionnés</span><h2>Produits construits et pilotés.</h2>
      <div className="cv-projects">{projects.slice(0,4).map(project=><article key={project.slug}><div><span className="project-type">{project.eyebrow}</span><h3>{project.name}</h3></div><p>{project.summary}</p><strong>{project.status}</strong><div className="tags">{project.stack.slice(0,7).map(item=><span key={item}>{item}</span>)}</div></article>)}</div>
    </div></section>

    <section className="section alt compact"><div className="shell cv-section">
      <span className="eyebrow">Compétences</span><h2>Stack & capacités.</h2>
      <div className="grid two cv-skills">{skills.map(([title,items])=><article className="card" key={title}><h3>{title}</h3><p>{items}</p></article>)}</div>
    </div></section>

    <section className="section compact"><div className="shell grid two cv-section">
      <div><span className="eyebrow">Formation</span><h2>Parcours.</h2><ul className="list"><li>Titre professionnel Conseiller de Vente — CFA FORMETIK, Nancy</li><li>Autoformation continue : développement Full Stack, SaaS, IA, automatisation et Product Management</li></ul></div>
      <div><span className="eyebrow">Disponibilité</span><h2>Remote-first.</h2><ul className="list"><li>Français — langue maternelle</li><li>France — 100 % télétravail</li><li>Missions freelance ou opportunités salariées à distance</li></ul></div>
    </div></section>
  </div>;
}
