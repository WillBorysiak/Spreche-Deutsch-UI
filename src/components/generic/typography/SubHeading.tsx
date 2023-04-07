const SubHeading = (props: { text: string | undefined }) => {
	const text = props.text;

	return <h3 className="text-center text-2xl font-bold capitalize sm:text-3xl">{text}</h3>;
};

export default SubHeading;
