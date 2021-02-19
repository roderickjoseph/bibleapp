import { defineComponent, inject, ref } from 'vue'
import { booksService } from '../../services'
import { Book, Chapter } from '../../types/verses'

export default defineComponent({
  name: 'chapter',
  // props: {
  //   bookId: {
  //     type: Number,
  //     required: true,
  //   },
  //   chapterId: {
  //     type: Number,
  //     required: true,
  //   }
  // },
  setup() {
    let bookName = ref('')
    let chapters = ref<Chapter[]>([])
    let verses = ref([])

    let bookId = inject<number>('selectedBook', 0)
    let chapterId = inject<number>('selectedChapter', 0)
  }
})
