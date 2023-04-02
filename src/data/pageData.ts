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
		{ index: IntroductionCategoryEnum.What, text: 'What Is Spreche Deutsch', route: 'what-is-spreche-deutsch' },
		{ index: IntroductionCategoryEnum.About, text: 'Why This Site Was Made', route: 'why-this-site-was-made' },
		{ index: IntroductionCategoryEnum.Resources, text: 'More Resources', route: 'more-resources' },
	],
};

export const words: Categories = {
	title: 'Words',
	route: 'words',
	items: [
		{ index: WordsCategoryEnum.General, text: 'General', route: 'general', url: '/words/general' },
		{ index: WordsCategoryEnum.Numbers, text: 'Numbers', route: 'numbers', url: '/words/numbers' },
		{ index: WordsCategoryEnum.Colours, text: 'Colours', route: 'colours', url: '/words/colours' },
		{ index: WordsCategoryEnum.Family, text: 'Family', route: 'family', url: '/words/family' },
		{ index: WordsCategoryEnum.Food, text: 'Food', route: 'food', url: '/words/food' },
		{ index: WordsCategoryEnum.Places, text: 'Places', route: 'places', url: '/words/places' },
	],
};

export const sentences: Categories = {
	title: 'Sentences',
	route: 'sentences',
	items: [
		{ index: SentencesCategoryEnum.General, text: 'General', route: 'general', url: '/sentences/general' },
		{ index: SentencesCategoryEnum.Activities, text: 'Activities', route: 'activities', url: '/sentences/activities' },
		{ index: SentencesCategoryEnum.Work, text: 'Work', route: 'work', url: '/sentences/work' },
		{ index: SentencesCategoryEnum.Weather, text: 'Weather', route: 'weather', url: '/sentences/weather' },
	],
};

export const grammar: Categories = {
	title: 'Grammar',
	route: 'grammar',
	items: [
		{ index: GrammarCategoryEnum.TopTips, text: 'Top Tips', route: 'top-tips' },
		{ index: GrammarCategoryEnum.Structure, text: 'Structure', route: 'structure' },
		{ index: GrammarCategoryEnum.Tenses, text: 'Tenses', route: 'tenses' },
		{ index: GrammarCategoryEnum.Cases, text: 'Cases', route: 'cases' },
	],
};
