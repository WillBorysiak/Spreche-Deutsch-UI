import { useRouter } from "next/navigation";

import HomeButton, { ButtonTypesEnum } from "../../generic/buttons/HomeButton";
import Paragraph from "../../generic/typography/general/Paragraph";
import SubHeading from "../../generic/typography/heading/SubHeading";

const HomeHero = () => {
  const router = useRouter();

  const primaryClick = () => router.push("/words");
  const secondaryClick = () => router.push("/concepts");

  return (
    <section id="home-hero" className="my-10 px-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <SubHeading heading="Welcome to your German learning resource!" />
        <div className="mb-5 mt-5">
          <Paragraph text="Spreche Deutsch is designed to help you learn the German language." />
          <div className="mb-5" />
          <Paragraph text="Ranging from words, sentences, grammar and more!" />
        </div>
        <div className="flex justify-evenly">
          <HomeButton
            text="Learn words"
            buttonType={ButtonTypesEnum.Primary}
            onClick={primaryClick}
          />
          <HomeButton
            text="Grasp concepts"
            buttonType={ButtonTypesEnum.Secondary}
            onClick={secondaryClick}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
