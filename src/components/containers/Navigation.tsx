import { useRouter } from 'next/router';

import * as nav from '../../data/pageData';
import Heading from '../generic/typography/Heading';
import NavigationItem from '../navigation/NavigationItem';

const Navigation = () => {
	const router = useRouter();

	return (
		<div id="navigation" className="flex flex-col p-10">
			<span className="hidden cursor-pointer lg:block" onClick={() => router.push('/')}>
				<Heading text="Spreche Deutsch" />
			</span>

			<div id="navigation-container" className="lg:mt-10">
				<NavigationItem data={nav.introduction} />
				<NavigationItem data={nav.words} />
				<NavigationItem data={nav.sentences} />
				<NavigationItem data={nav.grammar} />
			</div>
		</div>
	);
};

export default Navigation;
