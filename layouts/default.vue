<template>
  <v-card>
    <v-layout style="display: flex; flex-direction: column; min-height: 100vh;">
      <v-theme-provider theme="dark">
        <!-- App bar -->
        <v-app-bar color="#121f2f" dark>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

          <v-toolbar-title style="color: #d8be8b;">
            LAW – Firma Legal en Quetzaltenango
          </v-toolbar-title>

          <template v-if="!mobile">
            <v-btn icon="mdi-filter" variant="text" />
          </template>
        </v-app-bar>

        <!-- Drawer -->
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

      <!-- Footer optimizado -->
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
          LAW es una firma legal en Quetzaltenango. Comprometidos con brindar asesoría legal de excelencia, apoyando a nuestra comunidad con profesionalismo y confianza.
        </div>

        <div>
          © {{ new Date().getFullYear() }} — LAW – Firma Legal Quetzaltenango — Todos los derechos reservados
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
  { title: 'Nuestro equipo', value: 'about', icon: 'mdi-account-group', to: '/equipo' },
  { title: 'Contacto', value: 'contact', icon: 'mdi-phone', to: '/contacto' },
  { title: 'Servicios', value: 'services', icon: 'mdi-briefcase', to: '/servicios' }
]

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
