<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

// SEO optimizado con branding LAW
useHead({
  title: 'LAW – Firma Legal en Quetzaltenango',
  titleTemplate: '%s | Abogados en Quetzaltenango – Derecho Civil y Familiar',
  meta: [
    {
      name: 'description',
      content: 'LAW es una firma legal en Quetzaltenango especializada en derecho civil, familiar, laboral y corporativo. Abogados con experiencia y compromiso con la comunidad quetzalteca.'
    },
    {
      property: 'og:title',
      content: 'LAW – Abogados en Quetzaltenango'
    },
    {
      property: 'og:description',
      content: 'LAW, su firma legal en Quetzaltenango para derecho civil, familiar, laboral y corporativo. Abogados comprometidos con la defensa de sus derechos.'
    },
    {
      name: 'keywords',
      content: 'abogados Quetzaltenango, firma legal Quetzaltenango, derecho civil, derecho familiar, derecho penal, derecho mercantil, derecho notarial, solución de conflictos, jurisdicción voluntaria, abogados Guatemala, abogados para guatemaltecos en el extranjero'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'google-site-verification',
      content: 'XmQ4R4VD1GRD6Orf7foyZquAnyaplQ64_3iUn76bvhk'
    },
    {
      property: 'og:site_name',
      content: 'LAW – Firma Legal Quetzaltenango'
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2Ff6eb74db-e594-4f15-981a-ed7437a0f6bf-2.webp?alt=media&token=810bf657-5f57-4e0a-9027-4fb16a67afae'
    }
  ]
})
</script>
