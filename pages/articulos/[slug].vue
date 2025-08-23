<template>
  <v-container>
    <div v-if="article">
      <v-img
        :src="article.image"
        height="400px"
        class="article-detail-image"
        loading="lazy"
      ></v-img>

      <h1 class="article-detail-title mt-4">{{ article.title }}</h1>

      <!-- 👇 Renderiza el HTML en lugar de mostrarlo como texto -->
      <div v-html="article.fullContent" class="article-detail-content"></div>

      <v-btn to="/articulos" color="primary" class="mt-4">
        Volver a artículos
      </v-btn>
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

useHead(() => {
  if (!article) {
    return {
      title: 'Artículo no encontrado | LAW Abogados en Quetzaltenango'
    }
  }

  return {
    title: article.title + ' | LAW Abogados en Quetzaltenango',
    meta: [
      {
        name: 'description',
        content: article.excerpt
      },
      {
        property: 'og:title',
        content: article.title
      },
      {
        property: 'og:description',
        content: article.excerpt
      },
      {
        property: 'og:image',
        content: article.image
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ]
  }
})
</script>