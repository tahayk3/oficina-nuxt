<script setup>
import { shallowRef } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const currentIndex = shallowRef(0)
</script>

<template>
  <v-defaults-provider :defaults="{ VBtn: { variant: 'outlined', color: '#eee' } }">
    <v-sheet class="overflow-hidden" max-width="800" rounded="xl">
      <v-carousel
        v-model="currentIndex"
        direction="vertical"
        height="600"
        progress="#121f2f"
        vertical-arrows="left"
        vertical-delimiters="right"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          cover
        >
          <div class="overlay-info" v-if="item">
            <v-avatar size="50">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2Ff6eb74db-e594-4f15-981a-ed7437a0f6bf-2.webp?alt=media&token=810bf657-5f57-4e0a-9027-4fb16a67afae"
                alt="Avatar del autor"
                width="50"
                height="50"
                loading="lazy"
              />
            </v-avatar>
            <div class="text">
              <strong>{{ item.authorName }}</strong><br />
              <small>{{ item.subtitle }}</small>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-sheet>
  </v-defaults-provider>
</template>

<style scoped>
.overlay-info {
  position: absolute;
  bottom: 5px;
  left: 10px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.309);
  border-radius: 8px;
  padding: 5px 10px;
  color: white;
  font-size: 1.2rem;
}
.overlay-info .text {
  margin-left: 10px;
  line-height: 1.2;
}


</style>
