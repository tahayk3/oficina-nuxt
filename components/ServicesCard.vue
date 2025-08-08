<template>
  <v-container class="container-services-card">
  <h2 class="custom-heading">
    Áreas de Servicio
  </h2>
  <v-card>
    <v-data-iterator :items="games" :items-per-page="3" :search="search">
      <template v-slot:header>
        <v-toolbar class="px-2">
          <v-text-field
            v-model="search"
            density="comfortable"
            placeholder="Buscar área de servicio"
            prepend-inner-icon="mdi-magnify"
            style="max-width: 300px"
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
                    text="Ver más"
                    variant="flat"
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

          <div class="mx-2 text-caption">
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
      img: '/images/10.png',
      title: 'Servicios para personas que residen en el extranjero',
      subtitle: 'Servicios legales y asesoría para guatemaltecos que viven en Estados Unidos, incluyendo temas de inmigración, derechos laborales y más asuntos legales relevantes para la comunidad guatemalteca en el extranjero.',
      advanced: false,
      duration: '2 minutos de lectura',
    },
    {
      img: 'images/08.png',
      title: 'Derecho Notarial',
      subtitle: 'Es la rama del derecho que regula la actividad de los notarios, quienes son profesionales encargados de dar fe pública a los actos y documentos que se les presentan, garantizando su autenticidad y legalidad.',
      advanced: true,
      duration: '2 minuto de lectura',
    },
    {
      img: 'images/07.png',
      title: 'Derecho Mercantil',
      subtitle: 'Es la rama del derecho que regula las relaciones comerciales y mercantiles, incluyendo contratos, sociedades, quiebras y otros aspectos relacionados con el comercio.',
      advanced: false,
      duration: '1 minuto de lectura',
    },
    {
      img: 'images/04.png',
      title: 'Derecho Civil',
      subtitle: 'Rama del derecho que regula las relaciones entre particulares, incluyendo contratos, propiedad y responsabilidad civil entre otros aspectos de la vida cotidiana.',
      advanced: false,
      duration: '1 minuto de lectura',
    },
    {
      img: '/images/13.png',
      title: 'Derecho de familia',
      subtitle: 'Rama del derecho que regula las relaciones familiares, incluyendo el matrimonio, el divorcio, la custodia de los hijos y otros aspectos relacionados con la vida familiar.',
      advanced: false,
      duration: '1 minuto de lectura',
    },
    {
      img: '/images/12.png',
      title: 'Solución de Conflictos',
      subtitle: 'Rama del derecho que se ocupa de la resolución pacífica de disputas y conflictos entre partes, ya sea a través de la mediación, el arbitraje o otros métodos alternativos de resolución de conflictos.',
      advanced: true,
      duration: '1 minuto de lectura',
    },
    {
      img: 'images/14.png',
      title: 'Asuntos de Jurisdicción Voluntaria',
      subtitle: 'Rama del derecho que se ocupa de los asuntos que no requieren la intervención de un juez, permitiendo a las partes resolver sus conflictos de manera más ágil y eficiente.',
      advanced: true,
      duration: '1 minuto de lectura',
    },
        {
      img: '/images/05.png',
      title: 'Derecho Penal',
      subtitle: 'Rama del derecho que se encarga de definir los delitos y las penas correspondientes, así como de regular la aplicación de la justicia penal en un país o jurisdicción.',
      advanced: true,
      duration: '2 minutos de lectura',
    },
    

  ]
</script>

