import { useRouter } from 'next/router';
import { CategoryModel } from '../../models/Category';
import TableText from '../generic/typography/translation-table/TableText';

const SearchResults = (props: { searchResults: CategoryModel[]; onClose: () => void }) => {
	const { searchResults, onClose } = props;

	const router = useRouter();

	return (
		<div id="search-results" className="mt-5 w-full px-3">
			{searchResults.map((result, index) => (
				<div key={index} className="mt-3 flex justify-between">
					<span
						className="hover:cursor-pointer"
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
