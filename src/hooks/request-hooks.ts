import useSWR from "swr";

import { fetcher } from "../helpers/fetcher";
import { ICategory } from "../interfaces/ICategory.interface";
import { IWord } from "../interfaces/IWord.interface";
import { Category } from "../models/Category.model";

interface ICategoriesResponse {
  data: ICategory[] | undefined;
  error: Error | null;
}

export const useCategoriesRequest = () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

  const { data, error } = useSWR<ICategory[]>(apiUrl, fetcher);
  const categoriesResponse: ICategoriesResponse = {
    data,
    error,
  };

  return categoriesResponse;
};

interface ICategoryResponse {
  data: IWord[] | undefined;
  error: Error | null;
}

export const useCategoryRequest = (
  category: Category | null,
  shouldFetch: boolean,
) => {
  const hasCategoryToFetch = category && shouldFetch;

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/${category?.type}/category/${category?.route}`;
  const conditionalUrl = hasCategoryToFetch ? apiUrl : null;

  const { data, error } = useSWR<IWord[]>(conditionalUrl, fetcher);
  const categoryResponse: ICategoryResponse = {
    data,
    error,
  };

  return categoryResponse;
};
