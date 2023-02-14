import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/pro-thin-svg-icons';

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// hydrates theme state on the client
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
