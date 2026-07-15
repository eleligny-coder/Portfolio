import type { Metadata } from "next";
import { PageIntro } from "@/components/layout";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
export const metadata: Metadata={title:"Projets"};
export default function ProjectsPage(){return <><PageIntro eyebrow="Portfolio" title="Produits numériques conçus de bout en bout." text="SaaS métiers, marketplace, IA et automatisation : chaque étude de cas documente le problème, la solution, le rôle, la stack et le statut réel."/><section className="section"><div className="shell grid two">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></section></>}
