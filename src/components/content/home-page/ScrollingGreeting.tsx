import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';

import Greeting from '../../generic/typography/general/Greeting';
import { GreetingModel } from '../../../models/Greeting.model';

const ScrollingGreeting = (props: { greetingData: GreetingModel }) => {
	const {
		greetingData: { greetings, animationSpeed },
	} = props;
	const staticText = greetings[0];
	const dynamicText = greetings.slice(1);

	const [greeting, setGreeting] = useState(dynamicText[0]);
	const [count, setCount] = useState(0);

	// infinite counter
	useEffect(() => {
		const interval = setInterval(() => setCount(count => (count + 1) % 3), animationSpeed);
		return () => clearInterval(interval);
	}, []);

	// changes greeting
	useEffect(() => {
		setGreeting(dynamicText[count]);
	}, [count, dynamicText]);

	return (
		<div id="greeting" className="mr-28 flex flex-row sm:mr-44">
			<Greeting text={staticText} />

			<div id="scrolling-greeting" className="relative ml-3">
				<Transition
					show={greeting === dynamicText[0]}
					className="absolute text-green-400 duration-1000 ease-in-out"
					enterFrom="opacity-0 -translate-y-10"
					enterTo="opacity-100 translate-y-0"
					leaveFrom="opacity-100 translate-y-0"
					leaveTo="opacity-0 translate-y-10"
				>
					<Greeting text={dynamicText[0]} />
				</Transition>
				<Transition
					show={greeting === dynamicText[1]}
					className="absolute text-blue-400 duration-1000 ease-in-out"
					enterFrom="opacity-0 -translate-y-10"
					enterTo="opacity-100 translate-y-0"
					leaveFrom="opacity-100 translate-y-0"
					leaveTo="opacity-0 translate-y-10"
				>
					<Greeting text={dynamicText[1]} />
				</Transition>
				<Transition
					show={greeting === dynamicText[2]}
					className="absolute text-orange-400 duration-1000 ease-in-out"
					enterFrom="opacity-0 -translate-y-10"
					enterTo="opacity-100 translate-y-0"
					leaveFrom="opacity-100 translate-y-0"
					leaveTo="opacity-0 translate-y-10"
				>
					<Greeting text={dynamicText[2]} />
				</Transition>
			</div>
		</div>
	);
};

export default ScrollingGreeting;
