<template>
  <h2 class="title">Preguntas Frecuentes</h2>
  <section class="faq-section">
    <div 
  v-for="(faq, index) in preguntasMostradas" 
  :key="index" 
  class="faq-item"
>
  <button 
    class="faq-question" 
    @click="toggle(index)"
  >
    {{ faq.pregunta }}
    <span class="arrow" :class="{ open: openIndex === index }">▸</span>
  </button>

  <transition name="faq">
    <div 
      v-if="openIndex === index" 
      class="faq-answer"
    >
      {{ faq.respuesta }}
    </div>
  </transition>
</div>

    <div v-if="faqs.length > maxPreguntas" class="ver-todas">
      <NuxtLink  class="enlace-estilizado" to="/faq"  target="_blank">Ver todas las preguntas frecuentes →</NuxtLink>
    </div>

  </section>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'
import { NuxtLink } from '#components'

const props = defineProps({
  maxPreguntas: { type: Number, default: 5 }
})

const faqs = reactive([
  { pregunta: '¿Ofrecen consultas en línea?', respuesta: 'Sí, ofrecemos consultas legales por videollamada o teléfono, para clientes en cualquier parte de Guatemala o el extranjero.' },
  { pregunta: '¿Trabajan con empresas y negocios?', respuesta: 'Sí, brindamos asesoría legal y representación a empresas en temas laborales, mercantiles y contractuales.' },
  { pregunta: '¿Ofrecen facilidades de pago?', respuesta: 'Dependiendo del caso, podemos acordar planes de pago flexibles. Esto se define en la primera consulta.' },
  { pregunta: '¿Atienden casos urgentes?', respuesta: 'Sí, contamos con un número de atención urgente para situaciones como detenciones, accidentes o desalojos. Puede llamarnos o escribirnos por WhatsApp.' },
    { pregunta: '¿Debo llevar documentos a la primera cita?', respuesta: 'Sí, es recomendable llevar cualquier documento relacionado con su caso (contratos, notificaciones, escrituras, fotografías, etc.).' },
  { pregunta: '¿Cuál es el costo de la consulta inicial?', respuesta: 'La consulta inicial tiene un costo de Q___, el cual se descuenta si contrata nuestros servicios para su caso.' },
  { pregunta: '¿En qué áreas del derecho trabajan?', respuesta: 'Atendemos casos de derecho civil, laboral, penal, mercantil, familiar y notarial, entre otros.' },
  { pregunta: '¿Debo llevar documentos a la primera cita?', respuesta: 'Sí, es recomendable llevar cualquier documento relacionado con su caso (contratos, notificaciones, escrituras, fotografías, etc.).' },
  { pregunta: '¿Puedo contratar sus servicios si no estoy en Guatemala?', respuesta: 'Sí, trabajamos con clientes en el extranjero, especialmente en casos familiares, notariales y de representación legal.' },
  { pregunta: '¿Qué pasa con mis datos personales?', respuesta: 'La información que nos proporciona es confidencial y se maneja de acuerdo con nuestra Política de Privacidad.' },
  { pregunta: '¿Cuánto tiempo tarda resolver un caso?', respuesta: 'Depende del tipo de proceso y del juzgado que lo tramite. En la primera consulta le daremos un estimado según su situación.' }
])

const preguntasMostradas = computed(() => faqs.slice(0, props.maxPreguntas))

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<style scoped>
.title {
  padding-left: 30px;
  padding-top: 30px;
  margin-bottom: 20px;

}

.faq-section {
  max-width: 80%;
  margin: auto;
  padding: 50px 20px;
}

.faq-item {
  margin-bottom: 10px;
  border-bottom: 1px solid #d8be8b;
}

.faq-question {
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  font-size: 1.3rem;
  font-weight: bold;
  color: #000000;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 0px 10px 0px 0px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-answer {
  padding: 10px 0 20px 0;
  color: #000000;
  font-size: 1.3rem;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
  background-color: #ffffff;
}

.arrow {
  transition: transform 0.5s;
}

.arrow.open {
  transform: rotate(90deg);
}

.ver-todas {
  margin-top: 50px;
  text-align: right;
}

.enlace-estilizado {
  color: #d8be8b;
  text-decoration: none;
  padding: 2px 10px 2px 10px;
  background-color: #121f2f;
  font-size: 1.3rem;
  border-radius: 30px;
}

.enlace-estilizado:hover {
  color: #121f2f;
}

/* Transición */
.faq-enter-active, .faq-leave-active {
  transition: all 0.3s ease;
}

.faq-enter-from, .faq-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.faq-enter-to, .faq-leave-from {
  max-height: 200px; /* ajusta según la altura máxima de tu respuesta */
  opacity: 1;
  padding-top: 10px;
  padding-bottom: 20px;
}
</style>
