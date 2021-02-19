import {
  defineComponent,
    provide,
  ref,
} from 'vue'
import { booksService, chaptersService } from '../../services'
import { Book, Chapter } from '../../types/verses'

export default defineComponent({
  name: 'selector',
  setup() {
    let selectedBook = ref(1)
    let selectedChapter = ref(0)
    let chapters= ref<number[]>([])
    let bookNames = ref<Book[]>([])

    provide('selectedBook', selectedBook)
    provide('selectedChapter', selectedChapter)

    const getAllBookNames = async () => {
      bookNames.value = await booksService.getAllBookNames()
    }

    const selectBook = async (id: number) => {
      selectedBook.value = id
      chapters.value = await chaptersService.getChaptersForBook(selectedBook.value)
    }

    const getBook = async () => {
      let chosenBook = await booksService.getBook(selectedBook.value, selectedChapter.value)
      // bookName.value = chosenBook.name ?? ''
      // chapters.value = chosenBook.chapters ?? []
    }

    getAllBookNames()

    return {
      bookNames,
      selectedBook,
      selectBook,
      chapters,
      selectedChapter,
      // verses,
      getBook,
    }
  },
})
