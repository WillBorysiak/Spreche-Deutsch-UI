import { Categories } from '../interfaces/Categories';
import {
	GrammarCategoryEnum,
	IntroductionCategoryEnum,
	SentencesCategoryEnum,
	WordsCategoryEnum,
} from '../enums/CategoryEnum';

export const introduction: Categories = {
	title: 'Introduction',
	route: 'introduction',
	items: [
		{ id: IntroductionCategoryEnum.What, text: 'What Is Spreche Deutsch', route: 'what-is-spreche-deutsch' },
		{ id: IntroductionCategoryEnum.About, text: 'Why This Site Was Made', route: 'why-this-site-was-made' },
		{ id: IntroductionCategoryEnum.Resources, text: 'More Resources', route: 'more-resources' },
	],
};

export const words: Categories = {
	title: 'Words',
	route: 'words',
	items: [
		{ id: WordsCategoryEnum.General, text: 'General', route: 'general', url: '/words/general' },
		{ id: WordsCategoryEnum.Numbers, text: 'Numbers', route: 'numbers', url: '/words/numbers' },
		{ id: WordsCategoryEnum.Colours, text: 'Colours', route: 'colours', url: '/words/colours' },
		{ id: WordsCategoryEnum.Family, text: 'Family', route: 'family', url: '/words/family' },
		{ id: WordsCategoryEnum.Food, text: 'Food', route: 'food', url: '/words/food' },
		{ id: WordsCategoryEnum.Places, text: 'Places', route: 'places', url: '/words/places' },
	],
};

export const sentences: Categories = {
	title: 'Sentences',
	route: 'sentences',
	items: [
		{ id: SentencesCategoryEnum.General, text: 'General', route: 'general', url: '/sentences/general' },
		{ id: SentencesCategoryEnum.Activities, text: 'Activities', route: 'activities', url: '/sentences/activities' },
		{ id: SentencesCategoryEnum.Work, text: 'Work', route: 'work', url: '/sentences/work' },
		{ id: SentencesCategoryEnum.Weather, text: 'Weather', route: 'weather', url: '/sentences/weather' },
	],
};

export const grammar: Categories = {
	title: 'Grammar',
	route: 'grammar',
	items: [
		{ id: GrammarCategoryEnum.TopTips, text: 'Top Tips', route: 'top-tips' },
		{ id: GrammarCategoryEnum.Structure, text: 'Structure', route: 'structure' },
		{ id: GrammarCategoryEnum.Tenses, text: 'Tenses', route: 'tenses' },
		{ id: GrammarCategoryEnum.Cases, text: 'Cases', route: 'cases' },
	],
};
