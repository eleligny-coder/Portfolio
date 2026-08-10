import type { Metadata } from "next";
import { PageIntro, SectionTitle } from "@/components/layout";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata={title:"Projets"};

export default function ProjectsPage(){
  const [featured,...rest]=projects;
  return <>
    <PageIntro eyebrow="Selected work" title="Des produits numériques conçus comme des systèmes complets." text="SaaS métiers, marketplace, IA et automatisation : chaque étude de cas documente le problème, la solution, l’architecture, mon rôle, la stack et le statut réel."/>
    <section className="section selected-work projects-index"><div className="shell">
      <SectionTitle eyebrow="Projet signature" title="Une preuve par le produit." text="Les captures sont réelles. Les dépôts produits restent privés afin de protéger le code propriétaire."/>
      <div className="featured-project-wrap"><ProjectCard project={featured} featured /></div>
      <div className="projects-divider"><span>Autres réalisations</span></div>
      <div className="grid two projects-premium-grid">{rest.map(p=><ProjectCard key={p.slug} project={p}/>)}</div>
    </div></section>
  </>;
}
