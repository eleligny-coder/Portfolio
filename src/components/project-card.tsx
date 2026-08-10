/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      {project.image ? (
        <Link href={`/projets/${project.slug}`} className="project-media" aria-label={`Voir l’étude de cas ${project.name}`}>
          <img src={project.image} alt={project.imageAlt ?? project.name} loading="lazy" />
          <span className="project-media-overlay">Voir le produit</span>
        </Link>
      ) : (
        <div className="project-art"><span>{project.name.slice(0, 2).toUpperCase()}</span><i /></div>
      )}
      <div className="project-body">
        <span className="project-type">{project.eyebrow}</span>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="status">{project.status}</div>
        <div className="tags">{project.stack.slice(0, 5).map((item) => <span key={item}>{item}</span>)}</div>
        <Link href={`/projets/${project.slug}`} className="text-link">Voir l’étude de cas →</Link>
      </div>
    </article>
  );
}
