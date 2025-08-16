<script setup>
import { ref, computed } from 'vue'
import DirectionCard from './DirectionCard.vue'

const tab = ref('oficina2')

const tabs = [
  { text: 'Oficina centro', value: 'oficina2', icon: 'mdi-map-marker' },
  { text: 'Oficina secundaria', value: 'oficina1', icon: 'mdi-map-marker' }

]
const offices = {
  oficina1: {
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1928.414873968412!2d-91.5371439!3d14.8345000!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDUwJzA1LjciTiA5McKwMzInMTMuOCJX!5e0!3m2!1ses!2sgt!4v1755379871410!5m2!1ses!2sgt',
    items: [
      { authorName: 'Dirección 2', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F3.webp?alt=media&token=7b25f1ef-cf6d-4bd1-88ed-56a8927c0c15' },
      { authorName: 'Horarios', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F1.webp?alt=media&token=14b373c7-da30-4de4-9154-e46f12151410' },
      { authorName: 'Foto', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F116200-Quetzaltenango-Central-Park.webp?alt=media&token=f29317a6-29ec-46cf-895f-b2cb2f67993f' }
    ]
  },

  oficina2: {
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1180.2437639316597!2d-91.51961997143407!3d14.83441717715302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858ebd560b4ecd75%3A0x343645dbe77e838f!2s6a%20Calle%201339%2C%20Quetzaltenango!5e0!3m2!1ses-419!2sgt!4v1755379479330!5m2!1ses-419!2sgt',
    items: [
      { authorName: 'Dirección 1', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F4.webp?alt=media&token=96c27a0e-e418-4135-903b-1ca148bd1976' },
      { authorName: 'Horarios', subtitle: 'LAW firma legal', src: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F2.webp?alt=media&token=239543c9-05a0-4557-9a45-dada1dc2bb19' },
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
  text-align: center;
  padding-top: 4rem;
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

@media (max-width: 900px) {
  .map-wrapper {
    flex-direction: column;
  }

  .map-info, .map-container {
    width: 100%;
  }
}

</style>
