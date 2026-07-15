import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-art" aria-label={`Emplacement du visuel principal ${project.name}`}>
        <span>{project.name.split(" ").map((word) => word[0]).join("").slice(0, 3)}</span>
        <i aria-hidden="true" />
        <small>Visuel produit à intégrer</small>
      </div>
      <div className="project-body">
        <span className="project-type">{project.eyebrow}</span>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="status"><span aria-hidden="true" />{project.status}</div>
        <div className="tags">{project.stack.slice(0, 5).map((item) => <span key={item}>{item}</span>)}</div>
        <Link className="text-link" href={`/projets/${project.slug}`}>Voir l’étude de cas →</Link>
      </div>
    </article>
  );
}
