// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    preset: 'netlify'
  },
  ssr: true,  // asegúrate que esté habilitado para SSR (SEO)
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/ui'
  ],
    typescript: {
    strict: true,
    shim: false  // para evitar problemas con imports automáticos en TS
  }
})
