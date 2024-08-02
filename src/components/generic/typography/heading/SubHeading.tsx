interface SubHeadingProps {
  text: string | undefined;
  underlineHeading?: boolean;
}

const SubHeading = (props: SubHeadingProps) => {
  const { text, underlineHeading } = props;

  let headingText = text;

  if (headingText?.includes("-")) {
    headingText = headingText.replace(/-/g, " ");
  }

  return (
    <h3
      className={`text-2xl font-bold capitalize sm:text-3xl ${underlineHeading ? "underline decoration-2 underline-offset-4" : ""}`}
    >
      {headingText}
    </h3>
  );
};

export default SubHeading;
