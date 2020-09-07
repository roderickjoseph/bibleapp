import { defineComponent, onMounted } from 'vue'
import { booksService, chaptersService, versesService } from '../services'
import { Book, Chapter, Verse } from '../types/verses.d'

export default defineComponent({
  data() {
    return {
      bookNames: [] as Book[],
      book: {} as Book,
      chapters: [ 0 ] as number[],
      verses: [] as Verse[],
      greeting: '',
      selectedBook: 1,
      selectedChapter: 0,
    }
  },
  async created() {
    // this.greeting = await booksService.test()
    // this.book = await versesService.getWholeBook(2)
    this.bookNames = await booksService.getAllBookNames()
  },
  updated() {
    console.error(`Selected book: ${this.selectedBook}`)
  },
  methods: {
    // async getBook(id: number) {
    //   this.selectedBook = id
    //   this.book = await booksService.getWholeBook(this.selectedBook)
    // },
    async getBook() {
      this.book = await booksService.getBook(this.selectedBook, this.selectedChapter)
    },
    async selectBook(id: number) {
      this.selectedBook = id
      this.chapters = await chaptersService.getChaptersForBook(this.selectedBook)
    },
  },
})
