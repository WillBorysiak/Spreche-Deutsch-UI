import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";
import useSWR from "swr";

import TranslationTable from "../../components/content/translations/TranslationTable";
import PageHeading from "../../components/generic/typography/heading/PageHeading";
import { ContentTypeEnum } from "../../enums/ContentTypeEnum";
import { fetcher } from "../../helpers/fetcher";
import { motionVariants } from "../../helpers/framerMotion";
import { IWord } from "../../interfaces/IWord";
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
    const wordCategories = getCategoriesByType(ContentTypeEnum.Words);

    const routerPath = router.asPath;

    const category = wordCategories?.find(
      ({ route }) => `/words/${route}` === routerPath,
    );

    if (category) setCurrentCategory(category);
  }, [
    router,
    categories,
    currentCategory,
    setCurrentCategory,
    getCategoriesByType,
  ]);

  const shouldFetchData = () => {
    if (!currentCategory) {
      return false;
    }

    const categoryTypeIsWords = currentCategory?.type === ContentTypeEnum.Words;
    const categoryNotInStore = !hasWordsCategory(currentCategory.route);

    return categoryTypeIsWords && categoryNotInStore;
  };

  // words API request
  const { data } = useSWR<IWord[]>(
    shouldFetchData()
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
