<template>
  <v-card class="mx-auto" max-width="375">
    <v-img
      class="text-white"
      height="300px"
      loading="lazy"
      alt ="Imagen que muestra un telefono con colores azul y dorado"
      src="https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2Fphone%20(1).webp?alt=media&token=c257f5e6-9236-4d52-8353-7467e5c232fa"
      cover
    >
      <div class="d-flex flex-column h-100">
        <v-card-title class="d-flex ga-2 px-2"></v-card-title>
        <v-spacer></v-spacer>
        <v-card-title class="pb-0 text-center">
          <div class="text-h5">Contacto directo</div>
        </v-card-title>
      </div>
    </v-img>

    <v-list lines="two">
      <!-- Número 1 -->
      <v-list-item>
        <template v-slot:prepend>
          <v-avatar>
            <v-icon color="#d8be8b" icon="mdi-phone"></v-icon>
          </v-avatar>
        </template>

        <v-list-item-title style="font-size: 25px;">+ (502) 5113-8570</v-list-item-title>
        <v-list-item-subtitle style="color: #5e2129; font-size: 15px; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
          LAW - Firma legal TELEFONO
        </v-list-item-subtitle>

        <template v-slot:append>
          <v-btn
            icon
            variant="text"
            :href="'https://wa.me/50251138570?text=' + encodeURIComponent('Hola, quisiera más información.')"
            target="_blank"
          >
            <v-icon color="green" icon="mdi-whatsapp"></v-icon>
          </v-btn>
        </template>
      </v-list-item>

      <!-- Número 2 -->
      <v-list-item>
        <template v-slot:prepend>
          <v-avatar></v-avatar>
        </template>

        <v-list-item-title style="font-size: 25px;">+ (502) 3338 4962</v-list-item-title>
        <v-list-item-subtitle style="color: #5e2129; font-size: 15px; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
          LAW - Firma legal TELEFONO
        </v-list-item-subtitle>

        <template v-slot:append>
          <v-btn
            icon
            variant="text"
            :href="'https://wa.me/50233384962?text=' + encodeURIComponent('Hola, quisiera más información.')"
            target="_blank"
          >
            <v-icon color="green" icon="mdi-whatsapp"></v-icon>
          </v-btn>
        </template>
      </v-list-item>

      <v-divider inset></v-divider>

      <!-- Email -->
      <v-list-item
        :href="'mailto:lawfirmalegalqt@gmail.com?subject=' + encodeURIComponent('Consulta Legal') + '&body=' + encodeURIComponent('Hola, quisiera más información.')"
        target="_blank"
      >
        <template v-slot:prepend>
          <v-avatar>
            <v-icon color="#d8be8b" icon="mdi-email"></v-icon>
          </v-avatar>
        </template>

        <v-list-item-title style="font-size: 20px;">
          lawfirmalegalqt@gmail.com
        </v-list-item-title>
        <v-list-item-subtitle style="color: #5e2129; font-size: 15px; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
          LAW - Firma legal CORREO ELECTRONICO
        </v-list-item-subtitle>
      </v-list-item>

    </v-list>
  </v-card>
</template>
