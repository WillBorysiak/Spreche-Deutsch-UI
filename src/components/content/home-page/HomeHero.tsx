import { useRouter } from 'next/router';

import PrimaryButton from '../../generic/buttons/PrimaryButton';
import SecondaryButton from '../../generic/buttons/SecondaryButton';
import Paragraph from '../../generic/typography/Paragraph';
import SubHeading from '../../generic/typography/SubHeading';

const HomeHero = () => {
	const router = useRouter();

	const learnClick = () => router.push('/words');
	const infoClick = () => router.push('/introduction');

	return (
		<section id="home-hero" className="py-5 px-6 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-3xl text-center">
				<SubHeading text="Welcome to your German learning resource!" />
				<div className="mt-5">
					<Paragraph text="Spreche Deutsch is designed to help you learn more about the German language." />
					<div className="mt-5" />
					<Paragraph text="Ranging from words, sentences, grammar and more..." />
				</div>
				<div className="mt-5 flex justify-evenly">
					<PrimaryButton text="Start learning" onClick={learnClick} />
					<SecondaryButton text="More info" onClick={infoClick} />
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
