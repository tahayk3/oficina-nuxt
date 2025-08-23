<template>
  <v-container>
    <div v-if="article">
      <v-img
        :src="article.image"
        height="400px"
        class="article-detail-image"
      ></v-img>
      <h1 class="article-detail-title mt-4">{{ article.title }}</h1>
      <p class="article-detail-content">{{ article.fullContent }}</p>
      <v-btn to="/articulos" color="primary" class="mt-4">Volver a artículos</v-btn>
    </div>
    <div v-else class="text-center">
      <h1>Artículo no encontrado</h1>
      <p>Lo sentimos, no pudimos encontrar el artículo que buscas.</p>
    </div>
  </v-container>
</template>

<script setup>
import { allArticles } from '~/data/articlesData.js';
import { useRoute } from 'vue-router'; // O de Nuxt

const route = useRoute();
const article = allArticles.find(a => a.slug === route.params.slug);
</script>