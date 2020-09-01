import Api from './api'
import { Book, Chapter, Verse } from '../types/verses.d'

export default class BooksService extends Api {
  public constructor() {
    super()
  }

  public async getWholeBook(bookId: number): Promise<Book> {
    const { data } = await this.get<Book>(`book/${bookId}`)
    return data
  }

  async getAllBookNames(): Promise<Book[]> {
    this.get('book')
    const { data } = await this.get<Book[]>('book/names')
    return data
  }
}
