import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getCategoryIcon } from "../../../helpers/get-category-icon";

interface CategoryIconFactoryProps {
  category: string;
}

const CategoryIconFactory = (props: CategoryIconFactoryProps) => {
  const { category } = props;

  const categoryIcon = getCategoryIcon(category);

  return (
    <FontAwesomeIcon
      icon={categoryIcon}
      size="5x"
      color="white"
      className="ml-5"
    />
  );
};

export default CategoryIconFactory;
