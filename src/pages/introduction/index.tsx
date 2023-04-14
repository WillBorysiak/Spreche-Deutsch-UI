import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';

const Introduction: NextPage = () => {
	return (
		<section id="introduction-page">
			<PageHeading text="Introduction" mobile={true} />
		</section>
	);
};

export default Introduction;
