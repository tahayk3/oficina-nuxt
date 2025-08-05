<template>
  <v-card>
    <v-layout>
      <v-theme-provider theme="dark">
        <!-- App bar -->
        <v-app-bar color="#1A237E" dark>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

          <v-toolbar-title>Oficina jurídica Quetzaltenango</v-toolbar-title>

          <template v-if="!mobile">
            <v-btn icon="mdi-filter" variant="text" />
          </template>


        </v-app-bar>

        <!-- Drawer -->
        <v-navigation-drawer
          v-model="drawer"
          :location="mobile ? 'bottom' : undefined"
          temporary
          dark
        >
          <v-list nav>
            <v-list-item
              v-for="item in items"
              :key="item.value"
              :prepend-icon="item.icon"
            >
              <NuxtLink :to="item.to" class="text-white text-decoration-none">
                {{ item.title }}
              </NuxtLink>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-theme-provider>

      <!-- Main content -->
      <v-main >
        <v-container>
          <NuxtPage />
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const drawer = ref(false)
const { mobile } = useDisplay()

const items = [
  { title: 'Inicio', value: 'home', icon: 'mdi-home', to: '/' },
  { title: 'Sobre Nosotros', value: 'about', icon: 'mdi-account', to: '/acercade' },
  { title: 'Contacto', value: 'contact', icon: 'mdi-account-group', to: '/contacto' },
  { title: 'Servicios', value: 'services', icon: 'mdi-briefcase', to: '/servicios' }
]


useHead({
  title: 'Inicio',
  titleTemplate: '%s - Oficina Karen Mazariegos',
  meta: [
    {
      name: 'description',
      content: 'Oficina de abogados en Quetzaltenango, especializada en derecho familiar y civil.'
    },
    {
      property: 'og:title',
      content: 'Oficina Karen Mazariegos Quetzaltenango'
    },
    {
      property: 'og:description',
      content: 'Oficina de abogados en Quetzaltenango, especializada en derecho familiar y civil.'
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
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'  // asegúrate que esté en la carpeta public
    }
  ]
})
</script>


