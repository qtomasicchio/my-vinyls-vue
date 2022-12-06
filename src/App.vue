<script setup>
import { ref, computed } from 'vue'
import VinylCollection from './components/VinylCollection.vue'

const page = ref('collection')
const pageTitle = computed(() => {
  return page.value === 'collection' ? 'My Vinyl Collection' : 'My Vinyl Wishlist'
})
</script>

<template>
  <header>
    <h1>{{ pageTitle }}</h1>
  </header>
  <!-- Temporaly hide this -->
  <nav v-if="false">
    <a href="#collection" @click="page='collection'">My Collection</a> |
    <a href="#wishlist" @click="page = 'wishlist'">My Wishlist</a>
  </nav>
  <section>
    <VinylCollection v-if="page === 'collection'"></VinylCollection>
    <p v-else>Nothing here yet...</p>
  </section>
  <footer></footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
