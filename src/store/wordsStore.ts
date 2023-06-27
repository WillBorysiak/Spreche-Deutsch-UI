import { create } from 'zustand';

import { WordModel } from '../models/Word.model';

interface WordsStore {
	words: { [category: string]: WordModel[] };
	setWords: (words: WordModel[]) => void;
}

export const useWordsStore = create<WordsStore>(set => ({
	words: {},
	setWords: (words: WordModel[]) =>
		set(state => ({
			words: {
				...state.words,
				[words[0].category]: words,
			},
		})),
}));
