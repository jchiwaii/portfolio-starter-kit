export const baseUrl = 'https://chiwai.vercel.app'

export default async function sitemap() {
  const routes = ['', '/projects', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
