const Greeting = (props: { text: string }) => {
	const { text } = props;

	return <h3 className="text-3xl sm:text-6xl">{text}</h3>;
};

export default Greeting;
