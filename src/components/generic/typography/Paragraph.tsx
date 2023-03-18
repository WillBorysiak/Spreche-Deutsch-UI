const Paragraph = (props: { text: string }) => {
	const text = props.text;

	return <h1 className="text-xl">{text}</h1>;
};

export default Paragraph;
