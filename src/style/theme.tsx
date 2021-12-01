import { extendTheme } from "@chakra-ui/react";

const global = {
	html: {
		fontSize: {
			xs: "16px",
			sm: "20px",
			md: "22px",
			lg: "24px",
			xl: "30px"
		}
	},
	body: {
		minWidth: "280px",
		overflowX: "hidden",
		"p, h1, h2, h3, h4": {
			"&::selection": {
				backgroundColor: "brand.green"
			}
		},
		"h1, h2, h3, h4": {
			textColor: "#000"
		},
		a: {
			textDecoration: "none",
			borderColor: "brand.green",
			_hover: {
				textDecoration: "none"
			}
		}
	}
};

const fonts = {
	heading: `"Masuria Italic", Georgia, serif`,
	body: `"Surt Light", "Helvetica Neue", Helvetica, -apple-system, "Fira Sans",
    Roboto, "Droid Sans", System, sans-serif`,
	mono: `"Space Mono", Menlo, monospace`
};

// const breakpoints = createBreakpoints({
// 	sm: "40em",
// 	md: "52em",
// 	lg: "64em",
// 	xl: "80em"
// });

const theme = extendTheme({
	colors: {
		black: "#16161D",
		brand: {
			green: "#8ffe09"
		}
	},
	fonts,
	// breakpoints,
	styles: { global }
});

export default theme;
