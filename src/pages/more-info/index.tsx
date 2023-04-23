import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';
import { useCategoriesStore } from '../../store/categoriesStore';
import CategoryLayout from '../../components/content/language-page/CategoryLayout';

const MoreInfo: NextPage = () => {
	const { getCategoriesByType } = useCategoriesStore();

	const moreInfoCategories = getCategoriesByType('more-info');
	const parentRoute = moreInfoCategories[0]?.type;

	return (
		<section id="more-info-page" className="py-3">
			<PageHeading text="More Info" mobile={true} />
			<div id="category-container" className="mt-5">
				<CategoryLayout data={moreInfoCategories} parentRoute={parentRoute} layout="column" />
			</div>
		</section>
	);
};

export default MoreInfo;
