import { create } from "zustand";

import { Sentence } from "../models/Sentence.model";
import { ISentence } from "../interfaces/ISentence";

interface SentencesEntities {
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
    const sentencesEntities: SentencesEntities = {};

    sentences.forEach((item: ISentence) => {
      const category = item.category;

      if (!sentencesEntities[category]) {
        sentencesEntities[category] = [];
      }

      const sentence = new Sentence(item);

      sentencesEntities[category].push(sentence);
    });

    set({ sentences: sentencesEntities });
  },

  getSentencesByCategory: (category: string) => {
    const { sentences } = get();
    return sentences[category];
  },
}));
