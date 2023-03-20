import * as navData from '../../data/navigationData';
import Heading from '../generic/typography/Heading';
import NavigationItem from '../navigation/NavigationItem';

const Navigation = () => {
	// checks the route and if it matches then it passes true into the navigation item
	// the state will always show on route change but can be manually adjusted afterwards

	return (
		<div id="navigation" className="flex flex-col p-10">
			<span className="hidden lg:block">
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
