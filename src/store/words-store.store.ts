import { create } from "zustand";

import { IAbstractTranslation } from "../interfaces/IAbstractTranslation.interface";
import { IWord } from "../interfaces/IWord.interface";
import { Word } from "../models/Word.model";

interface WordCategoryMap {
  [category: string]: Word[];
}

interface WordsStore {
  words: { [category: string]: Word[] };

  setWords: (translations: IAbstractTranslation[]) => void;

  hasWords: () => boolean;
  hasWordsCategory: (category: string) => boolean;

  getWordsByCategory: (category: string) => Word[];
}

export const useWordsStore = create<WordsStore>((set, get) => ({
  words: {},

  setWords: (translations: IAbstractTranslation[]) => {
    const wordsCategoryMap: WordCategoryMap = {};

    const words = translations as IWord[];

    words.forEach((item) => {
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
