import { create } from "zustand";

import { Word } from "../models/Word.model";
import { IWord } from "../interfaces/IWord.interface";

interface WordCategoryMap {
  [category: string]: Word[];
}

interface WordsStore {
  words: { [category: string]: Word[] };

  hasWords: () => boolean;
  hasWordsCategory: (category: string) => boolean;

  setWords: (words: IWord[]) => void;

  getWordsByCategory: (category: string) => Word[];
}

export const useWordsStore = create<WordsStore>((set, get) => ({
  words: {},

  hasWords: () => {
    const { words } = get();
    return Object.keys(words).length > 0;
  },
  hasWordsCategory: (category: string) => {
    const { words } = get();
    return Object.keys(words).includes(category);
  },

  setWords: (words: IWord[]) => {
    const wordsCategoryMap: WordCategoryMap = {};

    words.forEach((item: IWord) => {
      const category = item.category;

      if (!wordsCategoryMap[category]) {
        wordsCategoryMap[category] = [];
      }

      const word = new Word(item);

      wordsCategoryMap[category].push(word);
    });

    set((state) => ({
      words: { ...state.words, ...wordsCategoryMap },
    }));
  },

  getWordsByCategory: (category: string) => {
    const { words } = get();
    return words[category];
  },
}));
