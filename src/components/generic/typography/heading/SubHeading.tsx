const SubHeading = (props: { text: string | undefined }) => {
	const { text } = props;

	return <h3 className="text-center text-2xl font-bold capitalize sm:text-4xl">{text}</h3>;
};

export default SubHeading;
