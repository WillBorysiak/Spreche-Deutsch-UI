import { create } from "zustand";

import { IAbstractTranslation } from "../interfaces/IAbstractTranslation.interface";
import { ISentence } from "../interfaces/ISentence.interface";
import { Sentence } from "../models/Sentence.model";

interface SentencesCategoryMap {
  [category: string]: Sentence[];
}

interface SentencesStore {
  sentences: { [category: string]: Sentence[] };

  setSentences: (translations: IAbstractTranslation[]) => void;

  hasSentences: () => boolean;
  hasSentencesCategory: (category: string) => boolean;

  getSentencesByCategory: (category: string) => Sentence[];
}

export const useSentencesStore = create<SentencesStore>((set, get) => ({
  sentences: {},

  setSentences: (translations: IAbstractTranslation[]) => {
    const sentencesCategoryMap: SentencesCategoryMap = {};

    const sentences = translations as ISentence[];

    sentences.forEach((item: ISentence) => {
      const category = item.category;

      if (!sentencesCategoryMap[category]) {
        sentencesCategoryMap[category] = [];
      }

      const sentence = new Sentence(item);

      sentencesCategoryMap[category].push(sentence);
    });

    set((state) => ({
      sentences: { ...state.sentences, ...sentencesCategoryMap },
    }));
  },

  hasSentences: (): boolean => {
    const { sentences } = get();
    const hasSentences = Object.keys(sentences).length > 0;

    return hasSentences;
  },
  hasSentencesCategory: (category: string): boolean => {
    const { sentences } = get();
    const hasSentencesCategory = Object.keys(sentences).includes(category);

    return hasSentencesCategory;
  },

  getSentencesByCategory: (category: string): Sentence[] => {
    const { sentences } = get();
    const sentencesByCategory = sentences[category];

    return sentencesByCategory;
  },
}));
