import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';
import SubHeading from '../../components/generic/typography/heading/SubHeading';

const OnlineTools: NextPage = () => {
	return (
		<section id="online-tools-page" className="flex justify-center">
			<PageHeading text="Online Tools" mobile={true} />

			<div className="mt-10">
				<SubHeading text="Work in progress..." />
			</div>
		</section>
	);
};

export default OnlineTools;
