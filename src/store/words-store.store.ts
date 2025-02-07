import { create } from "zustand";

import { Word } from "../models/Word.model";
import { IWord } from "../interfaces/IWord.interface";

interface WordCategoryMap {
  [category: string]: Word[];
}

interface WordsStore {
  words: { [category: string]: Word[] };

  setWords: (words: IWord[]) => void;

  hasWords: () => boolean;
  hasWordsCategory: (category: string) => boolean;

  getWordsByCategory: (category: string) => Word[];
}

export const useWordsStore = create<WordsStore>((set, get) => ({
  words: {},

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

  hasWords: (): boolean => {
    const { words } = get();
    const hasWords = Object.keys(words).length > 0;

    return hasWords;
  },
  hasWordsCategory: (category: string): boolean => {
    const { words } = get();
    const hasWordsCategory = Object.keys(words).includes(category);

    return hasWordsCategory;
  },

  getWordsByCategory: (category: string): Word[] => {
    const { words } = get();
    const wordsByCategory = words[category];

    return wordsByCategory;
  },
}));
