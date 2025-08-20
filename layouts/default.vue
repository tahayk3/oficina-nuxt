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
  title: 'LAW – Abogados y Firma Legal en Quetzaltenango',
  titleTemplate: '%s | Abogados en Quetzaltenango – Derecho Civil, Familiar, Laboral y Mercantil',
  meta: [
    {
      name: 'description',
      content: 'LAW – Abogados y Firma Legal en Quetzaltenango, especializada en derecho civil, familiar, laboral, penal y mercantil. Brindamos asesoría legal confiable y personalizada a clientes en Quetzaltenango y Guatemala, incluyendo servicios de bufete jurídico, consultoría legal y notaría.'
    },
    {
      property: 'og:title',
      content: 'LAW – Abogados y Firma Legal en Quetzaltenango'
    },
    {
      property: 'og:description',
      content: 'LAW – Abogados y Firma Legal en Quetzaltenango. Especialistas en derecho civil, familiar, laboral, penal y mercantil. Brindamos asesoría legal confiable y personalizada para clientes y empresas en Quetzaltenango y Guatemala.'
    },
    {
      name: 'keywords',
      content: 'firma legal Quetzaltenango, abogados Quetzaltenango, bufete jurídico Quetzaltenango, abogado familiar Xela, abogado penal Quetzaltenango, derecho civil, derecho familiar, derecho penal, derecho mercantil, notario público Quetzaltenango, abogados Guatemala, abogados para guatemaltecos en el extranjero, consultas legales en línea Quetzaltenango'
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
      content: 'LAW – Abogados y Firma Legal en Quetzaltenango'
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
