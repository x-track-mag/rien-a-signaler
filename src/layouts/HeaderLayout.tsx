import { Main } from "components/base/Main";
import React from "react";
import PageHeader from "./PageHeader";

/**
 * 100vh minimal height + retractable Header
 * @param propsWithChildren
 * @returns {JSX.Element}
 */
export const HeaderLayout = ({ children }) => (
	<Main minH="100vh" paddingTop={6} bgColor="white">
		<PageHeader />
		{children}
	</Main>
);

/**
 * Wrapper
 * @param Component
 * @returns
 */
export const withHeaderLayout =
	(Component) =>
	// eslint-disable-next-line react/display-name
	(props) =>
		(
			<HeaderLayout>
				<Component {...props} />
			</HeaderLayout>
		);
