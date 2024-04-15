import { create } from "zustand";

import { Category } from "../models/Category.model";
import { ICategory } from "../interfaces/ICategory";

interface CategoryEntities {
  [type: string]: Category[];
}

interface CategoriesStore {
  categories: CategoryEntities;
  currentCategory: Category | null;

  hasCategories: () => boolean;

  setCategories: (categories: ICategory[]) => void;
  setCurrentCategory: (category: Category) => void;

  getCategoriesByType: (type: string) => Category[];
  getCategoriesAsArray: () => Category[];
}

export const useCategoriesStore = create<CategoriesStore>((set, get) => ({
  categories: {},
  currentCategory: null,

  hasCategories: () => {
    const { categories } = get();
    return Object.keys(categories).length > 0;
  },

  setCategories: (categories: ICategory[]) => {
    const categoriesEntities: CategoryEntities = {};

    categories.forEach((item: ICategory) => {
      const type = item.type;

      if (!categoriesEntities[type]) {
        categoriesEntities[type] = [];
      }

      const category = new Category(item);

      categoriesEntities[type].push(category);
    });

    set({ categories: categoriesEntities });
  },

  setCurrentCategory: (category: Category) => {
    set({ currentCategory: category });
  },

  getCategoriesByType: (type: string) => {
    const { categories } = get();
    return categories[type];
  },

  getCategoriesAsArray: () => {
    const { categories } = get();
    return Object.values(categories).flat();
  },
}));
