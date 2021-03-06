import Api from './api'
import { Book, Chapter, Verse } from '../types/verses.d'

export default class VersesService extends Api {
  public constructor() {
    super()
  }

  public async getWholeBook(bookId: number): Promise<Book> {
    const { data } = await this.get<Book>(`book/${bookId}`)
    return data
  }
}
