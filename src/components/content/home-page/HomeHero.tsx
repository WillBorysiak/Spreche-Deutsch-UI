import PrimaryButton from '../../generic/buttons/PrimaryButton';
import Paragraph from '../../generic/typography/Paragraph';
import SubHeading from '../../generic/typography/SubHeading';

const HomeHero = () => {
	return (
		<div className="py-5 px-6 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-3xl text-center">
				<SubHeading text="Welcome to your German learning resource!" />
				<div className="mt-5">
					<Paragraph text="Spreche Deutsch is designed to help you learn more about the German language." />
					<Paragraph text="Ranging from words, sentences, grammar and more..." />
				</div>
				<div className="mt-5">
					<PrimaryButton text="Start learning" />
				</div>
			</div>
		</div>
	);
};

export default HomeHero;
