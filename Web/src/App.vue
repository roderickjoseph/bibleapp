<template>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
  <!-- <Suspense> -->
    <selector />
    <!-- <template #default> -->
      <router-view />
    <!-- </template> -->
    <!-- <template #fallback> -->
    <!--   <div>Loading...</div> -->
    <!-- </template> -->
  <!-- </Suspense> -->
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Selector from './components/selector/Selector.vue'

export default defineComponent({
  name: 'app',
  components: {
    Selector,
  }
})
</script>
