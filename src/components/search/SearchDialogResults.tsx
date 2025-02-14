import { useRouter } from "next/navigation";

import { Category } from "../../models/Category.model";
import TableText from "../generic/typography/translation-table/TableText";

interface SearchDialogResultsProps {
  searchResults: Category[];
  selectSearchResult: () => void;
}

const SearchDialogResults = (props: SearchDialogResultsProps) => {
  const { searchResults, selectSearchResult } = props;

  const router = useRouter();

  return (
    <div
      id="search-dialog-results"
      className="no-scrollbar h-36 w-full overflow-y-auto px-3"
    >
      {searchResults.map((result, index) => (
        <div key={index} className="mt-5 flex justify-between">
          <span
            className="hover:cursor-pointer hover:underline hover:decoration-2 hover:underline-offset-4"
            onClick={() => {
              router.push(`/${result.type}/${result.route}`);
              selectSearchResult();
            }}
          >
            <TableText text={result.name} />
          </span>
          <TableText text={result.type} className="opacity-50" />
        </div>
      ))}
    </div>
  );
};

export default SearchDialogResults;
