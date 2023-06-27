import type { NextPage } from 'next';

import PageHeading from '../../components/generic/typography/heading/PageHeading';
import SubHeading from '../../components/generic/typography/heading/SubHeading';

const Courses: NextPage = () => {
	return (
		<section id="courses-page" className="flex justify-center">
			<PageHeading text="Courses" mobile={true} />

			<div className="mt-10">
				<SubHeading text="Work in progress..." />
			</div>
		</section>
	);
};

export default Courses;
