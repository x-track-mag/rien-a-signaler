import { Box } from "@chakra-ui/layout";
import { LayoutProps } from "@chakra-ui/styled-system";
import Link from "components/base/Links";
import { Title } from "components/base/Typography";
import { useVScrollPosition } from "components/base/VScrollPositionProvider";
import { useEffect, useState } from "react";
import { GlobalEnvironment, loadEnv } from "src/GlobalEnvironment";

/**
 * @type PageHeaderProps
 * @property {String} [title] The site title
 * @property {LayoutProps["height"]} [height="3.5rem"] (Must be known to animate the hiding)
 */
type PageHeaderProps = {
	title?: string;
	height?: LayoutProps["height"];
};

/**
 * Auto-hiding Page Header
 * @param {PageHeaderProps} props
 */
const PageHeader = ({ title, height = "3.5rem", ...props }: PageHeaderProps) => {
	const [isVisible, setVisible] = useState(true);
	const { scrollY, direction } = useVScrollPosition();

	const { siteUrl, siteName } = loadEnv() as GlobalEnvironment;

	useEffect(() => {
		// Disappear when we scroll more than 40 px and re-appear when we scroll up
		setVisible(direction === "up" || scrollY < 40);
	}, [direction, scrollY]);

	return (
		<Box
			id="page-header"
			as="header"
			position="fixed"
			height={height}
			top={isVisible ? 0 : `-${height}`}
			transition="top 0.5s ease-in-out"
			zIndex="999"
			right="0"
			left="0"
			p="1rem"
			bgColor="white"
			borderBottom="1px solid black"
			{...props}
		>
			<Link href={siteUrl} title={title}>
				<Title id="site-title" lineHeight="1.1rem">
					{title || siteName}
				</Title>
			</Link>
		</Box>
	);
};

export default PageHeader;
