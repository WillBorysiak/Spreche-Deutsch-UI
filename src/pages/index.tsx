import type { NextPage } from 'next';
import Image from 'next/image';

import HomeHero from '../components/content/home-page/HomeHero';
import ScrollingGreeting from '../components/content/home-page/ScrollingGreeting';
import Greeting from '../components/generic/typography/general/Greeting';

const Home: NextPage = () => {
	return (
		<section id="home-page" className="flex items-center justify-center lg:h-full">
			<div id="home-page-container" className="mx-5 my-10 flex flex-col items-center">
				<div id="greeting-animation" className="mb-5 mr-28 flex flex-row sm:mr-44">
					<Greeting text="Guten" />
					<ScrollingGreeting />
				</div>
				<HomeHero />
			</div>
		</section>
	);
};

export default Home;
