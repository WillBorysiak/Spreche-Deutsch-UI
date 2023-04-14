import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';

const TopTips: NextPage = () => {
	return (
		<section id="top-tips-page">
			<PageHeading text="Top Tips" mobile={true} />
		</section>
	);
};

export default TopTips;
