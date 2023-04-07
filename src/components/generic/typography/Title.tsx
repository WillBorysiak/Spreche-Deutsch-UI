const Title = (props: { text: string }) => {
	const text = props.text;

	return <h1 className="text-center text-2xl sm:text-4xl">{text}</h1>;
};

export default Title;
