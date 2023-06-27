import { create } from 'zustand';

import { CategoryModel } from '../models/Category.model';

export interface CategoryStoreItem {
	[type: string]: CategoryModel[];
}

interface CategoriesStore {
	categories: CategoryStoreItem;
	setCategories: (wordsData: CategoryStoreItem) => void;
	getCategoriesByType: (type: string) => CategoryModel[];
	getCategoriesAsArray: () => CategoryModel[];
}

export const useCategoriesStore = create<CategoriesStore>((set, get) => ({
	categories: {},
	setCategories: (categories: CategoryStoreItem) => set({ categories: categories }),
	getCategoriesByType: (type: string) => {
		const { categories } = get();
		return categories[type] || [];
	},
	getCategoriesAsArray: () => {
		const { categories } = get();
		return Object.values(categories).flat();
	},
}));
