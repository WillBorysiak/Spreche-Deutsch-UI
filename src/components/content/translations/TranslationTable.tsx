import { useEffect, useState } from "react";

import { ContentTypeEnum } from "../../../enums/ContentTypeEnum.enum";
import { SortTypeEnum } from "../../../enums/SortTypeEnum.enum";
import { AbstractTranslation } from "../../../models/AbstractTranslation.model";
import { Sentence } from "../../../models/Sentence.model";
import { Word } from "../../../models/Word.model";
import { TranslationService } from "../../../services/translation-service.service";
import SentenceTranslationTable from "./SentenceTranslationTable";
import TranslationSearch from "./TranslationSearch";
import TranslationSort from "./TranslationSort";
import WordTranslationTable from "./WordTranslationTable";

interface TranslationTableProps {
  translations: AbstractTranslation[] | [];
  type: ContentTypeEnum | undefined;
}

const TranslationTable = (props: TranslationTableProps) => {
  let { translations, type } = props;

  const [sortType, setSortType] = useState<SortTypeEnum>(SortTypeEnum.default);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortedTranslations, setSortedTranslations] = useState<
    AbstractTranslation[]
  >([]);

  useEffect(() => {
    const hasTranslations = translations?.length;

    if (hasTranslations) {
      const clonedTranslations = [...translations];

      const sortedTranslations = TranslationService.searchAndSortTranslations(
        clonedTranslations,
        sortType,
        searchTerm,
      );

      setSortedTranslations(sortedTranslations);
    }
  }, [translations, sortType, searchTerm]);

  return (
    <article id="translation-table" className="mx-3 mt-5 sm:mx-0">
      <div
        id="translation-table-toolbar"
        className="mb-10 hidden flex-row justify-between lg:flex"
      >
        <TranslationSort setSortType={setSortType} />
        <TranslationSearch setSearchTerm={setSearchTerm} />
      </div>

      <div
        id="table-container"
        className="flex-col items-center justify-center"
      >
        {type === ContentTypeEnum.Words && (
          <WordTranslationTable words={sortedTranslations as Word[]} />
        )}

        {type === ContentTypeEnum.Sentences && (
          <SentenceTranslationTable
            sentences={sortedTranslations as Sentence[]}
          />
        )}
      </div>
    </article>
  );
};

export default TranslationTable;
