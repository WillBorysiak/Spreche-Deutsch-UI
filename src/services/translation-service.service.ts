import { SortTypeEnum } from "../enums/SortTypeEnum.enum";
import { AbstractTranslation } from "../models/AbstractTranslation.model";

export class TranslationService {
  static searchAndSortTranslations(
    translations: AbstractTranslation[],
    sortType: SortTypeEnum,
    searchTerm: string,
  ): AbstractTranslation[] {
    const clonedTranslations = [...translations];

    // search
    const filteredTranslations = clonedTranslations.filter((item) => {
      const translationsTerm = item.english.toLowerCase();
      const search = searchTerm.toLowerCase();
      const isMatch = translationsTerm.includes(search);

      return isMatch;
    });

    // sort
    const sortedTranslations = filteredTranslations.sort((a, b) => {
      switch (sortType) {
        case "default":
          return 0;
        case "aToZ":
          return a.english.localeCompare(b.english);
        case "zToA":
          return b.english.localeCompare(a.english);
        default:
          return 0;
      }
    });

    return sortedTranslations;
  }
}
