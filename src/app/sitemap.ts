import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projets", "/services", "/competences", "/a-propos", "/cv", "/contact"];
  return [
    ...pages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : path === "/projets" ? .9 : .7,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/projets/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: .85,
    })),
  ];
}
