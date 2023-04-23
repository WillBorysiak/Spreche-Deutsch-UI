const SubHeading = (props: { text: string | undefined; className?: string }) => {
	const { text, className } = props;

	let headingText = text;
	if (headingText?.includes('-')) headingText = headingText.replace(/-/g, ' ');

	return <h3 className={`text-2xl font-bold capitalize sm:text-3xl ${className}`}>{headingText}</h3>;
};

export default SubHeading;
