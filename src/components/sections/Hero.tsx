import { Box } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";
import Container from "components/base/Container";

const HeroSection = ({ children }) => (
	<Box as="section" className="hero-section" height="100vh">
		<Center height="100%" pt={6} pb={6} width="100%">
			<Container>{children}</Container>
		</Center>
	</Box>
);

export default HeroSection;
