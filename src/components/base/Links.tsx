import { Link as ChakraLink } from "@chakra-ui/react";
import clsx from "clsx";
import NextLink from "next/link";
import router from "next/router";
import { MouseEventHandler } from "react";
import { loadEnv } from "src/GlobalEnvironment";

const siteUrl = loadEnv("siteUrl") as string;
const isExternalLink = (href: string) =>
	/^http/.test(href) && href.indexOf(siteUrl) !== 0;
const isActive = (href) => typeof window !== "undefined" && router.route === href;

const activeLinkStyle = {
	boxShadow: "none",
	textDecoration: "none",
	bgColor: "brand.green"
};

/**
 * Use Next.js router to navigate to internal pages
 * or not..
 * @param {String} href
 * @param {Function} [callback]
 * @returns {MouseEventHandler}
 */
export const navigate =
	(href, callback): MouseEventHandler =>
	(evt) => {
		if (!isExternalLink(href)) {
			evt.preventDefault();
			if (href === "back") {
				router.back();
			} else {
				router.push(href);
			}
		}
		if (typeof callback === "function") callback();
	};

/**
 * Use Chakra-UI to style the link
 * And Next.js router to navigate...
 * @param {Any} props
 * @param {String} props.href Absolute or relative URL to go by
 */
export const Link = ({ href = "#", children, ...props }) => (
	<NextLink href={href} scroll={true} passHref>
		<ChakraLink
			target={isExternalLink(href) ? "_blank" : ""}
			className={clsx({ active: isActive(href) })}
			borderColor="brand.green"
			_hover={activeLinkStyle}
			_active={activeLinkStyle}
			_focus={activeLinkStyle}
			{...props}
		>
			{children}
		</ChakraLink>
	</NextLink>
);

/**
 * Use Chakra-UI to style a button as a navlink
 * @param {LinkProps} props
 */
export const NavButton = ({ children, ...props }) => (
	<ChakraLink as="button" fontSize="inherit" {...props}>
		{children}
	</ChakraLink>
);

export default Link;
