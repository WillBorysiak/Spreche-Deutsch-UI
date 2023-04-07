import type { NextPage } from 'next';

import CategoryLayout from '../../components/content/language-page/CategoryLayout';
import PageHeading from '../../components/generic/typography/PageHeading';
import { useCategoriesStore } from '../../store/categoriesStore';

const Sentences: NextPage = () => {
	const { getCategoriesByType } = useCategoriesStore();

	const sentenceCategories = getCategoriesByType('sentences');
	const parentRoute = sentenceCategories[0]?.type;

	return (
		<section id="sentences-page" className="py-5">
			<PageHeading text="Sentences" />
			<div id="category-container" className="mt-5">
				<CategoryLayout data={sentenceCategories} parentRoute={parentRoute} />
			</div>
		</section>
	);
};

export default Sentences;
