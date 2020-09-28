import {
  defineComponent,
  onMounted,
  reactive,
  ref,
} from 'vue'
import { booksService, chaptersService, versesService } from '../../services'
import { Book, Chapter, Verse } from '../../types/verses.d'

export default defineComponent({
  name: "Home",
  async setup() {
    let selectedBook = ref(1)
    let selectedChapter = ref(0)
    let book = reactive<Book>({})
    let bookNames = reactive<Book[]>([])
    let chapters= ref<number[]>([])
    let verses = ref([])

    const getAllBookNames = async () => {
      bookNames = await booksService.getAllBookNames()
    }

    const getBook = async () => {
      console.error(selectedBook.value, selectedChapter.value)
      book = await booksService.getBook(selectedBook.value, selectedChapter.value)
      console.error(book)
      console.error(book.name)
    }

    const selectBook = async (id: number) => {
      selectedBook.value = id
      chapters.value = await chaptersService.getChaptersForBook(selectedBook.value)
    }

    await getAllBookNames()

    return {
      bookNames,
      book,
      selectedBook,
      selectBook,
      chapters,
      selectedChapter,
      verses,
      getBook,
    }
  },
  // data() {
  //   return {
  //     bookNames: [] as Book[],
  //     book: {} as Book,
  //     chapters: [ 0 ] as number[],
  //     verses: [] as Verse[],
  //     greeting: '',
  //     selectedBook: 1,
  //     selectedChapter: 0,
  //   }
  // },
  // async created() {
  //   // this.greeting = await booksService.test()
  //   // this.book = await versesService.getWholeBook(2)
  //   this.bookNames = await booksService.getAllBookNames()
  // },
  // updated() {
  //   console.error(`Selected book: ${this.selectedBook}`)
  //   console.warn(this.$style)
  //   console.warn(this)
  // },
  // methods: {
  //   // async getBook(id: number) {
  //   //   this.selectedBook = id
  //   //   this.book = await booksService.getWholeBook(this.selectedBook)
  //   // },
  //   async getBook() {
  //     this.book = await booksService.getBook(this.selectedBook, this.selectedChapter)
  //   },
  //   async selectBook(id: number) {
  //     this.selectedBook = id
  //     this.chapters = await chaptersService.getChaptersForBook(this.selectedBook)
  //   },
  // },
})
