export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'netlify'
  },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ]
})
