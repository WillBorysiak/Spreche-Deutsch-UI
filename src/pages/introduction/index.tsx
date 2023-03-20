import type { NextPage } from 'next';

import Heading from '../../components/generic/typography/Heading';

const Introduction: NextPage = () => {
	return (
		<section id="words-page" className="h-fit">
			<Heading text="Introduction" />
		</section>
	);
};

export default Introduction;
