import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: true,
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    plugins: [vuetify()],
    ssr: {
      noExternal: ['vuetify'],
    },
  },
  nitro: {
    preset: 'netlify',
    prerender: {
      routes: ['/acercade', '/', '/servicios', '/contacto']
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
})
