import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/react";
import Container from "components/base/Container";
import { Paragraph, SubTitle } from "components/base/Typography";
import { CloudinaryImage } from "components/CloudinaryImage";
import Footer from "components/sections/Footer";
import HeroSection from "components/sections/Hero";
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
	const exhibition = await loadJSONContent(path.join(contentPath, "exhibition.json"));
	const product = catalog.find(({ id }) => id === productId);
	const nav = catalog.map(({ id, title }) => ({
		id,
		title,
		selected: id === productId
	}));

	console.log(`Loaded catalog product`, product);
	return { props: { exhibition, product, nav } };
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
const ProductPage = ({ product, exhibition }) => {
	const {
		title = "Product #01",
		description = "This is great",
		dimensions = "This is great",
		pictures = [],
		year = 2021
	} = product;
	const { informations } = exhibition;
	const { src, alt = "Missing Picture", ratio = 1 } = pictures[0];

	return (
		<HeaderLayout>
			<HeroSection
				footer={<Footer textTransform="uppercase" rightContent={informations} />}
			>
				<Container id="product">
					<SimpleGrid
						templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
						width="100%"
						bgColor="#f1f2f4"
						gap={4}
						mt={{ lg: "10vh" }}
					>
						<CloudinaryImage src={src} alt={alt} ratio={ratio} />

						<Flex className="product-description" p={4} direction="column">
							<Box className="product-name">
								<SubTitle>
									{title}&nbsp;({year})
								</SubTitle>
								<Paragraph>{dimensions}</Paragraph>
								<Paragraph>{description}</Paragraph>
							</Box>
							<Spacer />
							<SnipCartButton product={product} />
						</Flex>
					</SimpleGrid>
				</Container>
			</HeroSection>
		</HeaderLayout>
	);
};

export default ProductPage;
