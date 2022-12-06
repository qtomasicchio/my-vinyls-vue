<script setup>
// import { ref } from 'vue'

const props = defineProps({
  label: String,
  selected: Boolean
})

// const selected = ref(false)
</script>

<template>
  <span @click="$emit('update:chip', { label, selected: !selected })"
    class="chip prevent-select"
    :class="{ 'chip-selected': selected }">
    <b>{{ label }}</b>
  </span>
</template>

<style scoped>
.chip {
  color: black;
  padding-left: 1.5%;
  padding-right: 1.5%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  background-color: gainsboro;
  margin-inline: 0.5%;
  border-radius: 10px;
  cursor: pointer;
}
.chip:hover {
  background-color: lightgray;
}

.chip-selected {
  background-color: black;
  color: white;
}

.chip-selected:hover {
  background-color: black;
}

.prevent-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

</style>
