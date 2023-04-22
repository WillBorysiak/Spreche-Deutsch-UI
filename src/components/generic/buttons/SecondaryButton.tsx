const SecondaryButton = (props: { text: string; onClick: () => void }) => {
	const { text, onClick } = props;

	return (
		<button
			type="button"
			className="default-transition rounded-sm bg-yellow-500 px-3 py-2 text-lg font-bold shadow-sm hover:scale-105 hover:bg-yellow-400"
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default SecondaryButton;
