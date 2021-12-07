import { AspectRatio, Box, Center, HStack } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/react";
import Link from "components/base/Links";
import { Paragraph, SubTitle, Title } from "components/base/Typography";
import { CloudinaryImage } from "components/CloudinaryImage";
import { SnipCartButton } from "components/snipcart";
import { loadJSONContent } from "lib/utils/JSON";
import path from "path";
import React from "react";
import { HeaderLayout } from "src/layouts/HeaderLayout";

/**
 * @typedef Product
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
 * @typedef ProductPageProps
 * @property {Product} product
 * @property {Array<>} nav
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
	const nav = catalog.map(({ id, title }) => ({
		id,
		title,
		selected: id === productId
	}));

	console.log(`Loaded catalog product`, product);
	return { props: { product, nav } };
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
const ProductPage = ({ product, nav = [] }) => {
	const {
		title = "Product #01",
		description = "This is great",
		pictures = [],
		author = "John Doe",
		year = 2021
	} = product;
	const { src, alt = "Missing Picture", ratio = 1 } = pictures[0];

	return (
		<HeaderLayout>
			<Center id="product-page" height="80vh">
				<SimpleGrid
					templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
					width="100%"
					bgColor="#f1f2f4"
					gap={4}
					mt="10vh"
				>
					<CloudinaryImage src={src} alt={alt} ratio={ratio} />

					<Box className="product-description" p={2}>
						<Box className="product-name">
							<Title>{author}</Title>
							<SubTitle>
								{title}&nbsp;({year})
							</SubTitle>
						</Box>
						<Paragraph>{description}</Paragraph>
						<SnipCartButton product={product} />
					</Box>
				</SimpleGrid>
				<HStack as="aside" className="navigation" height={10}>
					{nav.map(({ id, title }) => (
						<Link key={`nav-${id}`} href={`/catalog/${id}`}>
							<AspectRatio ratio={20 / 25}>
								<Center height="100%">{title}</Center>
							</AspectRatio>
						</Link>
					))}
				</HStack>
			</Center>
		</HeaderLayout>
	);
};

export default ProductPage;
