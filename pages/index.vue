<template>
  <main class="main-index">
      <h1 class="title-h1" data-aos="fade-down">LAW – Firma Legal Quetzaltenango</h1>

      <div class="layout">
        <!-- Bloque de información izquierda -->
        <div class="info-section">
          <div class="card" data-aos="fade-up">
            <h2>¿Quiénes somos?</h2>
            <p>
              Especializados en derecho familiar, notarial, mercantil, penal y civil.  
              Nuestra firma legal brinda asesoría especializada en Derecho Civil, orientada a resolver de forma eficaz y personalizada los asuntos legales de nuestros clientes.  
              Con una trayectoria sólida y un compromiso firme con la ética profesional, ofrecemos un servicio cercano, confiable y adaptado a cada caso.
            </p>
          </div>

          <div class="card" data-aos="fade-up" data-aos-delay="200">
            <h2>¿Cómo podemos ayudarte?</h2>
            <p>
              Llena este <a href="#contacto">formulario</a> para contactar con nosotros.  
              También puedes visitar nuestras oficinas. Consulta la sección de <a href="#ubicacion">ubicación</a> para más información.
            </p>
          </div>

          <div class="card" data-aos="fade-up" data-aos-delay="400">
            <h2>¿Por qué elegirnos?</h2>
            <p>
              ✅ Más de 10 años de experiencia en distintas ramas del derecho. <br>
              ✅ Atención personalizada y trato cercano. <br>
              ✅ Compromiso con la ética y la transparencia. <br>
              ✅ Soluciones jurídicas eficaces y adaptadas a cada cliente.
            </p>
          </div>
        </div>

        <!-- Modelo 3D derecha -->
        <div class="modelo3d" data-aos="zoom-in-left">
          <ThreeDBox />
        </div>
      </div>


<section id="ubicacion" data-aos="fade-up" data-aos-delay="200" :data-aos-anchor-placement="isMobile ? 'top-bottom' : 'center-bottom'">
  <Location />
</section>

<section data-aos="fade-up" data-aos-delay="200" :data-aos-anchor-placement="isMobile ? 'top-bottom' : 'center-bottom'">
  <ServicesCard />
</section>

<section id="valores" data-aos="fade-up" data-aos-delay="200" :data-aos-anchor-placement="isMobile ? 'top-bottom' : 'center-bottom'">
  <ValuesTimeLine />
</section>

<section id="faq" data-aos="fade-up" data-aos-delay="200" :data-aos-anchor-placement="isMobile ? 'top-bottom' : 'center-bottom'">
  <FrequentlyAskedQuestions />
</section>

<section id="contacto" data-aos="fade-up" data-aos-delay="200" :data-aos-anchor-placement="isMobile ? 'top-bottom' : 'center-bottom'" >
  <ContactForm />
</section>

  </main>
</template>




<script setup>
import '~/assets/css/index.css'
import ThreeDBox from '~/components/ThreeDBox.vue'
import ServicesCard from '~/components/ServicesCard.vue'
import Location from '~/components/Location.vue'
import ContactForm from '~/components/ContactForm.vue'
import ValuesTimeLine from '~/components/ValuesTimeLine.vue'
import FrequentlyAskedQuestions from '~/components/FrequentlyAskedQuestions.vue'

const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 900
})

</script>