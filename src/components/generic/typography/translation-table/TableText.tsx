const TableText = (props: { text: string }) => {
	const text = props.text;

	return <p className="text-center text-sm md:text-lg">{text}</p>;
};

export default TableText;
