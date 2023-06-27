import type { NextPage } from 'next';

import HomeHero from '../components/content/home-page/HomeHero';
import ScrollingGreeting from '../components/content/home-page/ScrollingGreeting';
import { GreetingModel } from '../models/Greeting.model';

const Home: NextPage = () => {
	const dailyGreeting: GreetingModel = { greetings: ['Guten', 'Morgen', 'Tag', 'Abend'], animationSpeed: 2000 };

	// const languageGreeting: GreetingModel = {
	// 	greetings: ['Sprechen sie', 'Deutsch?', 'Englisch?', 'Französisch?'],
	// 	animationSpeed: 2500,
	// };

	return (
		<section id="home-page" className="flex items-center justify-center lg:h-full">
			<div id="home-page-container" className="mx-5 my-10 flex flex-col items-center">
				<ScrollingGreeting greetingData={dailyGreeting} />
				<HomeHero />
			</div>
		</section>
	);
};

export default Home;
