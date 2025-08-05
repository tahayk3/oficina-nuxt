<template>
  <main class="main-index">
    <div class="layout">
      <!-- Texto a la izquierda (30%) -->
      <div class="text-section">
        <h1 class="index-title">Bienvenidos a la oficina de Karen Mazariegos</h1>
        <p class="index-description">
          Abogados en Quetzaltenango, especializados en derecho familiar y civil.
        </p>
      </div>

      <!-- Modelo 3D a la derecha (70%) -->
      <div class="model-section">
        <ThreeDBox />
      </div>
    </div>
    <p>sigueinte</p>
  </main>
</template>


<script setup>
import '~/assets/css/index.css'
import ThreeDBox from '~/components/ThreeDBox.vue'
</script>