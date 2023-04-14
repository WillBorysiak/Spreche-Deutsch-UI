import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';

const WhatIsSprecheDeutsch: NextPage = () => {
	return (
		<section id="what-page">
			<PageHeading text="What Is Spreche Deutsch" mobile={true} />
		</section>
	);
};

export default WhatIsSprecheDeutsch;
