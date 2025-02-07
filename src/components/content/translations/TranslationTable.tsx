import { useEffect, useState } from "react";

import { ContentTypeEnum } from "../../../enums/ContentTypeEnum.enum";
import { SortTypeEnum } from "../../../enums/SortTypeEnum.enum";
import { TranslationService } from "../../../services/translation-service.service";
import { Sentence } from "../../../models/Sentence.model";
import { Word } from "../../../models/Word.model";
import SentenceTranslationTable from "./SentenceTranslationTable";
import TranslationSearch from "./TranslationSearch";
import TranslationSort from "./TranslationSort";
import WordTranslationTable from "./WordTranslationTable";

interface TranslationTableProps {
  translations: Word[] | Sentence[] | [];
  type: ContentTypeEnum | undefined;
}

const TranslationTable = (props: TranslationTableProps) => {
  let { translations, type } = props;

  const [sortType, setSortType] = useState<SortTypeEnum>(SortTypeEnum.default);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortedTranslations, setSortedTranslations] = useState<
    Word[] | Sentence[]
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
