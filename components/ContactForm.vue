<template>
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    data-netlify-recaptcha="true"
    netlify-honeypot="bot-field"
    class="contact-form"
  >
    <!-- Campo honeypot oculto -->
    <input type="hidden" name="form-name" value="contact" />
    <p style="display:none">
      <label>No llenar este campo: <input name="bot-field" /></label>
    </p>

    <!-- Nombre -->
    <div>
      <label>Nombre</label>
      <input type="text" name="name" v-model="form.name" required />
    </div>

    <!-- Email -->
    <div>
      <label>Email</label>
      <input type="email" name="email" v-model="form.email" required />
    </div>

    <!-- Mensaje -->
    <div>
      <label>Mensaje</label>
      <textarea name="message" v-model="form.message" required></textarea>
    </div>

    <!-- reCAPTCHA -->
    <div data-netlify-recaptcha="true"></div>

    <!-- Botón -->
    <button type="submit">Enviar</button>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
};
</script>

<style scoped>
.contact-form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
