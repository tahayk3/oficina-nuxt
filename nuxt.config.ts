import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: true,
  css: [ '@/assets/css/base.css','vuetify/styles', '@mdi/font/css/materialdesignicons.min.css', 'vue-toastification/dist/index.css'],
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
      routes: ['/equipo', '/', '/servicios', '/contacto']
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
