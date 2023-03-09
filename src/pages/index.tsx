import type { NextPage } from 'next';
import Heading from '../components/typography/Heading';

const Home: NextPage = () => {
	return (
		<div className="mx-10 mt-10">
			<div id="welcome-animation" className="flex flex-row ">
				<div className="flex flex-col">
					<Heading text="Guten Morgen" />
					<Heading text="Guten Tag" />
					<Heading text="Guten Abend" />
				</div>
			</div>
		</div>
	);
};

export default Home;
