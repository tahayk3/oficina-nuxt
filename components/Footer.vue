<template>
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
</template>

<script setup lang="ts">
const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
]
</script>
