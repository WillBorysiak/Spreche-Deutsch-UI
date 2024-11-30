import useSWR from "swr";

import { fetcher } from "../helpers/fetcher";
import { IWord } from "../interfaces/IWord";
import { Category } from "../models/Category.model";
import { ICategory } from "../interfaces/ICategory";

export function useCategoriesRequest() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

  const { data, error } = useSWR<ICategory[]>(apiUrl, fetcher);

  return {
    data,
    error,
  };
}

export function useCategoryRequest(
  category: Category | null,
  shouldFetch: boolean,
) {
  const hasCategoryToFetch = category && shouldFetch;

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/${category?.type}/category/${category?.route}`;
  const conditionalApiurl = hasCategoryToFetch ? apiUrl : null;

  const { data, error } = useSWR<IWord[]>(conditionalApiurl, fetcher);

  return {
    data,
    error,
  };
}
