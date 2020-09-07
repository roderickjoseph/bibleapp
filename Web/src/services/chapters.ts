import Api from './api'
import { Book, Chapter, Verse } from '../types/verses.d'

export default class ChaptersService extends Api {
  public constructor() {
    super()
  }

  public async getChaptersForBook(bookId: number): Promise<number[]> {
    const { data } = await this.get<number[]>(`chapters/${bookId}`)
    return data
  }
}
