import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';
import SubHeading from '../../components/generic/typography/heading/SubHeading';

const VisitingGermany: NextPage = () => {
	return (
		<section id="visiting-germany-page" className="flex justify-center">
			<PageHeading text="Visiting Germany" mobile={true} />

			<div className="mt-10">
				<SubHeading text="Work in progress..." />
			</div>
		</section>
	);
};

export default VisitingGermany;
