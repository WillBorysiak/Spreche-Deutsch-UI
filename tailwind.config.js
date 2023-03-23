/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				'3xl': '1600px',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'san-serif'],
			},
			colors: {
				transparentBg: 'rgba(0, 0, 0, 0.2)',
			},
		},
	},
	plugins: [],
};
