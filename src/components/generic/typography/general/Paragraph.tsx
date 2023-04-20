const Paragraph = (props: { text: string }) => {
	const { text } = props;

	return <p className="text-lg sm:text-xl">{text}</p>;
};

export default Paragraph;
