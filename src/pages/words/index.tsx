import type { NextPage } from 'next';

import CategoryLayout from '../../components/content/language-page/CategoryLayout';
import PageHeading from '../../components/generic/typography/heading/PageHeading';
import { useCategoriesStore } from '../../store/categoriesStore';

const Words: NextPage = () => {
	const { getCategoriesByType } = useCategoriesStore();

	const wordCategories = getCategoriesByType('words');
	const parentRoute = wordCategories[0]?.type;

	return (
		<section id="words-page" className="py-3">
			<PageHeading text="Words" mobile={true} />
			<div id="category-container" className="mt-5">
				<CategoryLayout data={wordCategories} parentRoute={parentRoute} />
			</div>
		</section>
	);
};

export default Words;
