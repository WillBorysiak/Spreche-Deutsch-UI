const NavText = (props: { text: string }) => {
	const { text } = props;

	return <li className="text-lg sm:text-xl">{text}</li>;
};

export default NavText;
