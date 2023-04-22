import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';
import { useCategoriesStore } from '../../store/categoriesStore';
import CategoryLayout from '../../components/content/language-page/CategoryLayout';

const Introduction: NextPage = () => {
	const { getCategoriesByType } = useCategoriesStore();

	const introductionCategories = getCategoriesByType('introduction');
	const parentRoute = introductionCategories[0]?.type;

	return (
		<section id="introduction-page" className="py-3">
			<PageHeading text="Introduction" mobile={true} />
			<div id="category-container" className="mt-5">
				<CategoryLayout data={introductionCategories} parentRoute={parentRoute} layout="column" />
			</div>
		</section>
	);
};

export default Introduction;
