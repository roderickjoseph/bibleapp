import {
  defineComponent,
  defineAsyncComponent,
} from 'vue'
import Home from './components/home/Home.vue'

export default defineComponent({
  components: {
    Home: defineAsyncComponent(() =>
      import('./components/home/Home.vue'),
    )
  },
})
