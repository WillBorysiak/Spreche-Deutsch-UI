import { HeadingHelper } from "../../helpers/heading-helper";

interface NavigationHeadingProps {
  heading: string | undefined;
  underlineHeading?: boolean;
}

const NavigationHeading = (props: NavigationHeadingProps) => {
  const { heading, underlineHeading } = props;

  const headingText = HeadingHelper.getNavigationSubHeading(heading);

  return (
    <h3
      className={`text-2xl font-bold capitalize sm:text-3xl ${underlineHeading ? "underline decoration-2 underline-offset-4" : ""}`}
    >
      {headingText}
    </h3>
  );
};

export default NavigationHeading;
