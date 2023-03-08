export interface NavigationData {
	title: string;
	items: string[];
}

export const introduction: NavigationData = {
	title: 'Introduction',
	items: ['Welcome', 'About', 'Resources'],
};

export const words: NavigationData = {
	title: 'Words',
	items: ['General', 'Numbers', 'Colours', 'Family', 'Food', 'Places'],
};

export const sentences: NavigationData = {
	title: 'Sentences',
	items: ['General', 'Activities', 'Work', 'Weather'],
};

export const grammar: NavigationData = {
	title: 'Grammar',
	items: ['Top Tips', 'Structure', 'Tenses', 'Cases'],
};
