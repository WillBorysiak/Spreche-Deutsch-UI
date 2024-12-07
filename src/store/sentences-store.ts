import { create } from "zustand";

import { Sentence } from "../models/Sentence.model";
import { ISentence } from "../interfaces/ISentence.interface";

interface SentencesCategoryMap {
  [category: string]: Sentence[];
}

interface SentencesStore {
  sentences: { [category: string]: Sentence[] };

  hasSentences: () => boolean;
  hasSentencesCategory: (category: string) => boolean;

  setSentences: (sentences: ISentence[]) => void;

  getSentencesByCategory: (category: string) => Sentence[];
}

export const useSentencesStore = create<SentencesStore>((set, get) => ({
  sentences: {},

  hasSentences: () => {
    const { sentences } = get();
    return Object.keys(sentences).length > 0;
  },
  hasSentencesCategory: (category: string) => {
    const { sentences } = get();
    return Object.keys(sentences).includes(category);
  },

  setSentences: (sentences: ISentence[]) => {
    const sentencesCategoryMap: SentencesCategoryMap = {};

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

  getSentencesByCategory: (category: string) => {
    const { sentences } = get();
    return sentences[category];
  },
}));
