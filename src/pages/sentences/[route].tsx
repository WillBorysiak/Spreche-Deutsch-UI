import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import TranslationTable from "../../components/content/translations/TranslationTable";
import PageHeading from "../../components/generic/typography/heading/PageHeading";
import { ContentTypeEnum } from "../../enums/ContentTypeEnum";
import { useCategoryRequest } from "../../hooks/request-hooks";
import { CategoryService } from "../../services/category-service";
import { useCategoriesStore } from "../../store/categories-store";
import { useSentencesStore } from "../../store/sentences-store";

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

export default SentencesCategory;
