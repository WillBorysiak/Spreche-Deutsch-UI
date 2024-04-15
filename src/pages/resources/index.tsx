import type { NextPage } from "next";

import PageHeading from "../../components/generic/typography/heading/PageHeading";
import { useCategoriesStore } from "../../store/categoriesStore";
import CategoryLayout from "../../components/content/language-page/CategoryLayout";
import { CategoryEnum } from "../../enums/CategoryEnum";

const MoreInfo: NextPage = () => {
  const { getCategoriesByType } = useCategoriesStore();

  const resourcesCategories = getCategoriesByType("resources");
  const parentRoute = CategoryEnum.Resources;

  return (
    <section id="more-info-page" className="py-3">
      <PageHeading text="Resources" mobile={true} />
      <div id="category-container" className="mt-5">
        <CategoryLayout
          data={resourcesCategories}
          parentRoute={parentRoute}
          layout="column"
        />
      </div>
    </section>
  );
};

export default MoreInfo;
