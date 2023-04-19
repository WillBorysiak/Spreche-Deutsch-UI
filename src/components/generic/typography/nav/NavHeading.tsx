const NavHeading = (props: { text: string | undefined }) => {
	const { text } = props;

	return (
		<h3 className="text-center text-2xl font-bold capitalize underline decoration-2 underline-offset-4 sm:text-3xl">
			{text}
		</h3>
	);
};

export default NavHeading;
