import vuetify from 'vite-plugin-vuetify'
import { allArticles } from './data/articlesData.js'

export default defineNuxtConfig({
  ssr: true,
  css: [ 'vuetify/styles', '@/assets/css/base.css', '@mdi/font/css/materialdesignicons.min.css', 'vue-toastification/dist/index.css'],
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
      // rutas estáticas
      routes: [
        '/',
        '/servicios',
        '/contacto',
        '/faq',
        '/politica-privacidad',
        '/articulos',
        // rutas de artículos dinámicas
        ...allArticles.map(a => `/articulos/${a.slug}`),
        // sitemap estático
        '/sitemap.xml'
      ]
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
