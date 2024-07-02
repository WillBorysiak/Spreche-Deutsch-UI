import { useEffect, useState } from "react";

import { ContentTypeEnum } from "../../../enums/ContentTypeEnum";
import { SortOptionsEnum } from "../../../enums/SortOptionsEnum";
import { Sentence } from "../../../models/Sentence.model";
import { Word } from "../../../models/Word.model";
import SentenceTranslationTable from "./SentenceTranslationTable";
import TranslationSearch from "./TranslationSearch";
import TranslationSort from "./TranslationSort";
import WordTranslationTable from "./WordTranslationTable";

interface TranslationTableProps {
  data: Word[] | Sentence[] | [];
  type: string | undefined;
}

const TranslationTable = (props: TranslationTableProps) => {
  let { data, type } = props;

  const [sortType, setSortType] = useState<string>(SortOptionsEnum.default);
  const [searchSelection, setSearchSelection] = useState<string>("");
  const [sortedData, setSortedData] = useState<Word[] | Sentence[]>([]);

  useEffect(() => {
    if (data?.length) {
      const dataClone = [...data];

      // search

      const filteredData = dataClone.filter((item) =>
        item.english.toLowerCase().includes(searchSelection.toLowerCase()),
      );

      // sort

      const sortedData = filteredData.sort((a, b) => {
        if (sortType === SortOptionsEnum.default) {
          return 0;
        }

        if (sortType === SortOptionsEnum.aToZ) {
          return a.english.localeCompare(b.english);
        }

        if (sortType === SortOptionsEnum.zToA) {
          return b.english.localeCompare(a.english);
        }

        return 0;
      });

      setSortedData(sortedData);
    }
  }, [data, sortType, searchSelection]);

  return (
    <article id="translation-table" className="mx-3 mt-5 sm:mx-0">
      <div
        id="translation-table-toolbar"
        className="mb-10 hidden flex-row justify-between lg:flex"
      >
        <TranslationSort sortSelection={setSortType} />
        <TranslationSearch searchSelection={setSearchSelection} />
      </div>

      <div
        id="table-container"
        className="flex-col items-center justify-center"
      >
        {type === ContentTypeEnum.Words && (
          <WordTranslationTable words={sortedData as Word[]} />
        )}

        {type === ContentTypeEnum.Sentences && (
          <SentenceTranslationTable sentences={sortedData as Sentence[]} />
        )}
      </div>
    </article>
  );
};

export default TranslationTable;
