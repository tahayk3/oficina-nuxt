<template>
  <h2 class="title">Contacto con LAW - firma legal</h2>

  <div class="container-contacto">
    <div class="container-form">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        netlify-honeypot="bot-field"
        class="contact-form"
        @submit.prevent="handleSubmit"
      >
        <!-- Campo honeypot oculto -->
        <input type="hidden" name="form-name" value="contact" />
        <p style="display:none">
          <label>No llenar este campo: <input name="bot-field" /></label>
        </p>

        <!-- Nombre -->
        <div class="brutalist-container">
          <label class="brutalist-label">Nombre</label>
          <input
            class="brutalist-input smooth-type"
            type="text"
            name="name"
            v-model="form.name"
            required
          />
        </div>

        <!-- Email -->
        <div class="brutalist-container">
          <label class="brutalist-label">Correo electrónico</label>
          <input
            class="brutalist-input smooth-type"
            type="email"
            name="email"
            v-model="form.email"
            required
          />
        </div>

        <!-- Mensaje -->
        <div class="brutalist-container">
          <label class="brutalist-label">Mensaje</label>
          <textarea
            rows="8"
            class="brutalist-input smooth-type"
            name="message"
            v-model="form.message"
            required
          ></textarea>
        </div>

        <!-- reCAPTCHA -->
        <div data-netlify-recaptcha="true"></div>

        <!-- Botón -->
        <button class="xd" type="submit">
          <span>Enviar</span>
        </button>
      </form>
    </div>

    <div class="container-phone">
      <Phone />
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      sending: false,
    };
  },
  methods: {
    async handleSubmit(e) {
      // Prevenir doble envío
      if (this.sending) return;

      // Verificar si el captcha fue resuelto
      const token =
        window.grecaptcha && window.grecaptcha.getResponse
          ? window.grecaptcha.getResponse()
          : "";

      if (!token) {
        alert("Por favor resuelve el captcha antes de enviar.");
        return;
      }

      this.sending = true;

      const formData = new FormData(e.target);
      formData.append("g-recaptcha-response", token);

      try {
        const response = await fetch("/", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          alert("✅ Formulario enviado con éxito.");
          this.form.name = "";
          this.form.email = "";
          this.form.message = "";
          if (window.grecaptcha) window.grecaptcha.reset();
        } else {
          const text = await response.text();
          console.error("Error Netlify:", text);
          alert("❌ Hubo un problema al enviar el formulario.");
        }
      } catch (err) {
        console.error(err);
        alert("❌ Error de conexión al enviar.");
      } finally {
        this.sending = false;
      }
    },
  },
};
</script>




<style scoped>
.title {
  color: #d8be8b;
  font-size: 2.0rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-align: center;
  border-bottom: 5px double #d8be8b;
  margin-bottom: 50px;
}

.container-contacto{
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-form{
  width: 70%;
}
.container-phone{
  width: 30%;
}

/* formulario */
.contact-form {
  max-width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

}

.brutalist-container {
  position: relative;
  width: 100%;
}

.brutalist-input {
  width: 100%;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  background-color: #fff;
  border: 4px solid #000;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  outline: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 5px 5px 0 #000, 10px 10px 0 #d8be8b;
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

.brutalist-input:focus {
  animation: focus-pulse 4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite,
    glitch 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
}

.brutalist-input:focus::after {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: white;
  z-index: -1;
}

.brutalist-input:focus::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: -2;
  clip-path: inset(0 100% 0 0);
  animation: glitch-slice 4s steps(2, end) infinite;
}

@keyframes glitch-slice {
  0% {
    clip-path: inset(0 100% 0 0);
  }
  10% {
    clip-path: inset(0 5% 0 0);
  }
  20% {
    clip-path: inset(0 80% 0 0);
  }
  30% {
    clip-path: inset(0 10% 0 0);
  }
  40% {
    clip-path: inset(0 50% 0 0);
  }
  50% {
    clip-path: inset(0 30% 0 0);
  }
  60% {
    clip-path: inset(0 70% 0 0);
  }
  70% {
    clip-path: inset(0 15% 0 0);
  }
  80% {
    clip-path: inset(0 90% 0 0);
  }
  90% {
    clip-path: inset(0 5% 0 0);
  }
  100% {
    clip-path: inset(0 100% 0 0);
  }
}

.brutalist-label {
  position: absolute;
  left: -3px;
  top: -35px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  padding: 5px 10px;
  transform: rotate(-1deg);
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.brutalist-input:focus + .brutalist-label {
  transform: rotate(0deg) scale(1.05);
  background-color: #4a90e2;
}

.smooth-type {
  position: relative;
  overflow: hidden;
}

.smooth-type::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.smooth-type:focus::before {
  opacity: 1;
  animation: type-gradient 2s linear infinite;
}

@keyframes type-gradient {
  0% {
    background-position: 300px 0;
  }
  100% {
    background-position: 0 0;
  }
}

.brutalist-input::placeholder {
  color: #888;
  transition: color 0.3s ease;
}

.brutalist-input:focus::placeholder {
  color: transparent;
}

.brutalist-input:focus {
  animation: focus-pulse 4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
}

@keyframes focus-pulse {
  0%,
  100% {
    border-color: #000;
  }
  50% {
    border-color: #4a90e2;
  }
}

/*boton */
/* From Uiverse.io by TISEPSE */ 
button {
  background: none;
  border: none;
  padding: 0;
  display: block; /* Cambia a inline-block si no quieres que sea todo el ancho */
  width: 100%; /* O el ancho que quieras */
}

button a {
  position: relative;
  display: block; /* full width */
  padding: 15px 30px;
  border: 2px solid #bf0019;
  text-transform: uppercase;
  color: #d8be8b;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  
}

button a::before {
  content: '';
  position: absolute;
  top: 6px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% - 12px);
  background-color: #ffffff;
  transition: 0.3s ease-in-out;
  transform: scaleY(1);
  
}

button a:hover::before {
  transform: scaleY(0);
}

button a::after {
  content: '';
  position: absolute;
  left: 6px;
  top: -2px;
  height: calc(100% + 4px);
  width: calc(100% - 12px);
  background-color: #ffffff;
  transition: 0.3s ease-in-out;
  transform: scaleX(1);
  transition-delay: 0.5s;


box-shadow: 0px 0px 0px 1px rgba(216,190,139,1);
-webkit-box-shadow: 0px 0px 0px 1px rgba(216,190,139,1);
-moz-box-shadow: 0px 0px 0px 1px rgba(216,190,139,1);


}

button a:hover::after {
  transform: scaleX(0);
}

button a span {
  position: relative;
  z-index: 3;
}

/* VISTA MOVIL */

@media (max-width: 600px) {
 .container-contacto{
  display:block;
  justify-content: center;
  align-items: center;
}
  .container-form{
  width: 100%;
  padding-bottom: 30px;
}
.container-phone{
  width: 100%;
}
}

</style>
