import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/sharp-solid-svg-icons";

interface SearchInputProps {
  onInputChange: (value: string) => void;
}

const SearchInput = (props: SearchInputProps) => {
  const { onInputChange } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onInputChange(value);
  };

  return (
    <form
      id="search-input"
      className="flex w-full items-center border-b border-zinc-100 border-opacity-40 pb-3"
    >
      <FontAwesomeIcon icon={faSearch} size="1x" className="mr-3" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent focus:outline-none"
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchInput;
