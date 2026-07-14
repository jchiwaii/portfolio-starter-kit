import type { MetadataRoute } from "next";
import { domains, projects } from "lib/portfolio-data";

export const baseUrl = "https://chiwai.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/info"];
  const domainRoutes = domains.map((domain) => `/projects/${domain.slug}`);
  const projectRoutes = projects.map(
    (project) => `/projects/${project.domainSlug}/${project.slug}`,
  );

  const routes: MetadataRoute.Sitemap = [
    ...staticRoutes,
    ...domainRoutes,
    ...projectRoutes,
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/info" ? 0.7 : 0.6,
  }));

  return routes;
}
