import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, SectionTitle } from "@/components/layout";

export const metadata: Metadata = { title: "À propos" };

const journey = [
  ["01", "WordPress & automatisation", "Premiers sites, formulaires, Elementor, AutomatorWP, tunnels et workflows."],
  ["02", "Marketplace & coordination", "Conception de Livré d’un Clic, rédaction de spécifications, coordination développeurs, tests et recette."],
  ["03", "Passage au Full Stack", "React, TypeScript, Supabase, PostgreSQL, RLS, Stripe et architectures applicatives plus robustes."],
  ["04", "SaaS métiers", "Le Billot Pro et RatioPro : modélisation de processus métier, dashboards, billing, OCR, marges et données."],
  ["05", "Python, Data & IA", "Parayon : backend Python/FastAPI, data workflows, agents IA, billing, partenaires et cockpit admin."],
] as const;

export default function Page() {
  return <>
    <PageIntro
      eyebrow="À propos"
      title="Product Builder Full Stack, entrepreneur et consultant."
      text="Je relie produit, business et technique pour transformer des besoins métier complexes en SaaS, CRM sur mesure, applications, automatisations et systèmes IA exploitables."
    />

    <section className="section alt"><div className="shell">
      <SectionTitle eyebrow="Parcours" title="Une progression construite par les produits." text="Chaque étape a ajouté une couche : métier, workflow, architecture, code, données, monétisation et exploitation."/>
      <div className="journey">{journey.map(([n,title,text])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </div></section>

    <section className="section"><div className="shell grid two">
      <article className="card"><span className="eyebrow">Positionnement</span><h2>Du besoin au produit déployé</h2><p>J’interviens sur l’analyse, le MVP, les rôles, les workflows, le CRM, les données, le développement Full Stack, les paiements, l’IA, la QA, la documentation et le déploiement.</p></article>
      <article className="card"><span className="eyebrow">Entreprise</span><h2>Livré d’un Clic SASU</h2><p>Société éditrice de logiciels et studio de conception de produits numériques : SaaS, applications métiers, IA, automatisation, conseil et projets à impact.</p></article>
      <article className="card"><span className="eyebrow">Collaboration</span><h2>100 % télétravail</h2><p>Je recherche des missions et opportunités réalisables à distance, avec une communication structurée, des livrables documentés et un suivi clair de l’avancement.</p></article>
      <article className="card"><span className="eyebrow">Domaines</span><h2>SaaS, CRM, ESS, restauration et sport</h2><p>Des secteurs différents, avec la même méthode : comprendre les règles métier, structurer les données et construire un système utilisable, évolutif et mesurable.</p></article>
      <article className="card"><span className="eyebrow">Code & confidentialité</span><h2>Projets propriétaires, preuves publiques</h2><p>Les dépôts de mes produits restent privés. Ce portfolio présente les stacks, architectures, fonctionnalités, captures, statuts et études de cas sans exposer le code propriétaire.</p></article>
      <article className="card"><span className="eyebrow">Profil complet</span><h2>Un CV orienté produit et technique</h2><p>Le CV en ligne regroupe expériences, projets, stack, Product Management et disponibilité remote dans un format imprimable.</p><div className="actions"><Link className="btn secondary" href="/cv">Voir mon CV</Link></div></article>
    </div></section>
  </>;
}
