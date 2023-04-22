const SubHeading = (props: { text: string | undefined; className?: string }) => {
	const { text, className } = props;

	return <h3 className={`text-2xl font-bold capitalize sm:text-3xl ${className}`}>{text}</h3>;
};

export default SubHeading;
