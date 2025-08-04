export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain')
  return `User-agent: *
Disallow:
Sitemap: https://oficina-karen-mazariegos.netlify.app/sitemap.xml`
})