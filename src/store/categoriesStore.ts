import { create } from 'zustand';

import { Category } from '../interfaces/Category';

export interface CategoryStoreItem {
	[type: string]: Category[];
}

interface CategoriesStore {
	categories: CategoryStoreItem;
	setCategories: (wordsData: CategoryStoreItem) => void;
	getCategoriesByType: (type: string) => Category[];
}

export const useCategoriesStore = create<CategoriesStore>((set, get) => ({
	categories: {},
	setCategories: (categories: CategoryStoreItem) => set({ categories: categories }),
	getCategoriesByType: (type: string) => {
		const { categories } = get();
		return categories[type] || [];
	},
}));
