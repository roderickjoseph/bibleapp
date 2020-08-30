export interface Book {
  chapters: Chapter[];
}

export interface Chapter {
  verses: Verse[];
}

export interface Verse {
  id: number;
  bookId: number;
  ChaperId: number;
  VerseId: number;
  text: string;
}
