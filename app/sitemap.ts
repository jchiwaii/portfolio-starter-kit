import { domains, projects } from "lib/portfolio-data";

export const baseUrl = "https://chiwai.vercel.app";

export default async function sitemap() {
  const staticRoutes = ["", "/projects", "/info", "/contact"];
  const domainRoutes = domains.map((domain) => `/projects/${domain.slug}`);
  const projectRoutes = projects.map(
    (project) => `/projects/${project.domainSlug}/${project.slug}`,
  );

  const routes = [...staticRoutes, ...domainRoutes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return routes;
}
