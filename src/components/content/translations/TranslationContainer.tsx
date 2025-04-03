import { useEffect } from "react";

import { usePathname } from "next/navigation";

import { ContentTypeEnum } from "../../../enums/ContentTypeEnum.enum";
import { useCategoryRequest } from "../../../hooks/request-hooks";
import { IAbstractTranslation } from "../../../interfaces/IAbstractTranslation.interface";
import { CategoryService } from "../../../services/category-service.service";
import { useCategoriesStore } from "../../../store/categories-store.store";
import PageHeading from "../../generic/typography/heading/PageHeading";
import TranslationTable from "./TranslationTable";
import { AbstractTranslation } from "../../../models/AbstractTranslation.model";

interface TranslationContainerProps {
  contentType: ContentTypeEnum;
  addTranslationToStore: (data: IAbstractTranslation[]) => void;
  hasCategory: (category: string) => boolean;
  getItemsByCategory: (categoryRoute: string) => AbstractTranslation[];
}

const TranslationContainer = (props: TranslationContainerProps) => {
  const {
    contentType,
    addTranslationToStore,
    hasCategory,
    getItemsByCategory,
  } = props;

  const {
    categories,
    currentCategory,
    setCurrentCategory,
    getCategoriesByType,
  } = useCategoriesStore();

  const routerPath = usePathname();

  // current category added to store
  useEffect(() => {
    const category = CategoryService.getCategoryFromRoute(
      routerPath,
      contentType,
      getCategoriesByType,
    );

    if (category) setCurrentCategory(category);
  }, [
    routerPath,
    categories,
    currentCategory,
    contentType,
    setCurrentCategory,
    getCategoriesByType,
  ]);

  const shouldFetchCategory = CategoryService.shouldFetchCategory(
    currentCategory,
    contentType,
    hasCategory,
  );

  const { data } = useCategoryRequest(currentCategory, shouldFetchCategory);

  useEffect(() => {
    if (data) addTranslationToStore(data);
  }, [data, addTranslationToStore]);

  const translations = currentCategory
    ? getItemsByCategory(currentCategory.route)
    : [];

  return (
    <section id={`${contentType}-category-page`} className="py-3">
      <PageHeading text={currentCategory?.name} mobile={true} />
      <TranslationTable
        translations={translations}
        type={currentCategory?.type}
      />
    </section>
  );
};

export default TranslationContainer;
