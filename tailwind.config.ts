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
	plugins: [],
};
export default config;
