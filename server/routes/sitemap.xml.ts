export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/xml')
  event.node.res.statusCode = 200  // opcional pero recomendable
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://oficina-karen-mazariegos.netlify.app/</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://oficina-karen-mazariegos.netlify.app/servicios</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  
    <url>
      <loc>https://oficina-karen-mazariegos.netlify.app/acercade</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>https://oficina-karen-mazariegos.netlify.app/contacto</loc>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
  </urlset>`
})
