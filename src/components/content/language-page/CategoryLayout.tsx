import { classNames } from "../../../helpers/class-names";
import { Category as CategoryModel } from "../../../models/Category.model";
import Category from "./Category";

interface CategoryLayoutProps {
  categories: CategoryModel[];
  parentRoute: string;
  layout: string;
}

const CategoryLayout = (props: CategoryLayoutProps) => {
  const { categories, parentRoute, layout } = props;

  return (
    <div
      id="category-layout"
      className={classNames(
        layout === "column"
          ? "flex flex-col"
          : "flex flex-col 2xl:grid 2xl:grid-cols-2",
        "gap-10",
      )}
    >
      {categories &&
        categories.map((item, index) => (
          <Category key={index} category={item} parentRoute={parentRoute} />
        ))}
    </div>
  );
};

export default CategoryLayout;
