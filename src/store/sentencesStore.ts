import { create } from 'zustand';

import { SentenceModel } from '../models/Sentence.model';

interface SentencesStore {
	sentences: { [category: string]: SentenceModel[] };
	setSentences: (sentences: SentenceModel[]) => void;
}

export const useSentencesStore = create<SentencesStore>(set => ({
	sentences: {},
	setSentences: (sentences: SentenceModel[]) =>
		set(state => ({
			sentences: {
				...state.sentences,
				[sentences[0].category]: sentences,
			},
		})),
}));
