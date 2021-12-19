import { Stack } from "@chakra-ui/layout";
import Container from "components/base/Container";

const HeroSection = ({ footer, children, ...moreProps }) => (
	<Stack
		as="section"
		className="hero-section"
		flexGrow={1}
		height="100%"
		width="100%"
		{...moreProps}
	>
		<Container pt={16} pb={8} fluid={true}>
			{children}
		</Container>
		{footer && footer}
	</Stack>
);

export default HeroSection;
