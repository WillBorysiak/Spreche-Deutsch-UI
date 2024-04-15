import { useRouter } from "next/router";

import { Category } from "../../models/Category.model";
import TableText from "../generic/typography/translation-table/TableText";

interface SearchResultsProps {
  searchResults: Category[];
  onClose: () => void;
}

const SearchResults = (props: SearchResultsProps) => {
  const { searchResults, onClose } = props;

  const router = useRouter();

  return (
    <div id="search-results" className="mt-5 w-full px-3">
      {searchResults.map((result, index) => (
        <div key={index} className="mt-5 flex justify-between">
          <span
            className="hover:cursor-pointer hover:underline hover:decoration-2 hover:underline-offset-4"
            onClick={() => {
              onClose();
              router.push(`/${result.type}/${result.route}`);
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

export default SearchResults;
