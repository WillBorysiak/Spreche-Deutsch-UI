"use client";

import { useEffect } from "react";

import type { NextPage } from "next";
import { usePathname } from "next/navigation";

import TranslationTable from "../../../components/content/translations/TranslationTable";
import PageHeading from "../../../components/generic/typography/heading/PageHeading";
import { ContentTypeEnum } from "../../../enums/ContentTypeEnum.enum";
import { useCategoryRequest } from "../../../hooks/request-hooks";
import { CategoryService } from "../../../services/category-service.service";
import { useCategoriesStore } from "../../../store/categories-store.store";
import { useWordsStore } from "../../../store/words-store.store";

const WordCategoryPage: NextPage = () => {
  const {
    categories,
    currentCategory,
    setCurrentCategory,
    getCategoriesByType,
  } = useCategoriesStore();

  const { setWords, hasWordsCategory, getWordsByCategory } = useWordsStore();

  const routerPath = usePathname();

  // current category added to store
  useEffect(() => {
    const contentType = ContentTypeEnum.Words;

    const category = CategoryService.getCategoryFromRoute(
      routerPath,
      contentType,
      getCategoriesByType,
    );

    if (category) setCurrentCategory(category);
  }, [
    routerPath,
    categories,
    currentCategory,
    setCurrentCategory,
    getCategoriesByType,
  ]);

  const shouldFetchCategory = CategoryService.shouldFetchCategory(
    currentCategory,
    ContentTypeEnum.Words,
    hasWordsCategory,
  );

  const { data } = useCategoryRequest(currentCategory, shouldFetchCategory);

  // words added to store
  useEffect(() => {
    if (data) setWords(data);
  }, [data, setWords]);

  const wordsData = () =>
    currentCategory ? getWordsByCategory(currentCategory.route) : [];

  return (
    <section id="words-category-page" className="py-3">
      <PageHeading text={currentCategory?.name} mobile={true} />
      <TranslationTable
        translations={wordsData()}
        type={currentCategory?.type}
      />
    </section>
  );
};

export default WordCategoryPage;
