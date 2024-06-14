import { faSearch } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchInputProps {
  onInputChange: (value: string) => void;
}

const SearchInput = (props: SearchInputProps) => {
  const { onInputChange } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;

    onInputChange(searchValue);
  };

  return (
    <form
      id="search-input"
      className="flex w-full items-center border-b border-zinc-100 border-opacity-40 pb-3"
    >
      <FontAwesomeIcon icon={faSearch} size="1x" className="mr-3" />
      <input
        type="text"
        className="w-full bg-transparent focus:outline-none"
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchInput;
