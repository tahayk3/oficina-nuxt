<template>
  <main class="main-index">
    <h1 class="index-title">Bienvenidos a la oficina de Karen Mazariegos</h1>
    <p class="index-description">Abogados en Quetzaltenango, especializados en derecho familiar y civil.</p>
     <client-only>
      <ThreeDBox />
    </client-only>
  </main>
</template>

<script setup>
import '~/assets/css/index.css'
import ThreeDBox from '~/components/ThreeDBox.vue'
</script>