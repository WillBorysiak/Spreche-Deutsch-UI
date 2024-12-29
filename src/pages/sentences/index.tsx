import type { NextPage } from "next";

import CategoryLayout from "../../components/content/language-page/CategoryLayout";
import PageHeading from "../../components/generic/typography/heading/PageHeading";
import { ContentTypeEnum } from "../../enums/ContentTypeEnum";
import { useCategoriesStore } from "../../store/categories-store";

const Sentences: NextPage = () => {
  const { getCategoriesByType } = useCategoriesStore();

  const sentenceCategories = getCategoriesByType("sentences");

  const parentRoute = ContentTypeEnum.Sentences;

  return (
    <section id="sentences-page" className="py-3">
      <PageHeading text="Sentences" mobile={true} />
      <div className="mt-5">
        <CategoryLayout
          categories={sentenceCategories}
          parentRoute={parentRoute}
          layout="grid"
        />
      </div>
    </section>
  );
};

export default Sentences;
