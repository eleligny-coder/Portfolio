import type { Metadata } from "next";
import "./globals.css";
import "./premium.css";
import "./case-study.css";
import "./luxury.css";
import "./polish.css";
import "./about-media.css";
import "./gallery.css";
import { Footer, Header } from "@/components/layout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: "Portfolio — Élie Leligny",
  title: { default: "Élie Leligny — Product Builder Full Stack", template: "%s | Élie Leligny" },
  description: "Product Builder Full Stack spécialisé en SaaS, CRM sur mesure, IA, automatisation, Stripe et applications métiers. Missions 100 % à distance.",
  keywords: ["Product Builder", "Développeur Full Stack", "SaaS", "CRM sur mesure", "Intelligence artificielle", "Automatisation", "Python", "TypeScript", "React", "FastAPI", "Supabase", "PostgreSQL", "Stripe", "Railway"],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Élie Leligny — Product Builder Full Stack",
    description: "SaaS, CRM sur mesure, IA, automatisation et produits métiers — de l’analyse au déploiement.",
    type: "website",
    locale: "fr_FR",
    siteName: "Portfolio — Élie Leligny",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Élie Leligny — Product Builder Full Stack",
    description: "SaaS, CRM sur mesure, IA, automatisation et produits métiers — de l’analyse au déploiement.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Product Builder Full Stack",
  description: "Conception de SaaS, CRM sur mesure, applications métiers, solutions IA et automatisations.",
  sameAs: [site.github, site.malt],
  knowsAbout: ["SaaS", "CRM", "Python", "TypeScript", "React", "FastAPI", "PostgreSQL", "Supabase", "Stripe", "Intelligence artificielle", "Automatisation"],
  worksFor: { "@type": "Organization", name: "Livré d’un Clic SASU" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/><Header /><main>{children}</main><Footer /></body></html>;
}
