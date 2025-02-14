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
import { useSentencesStore } from "../../../store/sentences-store.store";

const SentenceCategoryPage: NextPage = () => {
  const {
    categories,
    currentCategory,
    setCurrentCategory,
    getCategoriesByType,
  } = useCategoriesStore();

  const { setSentences, hasSentencesCategory, getSentencesByCategory } =
    useSentencesStore();

  const routerPath = usePathname();

  // current category added to store
  useEffect(() => {
    const contentType = ContentTypeEnum.Sentences;

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
    ContentTypeEnum.Sentences,
    hasSentencesCategory,
  );

  const { data } = useCategoryRequest(currentCategory, shouldFetchCategory);

  // sentences added to store
  useEffect(() => {
    if (data) setSentences(data);
  }, [data, setSentences]);

  const sentenceData = () =>
    currentCategory ? getSentencesByCategory(currentCategory.route) : [];

  return (
    <section id="sentences-category-page" className="py-3">
      <PageHeading text={currentCategory?.name} mobile={true} />
      <TranslationTable
        translations={sentenceData()}
        type={currentCategory?.type}
      />
    </section>
  );
};

export default SentenceCategoryPage;
