import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, SectionTitle } from "@/components/layout";
import { services } from "@/data/site";

export const metadata: Metadata = { title: "Services" };

const formats = [
  ["Audit flash", "Identifier rapidement les blocages produit, UX, data, workflow ou architecture."],
  ["Sprint produit", "Cadrer et construire une brique prioritaire avec livrables, QA et documentation."],
  ["Construction MVP", "Passer d’un besoin métier à une première version exploitable et mesurable."],
  ["Renfort Product / Tech", "Reprendre un projet, prioriser, documenter et coordonner l’exécution à distance."],
] as const;

export default function Page() {
  return <>
    <PageIntro
      eyebrow="Services"
      title="Concevoir, construire ou débloquer un produit numérique."
      text="SaaS, CRM sur mesure, IA, automatisation, Stripe et pilotage produit : des interventions structurées, 100 % à distance, avec un périmètre et des livrables clairs."
    />
    <section className="section"><div className="shell grid two">{services.map((s,i)=><article className="card service-card" key={s.title}><span className="service-index">{String(i+1).padStart(2,"0")}</span><div><span className="eyebrow">Expertise</span><h2>{s.title}</h2><p>{s.text}</p></div></article>)}</div></section>
    <section className="section alt"><div className="shell"><SectionTitle eyebrow="Formats" title="Choisir le niveau d’intervention utile." text="Pas de forfait flou : le format dépend du niveau de maturité du produit et du problème à résoudre."/><div className="grid two">{formats.map(([title,text],index)=><article className="card premium-card" key={title}><span className="eyebrow">0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section"><div className="shell"><SectionTitle eyebrow="Livrables" title="Des sorties directement actionnables."/><div className="grid three"><article className="card premium-card"><span className="eyebrow">Cadrage</span><h3>Décider quoi construire</h3><p>Audit, MVP, roadmap, workflows, architecture, modèle de données et spécifications.</p></article><article className="card premium-card"><span className="eyebrow">Construction</span><h3>Construire les briques critiques</h3><p>Application, CRM, intégrations API, Stripe, IA, automatisations et déploiement cloud.</p></article><article className="card premium-card"><span className="eyebrow">Pilotage</span><h3>Livrer proprement</h3><p>Backlog, QA, suivi des risques, documentation, recette et priorisation des corrections.</p></article></div></div></section>
    <section className="section"><div className="shell cta premium-cta"><div><span className="eyebrow">100 % remote</span><h2>Définissons le périmètre utile.</h2><p>Un premier échange suffit pour isoler le vrai besoin, les dépendances et l’ordre de construction.</p></div><Link className="btn" href="/contact">Parler d’une mission</Link></div></section>
  </>;
}
