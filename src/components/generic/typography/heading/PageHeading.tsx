import { classNames } from "../../../../helpers/class-names";

interface PageHeadingProps {
  text: string | undefined;
  mobile?: boolean;
}

const PageHeading = (props: PageHeadingProps) => {
  const { text, mobile } = props;

  return (
    <h2
      className={classNames(
        mobile
          ? "block underline decoration-2 underline-offset-4 lg:hidden"
          : "hidden lg:block",
        "text-center text-2xl font-bold capitalize tracking-wide sm:text-4xl",
      )}
    >
      {text}
    </h2>
  );
};

export default PageHeading;
