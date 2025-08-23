<template>
  <v-container class="container-services-card">
  <h2 class="title">
    Áreas de Servicio
  </h2>
  <v-card class="card-services">
    <v-data-iterator :items="games" :items-per-page="itemsPerPage" :search="search">
      <template v-slot:header>
        <v-toolbar class="px-2" color="#fff">
          <v-text-field
            v-model="search"
            placeholder="Buscar área de servicio"
            prepend-inner-icon="mdi-magnify"
            style="max-width: 100%"
            variant="solo"
            clearable
            hide-details
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:default="{ items }">
        <v-container class="pa-2" fluid>
          <v-row dense>
            <v-col v-for="item in items" :key="item.title" cols="auto" md="4">
              <v-card class="pb-3" border flat>
                <v-img :src="item.raw.img" :alt="item.raw.alt"></v-img>

                <v-list-item :subtitle="item.raw.subtitle" class="mb-2">
                  <template v-slot:title>
                    <strong class="text-h6 mb-2">{{ item.raw.title }}</strong>
                  </template>
                </v-list-item>

                <div class="d-flex justify-space-between px-4">
                  <div
                    class="d-flex align-center text-caption text-medium-emphasis me-1"
                  >
                    <v-icon icon="mdi-clock" start></v-icon>

                    <div class="text-truncate">{{ item.raw.duration }}</div>
                  </div>

                  <v-btn
                    class="text-none"
                    size="small"
                    text="Contactar"
                    variant="flat"
                    href="#contacto"
                    border
                  >
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            density="comfortable"
            icon="mdi-arrow-left"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-12 text-caption">
            Página {{ page }} de {{ pageCount }}
          </div>

          <v-btn
            :disabled="page >= pageCount"
            density="comfortable"
            icon="mdi-arrow-right"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
  </v-container>
</template>


<script setup>
  import { shallowRef, computed  } from 'vue'
  import '~/assets/css/servicesCard.css'
  import { useDisplay } from 'vuetify'

  // Detecta el tamaño de pantalla
  const { smAndDown } = useDisplay()

  // Cambia items-per-page según sea móvil o PC
  const itemsPerPage = computed(() => (smAndDown.value ? 2 : 6))

  const search = shallowRef('')
  const games = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F10Servicio.webp?alt=media&token=4d335dec-37d0-44e7-a87d-ec6ff4e2f033',
      alt: 'Imagen relacionada a servicios para persona que residen en el extranjero',
      title: 'Servicios para personas que residen en el extranjero',
      subtitle: 'Servicios legales y asesoría para guatemaltecos que viven en Estados Unidos, incluyendo temas de inmigración, derechos laborales y más asuntos legales relevantes para la comunidad guatemalteca en el extranjero.',
      advanced: false,
      duration: '2 minutos de lectura',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F08Servicio.webp?alt=media&token=c1b225fc-79f6-4133-a2af-c170320df23a',
      alt: 'Imagen relacionada al Derecho Notarial',
      title: 'Derecho Notarial',
      subtitle: 'Es la rama del derecho que regula la actividad de los notarios, quienes son profesionales encargados de dar fe pública a los actos y documentos que se les presentan, garantizando su autenticidad y legalidad.',
      advanced: true,
      duration: '2 minuto de lectura',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F12Servicio.webp?alt=media&token=b2e07050-ff09-4171-9b0c-68665a0af3cb',
      alt: 'Imagen relacionada a solución de Conflictos',
      title: 'Solución de Conflictos',
      subtitle: 'Rama del derecho que se ocupa de la resolución pacífica de disputas y conflictos entre partes, ya sea a través de la mediación, el arbitraje o otros métodos alternativos de resolución de conflictos.',
      advanced: true,
      duration: '1 minuto de lectura',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F04Servicio.webp?alt=media&token=b5cb56be-8768-4426-b04f-f35e8480e392',
      alt: 'Imagen relacionada al Derecho Civil',
      title: 'Derecho Civil',
      subtitle: 'Rama del derecho que regula las relaciones entre particulares, incluyendo contratos, propiedad y responsabilidad civil entre otros aspectos de la vida cotidiana.',
      advanced: false,
      duration: '1 minuto de lectura',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F13Servicio.webp?alt=media&token=884703d8-6a48-4a75-8d94-6247d668223f',
      alt: 'Imagen relacionada al Derecho de familia',
      title: 'Derecho de familia',
      subtitle: 'Rama del derecho que regula las relaciones familiares, incluyendo el matrimonio, el divorcio, la custodia de los hijos y otros aspectos relacionados con la vida familiar.',
      advanced: false,
      duration: '1 minuto de lectura',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F05Servicio.webp?alt=media&token=08b3d160-a97f-4ed6-88f4-1c7415835708',
      alt: 'Imagen relacionada al Derecho Penal',
      title: 'Derecho Penal',
      subtitle: 'Rama del derecho que se encarga de definir los delitos y las penas correspondientes, así como de regular la aplicación de la justicia penal en un país o jurisdicción.',
      advanced: true,
      duration: '2 minutos de lectura',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F14Servicio.webp?alt=media&token=e659500f-5ad3-46ee-8153-690bcaac627f',
      alt: 'Imagen relacionada a Asuntos de Jurisdicción Voluntaria',
      title: 'Asuntos de Jurisdicción Voluntaria',
      subtitle: 'Rama del derecho que se ocupa de los asuntos que no requieren la intervención de un juez, permitiendo a las partes resolver sus conflictos de manera más ágil y eficiente.',
      advanced: true,
      duration: '1 minuto de lectura',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F07Servicio.webp?alt=media&token=3ad0b053-1595-4034-814b-e9b1ec51080e',
      alt: 'Imagen relacionada al Derecho Mercantil',
      title: 'Derecho Mercantil',
      subtitle: 'Es la rama del derecho que regula las relaciones comerciales y mercantiles, incluyendo contratos, sociedades, quiebras y otros aspectos relacionados con el comercio.',
      advanced: false,
      duration: '1 minuto de lectura',
    }
  ]
</script>

