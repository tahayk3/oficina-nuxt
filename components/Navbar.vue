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
          <NuxtLink
            @mouseenter="showOverlay(item.message, item.image, $event)"
            @mouseleave="hideOverlay"
            @click="handleClick"
            :to="item.to"
            class="nav-link"
          >
            {{ item.title }} 
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Overlay con blur -->
  <transition name="fade">
    <div v-if="overlayVisible" class="overlay"></div>
  </transition>

  <!-- Mensaje dinámico con imagen -->
  <transition name="fade">
    <div
      v-if="overlayVisible"
      class="hover-message"
      :style="{ top: `${messageY}px`, left: `${messageX}px` }"
    >
      <p>{{ overlayMessage }}</p>
      <img :src="overlayImage" alt="preview" class="hover-img" />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)

const overlayVisible = ref(false)
const overlayMessage = ref('')
const overlayImage = ref('')
const messageX = ref(0)
const messageY = ref(0)

const items = [
  { title: 'Inicio', value: 'home', to: '/', message: 'Página principal', image: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2Ff6eb74db-e594-4f15-981a-ed7437a0f6bf-2.webp?alt=media&token=810bf657-5f57-4e0a-9027-4fb16a67afae' },
  { title: 'Contacto', value: 'contact', to: '/contacto', message: 'Contáctanos para más información', image: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2Ff6eb74db-e594-4f15-981a-ed7437a0f6bf-2.webp?alt=media&token=810bf657-5f57-4e0a-9027-4fb16a67afae' },
  { title: 'Servicios', value: 'services', to: '/servicios', message: 'Descubre nuestros servicios legales', image: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2Ff6eb74db-e594-4f15-981a-ed7437a0f6bf-2.webp?alt=media&token=810bf657-5f57-4e0a-9027-4fb16a67afae' },
  { title: 'Articulos', value: 'about', to: '/articulos', message: 'Lee artículos y consejos legales', image: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2Ff6eb74db-e594-4f15-981a-ed7437a0f6bf-2.webp?alt=media&token=810bf657-5f57-4e0a-9027-4fb16a67afae' },
]

function showOverlay(msg: string, img: string, event: MouseEvent) {
  overlayMessage.value = msg
  overlayImage.value = img
  overlayVisible.value = true

  const rect = (event.target as HTMLElement).getBoundingClientRect()
  messageX.value = rect.left + window.scrollX
  messageY.value = rect.bottom + window.scrollY + 8
}

function hideOverlay() {
  overlayVisible.value = false
}

function handleClick() {
  drawer.value = false
  overlayVisible.value = false
}
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
  border-bottom: 5px solid #d4af37;
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
  font-weight: 500;
  font-size: 1.50rem;
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
  font-size: 1.2rem;
}

.nav-link {
  color: #d8be8b;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ffffff;
}

/* Overlay con blur */
.overlay {
  position: fixed;
  inset: 0;
  background: #121f2fa1;
  backdrop-filter: blur(8px) brightness(0.7);
  -webkit-backdrop-filter: blur(8px) brightness(0.7);
  z-index: 5;
}

/* Mensaje + imagen */
.hover-message {
  position: absolute;
  height: 150px;
  width: 150px;
  background: #ffffff;
  color: #000;
  padding-top: 3rem;
  border-radius: 12px;
  font-size: 16px;
  z-index: 10;
  display: inline;
  text-align: center;
  overflow: visible; /* 👈 permite que la imagen se salga */
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border-bottom: 6px solid #d4af37;
}

/* Imagen flotante */
.hover-img {
  position:absolute;
  bottom: -50px;  /* 👈 mueve la imagen hacia abajo */
  right: 0px;   /* 👈 mueve la imagen hacia un lado */
  width: 50px;
  height: 50px;
  object-fit: contain;
  transform: rotate(0deg);
  animation: shake 0.9s ease;
}

/* Keyframes del efecto */
@keyframes shake {
  0%   { transform: rotate(-10deg) translate(0, 0); }
  20%  { transform: rotate(-8deg)  translate(-3px, 2px); }
  40%  { transform: rotate(-12deg) translate(3px, -2px); }
  60%  { transform: rotate(-9deg)  translate(-2px, 1px); }
  80%  { transform: rotate(-11deg) translate(2px, -1px); }
  100% { transform: rotate(-10deg) translate(0, 0); }
}

/* Fade animación */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive - Mobile */
@media (max-width: 1100px) {
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
