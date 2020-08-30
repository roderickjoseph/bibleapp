import Api from './api'
import { Chapter, Verse } from '../types/verses.d'

export default class VersesService extends Api {
  public constructor() {
    super()
  }

  public async getWholeBook(bookId: number): Promise<Chapter[]> {
    const { data } = await this.get<Chapter[]>(`book/${bookId}`)
    return data
  }
}
