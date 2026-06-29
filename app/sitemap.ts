export const baseUrl = "https://chiwai.vercel.app";

export default async function sitemap() {
  const staticRoutes = ["", "/info", "/contact"];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return routes;
}
