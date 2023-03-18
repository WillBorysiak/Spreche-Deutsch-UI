import { Transition } from '@headlessui/react';
import { useState } from 'react';

import { NavigationData } from '../../interfaces/NavigationData';
import NavText from '../generic/typography/NavText';
import SubHeading from '../generic/typography/SubHeading';

const NavigationItem = (props: { data: NavigationData }) => {
	const { title, items } = props.data;
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div id="intro-nav" className="mb-10">
			<div className="default-transition w-fit cursor-pointer hover:scale-105" onClick={() => setIsVisible(!isVisible)}>
				<SubHeading text={title} />
			</div>
			{items.map((item, index) => (
				<Transition
					key={index}
					show={isVisible}
					className="overflow-hidden duration-500 ease-in-out"
					enterFrom="transform scale-95 opacity-0 max-h-0"
					enterTo="transform scale-100 opacity-100 max-h-32"
					leaveFrom="transform scale-100 opacity-100 max-h-32"
					leaveTo="transform scale-95 opacity-0 max-h-0"
				>
					<div className="mt-3 ml-3 w-fit cursor-pointer transition ease-linear hover:underline">
						<NavText text={item.text} />
					</div>
				</Transition>
			))}
		</div>
	);
};

export default NavigationItem;
