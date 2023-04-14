const SiteHeading = (props: { text: string }) => {
	const text = props.text;

	return <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl">{text}</h1>;
};

export default SiteHeading;
