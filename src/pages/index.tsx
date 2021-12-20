import { AspectRatio } from "@chakra-ui/react";
import ErrorMessage from "components/base/ErrorMessage";
import Link from "components/base/Links";
import { Display, Title } from "components/base/Typography";
import { ImageGallery } from "components/ImageGallery";
import HeroSection from "components/sections/Hero";
import SvgLogoLeConsulat from "components/SvgLogoLeConsulat";
import Footer from "layouts/Footer";
import { loadJSONContent } from "lib/utils/JSON";
import path from "path";
import { withFullscreenLayout } from "src/layouts/FullscreenLayout";

/**
 * @typedef I18nLabel
 * @property {String} [en] Text in English
 * @property {String} [fr] Text in French
 */

/**
 * @typedef IndexPageProps
 * @property {I18nLabel} title
 * @property {String} resume
 * @property {String} informations
 * @property {Object} catalog
 * @property {String} error
 */

export async function getStaticProps() {
	const contentPath = path.join(process.cwd(), "_content");
	const props = await loadJSONContent(path.join(contentPath, "exhibition.json"));
	props.catalog = await loadJSONContent(path.join(contentPath, "catalog.json"));
	return { props };
}

/**
 * Home page
 * @param {IndexPageProps} props
 * @returns {JSX.Element}
 */
const IndexPage = ({ title, resume, catalog, informations, error }) => (
	<>
		<Link href="https://www.leconsulat.org" title="Le Consulat">
			<SvgLogoLeConsulat position="fixed" top={2} right={2} />
		</Link>
		<HeroSection footer={<Footer rightContent={informations} />} pt={8}>
			{error && <ErrorMessage error={error} />}
			<Title title={title.en}>{title.fr}</Title>
			<Display textTransform="uppercase">{resume}</Display>
			<AspectRatio ratio={4} width="100%" mt={8}>
				<ImageGallery catalog={catalog} height="100%" />
			</AspectRatio>
		</HeroSection>
	</>
);

export default withFullscreenLayout(IndexPage);
