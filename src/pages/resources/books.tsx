import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';
import SubHeading from '../../components/generic/typography/heading/SubHeading';

const Books: NextPage = () => {
	return (
		<section id="books-page" className="flex justify-center">
			<PageHeading text="Books" mobile={true} />

			<div className="mt-10">
				<SubHeading text="Work in progress..." />
			</div>
		</section>
	);
};

export default Books;
