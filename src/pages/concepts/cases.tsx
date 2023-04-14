import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';

const Cases: NextPage = () => {
	return (
		<section id="cases-page">
			<PageHeading text="Cases" mobile={true} />
		</section>
	);
};

export default Cases;
