const PageHeading = (props: { text: string | undefined }) => {
	const text = props.text;

	return <h1 className="text-2xl font-bold capitalize sm:text-4xl">{text}</h1>;
};

export default PageHeading;
