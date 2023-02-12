/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./pages/**/*.tsx', './components/**/*.tsx'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'san-serif'],
			},
		},
	},
	plugins: [],
};
