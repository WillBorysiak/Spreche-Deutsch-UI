const NavText = (props: { text: string }) => {
	const text = props.text;

	return <li className="text-1xl">{text}</li>;
};

export default NavText;
