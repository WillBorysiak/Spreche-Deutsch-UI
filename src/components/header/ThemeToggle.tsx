import { faMoon, faSun } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// hydration fix
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null;
	}

	return (
		<div id="theme-toggle">
			{theme === 'dark' && <FontAwesomeIcon icon={faSun} size="2x" onClick={() => setTheme('light')} />}
			{theme === 'light' && <FontAwesomeIcon icon={faMoon} size="2x" onClick={() => setTheme('dark')} />}
		</div>
	);
};

export default ThemeToggle;
