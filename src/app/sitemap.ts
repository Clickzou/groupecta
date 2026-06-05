import type { MetadataRoute } from "next";
import { site, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/accompagner-nos-clients",
    ...services.map((s) => `/accompagner-nos-clients/${s.slug}`),
    "/chiffres-cles",
    "/nos-convictions",
    "/investisseurs",
    "/contact",
    "/prendre-rendez-vous",
  ];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
