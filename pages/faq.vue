<template>
  <div>
    <!-- Reutilizamos el componente de FAQ inset -->
    <Faq :maxPreguntas="10" :mostrarEnlace="false" />
  </div>
</template>

<script setup>
import Faq from '~/components/FrequentlyAskedQuestions.vue'
</script>

<style scoped>
.title {
  text-align: center;
  margin: 30px 0;
}
</style>
