const Heading = (props: { text: string }) => {
	const text = props.text;

	return <h3 className="text-3xl sm:text-5xl">{text}</h3>;
};

export default Heading;
