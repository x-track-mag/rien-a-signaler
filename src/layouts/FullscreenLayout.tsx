import { Main } from "components/base/Main";

/**
 * 100vh minimal height
 * @param propsWithChildren
 * @returns {JSX.Element}
 */
export const FullscreenLayout = ({ children }) => <Main minH="100vh">{children}</Main>;

/**
 * Wrapper
 * @param Component
 * @returns
 */
export const withFullscreenLayout =
	(Component) =>
	// eslint-disable-next-line react/display-name
	(props) =>
		(
			<FullscreenLayout>
				<Component {...props} />
			</FullscreenLayout>
		);
