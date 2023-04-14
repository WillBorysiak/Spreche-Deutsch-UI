import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';

const WhyThisSiteWasMade: NextPage = () => {
	return (
		<section id="why-page">
			<PageHeading text="Why This Site Was Made" mobile={true} />
		</section>
	);
};

export default WhyThisSiteWasMade;
