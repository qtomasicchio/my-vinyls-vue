<script setup>
import { ref, computed } from 'vue'
import VinylCard from './VinylCard.vue'
import vinylList from '../services/vinyl-list.js'
import { compare, filter } from '../services/vinyl-utils.js'

const search = ref('')
const sortBy = ref('artist')

const vinyls = computed(() => {
  vinylList.sort(compare(sortBy.value))

  if (search.value.trim()) {
    return vinylList.filter(filter())
  }
  return vinylList
})
</script>

<template>
  <form @submit.prevent>
    <label for="search">Search: </label>
    <input id="search" type="text" v-model="search">
    <label for="order"> Sort by: </label>
    <select v-model="sortBy">
      <option value="artist">Artist</option>
      <option value="title">Title</option>
      <option value="year">Year</option>
    </select>
  </form>
  <VinylCard v-for="vinyl in vinyls" :key="`${vinyl.artist}.${vinyl.title}`" v-bind="vinyl"></VinylCard>
</template>

<style scoped>
form {
  margin-left: 55%;
  margin-bottom: 1%;
}
</style>
