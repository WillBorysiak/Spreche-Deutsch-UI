const TableHeading = (props: { text: string }) => {
	const { text } = props;

	return <h4 className="text-center text-sm font-bold uppercase italic tracking-wider md:text-lg">{text}</h4>;
};

export default TableHeading;
