<script setup>
 import { reactive } from 'vue'
import FilterChip from './FilterChip.vue'
import vinylList from '../services/vinyl-list.js'

const filteredChips = reactive([])
const filterAllChip = reactive({ label: 'All', selected: true })
const genres = vinylList.flatMap(vinyl => vinyl.genres)
const styles = vinylList.flatMap(vinyl => vinyl.styles)

const seen = new Map();
[...genres, ...styles].forEach(value => seen.set(value, seen.has(value) ? seen.get(value) + 1 : 1));
for (let [key, value] of seen) {
  (value <= 2) && seen.delete(key);
}
const tags = [...seen.keys()].sort((a, b) => seen.get(b) - seen.get(a))

const emit = defineEmits(['update:filter-bar'])

function updateFilteredChips({ label, selected }) {
  if (selected && !filteredChips.includes(label)) {
    filteredChips.push(label)
  } else if (!selected && filteredChips.includes(label)) {
    filteredChips.splice(filteredChips.indexOf(label), 1)
  }

  if (filteredChips.length > 0) {
    filterAllChip.selected = false
  } else if(filteredChips.length === 0) {
    filterAllChip.selected = true
  }

  emit('update:filter-bar', filteredChips)
}

function toogleAllFilter({ selected }) {
  if (selected) {
    filteredChips.splice(0, filteredChips.length)
    filterAllChip.selected = true

    emit('update:filter-bar', filteredChips)
  }
}
</script>

<template>
  <div>
    <FilterChip
      v-bind="filterAllChip"
      @update:chip="toogleAllFilter">
    </FilterChip>
    <FilterChip
      v-for="tag in tags" :key="tag"
      :label="tag"
      :selected="filteredChips.includes(tag)"
      @update:chip="updateFilteredChips">
    </FilterChip>
  </div>

</template>

<style scoped>
div {
  overflow-x: scroll;
  width: 100%;
  height: fit-content;
  padding: 1%;
  white-space: nowrap;
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
div::-webkit-scrollbar {
  display: none;
}

</style>
