export interface Categories {
	title: string;
	route: string;
	items: CategoryItem[];
}

export interface CategoryItem {
	id: number;
	text: string;
	route: string;
	url?: string;
}
