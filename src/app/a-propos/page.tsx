import type { Metadata } from "next";
import { PageIntro } from "@/components/layout";

export const metadata: Metadata = { title: "À propos" };

export default function Page() {
  return <>
    <PageIntro
      eyebrow="À propos"
      title="Product Builder Full Stack, entrepreneur et consultant."
      text="Je relie produit, business et technique pour transformer des besoins métier complexes en SaaS, CRM sur mesure, applications, automatisations et systèmes IA exploitables."
    />
    <section className="section"><div className="shell grid two">
      <article className="card"><span className="eyebrow">Parcours</span><h2>Construire en apprenant du terrain</h2><p>Marketplace WordPress, coordination de développeurs, passage à React/TypeScript, backend Python, Supabase/PostgreSQL, Stripe, Railway, IA et automatisation : chaque projet a renforcé une même capacité, transformer un métier en produit.</p></article>
      <article className="card"><span className="eyebrow">Positionnement</span><h2>Du besoin au produit déployé</h2><p>J’interviens sur l’analyse, le MVP, les rôles, les workflows, le CRM, les données, le développement Full Stack, les paiements, l’IA, la QA, la documentation et le déploiement.</p></article>
      <article className="card"><span className="eyebrow">Entreprise</span><h2>Livré d’un Clic SASU</h2><p>Société éditrice de logiciels et studio de conception de produits numériques : SaaS, applications métiers, IA, automatisation, conseil et projets à impact.</p></article>
      <article className="card"><span className="eyebrow">Collaboration</span><h2>100 % télétravail</h2><p>Je recherche des missions et opportunités réalisables à distance, avec une communication structurée, des livrables documentés et un suivi clair de l’avancement.</p></article>
      <article className="card"><span className="eyebrow">Domaines</span><h2>SaaS, CRM, ESS, restauration et sport</h2><p>Des secteurs différents, avec la même méthode : comprendre les règles métier, structurer les données et construire un système utilisable, évolutif et mesurable.</p></article>
      <article className="card"><span className="eyebrow">Code & confidentialité</span><h2>Projets propriétaires, preuves publiques</h2><p>Les dépôts de mes produits restent privés. Ce portfolio présente les stacks, architectures, fonctionnalités, statuts et études de cas sans exposer le code propriétaire.</p></article>
    </div></section>
  </>;
}
