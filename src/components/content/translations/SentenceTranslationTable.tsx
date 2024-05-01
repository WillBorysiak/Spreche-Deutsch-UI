import Image from "next/image";

import { Sentence } from "../../../models/Sentence.model";
import TableHeading from "../../generic/typography/translation-table/TableHeading";
import TableText from "../../generic/typography/translation-table/TableText";

interface SentenceTranslationTableProps {
  sentences: Sentence[];
}

const SentenceTranslationTable = (props: SentenceTranslationTableProps) => {
  const { sentences } = props;

  return (
    <table
      id="sentences-table"
      className="mx-auto w-full divide-y divide-zinc-900 dark:divide-zinc-200"
    >
      <thead>
        <tr>
          <th className="border-r border-zinc-900 py-5 dark:border-zinc-200">
            <Image
              className="mx-auto"
              src="/images/svg/uk-icon.svg"
              alt="The UK flag"
              height={25}
              width={25}
            />
            <div className="mt-5" />
            <TableHeading text="English" />
          </th>
          <th className="py-5">
            <Image
              className="mx-auto"
              src="/images/svg/germany-icon.svg"
              alt="The German flag"
              height={25}
              width={25}
            />
            <div className="mt-5" />
            <TableHeading text="German" />
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-zinc-900 dark:divide-zinc-200">
        {sentences &&
          sentences.map((item, index) => (
            <tr key={index}>
              <td className="border-r border-zinc-900 px-3 py-5 dark:divide-zinc-200">
                <TableText text={item.english} />
              </td>
              <td className="px-3 py-5">
                <TableText text={item.german} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default SentenceTranslationTable;
