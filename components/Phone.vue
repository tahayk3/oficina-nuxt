<template>
  <v-card class="mx-auto" max-width="375">
    <v-img
      class="text-white"
      height="260px"
      src="https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2Fphone.png?alt=media&token=f352b8e3-0085-4d5f-9a2f-274d6d587c66"
      cover
    >
      <div class="d-flex flex-column h-100">
        <v-card-title class="d-flex ga-2 px-2">
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="pb-0 text-center">
          <div class="text-h5">Contacto directo</div>
        </v-card-title>
      </div>
    </v-img>

    <v-list lines="two">
      <v-list-item>
        <template v-slot:prepend>
          <v-avatar>
            <v-icon color="#d8be8b" icon="mdi-phone"></v-icon>
          </v-avatar>
        </template>

        <v-list-item-title style="font-size: 25px;">+ (502) 1234-5678</v-list-item-title>
        <v-list-item-subtitle style="color: #000; font-size: 15px;">LAW - Firma legal TELEFONO</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <template v-slot:prepend>
          <v-avatar></v-avatar>
        </template>

        <v-list-item-title style="font-size: 25px;">+ (502) 1234-5678</v-list-item-title>
        <v-list-item-subtitle style="color: #000; font-size: 15px;">LAW - Firma legal TELEFONO</v-list-item-subtitle>

      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <template v-slot:prepend>
          <v-avatar>
            <v-icon color="#d8be8b" icon="mdi-email"></v-icon>
          </v-avatar>
        </template>

        <v-list-item-title style="font-size: 25px;">lawfirmalegal@gmail.com</v-list-item-title>
        <v-list-item-subtitle style="color: #000; font-size: 15px;">LAW - Firma legal CORREO ELECTRONICO</v-list-item-subtitle>
      </v-list-item>

    </v-list>
  </v-card>
</template>