<template>
  <section class="location-section">
    <h2 class="title">Ubicación</h2>
    <p class="description">
      Visítanos en nuestra oficina. Estamos ubicados en el centro de Quetzaltenango.
    </p>
    
    <div class="map-container">
      <!-- Google Maps Embed -->
      <iframe
        :src="mapUrl"
        width="100%"
        height="550"
        style="border:0;"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      
    </div>
  </section>
</template>

<script setup>
const mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1928.3780280291164!2d-91.53506!3d14.838942999999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858e972d113da357%3A0xb4aa2937c1d5632d!2sS%C3%BAper%20del%20Barrio%20Zona%2010!5e0!3m2!1ses!2sgt!4v1754607857283!5m2!1ses!2sgt";
</script>

<style scoped>
.location-section {
  padding: 2rem;
  text-align: center;
}

.title {
  color: #d8be8b ; /* Blanco para contraste */
  font-size: 2.5rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
  margin-bottom: 0rem;


  border-bottom: 10px double #d8be8b;
}

.description {
  color: rgb(4, 4, 4);
  text-align: justify;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.map-container {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>
