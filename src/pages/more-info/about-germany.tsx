import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';

const AboutGermany: NextPage = () => {
	return (
		<section id="about-germany-page">
			<PageHeading text="About Germany" mobile={true} />
		</section>
	);
};

export default AboutGermany;
