const Greeting = (props: { text: string }) => {
	const { text } = props;

	return <h3 className="text-5xl sm:text-7xl">{text}</h3>;
};

export default Greeting;
