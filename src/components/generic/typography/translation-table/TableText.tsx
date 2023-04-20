const TableText = (props: { text: string; className?: string }) => {
	const { text, className } = props;

	return <p className={`text-center text-lg sm:text-xl ${className}`}>{text}</p>;
};

export default TableText;
