import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, SectionTitle } from "@/components/layout";
import { services } from "@/data/site";

export const metadata: Metadata = { title: "Services" };

export default function Page() {
  return <>
    <PageIntro
      eyebrow="Services"
      title="Concevoir, construire ou débloquer un produit numérique."
      text="SaaS, CRM sur mesure, IA, automatisation, Stripe et pilotage produit : des interventions modulaires réalisées 100 % à distance."
    />
    <section className="section"><div className="shell grid two">{services.map((s,i)=><article className="card" key={s.title}><span className="eyebrow">{String(i+1).padStart(2,"0")}</span><h2>{s.title}</h2><p>{s.text}</p></article>)}</div></section>
    <section className="section alt"><div className="shell"><SectionTitle eyebrow="Livrables" title="Des sorties directement actionnables."/><div className="grid three"><article className="card"><h3>Cadrage</h3><p>Audit, MVP, roadmap, workflows, architecture, modèle de données et spécifications.</p></article><article className="card"><h3>Construction</h3><p>Application, CRM, intégrations API, Stripe, IA, automatisations et déploiement cloud.</p></article><article className="card"><h3>Pilotage</h3><p>Backlog, QA, suivi des risques, documentation, recette et priorisation des corrections.</p></article></div></div></section>
    <section className="section"><div className="shell cta"><h2>Définissons le périmètre utile.</h2><Link className="btn" href="/contact">Parler d’une mission</Link></div></section>
  </>;
}
