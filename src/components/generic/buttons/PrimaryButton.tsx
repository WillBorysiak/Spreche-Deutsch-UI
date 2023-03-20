interface PrimaryButtonProps {
	text: string;
	onClick: () => void;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
	const { text, onClick } = props;

	return (
		<button
			type="button"
			className="rounded-sm bg-yellow-600 py-2 px-3 text-lg font-semibold shadow-sm hover:bg-yellow-500"
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default PrimaryButton;
