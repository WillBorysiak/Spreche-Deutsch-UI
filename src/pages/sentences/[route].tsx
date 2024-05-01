import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";
import useSWR from "swr";

import TranslationTable from "../../components/content/translations/TranslationTable";
import PageHeading from "../../components/generic/typography/heading/PageHeading";
import { CategoryEnum } from "../../enums/CategoryEnum";
import { fetcher } from "../../helpers/fetcher";
import { motionVariants } from "../../helpers/framerMotion";
import { ISentence } from "../../interfaces/ISentence";
import { useCategoriesStore } from "../../store/categoriesStore";
import { useSentencesStore } from "../../store/sentencesStore";

const SentencesCategory: NextPage = () => {
  const {
    categories,
    currentCategory,
    setCurrentCategory,
    getCategoriesByType,
  } = useCategoriesStore();
  const { setSentences, hasSentencesCategory, getSentencesByCategory } =
    useSentencesStore();

  const router = useRouter();

  // current category added to store
  useEffect(() => {
    const sentenceCategories = getCategoriesByType(CategoryEnum.Sentences);
    const routerPath = router.asPath;

    const category = sentenceCategories?.find(
      ({ route }) => `/sentences/${route}` === routerPath,
    );

    if (category) setCurrentCategory(category);
  }, [
    router,
    categories,
    currentCategory,
    setCurrentCategory,
    getCategoriesByType,
  ]);

  const shouldFetchData = () =>
    currentCategory && !hasSentencesCategory(currentCategory.route);

  // sentence API request
  const { data } = useSWR<ISentence[]>(
    shouldFetchData()
      ? `${process.env.NEXT_PUBLIC_API_URL}/sentences/category/${currentCategory?.route}`
      : null,
    fetcher,
  );

  // sentences added to store
  useEffect(() => {
    if (data) setSentences(data);
  }, [data, setSentences]);

  // sentences fetched from store
  const sentenceData = () =>
    currentCategory ? getSentencesByCategory(currentCategory.route) : [];

  return (
    <AnimatePresence mode="wait">
      <motion.section
        id="sentences-category-page"
        className="py-3"
        key={router.asPath}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 0.5 }}
        variants={motionVariants}
      >
        <PageHeading text={currentCategory?.name} mobile={true} />
        <TranslationTable data={sentenceData()} type={currentCategory?.type} />
      </motion.section>
    </AnimatePresence>
  );
};

export default SentencesCategory;
