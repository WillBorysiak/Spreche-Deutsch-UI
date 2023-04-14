import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';

const Resources: NextPage = () => {
	return (
		<section id="resources-page">
			<PageHeading text="Resources" mobile={true} />
		</section>
	);
};

export default Resources;
