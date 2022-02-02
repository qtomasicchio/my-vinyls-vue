<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  artist: String,
  cover: String,
  description: String
})

const coverURL = computed(() => new URL(`../assets/${props.cover}`, import.meta.url))
</script>

<template>
  <div class="card">
    <img :src="coverURL" :alt="`${title} cover`">
    <div class="container">
      <p><b>{{ artist }}</b></p>
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<style scoped>

@media only screen and (max-width: 599px) { .card { width: 80%; } }
@media only screen and (min-width: 600px) { .card { width: 45%; } }
@media only screen and (min-width: 900px) { .card { width: 30%; } }
@media only screen and (min-width: 1200px) { .card { width: 20%; } }
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  display: inline-table;
  margin: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img {
  border-radius: 5px 5px 0 0;
  width: 100%;
}

.container {
  padding: 2px 16px;
  height: auto;
}
</style>
