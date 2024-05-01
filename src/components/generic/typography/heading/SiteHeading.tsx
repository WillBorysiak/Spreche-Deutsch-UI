interface SiteHeadingProps {
  text: string;
}

const SiteHeading = (props: SiteHeadingProps) => {
  const { text } = props;

  return (
    <h1 className="text-center text-3xl capitalize sm:text-4xl lg:text-5xl">
      {text}
    </h1>
  );
};

export default SiteHeading;
