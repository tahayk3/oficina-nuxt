// plugins/vuetify.ts
import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import {
  // Layout / Global
  VApp,
  VMain,
  VContainer,

  // Carousel
  VDefaultsProvider,
  VSheet,
  VCarousel,
  VCarouselItem,
  VAvatar,

  // Footer
  VFooter,
  VBtn,
  VDivider,

  // Ubicación / Tabs
  VTabs,
  VTab,

  // Contact / Card
  VCard,
  VImg,
  VCardTitle,
  VSpacer,
  VList,
  VListItem,
  VListItemTitle,
  VListItemSubtitle,

  // Servicios / DataIterator
  VDataIterator,
  VToolbar,
  VTextField,
  VRow,
  VCol,

  // Carga 3D
  VProgressCircular,

  // Valores / Timeline
  VTimeline,
  VTimelineItem,
  VIcon
} from 'vuetify/components'

import { Ripple } from 'vuetify/directives'
import 'vuetify/styles'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components: {
      VApp,
      VMain,
      VContainer,
      VDefaultsProvider,
      VSheet,
      VCarousel,
      VCarouselItem,
      VAvatar,
      VFooter,
      VBtn,
      VDivider,
      VTabs,
      VTab,
      VCard,
      VImg,
      VCardTitle,
      VSpacer,
      VList,
      VListItem,
      VListItemTitle,
      VListItemSubtitle,
      VDataIterator,
      VToolbar,
      VTextField,
      VRow,
      VCol,
      VProgressCircular,
      VTimeline,
      VTimelineItem,
      VIcon
    },
    directives: {
      Ripple
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
