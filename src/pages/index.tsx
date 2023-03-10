import type { NextPage } from 'next';

import HomeGallery from '../components/content/home-page/HomeGallery';
import ScrollingGreeting from '../components/content/home-page/ScrollingGreeting';
import Greeting from '../components/typography/Greeting';

const Home: NextPage = () => {
	return (
		<div id="home-page" className="mx-10 mt-10 ">
			<div id="welcome-animation" className="flex flex-col items-center">
				<div className="mb-10 mr-16 flex flex-row">
					<Greeting text="Guten" />
					<ScrollingGreeting />
				</div>
			</div>
			<HomeGallery />
		</div>
	);
};

export default Home;
