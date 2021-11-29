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
 * @property {Object} catalog
 * @property {String} error
 */

export async function getStaticProps() {
	const contentPath = path.join(process.cwd(), "_content/exhibition.json");
	const props = await loadJSONContent(contentPath);
	return { props };
}

/**
 * Home page
 * @param {IndexPageProps} props
 * @returns {JSX.Element}
 */
const IndexPage = ({ title, text, catalog, error }) => (
	<HeroSection>
		{error && <ErrorMessage error={error} />}
		<Title title={title.en}>{title.fr}</Title>
		<Paragraph>{text}</Paragraph>
		<ImageGallery
			mt={4}
			pictures={catalog.map(({ images }) => images[0])}
			height="25vh"
		/>
	</HeroSection>
);

export default withFullscreenLayout(IndexPage);
