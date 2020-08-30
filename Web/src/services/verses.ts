import Api from './api'
import { Verse } from '../types/verses.d'

export default class VersesService extends Api {
  public constructor() {
    super()
  }

  public async getWholeBook(bookId: number): Promise<Verse[]> {
    const rsp = await this.get<Verse[]>(`book/${bookId}`)
    console.error(rsp)
    return rsp.data
    // return data
  }
}
