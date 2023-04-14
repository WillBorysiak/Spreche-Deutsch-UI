import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';

const Introduction: NextPage = () => {
	return (
		<section id="introduction-page" className="flex flex-col items-center py-3">
			<PageHeading text="Introduction" mobile={true} />
		</section>
	);
};

export default Introduction;
