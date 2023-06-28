import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NavText = (props: { text: string }) => {
	const { text } = props;

	const [underline, setUnderline] = useState(false);

	const router = useRouter();

	// underlines when active
	useEffect(() => {
		const childUrl = router.asPath.split('/')[2];
		const lowerCaseText = props.text.toLowerCase();

		if (childUrl === lowerCaseText) {
			setUnderline(true);
		} else {
			setUnderline(false);
		}
	}, [router.asPath, props.text]);

	return (
		<li className={`text-lg sm:text-xl ${underline ? 'underline decoration-2 underline-offset-4' : ''}`}>{text}</li>
	);
};

export default NavText;
