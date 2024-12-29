import { useRouter } from "next/router";

import { Category as CategoryModel } from "../../../models/Category.model";
import SubHeading from "../../generic/typography/heading/SubHeading";
import CategoryIconFactory from "./CategoryIconFactory";

interface CategoryProps {
  category: CategoryModel;
  parentRoute: string;
}

const Category = (props: CategoryProps) => {
  const { category, parentRoute } = props;

  const { name, route } = category;

  const router = useRouter();

  return (
    <div
      id="category"
      className="default-transition mx-auto my-0 flex h-28 w-full max-w-7xl cursor-pointer flex-row items-center rounded-sm bg-transparentBg hover:scale-105 lg:my-5"
      onClick={() => router.push(`/${parentRoute}/${route}`)}
    >
      <CategoryIconFactory category={name} />
      <div className="flex w-full justify-center text-center">
        <SubHeading text={name} />
      </div>
    </div>
  );
};

export default Category;
