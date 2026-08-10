/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card accent-${project.accent} ${featured ? "project-card-featured" : ""}`}>
      {project.image ? (
        <Link href={`/projets/${project.slug}`} className="project-media" aria-label={`Voir l’étude de cas ${project.name}`}>
          <img src={project.image} alt={project.imageAlt ?? project.name} loading={featured ? "eager" : "lazy"} />
          <div className="project-media-topline"><span>Étude de cas</span><span>{project.status}</span></div>
          <span className="project-media-overlay">Explorer le produit →</span>
        </Link>
      ) : (
        <div className="project-art"><span>{project.name.slice(0, 2).toUpperCase()}</span><i /></div>
      )}
      <div className="project-body">
        <div className="project-heading-row">
          <div>
            <span className="project-type">{project.eyebrow}</span>
            <h3>{project.name}</h3>
          </div>
          {featured && <span className="featured-badge">Projet signature</span>}
        </div>
        <p>{project.summary}</p>
        {!featured && <div className="status">{project.status}</div>}
        <div className="tags">{project.stack.slice(0, featured ? 7 : 5).map((item) => <span key={item}>{item}</span>)}</div>
        <Link href={`/projets/${project.slug}`} className="text-link">Voir l’étude de cas →</Link>
      </div>
    </article>
  );
}
