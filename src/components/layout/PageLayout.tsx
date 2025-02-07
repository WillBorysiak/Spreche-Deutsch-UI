import { useEffect } from "react";

import { useCategoriesRequest } from "../../hooks/request-hooks";
import { useCategoriesStore } from "../../store/categories-store.store";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;

  const { setCategories } = useCategoriesStore();

  const { data } = useCategoriesRequest();

  // categories added to store
  useEffect(() => {
    if (data) setCategories(data);
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
