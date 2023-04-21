import { useRouter } from 'next/router';

import PrimaryButton from '../../generic/buttons/PrimaryButton';
import SecondaryButton from '../../generic/buttons/SecondaryButton';
import Paragraph from '../../generic/typography/general/Paragraph';
import SubHeading from '../../generic/typography/heading/SubHeading';

const HomeHero = () => {
	const router = useRouter();

	const learnClick = () => router.push('/words');
	const infoClick = () => router.push('/introduction');

	return (
		<section id="home-hero" className="px-6 py-5 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-3xl text-center">
				<SubHeading text="Welcome to your German learning resource!" />
				<div className="mb-5 mt-5">
					<Paragraph text="Spreche Deutsch is designed to help you learn the German language." />
					<div className="mb-5" />
					<Paragraph text="Ranging from words, sentences, grammar and more!" />
				</div>
				<div className="flex justify-evenly">
					<PrimaryButton text="Start learning" onClick={learnClick} />
					<SecondaryButton text="More info" onClick={infoClick} />
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
