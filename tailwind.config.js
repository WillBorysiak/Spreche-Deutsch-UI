/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      maxWidth: { "8xl": "1600px" },
      fontFamily: {
        rosario: ["Rosario", "san-serif"],
      },
      colors: {
        transparentBg: "rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
