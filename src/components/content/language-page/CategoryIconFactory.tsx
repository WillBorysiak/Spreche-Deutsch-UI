import Image from "next/image";

interface CategoryIconFactoryProps {
  category: string;
}

const CategoryIconFactory = (props: CategoryIconFactoryProps) => {
  const { category } = props;

  const categoryLowerCase = category.toLowerCase();
  const categoryFormatted = categoryLowerCase.replace(/ /g, "-");
  const categoryIcon = categoryFormatted;

  return (
    <Image
      className="ml-5"
      src={`/images/svg/category/${categoryIcon}.svg`}
      alt={category}
      height={90}
      width={90}
    />
  );
};

export default CategoryIconFactory;
