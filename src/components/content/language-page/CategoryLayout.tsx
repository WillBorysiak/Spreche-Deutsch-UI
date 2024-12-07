import { classNames } from "../../../helpers/class-names";
import { Category as CategoryModel } from "../../../models/Category.model";
import Category from "./Category";

interface CategoryLayoutProps {
  data: CategoryModel[];
  parentRoute: string;
  layout: string;
}

const CategoryLayout = (props: CategoryLayoutProps) => {
  const { data, parentRoute, layout } = props;

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
      {data &&
        data.map((item, index) => (
          <Category key={index} data={item} parentRoute={parentRoute} />
        ))}
    </div>
  );
};

export default CategoryLayout;
