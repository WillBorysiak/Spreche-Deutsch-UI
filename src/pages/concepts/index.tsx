import type { NextPage } from "next";

import CategoryLayout from "../../components/content/language-page/CategoryLayout";
import PageHeading from "../../components/generic/typography/heading/PageHeading";
import { ContentTypeEnum } from "../../enums/ContentTypeEnum";
import { useCategoriesStore } from "../../store/categories-store";

const Concepts: NextPage = () => {
  const { getCategoriesByType } = useCategoriesStore();

  const conceptCategories = getCategoriesByType("concepts");

  const parentRoute = ContentTypeEnum.Concepts;

  return (
    <section id="concepts-page" className="py-3">
      <PageHeading text="Concepts" mobile={true} />
      <div id="category-container" className="mt-5">
        <CategoryLayout
          data={conceptCategories}
          parentRoute={parentRoute}
          layout="column"
        />
      </div>
    </section>
  );
};

export default Concepts;
