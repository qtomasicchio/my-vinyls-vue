<script setup>
import { ref, reactive, computed } from 'vue'
import FilterBar from './FilterBar.vue'
import VinylCard from './VinylCard.vue'
import vinylList from '../services/vinyl-list.js'
import { compare, filter } from '../services/vinyl-utils.js'

const search = ref('')
const sortBy = ref('artist')
const filteredBar = reactive([]);

const vinyls = computed(() => {
  let updatedVinylList = JSON.parse(JSON.stringify(vinylList));
  updatedVinylList.sort(compare(sortBy.value))


  if (filteredBar && filteredBar.length > 0) {
    updatedVinylList = updatedVinylList.filter(({ genres, styles }) => {
      return genres.some(genre => filteredBar.includes(genre)) ||
        styles.some(style => filteredBar.includes(style))
    });
  }

  if (search.value.trim()) {
    return updatedVinylList.filter(filter())
  }

  return updatedVinylList
})

function updateFilterBar(filteredChips) {
  filteredBar.splice(0, filteredBar.length)
  filteredBar.push(...filteredChips);
}
</script>

<template>
  <form @submit.prevent>

    <FilterBar @update:filter-bar="updateFilterBar"></FilterBar>

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
  margin-top: 1%;
  margin-bottom: 1%;
}
</style>
