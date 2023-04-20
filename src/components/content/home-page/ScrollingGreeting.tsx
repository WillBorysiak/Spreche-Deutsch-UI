import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';

import Greeting from '../../generic/typography/general/Greeting';

const greetings = ['Morgen', 'Tag', 'Abend'];

const ScrollingGreeting = () => {
	const [greeting, setGreeting] = useState('Morgen');
	const [count, setCount] = useState(0);

	// infinite counter
	useEffect(() => {
		const interval = setInterval(() => setCount(count => (count + 1) % 3), 2000);
		return () => clearInterval(interval);
	}, []);

	// changes greeting
	useEffect(() => {
		setGreeting(greetings[count]);
	}, [count]);

	return (
		<div id="scrolling-greeting" className="relative ml-3">
			<Transition
				show={greeting === 'Morgen'}
				className="absolute text-green-400 duration-1000 ease-in-out"
				enterFrom="opacity-0 -translate-y-10"
				enterTo="opacity-100 translate-y-0"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-10"
			>
				<Greeting text="Morgen" />
			</Transition>
			<Transition
				show={greeting === 'Tag'}
				className="absolute text-blue-400 duration-1000 ease-in-out"
				enterFrom="opacity-0 -translate-y-10"
				enterTo="opacity-100 translate-y-0"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-10"
			>
				<Greeting text="Tag" />
			</Transition>
			<Transition
				show={greeting === 'Abend'}
				className="absolute text-orange-400 duration-1000 ease-in-out"
				enterFrom="opacity-0 -translate-y-10"
				enterTo="opacity-100 translate-y-0"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-10"
			>
				<Greeting text="Abend" />
			</Transition>
		</div>
	);
};

export default ScrollingGreeting;
