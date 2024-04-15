import type { NextPage } from "next";

import CategoryLayout from "../../components/content/language-page/CategoryLayout";
import PageHeading from "../../components/generic/typography/heading/PageHeading";
import { useCategoriesStore } from "../../store/categoriesStore";
import { CategoryEnum } from "../../enums/CategoryEnum";

const Sentences: NextPage = () => {
  const { getCategoriesByType } = useCategoriesStore();

  const sentenceCategories = getCategoriesByType("sentences");
  const parentRoute = CategoryEnum.Sentences;

  return (
    <section id="sentences-page" className="py-3">
      <PageHeading text="Sentences" mobile={true} />
      <div className="mt-5">
        <CategoryLayout
          data={sentenceCategories}
          parentRoute={parentRoute}
          layout="grid"
        />
      </div>
    </section>
  );
};

export default Sentences;
