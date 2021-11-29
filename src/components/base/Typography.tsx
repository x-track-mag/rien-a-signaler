import { Heading, Text } from "@chakra-ui/layout";

/**
 * The main title (rendered as h2)
 * @param propsWithChildren
 */
export const Title = ({ children, ...moreProps }) => (
	<Heading
		as="h2"
		fontSize="3rem"
		lineHeight={2}
		fontStyle="italic"
		letterSpacing="0.2rem"
		userSelect="all"
		{...moreProps}
	>
		{children}
	</Heading>
);

export const Paragraph = ({ children, ...moreProps }) => (
	<Text fontSize="1.1rem" mt={1} mb={1} lineHeight="1.5rem" {...moreProps}>
		{children}
	</Text>
);
