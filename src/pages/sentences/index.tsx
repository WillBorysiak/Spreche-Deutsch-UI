import type { NextPage } from 'next';

import CategoryLayout from '../../components/content/language-page/CategoryLayout';
import PageHeading from '../../components/generic/typography/PageHeading';
import { sentences } from '../../data/pageData';

const Sentences: NextPage = () => {
	const sentencesData = sentences.items;

	return (
		<section id="sentences-page" className="max-w-7xl">
			<div className="mt-5 text-center">
				<PageHeading text="Sentences" />
				<div id="category-container" className="mt-5">
					<CategoryLayout data={sentencesData} />
				</div>
			</div>
		</section>
	);
};

export default Sentences;
