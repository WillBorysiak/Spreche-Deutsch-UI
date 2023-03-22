import { WordsCategoryEnum } from '../enums/WordsCategoryEnum';
import { SentencesCategoryEnum } from '../enums/SentenceCategoryEnum';
import { PageData } from '../interfaces/PageData';
import { IntroductionCategoryEnum } from '../enums/IntroductionCategoryEnum';
import { GrammarCategoryEnum } from '../enums/GrammarCategoryEnum';

export const introduction: PageData = {
	title: 'Introduction',
	route: 'introduction',
	items: [
		{ id: IntroductionCategoryEnum.What, text: 'What Is Spreche Deutsch', route: 'what-is-spreche-deutsch' },
		{ id: IntroductionCategoryEnum.About, text: 'Why This Site Was Made', route: 'why-this-site-was-made' },
		{ id: IntroductionCategoryEnum.Resources, text: 'More Resources', route: 'more-resources' },
	],
};

export const words: PageData = {
	title: 'Words',
	route: 'words',
	items: [
		{ id: WordsCategoryEnum.General, text: 'General', route: 'general' },
		{ id: WordsCategoryEnum.Numbers, text: 'Numbers', route: 'numbers' },
		{ id: WordsCategoryEnum.Colours, text: 'Colours', route: 'colours' },
		{ id: WordsCategoryEnum.Family, text: 'Family', route: 'family' },
		{ id: WordsCategoryEnum.Food, text: 'Food', route: 'food' },
		{ id: WordsCategoryEnum.Places, text: 'Places', route: 'places' },
	],
};

export const sentences: PageData = {
	title: 'Sentences',
	route: 'sentences',
	items: [
		{ id: WordsCategoryEnum.General, text: 'General', route: 'general' },
		{ id: SentencesCategoryEnum.Activities, text: 'Activites', route: 'activities' },
		{ id: SentencesCategoryEnum.Work, text: 'Work', route: 'work' },
		{ id: SentencesCategoryEnum.Weather, text: 'Weather', route: 'weather' },
	],
};

export const grammar: PageData = {
	title: 'Grammar',
	route: 'grammar',
	items: [
		{ id: GrammarCategoryEnum.TopTips, text: 'Top Tips', route: 'top-tips' },
		{ id: GrammarCategoryEnum.Structure, text: 'Structure', route: 'structure' },
		{ id: GrammarCategoryEnum.Tenses, text: 'Tenses', route: 'tenses' },
		{ id: GrammarCategoryEnum.Cases, text: 'Cases', route: 'cases' },
	],
};
