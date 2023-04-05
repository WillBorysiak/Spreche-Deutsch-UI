import { create } from 'zustand';

import { Word } from '../interfaces/Word';

interface WordsStore {
	words: { [category: string]: Word[] };
	setWords: (words: Word[]) => void;
}

export const useWordsStore = create<WordsStore>(set => ({
	words: {},
	setWords: (words: Word[]) =>
		set(state => ({
			words: {
				...state.words,
				[words[0].category]: words,
			},
		})),
}));
