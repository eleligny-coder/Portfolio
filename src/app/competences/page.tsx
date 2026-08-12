import type { Metadata } from "next";
import { PageIntro, SectionTitle } from "@/components/layout";
import { skills } from "@/data/site";

export const metadata: Metadata = { title: "Compétences" };

const delivery = ["Produit", "Architecture", "Frontend", "Backend", "Data", "CRM", "IA", "Automation", "Paiement", "Cloud"];

export default function Page() {
  return <>
    <PageIntro
      eyebrow="Compétences"
      title="Des compétences organisées autour de la livraison d’un produit."
      text="Produit, Full Stack, CRM, données, IA, automatisation, Stripe et cloud : l’objectif n’est pas d’empiler des outils, mais de construire un système cohérent de bout en bout."
    />
    <section className="section compact"><div className="shell"><SectionTitle eyebrow="Delivery map" title="De la vision au déploiement." text="Chaque bloc correspond à une couche que je peux analyser, concevoir ou construire."/><div className="capability-cloud">{delivery.map(item=><span key={item}>{item}</span>)}</div></div></section>
    <section className="section alt"><div className="shell grid two">{skills.map(([title,description])=><article className="card premium-card" key={title}><span className="eyebrow">Compétence</span><h2>{title}</h2><p>{description}</p></article>)}</div></section>
  </>;
}
