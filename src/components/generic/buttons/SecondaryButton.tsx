interface SecondaryButtonProps {
	text: string;
	onClick: () => void;
}

const SecondaryButton = (props: SecondaryButtonProps) => {
	const { text, onClick } = props;

	return (
		<button
			type="button"
			className="rounded-sm bg-green-400 py-2 px-3 text-lg font-semibold shadow-sm hover:bg-green-500"
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default SecondaryButton;
