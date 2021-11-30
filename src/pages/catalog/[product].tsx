import { Box, Center } from "@chakra-ui/layout";
import { Paragraph, Title } from "components/base/Typography";
import { loadJSONContent } from "lib/utils/JSON";
import path from "path";
import { HeaderLayout } from "src/layouts/HeaderLayout";

/**
 * @typedef ProductPageProps
 * @property {String} id
 * @property {String} title
 * @property {String} description
 * @property {String} author
 * @property {String} dimensions
 * @property {Number} price
 * @property {Number} year
 * @property {Array} pictures
 */

/**
 *
 * @returns {Promise<ProductPageProps>}
 */
export async function getStaticProps({ params }) {
	const productId = params.product;
	const contentPath = path.join(process.cwd(), "_content");
	const catalog = await loadJSONContent(path.join(contentPath, "catalog.json"));
	const product = catalog.find(({ id }) => id === productId);
	return { props: product };
}

/**
 * Create the list of valid pages paths to each catalog piece
 */
export const getStaticPaths = async () => {
	const contentPath = path.join(process.cwd(), "_content");
	const catalog = await loadJSONContent(path.join(contentPath, "catalog.json"));

	return {
		paths: catalog.map(({ id }) => ({
			params: { product: id }
		})),
		fallback: false
	};
};

/**
 *
 * @param {ProductPageProps} props
 * @returns {JSX.Element}
 */
const ProductPage = ({
	title = "Product #01",
	description = "This is great",
	dimensions = "10x10cm",
	author = "John Doe",
	year = 2021,
	price = 0
}) => (
	<HeaderLayout>
		<Center id="product-page" height="80vh">
			<Box className="product-description">
				<Box className="product-name">
					<Title>{author}</Title>
					<Title>
						{title} - {year}
					</Title>
					<p>{dimensions}</p>
				</Box>
				<Paragraph>{description}</Paragraph>
				<Paragraph>
					Commander pour&nbsp;
					<code>
						<strong>{price} €</strong>
					</code>
				</Paragraph>
			</Box>
			<Box as="aside" className="navigation"></Box>
		</Center>
	</HeaderLayout>
);

export default ProductPage;
