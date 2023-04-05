import { create } from 'zustand';

import { Sentence } from '../interfaces/Sentence';

interface SentencesStore {
	sentences: { [category: string]: Sentence[] };
	setSentences: (sentences: Sentence[]) => void;
}

export const useSentencesStore = create<SentencesStore>(set => ({
	sentences: {},
	setSentences: (sentences: Sentence[]) =>
		set(state => ({
			sentences: {
				...state.sentences,
				[sentences[0].category]: sentences,
			},
		})),
}));
