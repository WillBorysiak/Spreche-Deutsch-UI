const PrimaryButton = (props: { text: string; onClick: () => void }) => {
	const { text, onClick } = props;

	return (
		<button
			type="button"
			className="default-transition rounded-sm bg-red-600 px-3 py-2 text-lg font-bold shadow-sm hover:scale-105 hover:bg-red-500"
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default PrimaryButton;
