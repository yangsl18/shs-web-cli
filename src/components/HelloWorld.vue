<script setup>
import { ref, defineEmits } from 'vue'

defineProps({
  msg: String
})
const emit = defineEmits(['myemit']);
const onclick = () => {
  emit('event')
}
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

 

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <button type="button" @click="onclick"></button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
