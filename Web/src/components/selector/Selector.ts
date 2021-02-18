import {
  defineComponent,
  ref,
} from 'vue'
import { booksService, chaptersService } from '../../services'
import { Book, Chapter } from '../../types/verses'

export default defineComponent({
  name: 'selector',
  async setup() {
    let selectedBook = ref(1)
    let selectedChapter = ref(0)
    let selectedName = ref('')
    let selectedChapters = ref<Chapter[]>([])
    let bookNames = ref<Book[]>([])
    let chapters= ref<number[]>([])
    let verses = ref([])

    const getAllBookNames = async function() {
      bookNames.value = await booksService.getAllBookNames()
    }

    const getBook = async function() {
      let chosenBook = await booksService.getBook(selectedBook.value, selectedChapter.value)
      selectedName.value = chosenBook.name ?? ''
      selectedChapters.value = chosenBook.chapters ?? []
    }

    const selectBook = async (id: number) => {
      selectedBook.value = id
      chapters.value = await chaptersService.getChaptersForBook(selectedBook.value)
    }

    await getAllBookNames()

    return {
      bookNames,
      selectedBook,
      selectBook,
      chapters,
      selectedChapter,
      verses,
      getBook,
    }
  },
})
