import { Box, HStack, Spacer } from "@chakra-ui/layout";
import Nl2Br from "components/base/Nl2Br";
import { PropsWithChildren } from "react";

/**
 * @typedef FooterProps
 * @property {JSX.Element} leftContent Left-aligned content
 * @property {JSX.Element} rightContent Right-aligned content
 * @property {JSX.Element} children Centered content
 */

/**
 * A footer with 3 auto-expandable zones
 * @param FooterProps
 */
const Footer = ({
	leftContent = "",
	children,
	rightContent = "",
	...moreProps
}: PropsWithChildren<any>) => (
	<>
		<Spacer />
		<HStack as="footer" flexShrink={0} width="100%" px={2} {...moreProps}>
			<Box className="left-column">{leftContent}</Box>
			<Spacer />
			<Box className="centered-column" textAlign="center">
				{children}
			</Box>
			<Spacer />
			<Box className="right-column" textAlign="right">
				<Nl2Br>{rightContent}</Nl2Br>
			</Box>
		</HStack>
	</>
);

export default Footer;
