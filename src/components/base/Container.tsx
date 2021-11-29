import { Box } from "@chakra-ui/react";

/**
 * Centered, responsive container
 */
const Container = ({ children, ...moreStyles }) => (
	<Box
		className="container"
		width="100%"
		height="100%"
		position="relative"
		m="0 auto"
		p={2}
		maxWidth={{
			sm: "90%",
			lg: "75%",
			xl: "70ch"
		}}
		{...moreStyles}
	>
		{children}
	</Box>
);

export default Container;
