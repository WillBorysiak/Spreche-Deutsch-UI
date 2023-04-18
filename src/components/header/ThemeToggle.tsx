import { faMoon, faSunBright } from '@fortawesome/sharp-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// hydration fix
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return null;

	return (
		<div id="theme-toggle" className="cursor-pointer hover:scale-105">
			{resolvedTheme === 'dark' && <FontAwesomeIcon icon={faSunBright} size="1x" onClick={() => setTheme('light')} />}
			{resolvedTheme === 'light' && <FontAwesomeIcon icon={faMoon} size="1x" onClick={() => setTheme('dark')} />}
		</div>
	);
};

export default ThemeToggle;
