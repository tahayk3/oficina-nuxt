<template>
  <v-container class="container-services-card">
  <h2 class="title">
    Áreas de Servicio
  </h2>
  <v-card class="card-services">
    <v-data-iterator :items="games" :items-per-page="3" :search="search">
      <template v-slot:header>
        <v-toolbar class="px-2">
          <v-text-field
            v-model="search"
            density="comfortable"
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
                <v-img :src="item.raw.img"></v-img>

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
  import { shallowRef } from 'vue'
  import '~/assets/css/servicesCard.css'

  const search = shallowRef('')
  const games = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F10.png?alt=media&token=3bdf6610-cd76-4a55-a964-5ca24fd8a117',
      title: 'Servicios para personas que residen en el extranjero',
      subtitle: 'Servicios legales y asesoría para guatemaltecos que viven en Estados Unidos, incluyendo temas de inmigración, derechos laborales y más asuntos legales relevantes para la comunidad guatemalteca en el extranjero.',
      advanced: false,
      duration: '2 minutos de lectura',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F08.png?alt=media&token=be84f5f4-986b-4c59-ad9a-9a1a0d7be896',
      title: 'Derecho Notarial',
      subtitle: 'Es la rama del derecho que regula la actividad de los notarios, quienes son profesionales encargados de dar fe pública a los actos y documentos que se les presentan, garantizando su autenticidad y legalidad.',
      advanced: true,
      duration: '2 minuto de lectura',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F07.png?alt=media&token=1d3f0e60-3f1b-45f6-8102-47b5368e45ec',
      title: 'Derecho Mercantil',
      subtitle: 'Es la rama del derecho que regula las relaciones comerciales y mercantiles, incluyendo contratos, sociedades, quiebras y otros aspectos relacionados con el comercio.',
      advanced: false,
      duration: '1 minuto de lectura',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F04.png?alt=media&token=ad8f75af-e7ef-4428-aef8-eb98b1d93c55',
      title: 'Derecho Civil',
      subtitle: 'Rama del derecho que regula las relaciones entre particulares, incluyendo contratos, propiedad y responsabilidad civil entre otros aspectos de la vida cotidiana.',
      advanced: false,
      duration: '1 minuto de lectura',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F13.png?alt=media&token=17c08427-6042-4763-b509-e9e407d768c8',
      title: 'Derecho de familia',
      subtitle: 'Rama del derecho que regula las relaciones familiares, incluyendo el matrimonio, el divorcio, la custodia de los hijos y otros aspectos relacionados con la vida familiar.',
      advanced: false,
      duration: '1 minuto de lectura',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F12.png?alt=media&token=462df6fe-8e7a-42d8-8d03-77b5f8f7d292',
      title: 'Solución de Conflictos',
      subtitle: 'Rama del derecho que se ocupa de la resolución pacífica de disputas y conflictos entre partes, ya sea a través de la mediación, el arbitraje o otros métodos alternativos de resolución de conflictos.',
      advanced: true,
      duration: '1 minuto de lectura',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F14.png?alt=media&token=d98726b6-0a2f-4c7f-95ba-d8a82d3bc901',
      title: 'Asuntos de Jurisdicción Voluntaria',
      subtitle: 'Rama del derecho que se ocupa de los asuntos que no requieren la intervención de un juez, permitiendo a las partes resolver sus conflictos de manera más ágil y eficiente.',
      advanced: true,
      duration: '1 minuto de lectura',
    },
        {
      img: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F05.png?alt=media&token=8e2bdbc1-1ebe-4341-8563-6b437422d03b',
      title: 'Derecho Penal',
      subtitle: 'Rama del derecho que se encarga de definir los delitos y las penas correspondientes, así como de regular la aplicación de la justicia penal en un país o jurisdicción.',
      advanced: true,
      duration: '2 minutos de lectura',
    },
  ]
</script>

