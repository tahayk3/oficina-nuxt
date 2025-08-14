<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="brand">LAW – FIRMA LEGAL</div>
      
      <button
        class="hamburger"
        @click="drawer = !drawer"
        :aria-expanded="drawer.toString()"
        aria-label="Toggle navigation menu"
      >
        <span :class="{ 'bar': true, 'active': drawer }"></span>
        <span :class="{ 'bar': true, 'active': drawer }"></span>
        <span :class="{ 'bar': true, 'active': drawer }"></span>
      </button>

      <ul :class="['nav-links', { 'open': drawer }]">
        <li v-for="item in items" :key="item.value">
          <NuxtLink @click="drawer = false" :to="item.to" class="nav-link">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)

const items = [
  { title: 'Inicio', value: 'home', to: '/' },
  { title: 'Nuestro equipo', value: 'about', to: '/equipo' },
  { title: 'Contacto', value: 'contact', to: '/contacto' },
  { title: 'Servicios', value: 'services', to: '/servicios' }
]
</script>

<style scoped>
.navbar {
  background-color: #121f2f;
  color: #d8be8b;
  padding: 1rem 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  user-select: none;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.brand {
  font-weight: 100;
  font-size: 1.25rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  width: 24px;
  height: 18px;
  justify-content: space-between;
}

.bar {
  height: 3px;
  width: 100%;
  background-color: #d8be8b;
  border-radius: 2px;
  transition: 0.3s;
}

/* Animate hamburger bars when active */
.bar.active:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}
.bar.active:nth-child(2) {
  opacity: 0;
}
.bar.active:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #d8be8b;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #f2d97e;
}

/* Responsive - Mobile */

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    flex-direction: column;
    gap: 0;
    background-color: #121f2f;
    transition: max-height 0.3s ease;
  }

  .nav-links.open {
    max-height: 500px; /* suficiente para mostrar todos */
  }

  .nav-links li {
    border-top: 1px solid #2c3a4b;
  }

  .nav-link {
    padding: 0.75rem 1rem;
    display: block;
  }
}
</style>
