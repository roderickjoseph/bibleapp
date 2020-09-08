// declare module 'vue/types/vue' {
//   export interface Vue {
//     $style: any
//   }
// }
import { createApp } from 'vue'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $style: any
  }
}
