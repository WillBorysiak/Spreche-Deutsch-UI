import { ContentTypeEnum } from "../../../enums/ContentTypeEnum";
import { Sentence } from "../../../models/Sentence.model";
import { Word } from "../../../models/Word.model";
import SentenceTranslationTable from "./SentenceTranslationTable";
import WordTranslationTable from "./WordTranslationTable";

interface TranslationTableProps {
  data: Word[] | Sentence[] | [];
  type: string | undefined;
}

const TranslationTable = (props: TranslationTableProps) => {
  let { data, type } = props;

  return (
    <article id="translation-table" className="mx-3 mt-10 sm:mx-0">
      <div
        id="table-container"
        className="flex-col items-center justify-center"
      >
        {type === ContentTypeEnum.Words && (
          <WordTranslationTable words={data as Word[]} />
        )}

        {type === ContentTypeEnum.Sentences && (
          <SentenceTranslationTable sentences={data as Sentence[]} />
        )}
      </div>
    </article>
  );
};

export default TranslationTable;
