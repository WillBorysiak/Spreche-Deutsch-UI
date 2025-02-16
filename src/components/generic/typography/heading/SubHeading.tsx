interface SubHeadingProps {
  heading: string | undefined;
}

const SubHeading = (props: SubHeadingProps) => {
  const { heading } = props;

  return (
    <h3 className="text-2xl font-bold capitalize sm:text-3xl">{heading}</h3>
  );
};

export default SubHeading;
