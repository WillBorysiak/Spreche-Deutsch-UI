import { faSearch } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchButtonProps {
  searchClick: () => void;
}

const SearchButton = (props: SearchButtonProps) => {
  const { searchClick } = props;

  return (
    <button
      type="button"
      id="search-button"
      className="default-transition flex items-center rounded-sm bg-zinc-300 px-3 py-2 shadow-sm hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700 lg:px-5 lg:hover:scale-105"
      onClick={searchClick}
    >
      <FontAwesomeIcon icon={faSearch} size="1x" className="mr-0 lg:mr-3" />
      <span className="hidden lg:block">Search...</span>
    </button>
  );
};

export default SearchButton;
