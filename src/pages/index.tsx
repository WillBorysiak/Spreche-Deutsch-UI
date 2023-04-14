import type { NextPage } from 'next';

import HomeGallery from '../components/content/home-page/HomeGallery';
import HomeHero from '../components/content/home-page/HomeHero';
import ScrollingGreeting from '../components/content/home-page/ScrollingGreeting';
import Greeting from '../components/generic/typography/Greeting';

const Home: NextPage = () => {
	return (
		<section id="home-page">
			<div id="home-page-container" className="mx-5 my-10 flex flex-col items-center sm:mx-10">
				<div id="greeting-animation" className="mb-10 mr-28 flex flex-row">
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
