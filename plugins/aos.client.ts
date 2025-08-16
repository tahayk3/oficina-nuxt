import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    const isMobile = window.innerWidth < 900
    AOS.init({
      duration: 900,   // duración de animación
      once: true,      // solo una vez
      easing: 'ease-in-out',
       offset: isMobile ? 1 : 150
    })
  }
})
