import { ContentTypeEnum } from "../enums/ContentTypeEnum.enum";
import { Category } from "../models/Category.model";

export class CategoryService {
  static getCategoryFromRoute(
    route: string,
    contentType: ContentTypeEnum,
    getCategoriesByType: (type: string) => Category[],
  ): Category | undefined {
    const wordCategories = getCategoriesByType(contentType);

    if (!wordCategories) return undefined;

    const category = wordCategories.find(
      (category) => route === `/${contentType}/${category.route}`,
    );

    return category;
  }

  static shouldFetchCategory(
    category: Category | null,
    contentType: ContentTypeEnum,
    hasCategory: (category: string) => boolean,
  ): boolean {
    if (!category) return false;

    const cateogoryMatchesContentType = category.type === contentType;

    if (!cateogoryMatchesContentType) return false;

    const categoryNotInStore = !hasCategory(category.route);

    return categoryNotInStore;
  }
}
