import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';
import { useCategoriesStore } from '../../store/categoriesStore';
import CategoryLayout from '../../components/content/language-page/CategoryLayout';

const Concepts: NextPage = () => {
	const { getCategoriesByType } = useCategoriesStore();

	const conceptCategories = getCategoriesByType('concepts');
	const parentRoute = conceptCategories[0]?.type;

	return (
		<section id="concepts-page" className="py-3">
			<PageHeading text="Concepts" mobile={true} />
			<div id="category-container" className="mt-5">
				<CategoryLayout data={conceptCategories} parentRoute={parentRoute} layout="column" />
			</div>
		</section>
	);
};

export default Concepts;
