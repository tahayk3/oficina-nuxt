<template>
  <main class="main-index">
    <div class="emoji-background">
      <v-icon icon="mdi-scale-balance" class="floating-icon"></v-icon>
      <v-icon icon="mdi-file-document-outline" class="floating-icon"></v-icon>
      <v-icon icon="mdi-bank" class="floating-icon"></v-icon>
      <v-icon icon="mdi-book-open-page-variant" class="floating-icon"></v-icon>
      <v-icon icon="mdi-pencil" class="floating-icon"></v-icon>
      <v-icon icon="mdi-file-sign" class="floating-icon"></v-icon>
    </div>

    <div class="layout">
      <!-- Texto a la izquierda (30%) -->
      <div class="text-section left">
        <h1 class="index-title">Bienvenidos a la oficina jurídica en Quetzaltenango</h1>
        <p class="index-description">
          Especializados en derecho familiar, notarial, mercantil, penal y civil.
          Nuestra oficina jurídica brinda asesoría legal especializada en Derecho Civil, orientada a resolver de forma eficaz y personalizada los asuntos legales de nuestros clientes.
          Con una trayectoria sólida y un compromiso firme con la ética profesional, ofrecemos un servicio cercano, confiable y adaptado a cada caso.
        </p>
      </div>

      <!-- Modelo 3D al centro (40%) -->
      <div class="model-section">
        <ThreeDBox />
      </div>

      <!-- Texto a la derecha (30%) -->
      <div class="text-section right">
        <h2 class="index-title">¿Cómo podemos ayudarte?</h2>
        <p class="index-description">
          Rellena este <a href="">formulario</a> para contactar con nosotros. Te responderemos lo antes posible.
          También puedes contactar directamente en nuestra oficina. Consulta la sección de <a href="">ubicación</a> para más información.
        </p>
      </div>
    </div>

    <ServicesCard />
  </main>
</template>




<script setup>

import '~/assets/css/index.css'
import ThreeDBox from '~/components/ThreeDBox.vue'
import ServicesCard from '~/components/ServicesCard.vue'
</script>