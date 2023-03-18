import { WordsCategoryEnum } from '../enums/WordsCategoryEnum';
import { SentencesCategoryEnum } from '../enums/SentenceCategoryEnum';
import { NavigationData } from '../interfaces/NavigationData';
import { IntroductionCategoryEnum } from '../enums/IntroductionCategoryEnum';
import { GrammarCategoryEnum } from '../enums/GrammarCategoryEnum';

export const introduction: NavigationData = {
	title: 'Introduction',
	items: [
		{ id: IntroductionCategoryEnum.What, text: 'What Is Spreche Deutsch' },
		{ id: IntroductionCategoryEnum.About, text: 'Why This Site Was Made' },
		{ id: IntroductionCategoryEnum.Resources, text: 'More Resources' },
	],
};

export const words: NavigationData = {
	title: 'Words',
	items: [
		{ id: WordsCategoryEnum.General, text: 'General' },
		{ id: WordsCategoryEnum.Numbers, text: 'Numbers' },
		{ id: WordsCategoryEnum.Colours, text: 'Colours' },
		{ id: WordsCategoryEnum.Family, text: 'Family' },
		{ id: WordsCategoryEnum.Food, text: 'Food' },
		{ id: WordsCategoryEnum.Places, text: 'Places' },
	],
};

export const sentences: NavigationData = {
	title: 'Sentences',
	items: [
		{ id: WordsCategoryEnum.General, text: 'General' },
		{ id: SentencesCategoryEnum.Activities, text: 'Activites' },
		{ id: SentencesCategoryEnum.Work, text: 'Work' },
		{ id: SentencesCategoryEnum.Weather, text: 'Weather' },
	],
};

export const grammar: NavigationData = {
	title: 'Grammar',
	items: [
		{ id: GrammarCategoryEnum.TopTips, text: 'Top Tips' },
		{ id: GrammarCategoryEnum.Structure, text: 'Structure' },
		{ id: GrammarCategoryEnum.Tenses, text: 'Tenses' },
		{ id: GrammarCategoryEnum.Cases, text: 'Cases' },
	],
};
