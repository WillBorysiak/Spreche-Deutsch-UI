import type { NextPage } from 'next';

import HomeGallery from '../components/content/home-page/HomeGallery';
import HomeHero from '../components/content/home-page/HomeHero';
import ScrollingGreeting from '../components/content/home-page/ScrollingGreeting';
import Greeting from '../components/generic/typography/general/Greeting';

const Home: NextPage = () => {
	return (
		<section id="home-page">
			<div id="home-page-container" className="mx-5 my-10 flex flex-col items-center">
				<div id="greeting-animation" className="mb-5 mr-24 flex flex-row sm:mr-28">
					<Greeting text="Guten" />
					<ScrollingGreeting />
				</div>
				<HomeHero />
				<HomeGallery />
				<HomeGallery />
				<HomeGallery />
			</div>
		</section>
	);
};

export default Home;
