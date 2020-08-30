<template>
  <h2>Verses</h2>
  <ul>
    <li v-for="chapter in chapters">
      <span :key="chapter.id">{{ chapter.id }}</span>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { versesService } from '../services'
import { Chapter, Verse } from '../types/verses.d'

export default defineComponent({
  data() {
    return {
      chapters: [] as Chapter[],
      verses: [] as Verse[]
    }
  },
  async mounted() {
    this.chapters = await versesService.getWholeBook(2)
  },
  updated() {
    console.error(this.chapters)
  }
})
</script>
