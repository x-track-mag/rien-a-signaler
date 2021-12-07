import { Box } from "@chakra-ui/layout";
import Container from "components/base/Container";

const HeroSection = ({ children }) => (
	<Box as="section" className="hero-section" height="100vh" width="100%">
		<Container pt={16} pb={8} fluid={true}>
			{children}
		</Container>
	</Box>
);

export default HeroSection;
