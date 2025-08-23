import vuetify from 'vite-plugin-vuetify'

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
      routes: ['/', '/servicios', '/contacto', '/articulos']
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
