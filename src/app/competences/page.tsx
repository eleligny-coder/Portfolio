import type { Metadata } from "next";
import { PageIntro } from "@/components/layout";
import { skills } from "@/data/site";

export const metadata: Metadata = { title: "Compétences" };

export default function Page() {
  return <>
    <PageIntro
      eyebrow="Compétences"
      title="Des compétences organisées autour de la livraison d’un produit."
      text="Produit, Full Stack, CRM, données, IA, automatisation, Stripe et cloud : l’objectif n’est pas d’empiler des outils, mais de construire un système cohérent de bout en bout."
    />
    <section className="section"><div className="shell grid two">{skills.map(([t,d],i)=><article className="card" key={t}><span className="eyebrow">{String(i+1).padStart(2,"0")}</span><h2>{t}</h2><p>{d}</p></article>)}</div></section>
  </>;
}
