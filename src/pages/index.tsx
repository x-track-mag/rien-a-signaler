import { AspectRatio } from "@chakra-ui/react";
import ErrorMessage from "components/base/ErrorMessage";
import { Paragraph, Title } from "components/base/Typography";
import { ImageGallery } from "components/ImageGallery";
import HeroSection from "components/sections/Hero";
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
 * @property {String} text
 * @property {String} resume
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
const IndexPage = ({ title, resume, catalog, error }) => (
	<HeroSection>
		{error && <ErrorMessage error={error} />}
		<Title title={title.en}>{title.fr}</Title>
		<AspectRatio ratio={4} width="100%">
			<ImageGallery catalog={catalog} height="100%" />
		</AspectRatio>
		<Paragraph>{resume}</Paragraph>
	</HeroSection>
);

export default withFullscreenLayout(IndexPage);
