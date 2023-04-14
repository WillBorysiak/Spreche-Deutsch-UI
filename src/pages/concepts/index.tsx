import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';

const Concepts: NextPage = () => {
	return (
		<section id="concepts-page">
			<PageHeading text="Concepts" mobile={true} />
		</section>
	);
};

export default Concepts;
