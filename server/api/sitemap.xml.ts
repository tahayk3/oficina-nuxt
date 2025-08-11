import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({ hostname: 'https://law-firma-legal-quetzaltenango.netlify.app' })

  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/servicios', changefreq: 'weekly', priority: 0.8 },
    { url: '/equipo', changefreq: 'monthly', priority: 0.7 },
    { url: '/contacto', changefreq: 'monthly', priority: 0.5 },
  ]

  const stream = Readable.from(links).pipe(sitemap)
  const xml = await streamToPromise(stream).then((data) => data.toString())

  setHeader(event, 'Content-Type', 'application/xml')
  return xml
})
