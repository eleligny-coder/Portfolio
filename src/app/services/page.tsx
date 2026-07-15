import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout";
import { services } from "@/data/site";
export const metadata: Metadata = { title: "Services", description: "Conception produit, développement SaaS, IA, automatisation, audit et pilotage technique." };
export default function ServicesPage(){return <><PageIntro eyebrow="Prestations" title="Du cadrage à la mise en production." text="Les interventions sont structurées autour de livrables concrets et d’un objectif : réduire l’incertitude, construire proprement et faire avancer le projet."/><section className="section"><div className="shell grid two">{services.map((service,index)=><article className="card service-card" key={service.slug}><span className="eyebrow">Service {String(index+1).padStart(2,"0")}</span><h2>{service.title}</h2><p>{service.summary}</p><h3>Livrables principaux</h3><ul className="compact-list">{service.deliverables.slice(0,5).map(item=><li key={item}>{item}</li>)}</ul><Link className="text-link" href={`/services/${service.slug}`}>Voir l’offre détaillée →</Link></article>)}</div></section></>}
