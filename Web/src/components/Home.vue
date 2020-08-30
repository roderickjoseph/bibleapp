<template>
  <h2>Verses</h2>
  <ul v-if="verses.length > 0">
    <li v-for="verse in verses">
      <span :key="verse.id">{{ verse.text }}</span>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { versesService } from '../services'
import { Verse } from '../types/verses.d'

export default defineComponent({
  data() {
    return {
      verses: [] as Verse[]
    }
  },
  async created() {
    this.verses = await versesService.getWholeBook(2)
  },
})
</script>
