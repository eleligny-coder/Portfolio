import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, SectionTitle } from "@/components/layout";
export const metadata: Metadata = { title: "Ressources", description: "Guides, modèles et retours d’expérience sur les SaaS, l’IA et l’automatisation." };
const resources=[
  ["MVP","Comment cadrer un MVP sans construire trop tôt","Guide prévu"],
  ["Architecture","WordPress ou application Full Stack : comment décider","Retour d’expérience prévu"],
  ["Stripe","Concevoir un paiement sécurisé dans une marketplace","Guide prévu"],
  ["UX métier","Créer un dashboard qui aide réellement à décider","Article prévu"],
  ["IA","Intégrer l’IA dans une TPE sans automatiser n’importe quoi","Checklist prévue"],
  ["Documentation","Écrire des spécifications utiles aux développeurs","Modèle prévu"],
  ["Automatisation","Cartographier les tâches avant Make ou n8n","Matrice prévue"],
  ["Retour d’expérience","Ce que j’ai appris en arrêtant un projet WordPress","Article prévu"],
];
export default function ResourcesPage(){return <><PageIntro eyebrow="Ressources" title="Partager les méthodes derrière les produits." text="Cette bibliothèque accueillera guides, checklists, modèles et retours d’expérience. La structure est prête ; les publications seront ajoutées progressivement."/><section className="section"><div className="shell grid two">{resources.map(([category,title,status])=><article className="card resource-card" key={title}><span className="eyebrow">{category}</span><h2>{title}</h2><p>{status}</p><span className="soon">Bientôt disponible</span></article>)}</div></section><section className="section alt"><div className="shell"><SectionTitle eyebrow="En attendant" title="Les études de cas documentent déjà les choix produit."/><div className="actions"><Link className="btn" href="/projets">Explorer les projets</Link><Link className="btn secondary" href="/methode">Voir la méthode</Link></div></div></section></>}
