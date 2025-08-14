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
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1337.5927705860256!2d-91.53766238794378!3d14.834608888358968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDUwJzA1LjciTiA5McKwMzInMTMuOCJX!5e0!3m2!1ses!2sgt!4v1755197076430!5m2!1ses!2sgt',
    items: [
      { authorName: 'Dirección 1', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F5.png?alt=media&token=49ccaa6c-bafd-4313-b8bc-ac8a1835502f' },
      { authorName: 'Horarios', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F3.png?alt=media&token=6b2cab18-8e7c-47c5-9b17-e105786ac745' },
      { authorName: 'Foto', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F116200-Quetzaltenango-Central-Park.webp?alt=media&token=f29317a6-29ec-46cf-895f-b2cb2f67993f' }
    ]
  },

  oficina2: {
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241.05234775318107!2d-91.5197027!3d14.8343719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858ebd560b4ecd75%3A0x343645dbe77e838f!2s6a%20Calle%201339%2C%20Quetzaltenango!5e0!3m2!1ses-419!2sgt!4v1755197382640!5m2!1ses-419!2sgt',
    items: [
      { authorName: 'Dirección 2', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F6.png?alt=media&token=19f0b446-8dd3-4dc3-8772-0d8745d968b1' },
      { authorName: 'Horarios', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F4.png?alt=media&token=c88b3b12-af2b-4679-ad97-e0a9cf8d365f' },
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
        height="40"
        slider-color="#d8be8b"
        class="custom-tabs"
      >
        <template v-slot:tab="{ item }">
          <v-tab
            :prepend-icon="item.icon"
            :text="item.text"
            :value="item.value"
            class="custom-tab"
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
  width: 100%;
  color: #d8be8b;
  padding: 0rem 2rem;
  border-radius: 12px;
  text-align: left;
  font-size: 2.5rem;
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


.custom-tab {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size:15px !important;
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
