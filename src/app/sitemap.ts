import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { trainings } from "@/data/trainings";
import { services, site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/projets",
    "/services",
    "/competences",
    "/formations",
    "/methode",
    "/a-propos",
    "/societe",
    "/ressources",
    "/cv",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
  ];

  const lastModified = new Date();

  return [
    ...pages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...projects.map((item) => ({
      url: `${site.url}/projets/${item.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...services.map((item) => ({
      url: `${site.url}/services/${item.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...trainings.map((item) => ({
      url: `${site.url}/formations/${item.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
