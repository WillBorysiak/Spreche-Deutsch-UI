export interface Categories {
	title: string;
	route: string;
	items: Category[];
}

export interface Category {
	index: number;
	text: string;
	route: string;
	url?: string;
}
