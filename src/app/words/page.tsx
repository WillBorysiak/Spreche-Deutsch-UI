"use client";

import type { NextPage } from "next";

import CategoryLayout from "../../components/content/language-page/CategoryLayout";
import PageHeading from "../../components/generic/typography/heading/PageHeading";
import { ContentTypeEnum } from "../../enums/ContentTypeEnum.enum";
import { useCategoriesStore } from "../../store/categories-store.store";

const WordsPage: NextPage = () => {
  const { getCategoriesByType } = useCategoriesStore();

  const wordCategories = getCategoriesByType("words");

  const parentRoute = ContentTypeEnum.Words;

  return (
    <section id="words-page" className="py-3">
      <PageHeading text="Words" mobile={true} />

      <div className="mt-5">
        <CategoryLayout
          categories={wordCategories}
          parentRoute={parentRoute}
          layout="grid"
        />
      </div>
    </section>
  );
};

export default WordsPage;
