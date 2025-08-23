<template>
  <v-container class="articles-container">
    <h2 class="title">Contacto con LAW firma legal</h2>
    <p class="articles-subtitle">
      Aquí encontrarás artículos, consejos y noticias legales para mantenerte informado y proteger tus derechos.
    </p>

    <v-row>
      <v-col
        v-for="article in articles"
        :key="article.id"
        cols="12"
        md="3"
      >
        <v-card class="article-card" hover>
          <v-img
            :src="article.image"
            height="200px"
            loading="lazy"
          ></v-img>
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-text style="font-size: 1rem;">
            {{ article.excerpt }}
          </v-card-text>
          <v-card-actions>
            <v-btn :to="article.to" color="primary" text>Leer más</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import '~/assets/css/articles.css'
import { allArticles } from '~/data/articlesData.js';
const articles = allArticles;

</script>
