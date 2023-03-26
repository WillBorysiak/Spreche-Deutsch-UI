import { create } from 'zustand';

import { Word } from '../interfaces/Word';

interface WordsStore {
	wordsData: Word[];
	setWordsData: (wordsData: Word[]) => void;
}

export const useWordsStore = create<WordsStore>(set => ({
	wordsData: [],
	setWordsData: (wordsData: Word[]) => set({ wordsData: wordsData }),
}));
