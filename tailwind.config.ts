import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"], // Replace with your desired font
			},
		},
		container: {
			// you can configure the container to be centered
			center: true,

			// or have default horizontal padding
			padding: "1rem",
		},
		screens: {
			sm: "600px",
			md: "728px",
			lg: "984px",
			xl: "1280px",
		},
	},
	variants: { extend: {} },
	plugins: [require("daisyui")],
	// // daisyUI config (optional - here are the default values)
	daisyui: {
		themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "light", // name of one of the included themes for dark mode
		base: false, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: false, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: "*", // The element that receives theme color CSS variables
	},
};
export default config;
