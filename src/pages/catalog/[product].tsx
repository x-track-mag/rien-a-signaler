import { Box, Center } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/react";
import { Paragraph, SubTitle, Title } from "components/base/Typography";
import { CloudinaryImage } from "components/CloudinaryImage";
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
	console.log(`Loaded catalog product`, product);
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
	images = [],
	dimensions = "10x10cm",
	author = "John Doe",
	year = 2021,
	price = 0
}) => {
	const { src, alt = "Missing Picture", ratio = 1 } = images[0];

	return (
		<HeaderLayout>
			<Center id="product-page" height="80vh">
				<SimpleGrid
					templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
					gap={4}
					mt="10vh"
				>
					<CloudinaryImage src={src} alt={alt} ratio={ratio} />

					<Box className="product-description">
						<Box className="product-name">
							<Title>{author}</Title>
							<SubTitle>
								{title}&nbsp;({year})
							</SubTitle>
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
				</SimpleGrid>
				<Box as="aside" className="navigation"></Box>
			</Center>
		</HeaderLayout>
	);
};

export default ProductPage;
