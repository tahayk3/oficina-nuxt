export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain')
  return `User-agent: *
Disallow:
Sitemap: https://law-firma-legal-quetzaltenango.netlify.app/sitemap.xml`
})