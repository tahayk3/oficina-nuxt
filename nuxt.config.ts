export default defineNuxtConfig({
  ssr: true, // SSR activado para SEO y prerender
  nitro: {
    preset: 'netlify',
    prerender: {
      routes: ['/about', '/'] // rutas que quieres prerenderizar estáticamente
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ]
})
