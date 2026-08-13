import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Informations sur les données, le contact par email, le stockage navigateur et l’hébergement du portfolio d’Élie Leligny.",
  alternates: { canonical: "/confidentialite" },
};

export default function PrivacyPage() {
  return <>
    <PageIntro
      eyebrow="Confidentialité"
      title="Un portfolio volontairement sobre en données."
      text="Le site est conçu comme une vitrine statique : pas de compte utilisateur, pas de base de données de contact et pas d’outil de mesure d’audience intégré au niveau applicatif à la date de cette publication."
    />

    <section className="section alt"><div className="shell detail-grid">
      <article className="card">
        <span className="eyebrow">Contact</span>
        <h2>Le formulaire ne stocke pas vos messages.</h2>
        <p>Le formulaire de contact prépare localement un message destiné à <a href={`mailto:${site.email}`}>{site.email}</a> puis ouvre votre logiciel de messagerie via <code>mailto:</code>. Les informations saisies ne sont pas envoyées à un serveur du portfolio et ne sont pas enregistrées dans une base de données par ce site.</p>
        <p>Un message n’est effectivement transmis que si vous choisissez ensuite de l’envoyer depuis votre propre service de messagerie.</p>
      </article>

      <article className="card">
        <span className="eyebrow">Emails reçus</span>
        <h2>Données utilisées pour répondre à votre demande.</h2>
        <p>Lorsque vous envoyez volontairement un email, son contenu et vos coordonnées sont utilisés pour comprendre votre demande, vous répondre et, le cas échéant, préparer une relation professionnelle. Selon la nature de l’échange, le traitement repose sur votre demande de mesures précontractuelles ou sur l’intérêt légitime à gérer les prises de contact professionnelles.</p>
        <p>Les messages sont conservés pendant la durée nécessaire au suivi de l’échange puis, lorsqu’une relation professionnelle existe, selon les durées nécessaires aux obligations contractuelles et légales applicables.</p>
      </article>

      <article className="card">
        <span className="eyebrow">Navigateur</span>
        <h2>Une mémoire locale pour l’expérience visuelle.</h2>
        <p>Le portfolio utilise <code>sessionStorage</code> pour éviter de rejouer inutilement l’introduction pendant une session et <code>localStorage</code> pour mémoriser les études de cas déjà explorées. Cette information sert uniquement à l’expérience du portfolio, reste dans votre navigateur et n’est pas transmise par l’application à une base de données.</p>
        <p>Vous pouvez supprimer ces données à tout moment depuis les réglages de stockage de votre navigateur. Aucun traceur publicitaire ni outil analytics n’est intégré par l’application à la date de cette publication.</p>
      </article>

      <article className="card">
        <span className="eyebrow">Hébergement</span>
        <h2>Infrastructure Cloudflare.</h2>
        <p>Le site statique est distribué par l’infrastructure Cloudflare. Comme tout fournisseur d’infrastructure réseau, Cloudflare peut traiter des informations techniques nécessaires à la fourniture, la sécurité et la protection de ses services selon sa propre politique de confidentialité.</p>
        <p>Hébergeur : Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis.</p>
      </article>
    </div></section>

    <section className="section"><div className="shell detail-grid">
      <article className="card">
        <span className="eyebrow">Vos droits</span>
        <h2>Accès, rectification, effacement et opposition.</h2>
        <p>Lorsque des données personnelles sont effectivement traitées à la suite d’un email, vous pouvez demander l’accès, la rectification ou l’effacement de vos données, ainsi que la limitation ou l’opposition au traitement lorsque ces droits sont applicables.</p>
        <p>Pour exercer vos droits : <a href={`mailto:${site.email}`}>{site.email}</a>. Vous pouvez également introduire une réclamation auprès de la CNIL.</p>
      </article>

      <article className="card">
        <span className="eyebrow">Responsable</span>
        <h2>Livré d’un Clic SASU</h2>
        <p>Le portfolio est édité dans le cadre de Livré d’un Clic SASU. La page entreprise explique le rôle de la structure derrière les produits présentés.</p>
        <div className="actions"><Link className="btn secondary" href="/entreprise">Voir la page entreprise</Link><Link className="btn ghost" href="/contact">Me contacter</Link></div>
      </article>
    </div></section>

    <section className="section"><div className="shell"><p className="muted">Dernière mise à jour : 13 août 2026.</p></div></section>
  </>;
}
