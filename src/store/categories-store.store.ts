import { create } from "zustand";

import { ICategory } from "../interfaces/ICategory.interface";
import { Category } from "../models/Category.model";

interface CategoryMap {
  [type: string]: Category[];
}

interface CategoriesStore {
  categories: CategoryMap;
  currentCategory: Category | null;

  setCategories: (categories: ICategory[]) => void;
  setCurrentCategory: (category: Category) => void;

  hasCategories: () => boolean;

  getCategoriesByType: (type: string) => Category[];
  getCategoriesAsArray: () => Category[];
}

export const useCategoriesStore = create<CategoriesStore>((set, get) => ({
  categories: {},
  currentCategory: null,

  setCategories: (categories: ICategory[]) => {
    const categoriesMap: CategoryMap = {};

    categories.forEach((item: ICategory) => {
      const type = item.type;

      if (!categoriesMap[type]) {
        categoriesMap[type] = [];
      }

      const category = new Category(item);

      categoriesMap[type].push(category);
    });

    set({ categories: categoriesMap });
  },
  setCurrentCategory: (category: Category) => {
    set({ currentCategory: category });
  },

  hasCategories: (): boolean => {
    const { categories } = get();
    const hasCategories = Object.keys(categories).length > 0;

    return hasCategories;
  },

  getCategoriesByType: (type: string): Category[] => {
    const { categories } = get();
    const categoriesByType = categories[type];

    return categoriesByType;
  },

  getCategoriesAsArray: (): Category[] => {
    const { categories } = get();
    const categoriesAsArray = Object.values(categories).flat();

    return categoriesAsArray;
  },
}));
