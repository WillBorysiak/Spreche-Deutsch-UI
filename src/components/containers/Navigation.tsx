import { useRouter } from 'next/router';
import { useState } from 'react';

import * as navData from '../../data/navigationData';
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
				<NavigationItem data={navData.introduction} />
				<NavigationItem data={navData.words} />
				<NavigationItem data={navData.sentences} />
				<NavigationItem data={navData.grammar} />
			</div>
		</div>
	);
};

export default Navigation;
