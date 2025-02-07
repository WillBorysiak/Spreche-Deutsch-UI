/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      maxWidth: {
        "8xl": "1600px",
      },
      fontFamily: {
        rosario: ["Rosario", "san-serif"],
      },
      colors: {
        transparentBg: "rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "white-glow": "0px 4px 20px rgba(255, 255, 255, 0.8)",
        "black-glow": "0px 4px 20px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
