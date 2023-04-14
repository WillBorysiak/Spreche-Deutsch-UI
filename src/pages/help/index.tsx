import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';

const Help: NextPage = () => {
	return (
		<section id="help-page">
			<PageHeading text="Help" mobile={true} />
		</section>
	);
};

export default Help;
