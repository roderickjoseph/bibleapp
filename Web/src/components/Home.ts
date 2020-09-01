import { defineComponent, onMounted } from 'vue'
import { booksService, versesService } from '../services'
import { Book, Chapter, Verse } from '../types/verses.d'

export default defineComponent({
  data() {
    return {
      bookNames: [] as Book[],
      book: {} as Book,
      chapters: [] as Chapter[],
      verses: [] as Verse[],
      greeting: ''
    }
  },
  async created() {
    // this.greeting = await booksService.test()
    // this.book = await versesService.getWholeBook(2)
    this.bookNames = await booksService.getAllBookNames()
  },
  methods: {
    async getBook(id: number) {
      this.book = await booksService.getWholeBook(id)
    },
  },
})
