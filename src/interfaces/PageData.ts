export interface PageData {
	title: string;
	route: string;
	items: {
		id: number;
		text: string;
		route: string;
	}[];
}
