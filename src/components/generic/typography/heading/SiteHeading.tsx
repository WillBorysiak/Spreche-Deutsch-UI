const SiteHeading = (props: { text: string }) => {
	const { text } = props;

	return (
		<h1 className="default-transition text-center text-3xl capitalize sm:text-4xl lg:text-5xl lg:hover:scale-105">
			{text}
		</h1>
	);
};

export default SiteHeading;
