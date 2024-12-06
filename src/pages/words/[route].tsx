import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import TranslationTable from "../../components/content/translations/TranslationTable";
import PageHeading from "../../components/generic/typography/heading/PageHeading";
import { ContentTypeEnum } from "../../enums/ContentTypeEnum";
import { useCategoryRequest } from "../../hooks/requestHooks";
import { CategoryService } from "../../services/categoryService";
import { useCategoriesStore } from "../../store/categoriesStore";
import { useWordsStore } from "../../store/wordsStore";

const WordsCategory: NextPage = () => {
  const {
    categories,
    currentCategory,
    setCurrentCategory,
    getCategoriesByType,
  } = useCategoriesStore();
  const { setWords, hasWordsCategory, getWordsByCategory } = useWordsStore();

  const router = useRouter();

  // current category added to store
  useEffect(() => {
    const route = router.asPath;
    const contentType = ContentTypeEnum.Words;

    const category = CategoryService.getCategoryFromRoute(
      route,
      contentType,
      getCategoriesByType,
    );

    if (category) setCurrentCategory(category);
  }, [
    router,
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

export default WordsCategory;
