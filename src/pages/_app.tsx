import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../style/global.css";
import theme from "../style/theme";

/**
 * Provide as many useful things to all the page components and their children..
 * @param {AppProps} props
 * @see  https://nextjs.org/docs/basic-features/typescript#custom-app
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<ColorModeProvider
				options={{
					useSystemColorMode: false
				}}
			>
				<Component {...pageProps} />
			</ColorModeProvider>
		</ChakraProvider>
	);
};

export default MyApp;
