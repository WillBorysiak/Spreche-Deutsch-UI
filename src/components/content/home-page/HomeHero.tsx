import { useRouter } from "next/router";

import PrimaryButton from "../../generic/buttons/PrimaryButton";
import Paragraph from "../../generic/typography/general/Paragraph";
import SubHeading from "../../generic/typography/heading/SubHeading";
import SecondaryButton from "../../generic/buttons/SecondaryButton";

const HomeHero = () => {
  const router = useRouter();

  const primaryClick = () => router.push("/words");
  const secondaryClick = () => router.push("/concepts");

  return (
    <section id="home-hero" className="my-10 px-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <SubHeading text="Welcome to your German learning resource!" />
        <div className="mb-5 mt-5">
          <Paragraph text="Spreche Deutsch is designed to help you learn the German language." />
          <div className="mb-5" />
          <Paragraph text="Ranging from words, sentences, grammar and more!" />
        </div>
        <div className="flex justify-evenly">
          <PrimaryButton text="Learn words" onClick={primaryClick} />
          <SecondaryButton text="Grasp concepts" onClick={secondaryClick} />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
