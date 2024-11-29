import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import useSWR from "swr";

import TranslationTable from "../../components/content/translations/TranslationTable";
import PageHeading from "../../components/generic/typography/heading/PageHeading";
import { ContentTypeEnum } from "../../enums/ContentTypeEnum";
import { fetcher } from "../../helpers/fetcher";
import { ISentence } from "../../interfaces/ISentence";
import { CategoryService } from "../../services/categoryService";
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
    const route = router.asPath;
    const contentType = ContentTypeEnum.Sentences;

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
    ContentTypeEnum.Sentences,
    hasSentencesCategory,
  );

  // sentence API request
  const { data } = useSWR<ISentence[]>(
    shouldFetchCategory
      ? `${process.env.NEXT_PUBLIC_API_URL}/sentences/category/${currentCategory?.route}`
      : null,
    fetcher,
  );

  // sentences added to store
  useEffect(() => {
    if (data) setSentences(data);
  }, [data, setSentences]);

  const sentenceData = () =>
    currentCategory ? getSentencesByCategory(currentCategory.route) : [];

  return (
    <section id="sentences-category-page" className="py-3">
      <PageHeading text={currentCategory?.name} mobile={true} />
      <TranslationTable data={sentenceData()} type={currentCategory?.type} />
    </section>
  );
};

export default SentencesCategory;
