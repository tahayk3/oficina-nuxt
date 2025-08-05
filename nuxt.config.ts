import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  ssr: true, // SSR activado para SEO y prerender
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css'],
  nitro: {
    preset: 'netlify',
    prerender: {
      routes: ['/acercade', '/', '/servicios', '/contacto'] // rutas que quieres prerenderizar estáticamente
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@primevue/nuxt-module'
  ],
  
  
})
