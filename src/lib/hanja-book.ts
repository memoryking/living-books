import data from '../../data/hanja-memory/book.json';
export type HanjaEntry = typeof data.entries[number];
export type HanjaChapter = typeof data.chapters[number];
export const hanjaBook = data;
