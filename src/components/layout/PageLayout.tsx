import { useEffect } from "react";

import useSWR from "swr";

import { fetcher } from "../../helpers/fetcher";
import { ICategory } from "../../interfaces/ICategory";
import { useCategoriesStore } from "../../store/categoriesStore";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;

  const { setCategories } = useCategoriesStore();

  const { data } = useSWR("http://localhost:8000/categories", fetcher);

  // categories added to store
  useEffect(() => {
    if (data) {
      const categoryData: ICategory[] = data;

      setCategories(categoryData);
    }
  }, [data, setCategories]);

  return (
    <div
      id="page-layout"
      className="flex w-screen flex-col lg:h-screen lg:flex-row"
    >
      {children}
    </div>
  );
};

export default PageLayout;
