import type { NextPage } from 'next';

import CategoryLayout from '../../components/content/language-page/CategoryLayout';
import PageHeading from '../../components/generic/typography/PageHeading';
import { words } from '../../data/pageData';

const Words: NextPage = () => {
	const wordsData = words.items;

	return (
		<section id="words-page" className="max-w-7xl">
			<div className="mt-5 text-center">
				<PageHeading text="Words" />
				<div id="category-container" className="mt-5">
					<CategoryLayout data={wordsData} parentRoute={words.route} />
				</div>
			</div>
		</section>
	);
};

export default Words;
