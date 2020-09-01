import { defineComponent, onMounted } from 'vue'
import { booksService, versesService } from '../services'
import { Book, Chapter, Verse } from '../types/verses.d'

export default defineComponent({
  data() {
    return {
      bookNames: [] as Book[],
      book: {} as Book,
      chapters: [] as Chapter[],
      verses: [] as Verse[]
    }
  },
  async created() {
    // this.book = await versesService.getWholeBook(2)
    this.bookNames = await booksService.getAllBookNames()
  },
})
