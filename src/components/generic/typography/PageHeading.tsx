const PageHeading = (props: { text: string | undefined }) => {
	const text = props.text;

	return <h2 className="text-center text-2xl font-bold capitalize underline sm:text-4xl">{text}</h2>;
};

export default PageHeading;
