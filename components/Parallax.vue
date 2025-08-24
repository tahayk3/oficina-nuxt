<template>
  <section id="parallax">
    <!-- Fondo con parallax -->
    <v-parallax
      src="https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2FGemini_Generated_Image_vnn3movnn3movnn3%20(1).webp?alt=media&token=61f56622-ae93-498d-92e0-d499ba68fc70"
      height="auto"
      alt="Página que muestra abogados con elementos característicos de Guatemala"
    >
      <v-container class="fill-height d-flex flex-column justify-center align-start text-left">
        
        <!-- Título animado -->
        <h1
          class="text-h2 font-weight-bold mb-4"
          style="color: white;"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          LAW – Abogados y Firma Legal en Quetzaltenango
        </h1>

        <!-- Subtítulo animado -->
        <h3
          class="text-h4 mb-6 font-weight-light"
          style="color: white;"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-anchor-placement="top-bottom"
        >
          Abogados quetzaltecos al servicio de ti
        </h3>

        <!-- Botón animado -->
        <v-btn
          class="elevation-4 rounded-xl mb-4"
          color="warning"
          data-aos="zoom-in"
          data-aos-delay="1000"
          data-aos-anchor-placement="top-bottom"
        >
          <a href="#contacto" style="text-decoration: none; color: #fff;">Contactar</a>
        </v-btn>
      </v-container>
    </v-parallax>
  </section>
</template>

<script setup>
import { onMounted } from "vue"
import AOS from "aos"
import "aos/dist/aos.css"

onMounted(() => {
  AOS.init({ once: true }) // se activa solo 1 vez por scroll
  setTimeout(() => {
    AOS.refreshHard() // recalcula después de montar el parallax
  }, 500)
})
</script>
