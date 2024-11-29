import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import useSWR from "swr";

import TranslationTable from "../../components/content/translations/TranslationTable";
import PageHeading from "../../components/generic/typography/heading/PageHeading";
import { ContentTypeEnum } from "../../enums/ContentTypeEnum";
import { fetcher } from "../../helpers/fetcher";
import { IWord } from "../../interfaces/IWord";
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

  // words API request
  const { data } = useSWR<IWord[]>(
    shouldFetchCategory
      ? `${process.env.NEXT_PUBLIC_API_URL}/words/category/${currentCategory?.route}`
      : null,
    fetcher,
  );

  // words added to store
  useEffect(() => {
    if (data) setWords(data);
  }, [data, setWords]);

  const wordsData = () =>
    currentCategory ? getWordsByCategory(currentCategory.route) : [];

  return (
    <section id="words-category-page" className="py-3">
      <PageHeading text={currentCategory?.name} mobile={true} />
      <TranslationTable data={wordsData()} type={currentCategory?.type} />
    </section>
  );
};

export default WordsCategory;
