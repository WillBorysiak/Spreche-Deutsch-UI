import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/sharp-solid-svg-icons';

const SearchInput = (props: { onInputChange: (value: string) => void }) => {
	const { onInputChange } = props;

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		onInputChange(value);
	};

	return (
		<form id="search-input" className="flex w-full items-center">
			<FontAwesomeIcon icon={faSearch} size="1x" className="mr-3" />
			<input
				type="text"
				placeholder="Search site"
				className="w-full bg-transparent focus:outline-none"
				onChange={handleInputChange}
			/>
		</form>
	);
};

export default SearchInput;
