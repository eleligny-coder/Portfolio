import type {MetadataRoute} from "next";
import {site} from "@/data/site";
import {projects} from "@/data/projects";

export default function sitemap():MetadataRoute.Sitemap{
  const pages=["","/projets","/services","/competences","/a-propos","/cv","/contact","/formations","/methode"];
  return [
    ...pages.map(p=>({url:`${site.url}${p}`,lastModified:new Date()})),
    ...projects.map(p=>({url:`${site.url}/projets/${p.slug}`,lastModified:new Date()})),
  ];
}
