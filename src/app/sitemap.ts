import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { trainings } from "@/data/trainings";
import { services, site } from "@/data/site";
export default function sitemap():MetadataRoute.Sitemap{const pages=["","/projets","/services","/competences","/formations","/methode","/a-propos","/societe","/ressources","/cv","/contact","/mentions-legales","/confidentialite"];return [...pages.map(path=>({url:`${site.url}${path}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:path===""?1:.7})),...projects.map(item=>({url:`${site.url}/projets/${item.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.8})),...services.map(item=>({url:`${site.url}/services/${item.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.7})),...trainings.map(item=>({url:`${site.url}/formations/${item.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.6}))]}
