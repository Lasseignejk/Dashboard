/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				regalBlue: "#FF6D00",
				shadow: "rgba(0,0,0,0.1)",
				transparentGray: "rgba(0,0,0,0.3)"
			},
		},
	},
	plugins: [],
};
