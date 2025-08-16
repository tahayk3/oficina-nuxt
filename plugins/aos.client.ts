import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      duration: 600,   // duración de animación
      once: true,      // solo una vez
      easing: 'ease-in-out',
      offset: 0       // distancia de scroll antes de activar
    })
  }
})
