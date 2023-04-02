import { create } from 'zustand';

import { Word } from '../interfaces/Word';

interface WordsStore {
	wordsData: { [categoryIndex: string]: Word[] };

	setWordsData: (wordsData: Word[]) => void;
}

export const useWordsStore = create<WordsStore>(set => ({
	wordsData: {},

	setWordsData: (wordsData: Word[]) =>
		set(state => ({
			wordsData: {
				...state.wordsData,
				[wordsData[0].category_index]: wordsData,
			},
		})),
}));
