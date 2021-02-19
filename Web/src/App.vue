<template>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
  <selector />
  <!-- <router-view /> -->
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Selector from './components/selector/Selector.vue'

export default defineComponent({
  name: 'app',
  components: {
    Selector,
  },
})
</script>
