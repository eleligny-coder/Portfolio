import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout";
import { trainings } from "@/data/site";

export const metadata: Metadata = {
  title: "Formations",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <>
    <PageIntro eyebrow="Formations" title="Des programmes basés sur des projets réels." text="Quatre formations prioritaires, adaptables en atelier, journée, parcours de plusieurs jours ou accompagnement." />
    <section className="section"><div className="shell grid two">{trainings.map((t, i) => <article className="card" key={t}><span className="eyebrow">Formation 0{i + 1}</span><h2>{t}</h2><p>Objectifs, cas pratiques, exercices, supports, évaluation et plan d’action personnalisé.</p></article>)}</div></section>
    <section className="section"><div className="shell cta"><h2>Construire un programme adapté à votre public.</h2><Link className="btn" href="/contact">Demander un programme</Link></div></section>
  </>;
}
