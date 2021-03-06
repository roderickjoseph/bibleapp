export interface Book {
  id?: number;
  name?: string;
  chapters?: Chapter[];
}

export interface Chapter {
  id?: number;
  verses: Verse[];
}

export interface Verse {
  id: number;
  bookId: number;
  ChaperId: number;
  VerseId: number;
  text: string;
}
