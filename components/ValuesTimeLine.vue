<template>
  <h2 class="title">
    Nuestros Valores
  </h2>
  <v-timeline align="start">
    <v-timeline-item
      v-for="(valor, i) in valores"
      :key="i"
      :dot-color="valor.color"
      size="small"
    >
      <template v-slot:opposite>
        <div class="valor-titulo">
          <v-icon :icon="valor.icon" class="valor-icon"></v-icon>
          {{ valor.titulo }}
        </div>
      </template>
      <div>
        <h2 class="valor-subtitulo">
          {{ valor.subtitulo }}
        </h2>
        <div class="valor-descripcion">
          {{ valor.descripcion }}
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup>
const valores = [
  {
    color: '#5e2129', 
    subtitulo: 'Confidencialidad: Protección de la información',
    descripcion: 'Respetamos y protegemos la información de nuestros clientes en todo momento.',
    icon: 'mdi-shield-account',
  },
  {
    color: '#d8be8b',
    subtitulo: 'Integridad: Actuar siempre con honestidad',
    descripcion: 'Mantenemos los más altos estándares éticos, ofreciendo asesoría transparente y confiable a nuestros clientes.',
    icon: 'mdi-scale-balance',
  },
  {
    color: '#5e2129',
    subtitulo: 'Compromiso: Defender los intereses de nuestros clientes',
    descripcion: 'Nos dedicamos plenamente a cada caso, buscando siempre la mejor solución legal para nuestros clientes.',
    icon: 'mdi-gavel',
  },
  {
    color: '#d8be8b',
    subtitulo: 'Excelencia: Trabajo de calidad y resultados',
    descripcion: 'Brindamos un servicio jurídico de primer nivel, respaldado por experiencia y formación continua.',
    icon: 'mdi-trophy-outline',
  },
  {
    color: '#5e2129',
    subtitulo: 'Empatía: Escuchar y comprender',
    descripcion: 'Nos ponemos en el lugar de nuestros clientes para entender sus necesidades y ofrecer un trato cercano.',
    icon: 'mdi-handshake',
  },
]
</script>

<style scoped>
.title {
  width: 100%;
  color: #d8b58b;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-align: left;
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.valor-titulo {
  display: flex;
  align-items: center;
  color: #d8b58b;
  font-size: 1.3rem;
}

.valor-subtitulo {
  margin-top: -0.25rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
  color: #000000;
  font-size: 1.5rem;
}

.valor-descripcion {
  color: #000000;
  font-size: 1.2rem;
}

.valor-icon{
  color: #2f70bf;
}
</style>
