<script setup lang="ts">

useHead({
  titleTemplate: '%s - Oficina Karen Mazariegos',
  meta: [
    {
      name: 'description',
      content: 'Oficina de abogados en Quetzaltenango, especializada en derecho familiar y civil.'
    },
    {
      property: 'og:title',
      content: 'Oficina Karen Mazariegos Quetzaltenango'
    },
    {
      property: 'og:description',
      content: 'Oficina de abogados en Quetzaltenango, especializada en derecho familiar y civil.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'google-site-verification',
      content: 'XmQ4R4VD1GRD6Orf7foyZquAnyaplQ64_3iUn76bvhk'
    }
  ]
})
</script>

<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Inicio</NuxtLink> |
        <NuxtLink to="/about">Sobre Nosotros</NuxtLink>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>© 2025 Mi Proyecto</p>
    </footer>
  </div>
</template>



