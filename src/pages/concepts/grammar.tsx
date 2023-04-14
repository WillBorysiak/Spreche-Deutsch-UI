import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';

const Grammar: NextPage = () => {
	return (
		<section id="grammar-page">
			<PageHeading text="Grammar" mobile={true} />
		</section>
	);
};

export default Grammar;
