import Api from './api'
import { Book, Chapter, Verse } from '../types/verses.d'

export default class BooksService extends Api {
  public constructor() {
    super()
  }

  public async getWholeBook(bookId: number): Promise<Book> {
    const { data } = await this.get<Book>(`books/${bookId}`)
    return data
  }

  public async getAllBookNames(): Promise<Book[]> {
    const { data } = await this.get<Book[]>('books/names')
    return data
  }

  public async test(): Promise<string> {
    const { data } = await this.get<string>('');
    return data
  }
}
