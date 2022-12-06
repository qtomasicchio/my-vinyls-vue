<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  title: String,
  artist: String,
  cover: String,
  year: Number,
  genres: Array,
  styles: Array
})

const back = ref(false)
const coverURL = computed(() => new URL(`../assets/${props.cover}`, import.meta.url))
</script>

<template>
  <div class="card">
    <div class="image" @mouseover="back = true" @mouseleave="back = false">
      <transition name="fade">
        <div v-if="back" class="backCover">
          <p>
            <b>{{ artist }}</b><br/>
            <b>{{ title }}</b> ({{ year }})
          </p>
          <dl>
            <dt>Genre:</dt><dd>{{ genres.join(', ') }}</dd>
            <dt>Style:</dt><dd>{{ styles.join(', ') }}</dd>
          </dl>
        </div>
      </transition>
      <img :src="coverURL" :alt="`${title} cover`">
    </div>
  </div>
</template>

<style scoped>

@media only screen and (max-width: 599px) { .card { width: 80%; } }
@media only screen and (min-width: 1000px) { .card { width: 30%; } }
@media only screen and (min-width: 1500px) { .card { width: 20%; } }
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

.image {
  border-radius: 5px 5px 0 0;
  position: relative;
  width: 100%;
}

.image img {
  width: 100%;
  vertical-align: top;
}

.image:after {
  content: '\A';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,1);
  opacity: 0;
  transition: all 1s;
  -webkit-transition: all 1s;
}

.image:hover:after {
  opacity: 0.9;
}

.backCover {
  z-index: 1;
  position: absolute;
  color: white;
  width: 100%;
  height: 100%;
  padding-top: 10%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

dl {
  width: 100%;
  overflow: hidden;
  padding: 0;
  padding-top: 5%;
  margin: 0
}
dt {
  text-align: justify;
  float: left;
  text-align: left;
  width: 20%;
  padding: 0;
  padding-left: 5%;
  margin: 0
}
dd {
  text-align: left;
  float: left;
  width: 75%;
  padding: 0;
  margin: 0
}
</style>
