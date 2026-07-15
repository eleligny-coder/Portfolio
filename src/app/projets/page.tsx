import type { Metadata } from "next";
import { PageIntro } from "@/components/layout";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
export const metadata: Metadata = { title: "Projets", description: "Études de cas SaaS, IA, marketplaces et applications métiers." };
export default function ProjectsPage(){return <><PageIntro eyebrow="Portfolio" title="Des produits, pas une galerie de logos." text="Chaque étude de cas présente le problème métier, la solution, les fonctionnalités, la stack, mon rôle, les preuves disponibles et la roadmap séparée du fonctionnel."/><section className="section"><div className="shell grid two">{projects.map(project=><ProjectCard key={project.slug} project={project}/>)}</div></section></>}
