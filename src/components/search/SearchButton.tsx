import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/sharp-solid-svg-icons';

const SearchButton = (props: { searchClick: () => void }) => {
	const { searchClick } = props;

	return (
		<button
			type="button"
			id="search-button"
			className="flex items-center rounded-sm bg-zinc-300 px-3 py-2 shadow-sm hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700 lg:px-5"
			onClick={searchClick}
		>
			<FontAwesomeIcon icon={faSearch} size="1x" className="mr-0 lg:mr-3" />
			<span className="hidden lg:block">Search...</span>
		</button>
	);
};

export default SearchButton;
