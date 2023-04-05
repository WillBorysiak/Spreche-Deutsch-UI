const SubHeading = (props: { text: string }) => {
	const text = props.text;

	return <h2 className="text-2xl font-bold capitalize sm:text-3xl">{text}</h2>;
};

export default SubHeading;
