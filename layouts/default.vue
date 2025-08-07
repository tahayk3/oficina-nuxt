<template>
  <v-card>
    <v-layout style="display: flex; flex-direction: column; min-height: 100vh;">
      <v-theme-provider theme="dark">
        <!-- App bar -->
        <v-app-bar color="#121f2f" dark>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

          <v-toolbar-title style="color: #d8be8b;">Oficina jurídica Quetzaltenango</v-toolbar-title>

          <template v-if="!mobile">
            <v-btn icon="mdi-filter" variant="text" />
          </template>
        </v-app-bar>

        <!-- Drawer (solo en cliente) -->
        <ClientOnly>
          <v-navigation-drawer
            v-model="drawer"
            :location="mobile ? 'bottom' : undefined"
            temporary
            dark
            v-show="isMounted"
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
        </ClientOnly>
      </v-theme-provider>

      <!-- Main content -->
      <v-main style="flex-grow: 1;">
        <v-container>
          <NuxtPage />
        </v-container>
      </v-main>

      <!-- Footer -->
      <v-footer class="text-center d-flex flex-column ga-2 py-4" color="#5e2129">
        <div class="d-flex ga-3">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            :icon="icon"
            density="comfortable"
            variant="text"
          ></v-btn>
        </div>

        <v-divider class="my-2" thickness="2" width="50"></v-divider>

        <div class="text-caption font-weight-regular opacity-60">
          Comprometidos con brindar asesoría legal de excelencia en Quetzaltenango, apoyando a nuestra comunidad con profesionalismo y confianza.
        </div>

        <div>
          © {{ new Date().getFullYear() }} — Oficina jurídica Quetzaltenango — Todos los derechos reservados
        </div>
      </v-footer>

    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'

  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]

const drawer = ref(false)
const { mobile } = useDisplay()

const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})

const items = [
  { title: 'Inicio', value: 'home', icon: 'mdi-home', to: '/' },
  { title: 'Sobre Nosotros', value: 'about', icon: 'mdi-account', to: '/acercade' },
  { title: 'Contacto', value: 'contact', icon: 'mdi-account-group', to: '/contacto' },
  { title: 'Servicios', value: 'services', icon: 'mdi-briefcase', to: '/servicios' }
]


useHead({
  title: 'Inicio',
  titleTemplate: '%s - Oficina jurídica Quetzaltenango - expertos en derecho civil',
  meta: [
    {
      name: 'description',
      content: 'Oficina de abogados en Quetzaltenango, especializada en derecho familiar y civil.'
    },
    {
      property: 'og:title',
      content: 'Oficina de abogados Quetzaltenango'
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
      content: ''
    },
    {
      property: 'og:site_name',
      content: 'Oficina jurídica Quetzaltenango - expertos en derecho civil'
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


