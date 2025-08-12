<script setup>
import { ref, computed } from 'vue'
import DirectionCard from './DirectionCard.vue'

const tab = ref('oficina1')

const tabs = [
  { text: 'Oficina 1', value: 'oficina1', icon: 'mdi-map-marker' },
  { text: 'Oficina 2', value: 'oficina2', icon: 'mdi-map-marker' }
]

const offices = {
  oficina1: {
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.0120440786036!2d-91.53591820531399!3d14.838526992948388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858e972d113da357%3A0xb4aa2937c1d5632d!2sS%C3%BAper%20del%20Barrio%20Zona%2010!5e0!3m2!1ses-419!2sgt!4v1754845415692!5m2!1ses-419!2sgt',
    items: [
      { authorName: 'Dirección 1', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F4.png?alt=media&token=f956d944-b0e6-4364-92e6-e3696a2d5d1e' },
      { authorName: 'Horarios', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F2.png?alt=media&token=354ae391-3c53-497a-a131-b76733490739' },
      { authorName: 'Foto', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F116200-Quetzaltenango-Central-Park.webp?alt=media&token=f29317a6-29ec-46cf-895f-b2cb2f67993f' }
    ]
  },
  oficina2: {
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.9545443032739!2d-91.51874899669666!3d14.833803382505598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858ebdd47c7240ef%3A0x30af6ebbef439dde!2zUGF0c3kg4oCiIFhlbGE!5e0!3m2!1ses-419!2sgt!4v1754845449934!5m2!1ses-419!2sgt',
    items: [
      { authorName: 'Dirección 2', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F3.png?alt=media&token=42e0f0ea-b237-4637-8bc9-ab13986530a7' },
      { authorName: 'Horarios', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F2.png?alt=media&token=354ae391-3c53-497a-a131-b76733490739' },
      { authorName: 'Foto', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F116060-Quetzaltenango.webp?alt=media&token=9fda17e4-cd94-4eb2-855e-e4e560c9c43c' }
    ]
  }
}

const currentOffice = computed(() => offices[tab.value])
</script>

<template>
  <section class="location-section">
    <h2 class="title">Oficinas y horarios</h2>

    <v-sheet color="#fff" elevation="0" rounded="lg">
      <v-tabs
        v-model="tab"
        :items="tabs"
        align-tabs="center"
        color="#d8be8b"
        height="60"
        slider-color="#d8be8b"
      >
        <template v-slot:tab="{ item }">
          <v-tab
            :prepend-icon="item.icon"
            :text="item.text"
            :value="item.value"
          ></v-tab>
        </template>
      </v-tabs>

      <div class="map-wrapper">
        <div class="map-info">
          <DirectionCard :items="currentOffice.items" />
        </div>

        <div class="map-container">
          <iframe
            :src="currentOffice.mapUrl"
            width="100%"
            height="600"
            style="border-radius: 2%;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </v-sheet>
  </section>
</template>


<style scoped>

 /* Estilos */
.location-section {
  padding: 0rem;
  margin: 0rem;
  text-align: center;

}

.title {
  color: #d8be8b;
  font-size: 2.0rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-align: center;
  border-bottom: 5px double #d8be8b;
}

.description {
  color: rgb(4, 4, 4);
  text-align: justify;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  margin-top: 2rem;


  
}

.map-wrapper{
  display: flex;
  flex-direction: center;
  align-items: center;
}

.map-info{
  width: 40%;
  padding: 10px;

}

.map-container {
  width: 60%;
  overflow: hidden;
  padding: 10px;
 
}

@media (max-width: 768px) {
  .map-wrapper {
    flex-direction: column;
  }

  .map-info, .map-container {
    width: 100%;
  }
}

</style>
